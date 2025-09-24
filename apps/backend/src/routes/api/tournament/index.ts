import { WebSocket } from 'ws';
import { FastifyInstance } from 'fastify';
import { tournamentManager } from '../../../core/tournament/tournament-manager';
import { authMiddleware } from '../../../middleware/auth.middleware';
import { OnlineStatusManager } from '../../../core/status/online-status-manager';
import jwt from 'jsonwebtoken';

export default async function tournamentRoutes(fastify: FastifyInstance) {
    fastify.post('/create', { preHandler: [authMiddleware] }, async (request, reply) => {
        try {
            const { name } = request.body as { name: string };
           
            console.log('=== TOURNAMENT CREATE DEBUG ===');
            console.log('Tournament create - request.user:', (request as any).user);
            console.log('Tournament create - typeof request.user:', typeof (request as any).user);
            console.log('Tournament create - request.user keys:', (request as any).user ? Object.keys((request as any).user) : 'null');
            console.log('Tournament create - request.user.userId:', (request as any).user?.userId);
            console.log('Tournament create - request === authMiddleware request?', request.id || 'no id');
            console.log('================================');
            
            const userId = (request as any).user?.userId;

            console.log('Creating tournament with name:', name);
            console.log('User ID from request:', userId);

            if (!userId) {
                return reply.code(401).send({ error: 'Unauthorized' });
            }

            if (!name || name.trim().length === 0) {
                return reply.code(400).send({ error: 'Tournament name is required' });
            }

            // name double check (should be unique)
            const existingTournaments = await tournamentManager.getActiveTournaments();
            if (existingTournaments.some(t => t.name.toLowerCase() === name.trim().toLowerCase())) {
                return reply.code(400).send({ error: 'Tournament name already exists' });
            }

            const tournamentId = await tournamentManager.createTournament(userId, name.trim());
        
            await tournamentManager.joinTournament(tournamentId, userId);
        
            return reply.code(201).send({
                success: true,
                message: 'Tournament created successfully',
                tournamentId
            });
        } catch (error) {
            fastify.log.error('Tournament creation error:', error);
            return reply.code(500).send({
                error: 'Failed to create tournament',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });


    fastify.post('/join', { preHandler: [authMiddleware] }, async (request, reply) => {
        try {
            const { tournamentId } = request.body as { tournamentId: string };
            const userId = (request as any).user?.userId;

            if (!userId) {
                return reply.code(401).send({ error: 'Unauthorized' });
            }

            if (!tournamentId) {
                return reply.code(400).send({ error: 'Tournament ID is required' });
            }

            const success = await tournamentManager.joinTournament(tournamentId, userId);
            
            if (!success) {
                return reply.code(404).send({ error: 'Tournament not found or already full' });
            }

            const updatedTournament = await tournamentManager.getTournamentInfo(tournamentId);

            if (!updatedTournament) {
                return reply.code(500).send({ success: false, error: 'Failed to retrieve tournament details after joining.' });
            }

            return reply.send({
                success: true,
                message: 'Successfully joined the tournament',
                tournament: updatedTournament
            });
        } catch (error) {
            fastify.log.error('Tournament join error:', error);
            return reply.code(500).send({
                error: 'Failed to join tournament',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    // invite a player to a tournament
    // how to check if the user is already invited? --> check in inviteToTournament method
    fastify.post('/:tournamentId/invite', { preHandler: [authMiddleware] }, async (request, reply) => {
        try {
            const { tournamentId } = request.params as { tournamentId: string };
            const { targetUserId } = request.body as { targetUserId: string };
            const userId = (request as any).user?.userId;

            if (!userId) {
                return reply.code(401).send({ error: 'Unauthorized' });
            }

            if (!tournamentId || !targetUserId) {
                return reply.code(400).send({ error: 'Tournament ID is required' });
            }

            const tournament = await tournamentManager.getTournamentInfo(tournamentId);

            if (!tournament) {
                return reply.code(404).send({ error: 'Tournament not found' });
            }

            if (tournament.createdBy !== userId) {
                return reply.code(403).send({ error: 'Only the tournament creator can invite players' });
            }

            if (tournament.players.some(p => p.id === parseInt(targetUserId, 10))) {
                return reply.code(400).send({ error: 'Player is already in the tournament' });
            }

            const onlineStatusManager = OnlineStatusManager.getInstance();
            const targetUserStatus = onlineStatusManager.getUserStatus(parseInt(targetUserId));

            if (!targetUserStatus || targetUserStatus.status === 'offline') {
                return reply.code(400).send({ error: 'Target user is not online' });
            }

            if (targetUserStatus.status === 'in_game') {
                return reply.code(400).send({ error: 'Target user is currently in a game' });
            }

            const targetSocket = onlineStatusManager.getUserSocket(parseInt(targetUserId));
            if (targetSocket && targetSocket.readyState === WebSocket.OPEN) {
                targetSocket.send(JSON.stringify({
                    type: 'tournamentInvite',
                    payload: {
                        tournamentId: tournament.id,
                        tournamentName: tournament.name,
                        invitedBy: (request as any).user?.nickname || 'Unknown',
                        invitedById: userId
                    }
                }));
            }

            return reply.send({
                success: true,
                message: 'Invitation sent successfully',
                tournament: tournament
            });
        } catch (error) {
            fastify.log.error('Tournament invite error:', error);
            return reply.code(500).send({
                error: 'Failed to invite player to tournament',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    /**
     * @description Start a tournament (only by creator)
     * @param tournamentId - ID of the tournament to start
     * @returns { success: boolean, message: string, tournament: Tournament }
     */
    fastify.post('/start', { preHandler: [authMiddleware] }, async (request, reply) => {
        try {
            const { tournamentId } = request.body as { tournamentId: string };
            const userId = (request as any).user?.userId;

            if (!userId) {
                return reply.code(401).send({ error: 'Unauthorized' });
            }

            if (!tournamentId) {
                return reply.code(400).send({ error: 'Tournament ID is required' });
            }

            const tournament = await tournamentManager.getTournamentInfo(tournamentId);
            
            if (!tournament) {
                return reply.code(404).send({ error: 'Tournament not found' });
            }

            if (tournament.createdBy !== userId) {
                return reply.code(403).send({ error: 'Only the tournament creator can start it' });
            }

            const success = await tournamentManager.startTournament(tournamentId);

            if (!success) {
                return reply.code(400).send({ error: 'Tournament cannot be started' });
            }

            const updatedTournament = await tournamentManager.getTournamentInfo(tournamentId);

            return reply.send({
                success: true,
                message: 'Tournament started successfully',
                tournament: updatedTournament
            });

        } catch (error) {
            fastify.log.error('Tournament start error:', error);
            return reply.code(500).send({
                error: 'Failed to start Tournament',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    /**
     * @description Get tournament information by ID
     * @param tournamentId - ID of the tournament
     * @returns { tournament: Tournament }
     */
    fastify.get('/:tournamentId', { preHandler: [authMiddleware] }, async (request, reply) => {
        try {
            const { tournamentId } = request.params as { tournamentId: string };

            if (!tournamentId) {
                return reply.code(400).send({ error: 'Tournament ID is required' });
            }

            const tournament = await tournamentManager.getTournamentInfo(tournamentId);

            if (!tournament) {
                return reply.code(404).send({ error: 'Tournament not found' });
            }

            return reply.send(tournament);
        } catch (error) {
            fastify.log.error('Get tournament info error:', error);
            return reply.code(500).send({
                error: 'Failed to retrieve tournament information',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    /**
     * @description Get list of active tournaments
     * @returns { tournaments: Tournament[], count: number }
     */
    fastify.get('/active/list', { preHandler: [authMiddleware] }, async (request, reply) => {
        try {
            const activeTournaments = await tournamentManager.getActiveTournaments();

            return reply.send({
                tournaments: activeTournaments,
                count: activeTournaments.length
            })
        } catch (error) {
            fastify.log.error('Get active tournaments error:', error);
            return reply.code(500).send({
                error: 'Failed to retrieve active tournaments',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    /**
     * @description Get current matches of a tournament
     * @param tournamentId - ID of the tournament
     * @returns { matches: Match[], count: number }
     */
    fastify.get('/:tournamentId/matches/current', { preHandler: [authMiddleware] }, async (request, reply) => {
        try {
            const { tournamentId } = request.params as { tournamentId: string };

            if (!tournamentId) {
                return reply.code(400).send({ error: 'Tournament ID is required' });
            }

            const currentMatches = await tournamentManager.getCurrentMatches(tournamentId);

            if (!currentMatches) {
                return reply.code(404).send({ error: 'No current matches found for this tournament' });
            }

            return reply.send({
                matches: currentMatches,
                count: currentMatches.length
            });
        } catch (error) {
            fastify.log.error('Get current matches error:', error);
            return reply.code(500).send({
                error: 'Failed to retrieve current matches',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    /**
     * @description Cancel a tournament (only if not started)
     * @param tournamentId - ID of the tournament to cancel
     * @returns { success: boolean, message: string }
     */
    fastify.post('/cancel', { preHandler: [authMiddleware] }, async (request, reply) => {
        try {
            console.log('=== TOURNAMENT CANCEL DEBUG ===');
            console.log('Cancel tournament - request.body:', request.body);
            
            const { tournamentId } = request.body as { tournamentId: string };
            const userId = (request as any).user?.userId;

            console.log('Cancel tournament - tournamentId:', tournamentId);
            console.log('Cancel tournament - userId:', userId);
    
            if (!userId) {
                return reply.code(401).send({ error: 'Unauthorized' });
            }
            if (!tournamentId) {
                return reply.code(400).send({ error: 'Tournament ID is required' });
            }

            const success = await tournamentManager.cancelTournament(tournamentId, userId);

            if (!success) {
                return reply.code(403).send({ error: 'Cannot cancel tournament' });
            }

            return reply.send({
                success: true,
                message: 'Tournament cancelled successfully'
            });

        } catch (error) {
            fastify.log.error('Tournament cancel error:', error);
            return reply.code(500).send({
                error: 'Failed to cancel tournament',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    /**
     * @description Get current user's tournaments
     * @returns { tournament: Tournament | null, isCreator: boolean, participating: boolean }
     */
    fastify.get('/me', { preHandler: [authMiddleware] }, async (request, reply) => {
        try {
            const userId = (request as any).user?.userId;

            if (!userId) {
                return reply.code(401).send({ error: 'Unauthorized' });
            }

            const userTournamentId = await tournamentManager.getUserCurrentTournament(userId);
            
            if (!userTournamentId) {
                return reply.send({
                    tournament: null,
                    isCreator: false,
                    participating: false
                });
            }

            const tournament = await tournamentManager.getTournamentInfo(userTournamentId);

            if (!tournament) {
                return reply.send({
                    tournament: null,
                    isCreator: false,
                    participating: false
                });
            }

            const isCreator = tournament?.createdBy === userId;

            return reply.send({
                tournament, 
                isCreator,
                participating: true
            });
        } catch (error) {
            fastify.log.error('Get user tournament error:', error);
            return reply.code(500).send({
                error: 'Failed to retrieve user tournament',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    /**
     * @description leave tournament
     */
    fastify.post('/leave', { preHandler: authMiddleware }, async (request, reply) => {
        const { tournamentId } = request.body as { tournamentId: string };
        const userId = (request as any).user?.userId;
        
        if (!userId) {
            return reply.code(401).send({ error: 'Unauthorized' });
        }

        if (!tournamentId) {
            return reply.code(400).send({ error: 'Tournament ID is required' });
        }

        const success = await tournamentManager.leaveTournament(tournamentId, userId);
        
        if (!success) {
            return reply.code(400).send({ error: 'Failed to leave tournament' });
        }

        return reply.send({
            success: true,
            message: 'Successfully left the tournament'
        });
    });


    /**
     * @description Adding WebSocket route for tournament updates
     */
    fastify.get('/ws/:tournamentId', { websocket: true }, (connection, request) => {
        const { tournamentId } = request.params as { tournamentId: string };
        const token = (request.cookies as any).auth_token;

        if (!token) {
            connection.close();
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
            const userId = decoded.userId.toString();
            if (!userId || !tournamentId) {
                connection.close();
                return;
            }
    
            tournamentManager.addSocket(tournamentId, userId, connection as unknown as import('ws').WebSocket);
    
            connection.on('close', () => {
                tournamentManager.removeSocket(tournamentId, userId);
            });
        } catch (error) {
            console.error('WebSocket connection error:', error);
            connection.close();
        }
    });

    /**
     * @description send a ready signal
     */
    fastify.post('/ready', { preHandler: authMiddleware }, async (request, reply) => {
        const { tournamentId } = request.body as { tournamentId: string };
        const userId = (request as any).user?.userId;
        
        if (!userId) {
            return reply.code(401).send({ error: 'Unauthorized' });
        }

        if (!tournamentId) {
            return reply.code(400).send({ error: 'Tournament ID is required' });
        }

        await tournamentManager.setPlayerReady(tournamentId, userId);

        return reply.send({
            success: true,
            message: 'Player is ready'
        });
    });
}