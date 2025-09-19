import { FastifyInstance, FastifyRequest } from 'fastify';
import { gameEngine } from '../../../core/game/game-engine';
import { dbGet } from '../../../database/helpers'

// Define a schema for the request body for validation
const createGameBodySchema = {
  type: 'object',
  required: ['player1Id', 'gameMode'],
  properties: {
    player1Id: { type: 'string', minLength: 1 },
    player2Id: { type: 'string' },
    gameMode: { type: 'string', enum: ['PVP', 'AI', 'LOCAL_PVP', 'TOURNAMENT'] },
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
      
        const player1Data = await dbGet(`SELECT nickname FROM users WHERE id = ?`, [player1Id]);
        let player1Nickname = player1Data?.nickname || `Player ${player1Id}`;
        
        let player2Nickname: string;

        if (gameMode === 'AI' || player2Id === 'AI') {
            player2Nickname = 'AI';
        } else if (gameMode === 'LOCAL_PVP' || player2Id === 'local player') {
            player2Nickname = 'Local Player';
        } else if (player2Id) {
            const player2Data = await dbGet('SELECT nickname FROM users WHERE id = ?', [player2Id]);
            player2Nickname = player2Data?.nickname || `Player ${player2Id}`;
        } else {
            player2Nickname = 'Opponent'; 
        }

		let gameId: string;

		switch (gameMode) {
			case 'LOCAL_PVP':
				gameId = gameEngine.createGame(player1Id, 'local player', 'LOCAL_PVP', undefined, player1Nickname, player2Nickname);
				break;
			case 'AI':
				gameId = gameEngine.createGame(player1Id, 'AI', 'AI', aiLevel, player1Nickname, player2Nickname);
				break;
      case 'TOURNAMENT':
        if (!player2Id) {
          return reply.code(400).send({
            error: 'Player 2 ID is required for tournament games',
          });
        }

        gameId = gameEngine.createGame(player1Id, player2Id, 'TOURNAMENT', undefined, player1Nickname, player2Nickname);
        break;
			case 'PVP':
				if (gameEngine.waitingPlayer) {
					const player2Id = gameEngine.waitingPlayer.playerId;
          const player2Data = await dbGet('SELECT nickname FROM users WHERE id = ?', [player2Id]);
          player2Nickname = player2Data?.nickname || `Player ${player2Id}`;

					gameId = gameEngine.createGame(player1Id, player2Id, 'PVP', undefined, player1Nickname, player2Nickname);

					gameEngine.notifyMatchFound(player2Id, gameId);

					gameEngine.waitingPlayer = null;

					return reply.code(201).send({
					success: true,
					message: 'Match found!',
					gameId,
					gameState: gameEngine.getGameState(gameId)
					});
				} else {
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
