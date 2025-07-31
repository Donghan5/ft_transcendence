import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { db } from '../../../database/db';
import { User } from '@trans/common-types';

function dbGet(query: string, params: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
        db.get(query, params, (err, row) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
}

async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
    try {
        const token = (request.cookies as any).auth_token; // Type assertion to access cookies
        if (!token) {
            return reply.code(401).send({ error: 'Unauthorized1' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
        request.user = decoded;

    } catch (err) {
        return reply.code(401).send({ error: 'Unauthorized2' });
    }
}


export default async function authStatusRoute(fastify: FastifyInstance) {
    fastify.get('/me', { preHandler: [verifyJwt] }, async (request: any, reply: any) => {
        const userId = request.user.userId;

        try {
           const user: User = await dbGet('SELECT id, email, name, nickname, avatar_url, profile_setup_complete FROM users WHERE id = ?', [userId]);

		   if (!user) {
				return reply.code(404).send({ error: 'User not found' });
			}
		   const userProfile = {
				id: user.id,
				email: user.email,
				name: user.name,
				nickname: user.nickname,
				avatarUrl: user.avatar_url,
				profileComplete: user.profile_setup_complete
			};
			return reply.send(userProfile);
        } catch (error: any) {
            fastify.log.error(error);
            const statusCode = error.statusCode || 500;
            return reply.code(statusCode).send({ error: error.message });
        }
    });

    fastify.get('/logout', async (request, reply) => {
        reply.clearCookie('auth_token', {
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: 'lax'
        });
        return reply.redirect('https://localhost:8443/login.html');
    });
}
