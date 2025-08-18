// Import the Fastify instance and core game engine
import { FastifyInstance, FastifyRequest } from 'fastify';
import { WebSocket } from 'ws';
import { gameEngine } from '../../../core/game/game-engine';
import { OnlineStatusManager } from '../../../core/status/online-status-manager';

import createGameRoutes from './create';
import gameStatusRoutes from './status';
import cancelRoutes from './cancel'; // Uncomment if added later
import matchmakingRoutes from './matchmaking';



export default async function gameRoutes(fastify: FastifyInstance) {
	const statusManager = OnlineStatusManager.getInstance();

	fastify.register(createGameRoutes);
	fastify.register(cancelRoutes);
	fastify.register(gameStatusRoutes);
	fastify.register(matchmakingRoutes);

	fastify.get('/ws/:gameId', { websocket: true }, (connection, req: FastifyRequest) => {
		const { gameId } = req.params as { gameId: string };
		const playerId = (req.query as Record<string, string>).playerId ?? `player_${Date.now()}`;

		fastify.log.info(`WebSocket connection established for game ${gameId} with player ${playerId}`);

		statusManager.setUserInGame(parseInt(playerId), gameId);

		gameEngine.addPlayer(gameId, playerId, connection as unknown as WebSocket);

		connection.on('message', (message: Buffer) => {
			try {
				const data = JSON.parse(message.toString());
				
				if (data.type === 'playerInput') {
					const { inputState, playerId: inputPlayerId } = data; // 'up' | 'down' | 'stop'
					
					if (!['up', 'down', 'stop'].includes(inputState)) {
						fastify.log.warn(`❌ Invalid input state: ${inputState} from player ${playerId}`);
						return;
					}
					
					const targetPlayerId = inputPlayerId || playerId;
					gameEngine.updatePlayerInputState(gameId, targetPlayerId, inputState);
					
				} else if (data.type === 'gameAction' && data.action === 'updatePaddle') {
					const { paddleZ } = data.data;
					fastify.log.warn(`⚠️ Legacy paddle update used by player ${playerId}`);
					gameEngine.updatePaddlePosition(gameId, playerId, paddleZ);
					
				} else if (data.type === 'ping') {
					if (connection.readyState === 1) {
						connection.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
					}
				}
			} catch (error) {
				fastify.log.error(`❌ Error processing message from player ${playerId}: ${error}`);
			}
		});

		connection.on('close', () => {
			fastify.log.info(`WebSocket connection closed for player ${playerId}`);
			statusManager.setUserBackOnline(parseInt(playerId));
			gameEngine.removePlayer(gameId, playerId);
		});

		connection.on('error', (error: Error) => {
			fastify.log.error(`WebSocket error for player ${playerId}: ${error.message}`);
			statusManager.setUserBackOnline(parseInt(playerId));
			gameEngine.removePlayer(gameId, playerId);
		});
	});

}


