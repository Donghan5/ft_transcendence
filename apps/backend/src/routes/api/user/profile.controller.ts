import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { db } from '../../../database/db'; // Adjust the import path as necessary

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
 * @param query: string
 * @param params: any[]
 * @returns Promise<any>
 * @description Helper function to execute a database query
 */
function dbAll(query: string, params: any[]): Promise<any> {
	return new Promise((resolve, reject) => {
		db.all(query, params, (err, rows) => {
			if (err) {
				return reject(err);
			}
			resolve(rows);
		});
	});
}

/**
 *
 * @param query: string
 * @param params: any[]
 * @returns Promise<any>
 * @description Helper function to get a single row from the database
 * @throws Error if the query fails or no row is found
 */
function dbGet(query: string, params: any[]): Promise<any> {
	return new Promise((resolve, reject) => {
		db.get(query, params, (err, row) => {
			if (err) return reject(err);
			resolve(row);
		});
	});
}

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
}
