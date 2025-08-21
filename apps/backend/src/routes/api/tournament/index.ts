import { FastifyInstance } from 'fastify';
import { tournamentManager } from '../../../core/tournament/tournament-manager';

export default async function tournamentRoutes(fastify: FastifyInstance) {
    fastify.post('/create', async (request, reply) => {
        try {
            const { name } = request.body as { name: string };
            const userId = (request as any).user?.id;

            if (!userId) {
                return reply.code(401).send({ error: 'Unauthorized' });
            }

            if (!name || name.trim().length === 0) {
                return reply.code(400).send({ error: 'Tournament name is required' });
            }

            const tournamentId = tournamentManager.createTournament(userId.toString(), name.trim());
        
            await tournamentManager.joinTournament(userId.toString(), tournamentId);
        
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


    fastify.post('/join', async (request, reply) => {
        try {
            const { tournamentId } = request.body as { tournamentId: string };
            const userId = (request as any).user?.id;

            if (!userId) {
                return reply.code(401).send({ error: 'Unauthorized' });
            }

            if (!tournamentId) {
                return reply.code(400).send({ error: 'Tournament ID is required' });
            }

            const success = await tournamentManager.joinTournament(tournamentId, userId.toString());
            
            if (!success) {
                return reply.code(404).send({ error: 'Tournament not found or already full' });
            }

            return reply.send({
                success: true,
                message: 'Successfully joined the tournament'
            });
        } catch (error) {
            fastify.log.error('Tournament join error:', error);
            return reply.code(500).send({
                error: 'Failed to join tournament',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    fastify.post('/start', async (request, reply) => {
        try {
            const { tournamentId } = request.body as { tournamentId: string };
            const userId = (request as any).user?.id;

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

            if (tournament.createdBy !== userId.toString()) {
                return reply.code(403).send({ error: 'Only the tournament creator can start it' });
            }

            const success = await tournamentManager.startTournament(tournamentId);

            if (!success) {
                return reply.code(400).send({ error: 'Tournament cannot be started' });
            }

            return reply.send({
                success: true,
                message: 'Tournament started successfully',
                tournament: tournamentManager.getTournamentInfo(tournamentId)
            });

        } catch (error) {
            fastify.log.error('Tournament start error:', error);
            return reply.code(500).send({
                error: 'Failed to start Tournament',
                message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });

    fastify.get('/:tournamentId', async (request, reply) => {
        try {
            const { tournamentId } = request.params as { tournamentId: string };

            if (!tournamentId) {
                return reply.code(400).send({ error: 'Tournament ID is required' });
            }

            const tournament = tournamentManager.getTournamentInfo(tournamentId);

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

    fastify.get('/active/list', async (request, reply) => {
        try {
            const activeTournaments = tournamentManager.getActiveTournaments();

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

    fastify.get('/:tournamentId/matches/current', async (request, reply) => {
        try {
            const { tournamentId } = request.params as { tournamentId: string };

            if (!tournamentId) {
                return reply.code(400).send({ error: 'Tournament ID is required' });
            }

            const currentMatches = tournamentManager.getCurrentMatches(tournamentId);

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
}