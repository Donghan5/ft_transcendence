import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { getDb } from '../../../database/db'; // Adjust the import path as necessary
import path from 'path';
import { promises as fs } from 'fs';
import { RunResult } from 'sqlite3';

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
            return reply.code(401).send({ error: 'Unauthorized3' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
        request.user = decoded;

    } catch (err) {
        return reply.code(401).send({ error: 'Unauthorized4' });
    }
}

async function dbAll(query: string, params: any[]): Promise<any[]> {
    const db = await getDb();
    return new Promise((resolve, reject) => {
        db.all(query, params, (err: Error | null, rows: any[]) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

async function dbGet(query: string, params: any[]): Promise<any> {
    const db = await getDb();
    return new Promise((resolve, reject) => {
        db.get(query, params, (err: Error | null, row: any) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
}

const dbRun = async (query: string, params: any[]): Promise<{ lastID: number }> => {
    const db = await getDb();
    return new Promise((resolve, reject) => {
        db.run(query, params, function (this: RunResult, err: Error | null) {
            if (err) return reject(err);
            resolve({ lastID: this.lastID });
        });
    });
};

/**
 * @param fastify: FastifyInstance
 * @description Route to get the current user's profile information
 */
export default async function profileRoute(fastify: FastifyInstance) {
	fastify.get('/profile', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
		const userId = request.user?.userId;

		try {
			// Get User Information
			const user = await dbGet('SELECT id, name, email FROM users WHERE id = ?', [userId]);
			if (!user) {
				return reply.code(404).send({ error: 'User not found' });
			}

			// Get Games
			const games = await dbAll('SELECT * FROM games WHERE player1_id = ? OR player2_id = ? ORDER BY finished_at DESC LIMIT 10', [userId, userId]);

			// Get friends
			const friends = await dbAll(`
				SELECT u.id, u.name FROM users u
				JOIN user_friends uf ON u.id = uf.friend_id
				WHERE uf.user_id = ? AND uf.status = 'accepted'`
			, [userId]);

			const profileData = {
				user,
				gameHistory: games,
				friends: friends,
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
			const existingUser = await dbGet('SELECT id FROM users WHERE nickname = ?', [nickname]);
			if (existingUser) {
				return reply.code(409).send({ error: 'Nickname already exists.' });
			}

			await dbRun(
				'UPDATE users SET nickname = ?, profile_setup_complete = 1 WHERE id = ?',
				[nickname, userId]
			);

			const secret = process.env.JWT_SECRET!;
			const newToken = jwt.sign({ userId, profileComplete: true }, secret, { expiresIn: '1h' });

			reply.setCookie('auth_token', newToken, {
				httpOnly: true,
				secure: true,
				path: '/',
				sameSite: 'lax'
			});

			return reply.send({ success: true, message: 'Profile setup complete.' });
		} catch (error) {
			fastify.log.error(error);
			return reply.code(500).send({ error: 'Internal Server Error(/setup post)' });
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

		return { success: true, avatarUrl };
	});
}
