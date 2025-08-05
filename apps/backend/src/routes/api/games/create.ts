import { FastifyInstance, FastifyRequest } from 'fastify';
import { gameEngine } from '../../../core/game/game-engine';

// Define a schema for the request body for validation
const createGameBodySchema = {
  type: 'object',
  required: ['player1Id', 'gameMode'],
  properties: {
    player1Id: { type: 'string', minLength: 1 },
    player2Id: { type: 'string' },
    gameMode: { type: 'string', enum: ['PVP', 'AI', 'LOCAL_PVP'] },
	aiLevel: { type: 'string', enum: ['EASY', 'MIDDLE', 'HARD'] },
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
        const { player1Id, player2Id, gameMode, aiLevel } = request.body as any;

		let gameId: string;

		switch (gameMode) {
			case 'LOCAL_PVP':
				gameId = gameEngine.createGame(player1Id, player2Id || 'player2', 'LOCAL_PVP');
				break;
			case 'AI':
				gameId = gameEngine.createGame(player1Id, player2Id || 'AI' , 'AI', aiLevel);
				break;
			case 'PVP':
				if (gameEngine.waitingPlayer) {
					const player2 = gameEngine.waitingPlayer.playerId;
					gameId = gameEngine.createGame(player1Id, player2, 'PVP');
					gameEngine.waitingPlayer = null; // Clear the waiting player after pairing
				}
				else {
					gameEngine.waitingPlayer = { playerId: player1Id };
					return reply.code(200).send({
						success: true,
						message: 'Waiting for another player to join...',
					});
				}
				break;
			default:
				return reply.code(400).send({
					error: 'Invalid game mode',
					message: 'Please select a valid game mode (PVP, AI, LOCAL_PVP)',
				});
		}

        fastify.log.info(`🕹️ Creating game: ${player1Id} vs ${player2Id || 'AI'} (Mode: ${gameMode})`);

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
