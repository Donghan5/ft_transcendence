import { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';
import { db } from '../../../database/db';
import { User } from '@trans/common-types';

async function verifyJwt(request: any, reply: any) {
    try {
        const token = request.cookies.auth_token;
        if (!token) {
            return reply.code(401).send({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        request.user = decoded;

    } catch (err) {
        return reply.code(401).send({ error: 'Unauthorized' });
    }
}

export default async function authStatusRoute(fastify: FastifyInstance) {
    fastify.get('/me', { preHandler: [verifyJwt] }, async (request: any, reply: any) => {
        const userId = request.user.userId;

        try {
            const user = await new Promise((resolve, reject) => {
                db.get('SELECT id, name, email, profile_setup_complete FROM users WHERE id = ?', [userId], (err, row: User) => {
                    if (err) {
                        return reject(err);
                    }
                    if (!row) {
                        const error: any = new Error('User not found');
                        error.statusCode = 404;
                        return reject(error);
                    }
                    const userProfile = {
						id: row.id,
						name: row.name,
						email: row.email,
						profileComplete: !!row.profile_setup_complete
					};
					return reply.send(userProfile);
                });
            });


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
        return reply.redirect('http://localhost:8080/login.html');
    });
}
