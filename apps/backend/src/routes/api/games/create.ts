import { FastifyInstance, FastifyRequest } from 'fastify';
import { gameEngine } from '../../../core/game/game-engine';

// Define a schema for the request body for validation
const createGameBodySchema = {
  type: 'object',
  required: ['player1Id', 'gameMode'],
  properties: {
    player1Id: { type: 'string', minLength: 1 },
    player2Id: { type: 'string' },
    gameMode: { type: 'string', enum: ['PVP', 'AI'] },
  },
};

/**
 * Registers the route for creating a new game.
 * @param fastify The Fastify instance.
 */
export default async function createGameRoute(fastify: FastifyInstance) {
  // The final path will be POST /api/games
  fastify.post(
    '/',
    { schema: { body: createGameBodySchema } },
    async (request, reply) => {
      try {
        const { player1Id, player2Id, gameMode } = request.body as any;

        fastify.log.info(`🕹️ Creating game: ${player1Id} vs ${player2Id || 'AI'} (Mode: ${gameMode})`);

        const gameId = gameEngine.createGame(player1Id, player2Id || 'AI');
        const gameState = gameEngine.getGameState(gameId);

        if (!gameState) {
          throw new Error('Game state could not be created.');
        }

        // Respond with 201 Created status code
        return reply.code(201).send({
          success: true,
          message: 'Game created successfully! 🎮',
          gameId,
          gameState,
        });

      } catch (error) {
        fastify.log.error({ msg: '❌ Game creation error', error });
        return reply.code(500).send({
          error: 'Game creation failed',
          message: error instanceof Error ? error.message : 'An unknown error occurred',
        });
      }
    }
  );
}
