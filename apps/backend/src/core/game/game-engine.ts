import { WebSocket } from 'ws';
import { GameState } from '@trans/common-types';
import * as gameLogics from './logic';
import { dbRun } from '../../database/helpers';

class Enhanced3DPongGame {
	private games = new Map<string, GameState>();
	private gameLoops = new Map<string, NodeJS.Timeout>();
	private connectedPlayers = new Map<string, Map<string, WebSocket>>();

	constructor() {
		console.log('Enhanced 3D Pong Game Engine Initialized');
	}

	/***
	 * Get the current game state by game ID
	 * @param gameId - The ID of the game
	 * @return GameState - The current state of the game
	 */
	public getGameState(gameId: string): GameState | undefined {
		return this.games.get(gameId);
	}

	public getGames(): Map<string, GameState> {
		return this.games;
	}

	public getConnectedPlayers(): Map<string, Map<string, WebSocket>> {
		return this.connectedPlayers;
	}

	/**
	 * Create a new game and initialize
	 * @param player1Id - ID of player 1
	 * @param player2Id - ID of player 2
	 * @return gameId - ID of the created game
	 */
	public createGame(player1Id: string, player2Id: string, aiLevel?: 'EASY' | 'MIDDLE' | 'HARD'): string {
		const gameId = `game_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
		const initialState = gameLogics.initState(gameId);

		const gameState: GameState = {
			...initialState,
			player1Id: player1Id,
			player2Id: player2Id,
			player1: { ...initialState.player1, position: { x: -12, y: 1.5, z: 0 }, paddleZ: 0 },
			player2: { ...initialState.player2, position: { x: 12, y: 1.5, z: 0 }, paddleZ: 0 },
			ball: {
				position: { x: 0, y: 1, z: 0 },
				velocity: { x: 0.5, y: 0, z: (Math.random() - 0.5) * 0.3 },
			},
			gameId,
			status: 'playing',
			lastUpdate: Date.now(),
			aiLevel: aiLevel
		};

		this.games.set(gameId, gameState);
		this.connectedPlayers.set(gameId, new Map());
		this.startGameLoop(gameId);
		return gameId;
	}

	/**
	 * Add a player to the game
	 * @param gameId - The ID of the game
	 * @param playerId - The ID of the player
	 * @param ws - The WebSocket connection for the player
	 */
	public addPlayer(gameId: string, playerId: string, ws: WebSocket): void {
		const players = this.connectedPlayers.get(gameId);
		const game = this.games.get(gameId);

		if (players && game) {
			players.set(playerId, ws);
			console.log(`Player ${playerId} joined game ${gameId}`);

			if (ws.readyState === WebSocket.OPEN) {
				const message = JSON.stringify({
					type: 'gameState',
					payload: game
				});
				ws.send(message);
			} else {
				console.warn(`Game ${gameId} not found for player ${playerId}`);
				ws.close();
			}
		}
	}

	/**
	 * Remove a player from the game
	 * @param gameId - The ID of the game
	 * @param playerId - The ID of the player
	 */
	public removePlayer(gameId: string, playerId: string): void {
		const players = this.connectedPlayers.get(gameId);
		if (players?.has(playerId)) {
			players.delete(playerId);
			console.log(`Player ${playerId} left game ${gameId}`);
		}
	}

	/**
	 * Update the paddle position of a player
	 * @param gameId - The ID of the game
	 * @param playerId - The ID of the player
	 * @param paddleZ - The new Z position of the paddle
	 */
	public updatePaddlePosition(gameId: string, playerId: string, paddleZ: number): void {
		const game = this.games.get(gameId);
		if (!game) return;

		const playerKey = this.getPlayerKey(playerId, game);
		if (playerKey) {
			game[playerKey].paddleZ = Math.max(-13, Math.min(13, paddleZ));
		}
	}

	/**
	 * Get the player key based on player ID
	 * @param playerId - The ID of the player
	 * @param game - The current game state
	 * @return playerKey - The key for the player in the game state
	 */
	private getPlayerKey(playerId: string, game: GameState): 'player1' | 'player2' | null {
		if (game.player1Id === playerId) return 'player1';
		if (game.player2Id === playerId) return 'player2';
		return null; // Default to player1 if not found
	}

	/**
	 * Start the game loop for a specific game
	 * @param gameId - The ID of the game
	 */
	public startGameLoop(gameId: string): void {
		const gameLoop = () => {
			const game = this.games.get(gameId);
			if (!game || game.status !== 'playing') {
				this.endGame(gameId);
				return;
			}

			gameLogics.updatePhysics(game);
			gameLogics.broadcastGameState(gameId);

			this.gameLoops.set(gameId, setTimeout(gameLoop, 1000 / 60)); // 60 FPS
		};
		gameLoop();
	}

	public async endGame(gameId: string): Promise<void> {
		const loop = this.gameLoops.get(gameId);
		if (loop) {
			clearTimeout(loop);
			this.gameLoops.delete(gameId);
		}

		const game = this.games.get(gameId);
		const players = this.connectedPlayers.get(gameId);

		if (game) {
			game.status = 'finished';
			const winnerId = game.player1.score > game.player2.score ? game.player1Id : game.player2Id;
			const winnerKey = game.player1Id === winnerId ? 'player1' : 'player2';
			const loserKey = winnerKey === 'player1' ? 'player2' : 'player1';

			try {
				const isP1User = !isNaN(parseInt(game.player1Id, 10));
				const isP2User = !isNaN(parseInt(game.player2Id, 10));

				if (isP1User || isP2User) {
					await dbRun(
						`INSERT INTO games (game_id, player1_id, player2_id, player1_score, player2_score, winner_id, game_type, finished_at)
						VALUES (?, ?, ?, ?, ?, ?, ?)`,
						[
							game.gameId,
							isP1User ? game.player1Id : null,
							isP2User ? game.player2Id : null,
							game[winnerKey].score,
							game[loserKey].score,
							winnerId,
							game.player2Id === 'AI' ? 'AI' : 'PVP',
							new Date().toISOString()
						]
					);
					console.log(`[DB] Game ${gameId} result saved,`)
				}
			} catch (error) {
				console.error(`Error saving game result for ${gameId}:`, error);
			}
		}

		if (game && players) {
			const message = JSON.stringify({ type: 'gameEnd', winner: game.player1.score > game.player2.score ? game.player1Id : game.player2Id });
			players.forEach((ws) => {
				if (ws.readyState === WebSocket.OPEN) {
					ws.send(message);
				}
			});
		}

		console.log(`Game ${gameId} ended`);
		setTimeout(() => {
			this.games.delete(gameId);
			this.connectedPlayers.delete(gameId);
		}, 30000); // Cleanup after 30 seconds
	}
}

// Sigleton instance of the game engine
export const gameEngine = new Enhanced3DPongGame();
