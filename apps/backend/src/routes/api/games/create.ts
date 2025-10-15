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
    player1Nickname: { type: 'string' },
    player2Nickname: { type: 'string' },
    gameMode: { type: 'string', enum: ['PVP', 'AI', 'LOCAL_PVP', 'TOURNAMENT'] },
    aiStrategy: { type: 'string', enum: ['Defensive', 'Aggressive', 'Trickshot'] },
    tournamentId: { type: 'string' },
    matchId: { type: 'string' }
  },
};

export default async function createGameRoute(fastify: FastifyInstance) {
  fastify.post(
    '/',
    { schema: { body: createGameBodySchema } },
    async (request, reply) => {
      try {
        const { 
          player1Id, 
          player2Id, 
          player1Nickname,  // GET FROM REQUEST
          player2Nickname,  // GET FROM REQUEST
          gameMode, 
          aiStrategy,
          tournamentId,     // GET FROM REQUEST
          matchId           // GET FROM REQUEST
        } = request.body as any;
      
        // Only lookup nicknames if not provided (for backwards compatibility)
        let resolvedPlayer1Nickname = player1Nickname;
        let resolvedPlayer2Nickname = player2Nickname;

        if (!resolvedPlayer1Nickname) {
          const player1Data = await dbGet(`SELECT nickname FROM users WHERE id = ?`, [player1Id]);
          resolvedPlayer1Nickname = player1Data?.nickname || `Player ${player1Id}`;
        }
        
        if (!resolvedPlayer2Nickname) {
          if (gameMode === 'AI' || player2Id === 'AI') {
            resolvedPlayer2Nickname = 'AI';
          } else if (gameMode === 'LOCAL_PVP' || player2Id === 'local player') {
            resolvedPlayer2Nickname = 'Local Player';
          } else if (player2Id) {
            const player2Data = await dbGet('SELECT nickname FROM users WHERE id = ?', [player2Id]);
            resolvedPlayer2Nickname = player2Data?.nickname || `Player ${player2Id}`;
          } else {
            resolvedPlayer2Nickname = 'Opponent'; 
          }
        }

        let gameId: string;

        switch (gameMode) {
          case 'LOCAL_PVP':
            gameId = gameEngine.createGame(player1Id, 'local player', 'LOCAL_PVP', undefined, resolvedPlayer1Nickname, resolvedPlayer2Nickname);
            break;
          case 'AI':
            gameId = gameEngine.createGame(player1Id, 'AI', 'AI', aiStrategy, resolvedPlayer1Nickname, resolvedPlayer2Nickname);
            break;
          case 'TOURNAMENT':
            if (!player2Id) {
              return reply.code(400).send({
                error: 'Player 2 ID is required for tournament games',
              });
            }

            gameId = gameEngine.createGame(player1Id, player2Id, 'TOURNAMENT', undefined, resolvedPlayer1Nickname, resolvedPlayer2Nickname);
            
            // ADD TOURNAMENT INFO TO THE GAME
            if (tournamentId && matchId) {
              gameEngine.setTournamentInfo(gameId, tournamentId, matchId);
            }
            break;
          case 'PVP':
            if (gameEngine.waitingPlayer) {
              const waitingPlayerId = gameEngine.waitingPlayer.playerId;
              const player2Data = await dbGet('SELECT nickname FROM users WHERE id = ?', [waitingPlayerId]);
              resolvedPlayer2Nickname = player2Data?.nickname || `Player ${waitingPlayerId}`;

              gameId = gameEngine.createGame(player1Id, waitingPlayerId, 'PVP', undefined, resolvedPlayer1Nickname, resolvedPlayer2Nickname);

              gameEngine.notifyMatchFound(waitingPlayerId, gameId);
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
              message: 'Please select a valid game mode (PVP, AI, LOCAL_PVP, TOURNAMENT)',
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
