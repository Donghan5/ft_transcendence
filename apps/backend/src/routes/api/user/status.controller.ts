import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { OnlineStatusManager } from '../../../core/status/online-status-manager';
import { UserStatsManager } from '../../../core/stats/user-stats-manager';

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
    const statusManager = OnlineStatusManager.getInstance();
    const statsManager = UserStatsManager.getInstance();

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

    fastify.get('/stats', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
        const userId = request.user?.userId;
        
        if (typeof userId !== 'number') {
            return reply.code(401).send({ error: 'Unauthorized' });
        }
        
        try {
            const stats = await statsManager.getUserStats(userId);
            if (!stats) {
                return reply.code(404).send({ error: 'User stats not found' });
            }
            
            return reply.send({ stats });
        } catch (error) {
            fastify.log.error('Error getting user stats:', error);
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });

    fastify.get('/stats/:userId', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
        const { userId: targetUserId } = request.params as { userId: string };
        
        try {
            const stats = await statsManager.getUserStats(parseInt(targetUserId));
            if (!stats) {
                return reply.code(404).send({ error: 'User stats not found' });
            }
            
            const publicStats = {
                userId: stats.userId,
                nickname: stats.nickname,
                totalGames: stats.totalGames,
                wins: stats.wins,
                losses: stats.losses,
                winRate: stats.winRate,
                rank: stats.rank,
                rankPoints: stats.rankPoints,
                currentStreak: stats.currentStreak,
                maxStreak: stats.maxStreak,
                recentGames: stats.recentGames.slice(0, 5) 
            };
            
            return reply.send({ stats: publicStats });
        } catch (error) {
            fastify.log.error('Error getting public user stats:', error);
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });

    fastify.get('/leaderboard', async (request: FastifyRequest, reply: FastifyReply) => {
        const { limit = 50 } = request.query as { limit?: number };
        
        try {
            const leaderboard = await statsManager.getLeaderboard(limit);
            return reply.send({ leaderboard });
        } catch (error) {
            fastify.log.error('Error getting leaderboard:', error);
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });

    fastify.get('/metrics', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const systemMetrics = await statsManager.getSystemMetrics();
            const onlineUsers = statusManager.getAllOnlineUsers();
            
            const metrics = {
                ...systemMetrics,
                current_online_users: onlineUsers.length,
                users_in_game: onlineUsers.filter(u => u.status === 'in_game').length,
                users_away: onlineUsers.filter(u => u.status === 'away').length
            };
            
            return reply.send({ metrics });
        } catch (error) {
            fastify.log.error('Error getting system metrics:', error);
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });

}