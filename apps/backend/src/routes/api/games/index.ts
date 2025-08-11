// Import the Fastify instance and core game engine
import { FastifyInstance, FastifyRequest } from 'fastify';
import { WebSocket } from 'ws';
import { gameEngine } from '../../../core/game/game-engine';

import createGameRoutes from './create';
import gameStatusRoutes from './status';
import cancelRoutes from './cancel'; // Uncomment if added later
import matchmakingRoutes from './matchmaking';



export default async function gameRoutes(fastify: FastifyInstance) {

	fastify.register(createGameRoutes);
	fastify.register(cancelRoutes);
	fastify.register(gameStatusRoutes);
	fastify.register(matchmakingRoutes);

	fastify.get('/ws/:gameId', { websocket: true }, (connection, req: FastifyRequest) => {
		const { gameId } = req.params as { gameId: string };
		const playerId = (req.query as Record<string, string>).playerId ?? `player_${Date.now()}`;

		fastify.log.info(`WebSocket connection established for game ${gameId} with player ${playerId}`);

		gameEngine.addPlayer(gameId, playerId, connection as unknown as WebSocket);

		connection.on('message', (message: Buffer) => {
			try {
				const data = JSON.parse(message.toString());
				if (data.type === 'gameAction' && data.action === 'updatePaddle') {
					const { paddleZ } = data.data;
					gameEngine.updatePaddlePosition(gameId, playerId, paddleZ);
				}
			} catch (error) {
				fastify.log.error(`Error processing message: ${error}`);
			}
		});

		connection.on('close', () => {
			fastify.log.info(`WebSocket connection closed for player ${playerId}`);
			gameEngine.removePlayer(gameId, playerId);
		});

		connection.on('error', (error: Error) => {
			fastify.log.error(`WebSocket error for player ${playerId}: ${error.message}`);
			gameEngine.removePlayer(gameId, playerId);
		});
	});

}


