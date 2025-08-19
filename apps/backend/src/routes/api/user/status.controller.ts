import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { OnlineStatusManager } from '../../../core/status/online-status-manager';

async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
    try {
        const token = (request.cookies as any).auth_token;
        if (!token) {
            return reply.code(401).send({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
        request.user = decoded;

    } catch (err) {
        return reply.code(401).send({ error: 'Unauthorized' });
    }
}

export default async function statusRoute(fastify: FastifyInstance) {
    console.log('Registering statusRoute...');
    const statusManager = OnlineStatusManager.getInstance();


    fastify.get('/status/ws', { websocket: true}, (connection, req) => {
        const token = (req.cookies as any).auth_token;

        if (!token) {
            connection.close();
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
            const userId = decoded.userId;

            fastify.log.info(`User ${userId} connected to WebSocket`);

            statusManager.setUserOnline(userId, connection as any);

            connection.on('close', () => {
                fastify.log.info(`User ${userId} disconnected from WebSocket`);
            });

            connection.on('error', (error) => {
                fastify.log.error(`WebSocket error for user ${userId}:`, error); 
            });

            connection.on('message', (message) => {
                try {
                    const data = JSON.parse(message.toString());
                    if (data.type === 'ping') {
                        connection.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
                    }
                } catch (error) {
                    fastify.log.error(`Error parsing message from user ${userId}:`, error);
                }
            });

        } catch (error) {
            fastify.log.error(`Invalid token for WebSocket connection:`, error);
            connection.close();
        }
    });

    fastify.get('/status/friends', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
        const userId = request.user?.userId;

        if (typeof userId !== 'number') {
            return reply.code(401).send({ error: 'Unauthorized' });
        }
        
        try {
            const friendsStatus = await statusManager.getFriendsStatus(userId);
            return reply.send({ friends: friendsStatus });
        } catch (error) {
            fastify.log.error('Error getting friends status:', error);
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });

    fastify.get('/status/:userId', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
        const { userId: targetUserId } = request.params as { userId: string };
        
        try {
            const userStatus = statusManager.getUserStatus(parseInt(targetUserId));
            if (!userStatus) {
                return reply.code(404).send({ error: 'User not found or offline' });
            }
            
            return reply.send({ status: userStatus });
        } catch (error) {
            fastify.log.error('Error getting user status:', error);
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });

}