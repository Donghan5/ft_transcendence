import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { dbGet, dbAll, dbRun, getDatabase } from '../../../database/helpers';
import path from 'path';
import { promises as fs } from 'fs';
import { UserStatsManager } from '../../../core/stats/user-stats-manager';
import { tournamentManager } from '../../../core/tournament/tournament-manager';

/**
 * @param request
 * @param reply
 * @returns Promise<void>
 * @description Middleware to verify JWT token from cookies
 * @throws 401 Unauthorized if token is invalid or not present
 * @throws 500 Internal Server Error if there is an issue with the database
 */
async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
    try {
        const token = (request.cookies as any).auth_token; // Type assertion to access cookies
        if (!token) {
            return reply.code(401).send({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
        request.user = decoded;

    } catch (err) {
        return reply.code(401).send({ error: 'Unauthorized' });
    }
}

/**
 * @param fastify: FastifyInstance
 * @description Route to get the current user's profile information
 */
export default async function profileRoute(fastify: FastifyInstance) {
	fastify.get('/profile', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
		const userId = request.user?.userId;

		try {
			// First, check what columns exist in the users table
			const db = await getDatabase();
			const tableInfo = await new Promise<any[]>((resolve, reject) => {
				db.all("PRAGMA table_info(users)", (err, rows) => {
					if (err) reject(err);
					else resolve(rows);
				});
			});

			const columnNames = tableInfo.map(col => col.name);
			console.log('Available columns in users table:', columnNames);

			// Add missing columns if they don't exist
			if (!columnNames.includes('nickname')) {
				await dbRun('ALTER TABLE users ADD COLUMN nickname TEXT', []);
			}
			if (!columnNames.includes('avatar_url')) {
				await dbRun('ALTER TABLE users ADD COLUMN avatar_url TEXT', []);
			}
			if (!columnNames.includes('profile_setup_complete')) {
				await dbRun('ALTER TABLE users ADD COLUMN profile_setup_complete BOOLEAN DEFAULT FALSE', []);
			}

			// Get User Information - use SELECT * to get all columns
			const user = await dbGet('SELECT * FROM users WHERE id = ?', [userId]);
			if (!user) {
				return reply.code(404).send({ error: 'User not found' });
			}

			// Get Games
			// const games = await dbAll('SELECT * FROM games WHERE player1_id = ? OR player2_id = ? ORDER BY finished_at DESC LIMIT 10', [userId, userId]);

			const games = await dbAll(`
                SELECT
                    g.id,
                    g.player1_score,
                    g.player2_score,
                    g.game_type,
                    g.finished_at,
                    CASE
                        WHEN g.player1_id = ? THEN p2.nickname
                        ELSE p1.nickname
                    END as opponent_nickname,
                    CASE
                        WHEN g.winner_id = ? THEN 'Win'
                        ELSE 'Loss'
                    END as result
                FROM games g
                LEFT JOIN users p1 ON g.player1_id = p1.id
                LEFT JOIN users p2 ON g.player2_id = p2.id
                WHERE g.player1_id = ? OR g.player2_id = ?
                ORDER BY g.finished_at DESC
                LIMIT 10
            `, [userId, userId, userId, userId]);

			// Get friends
			const friends = await dbAll(`
				SELECT u.id, u.name FROM users u
				JOIN users_friends uf ON u.id = uf.friend_id
				WHERE uf.user_id = ? AND uf.status = 'accepted'`
			, [userId]);

			if (!userId) {
				return reply.code(401).send({ error: 'Unauthorized' });
			}
			
			const statsManager = UserStatsManager.getInstance();
			const stats = await statsManager.getUserStats(userId);

			const profileData = {
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
					nickname: user.nickname || null,
					avatar_url: user.avatar_url || null,
					profile_setup_complete: user.profile_setup_complete || false,
					auth_provider: user.auth_provider
				},
				gameHistory: games.map(game => ({
					...game,
					opponent_nickname: game.opponent_nickname || (game.game_type === 'AI' ? 'AI' : 'Local Player'),
				})),
				friends: friends,
				stats: stats
			};

			return reply.send(profileData);

		} catch (error: any) {
			fastify.log.error(error);
			const statusCode = error.statusCode || 500;
			return reply.code(statusCode).send({ error: error.message });
		}
	});

	/**
	 * @description Route to complete user profile setup
	 * @param request: FastifyRequest
	 * @param reply: FastifyReply
	 * @throws 400 Bad Request if nickname is invalid
	 * @throws 409 Conflict if nickname already exists
	 * @throws 500 Internal Server Error if there is an issue with the database
	 */
	fastify.post('/setup', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
		const userId = request.user?.userId;
		const { nickname } = request.body as { nickname: string };

		if (!nickname || nickname.length < 3) {
			return reply.code(400).send({ error: 'Nickname must be at least 3 characters.' });
		}

		try {
			// First, check what columns exist in the users table
			const db = await getDatabase();
			const tableInfo = await new Promise<any[]>((resolve, reject) => {
				db.all("PRAGMA table_info(users)", (err, rows) => {
					if (err) reject(err);
					else resolve(rows);
				});
			});

			const columnNames = tableInfo.map(col => col.name);
			const hasNicknameColumn = columnNames.includes('nickname');
			const hasProfileCompleteColumn = columnNames.includes('profile_setup_complete');

			console.log('Available columns:', columnNames);
			console.log('Has nickname column:', hasNicknameColumn);
			console.log('Has profile_setup_complete column:', hasProfileCompleteColumn);

			// If columns don't exist yet, add them
			if (!hasNicknameColumn) {
				console.log('Adding nickname column...');
				await dbRun('ALTER TABLE users ADD COLUMN nickname TEXT', []); // Remove UNIQUE constraint
			}

			if (!hasProfileCompleteColumn) {
				console.log('Adding profile_setup_complete column...');
				await dbRun('ALTER TABLE users ADD COLUMN profile_setup_complete BOOLEAN DEFAULT FALSE', []);
			}

			// Check if nickname already exists (only check for duplicates, don't rely on UNIQUE constraint)
			const existingUser = await dbGet('SELECT id FROM users WHERE nickname = ? AND id != ?', [nickname, userId]);
			if (existingUser) {
				return reply.code(409).send({ error: 'Nickname already exists.' });
			}

			// Update the user with nickname and profile completion
			await dbRun(
				'UPDATE users SET nickname = ?, profile_setup_complete = 1 WHERE id = ?',
				[nickname, userId]
			);

			const secret = process.env.JWT_SECRET!;
			const newToken = jwt.sign({ userId, profileComplete: true }, secret, { expiresIn: '24h' });

			reply.setCookie('auth_token', newToken, {
				httpOnly: true,
				secure: true,
				path: '/',
				sameSite: 'lax'
			});

			return reply.send({ success: true, message: 'Profile setup complete.' });
		} catch (error: any) {
			fastify.log.error('Setup endpoint error:', error);
			return reply.code(500).send({ error: 'Internal Server Error: ' + error.message });
		}
	});

	/**
	 * @description Route to upload user avatar
	 * @param request: FastifyRequest
	 * @param reply: FastifyReply
	 * @returns Promise<{ success: boolean, avatarUrl: string } | { error: string }>
	 * @throws 400 Bad Request if no file is uploaded or file is not an image
	 * @throws 500 Internal Server Error if there is an issue with the database or file system
	 */
	fastify.post('/avatar', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
		const userId = request.user?.userId;
		
		// Add null check for userId
		if (!userId) {
			return reply.code(401).send({ error: 'Unauthorized' });
		}
		
		const data = await request.file();

		if (!data) {
			return reply.code(400).send({ error: 'No file uploaded' });
		}

		if (!data.mimetype.startsWith('image/')) {
			return reply.code(400).send({ error: 'File must be an image' });
		}

		const uploadDir = path.resolve('/usr/src/app/uploads/avatars');
		await fs.mkdir(uploadDir, { recursive: true });

		const filename = `${userId}-${Date.now()}-${data.filename}`;
		const filePath = path.join(uploadDir, filename);

		await fs.writeFile(filePath, await data.toBuffer());

		const avatarUrl = `/uploads/avatars/${filename}`;

		await dbRun(
			'UPDATE users SET avatar_url = ? WHERE id = ?',
			[avatarUrl, userId]
		);

		try {
			await tournamentManager.refreshPlayerAvatar(userId.toString(), avatarUrl);
		} catch (error) {
			fastify.log.error('Error refreshing tournament avatars:', error);
		}

		return { success: true, avatarUrl };
	});

	fastify.get('/profile/:nickname', async (request: FastifyRequest<{ Params: { nickname: string } }>, reply: FastifyReply) => {
		const { nickname } = request.params;

		try {
			const user = await dbGet('SELECT id, name, nickname, email, avatar_url FROM users WHERE nickname = ?', [nickname]);

			if (!user) {
				return reply.code(404).send({ error: 'User not found' });
			}

			// Get game history for the user
			const gameHistory = await dbAll(`
                SELECT
                    g.id,
                    g.player1_score,
                    g.player2_score,
                    g.game_type,
                    g.finished_at,
                    CASE
                        WHEN g.player1_id = ? THEN p2.nickname
                        ELSE p1.nickname
                    END as opponent_nickname,
                    CASE
                        WHEN g.winner_id = ? THEN 'Win'
                        ELSE 'Loss'
                    END as result
                FROM games g
                LEFT JOIN users p1 ON g.player1_id = p1.id
                LEFT JOIN users p2 ON g.player2_id = p2.id
                WHERE g.player1_id = ? OR g.player2_id = ?
                ORDER BY g.finished_at DESC
                LIMIT 10
            `, [user.id, user.id, user.id, user.id]);

			const statsManager = UserStatsManager.getInstance();
			const stats = await statsManager.getUserStats(user.id);

			const publicProfile = {
				user: {
					id: user.id,
					nickname: user.nickname,
					avatar_url: user.avatar_url,
				},
				gameHistory: gameHistory.map(game => ({
					...game,
					opponent_nickname: game.opponent_nickname || (game.game_type === 'AI' ? 'AI' : 'Local Player'),
				})),

				stats: stats ? {
					totalGames: stats.totalGames,
					wins: stats.wins,
					losses: stats.losses,
					winRate: stats.winRate,
					rank: stats.rank,
					rankPoints: stats.rankPoints,
					currentStreak: stats.currentStreak,
					maxStreak: stats.maxStreak,
					recentGames: stats.recentGames.slice(0, 5)
           		} : null
			};

			return reply.send(publicProfile);
		}
		catch (error: any) {
			fastify.log.error(error);
			return reply.code(500).send({ error: 'Internal Server Error: ' });
		}
	});
}
