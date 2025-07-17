import { WebSocket } from 'ws';
import { GameState, Vector3D } from '@trans/common-types';
import * as gameLogics from './logic';

class Enhanced3DPongGame {
	private games = new Map<string, GameState>();
	private gameLoops = new Map<string, NodeJS.Timeout>();
	private connectedPlayers = new Map<string, Map<string, WebSocket>>();

	constructor() {
		console.log('Enhanced 3D Pong Game Engine Initialized');
	}

	/**
	 * Create a new game and initialize
	 * @param player1Id - ID of player 1
	 * @param player2Id - ID of player 2
	 * @return gameId - ID of the created game
	 */
	public createGame(player1Id: string, player2Id: string): string {
		const gameId = `game_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
		const initialState = gameLogics.initState(gameId);

		const gameState: GameState = {
			...initialState,
			player1: { ...initialState.player1, position: { x: -160, y: 30, z: 0 }, paddleZ: 0 },
			player2: { ...initialState.player2, position: { x: 160, y: 30, z: 0 }, paddleZ: 0 },
			ball: {
				position: { x: 0, y: 20, z: 0 },
				velocity: { x: 5, y: 0, z: (Math.random() - 0.5) * 6 },
			},
			gameId,
			status: 'playing',
			lastUpdate: Date.now(),
		}

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
		if (players) {
			players.set(playerId, ws);
			console.log(`Player ${playerId} joined game ${gameId}`);
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
			game[playerKey].paddleZ = Math.max(-120, Math.min(120, paddleZ));
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
	private startGameLoop(gameId: string): void {
		const gameLoop = () => {
			const game = this.games.get(gameId);
			if (!game || game.status !== 'playing') {
				this.endGame(gameId);
				return;
			}

			this.updatePhysics(game);
			this.broadcastGameState(gameId);

			this.gameLoops.set(gameId, setTimeout(gameLoop, 1000 / 60)); // 60 FPS
		};
		gameLoop();
	}

	/**
	 * Update the physics of the game
	 * @param game - The current game state
	 */
	private updatePhysics(game: GameState): void {
		// Update ball position
		game.ball.position.x += game.ball.velocity.x;
		game.ball.position.y += game.ball.velocity.y;
		game.ball.position.z += game.ball.velocity.z;

		// Check for collisions with paddles
		this.checkPaddleCollisions(game);

		const scorerSide = game.ball.position.x < -200 ? 'right' : game.ball.position.x > 200 ? 'left' : null;
		if (scorerSide) {
			const scorerId = scorerSide === 'left' ? game.player1Id : game.player2Id;
			const updatedState = gameLogics.addPoint(game, scorerId);
			this.games.set(game.gameId, updatedState);
			this.resetBall(updatedState);

			if (gameLogics.isGameOver(updatedState)) {
				this.endGame(game.gameId);
			}
		}
	}

	private checkPaddleCollisions(game: GameState): void {
		const { ball, player1, player2 } = game;
		const check = (paddlePos: Vector3D, paddleZ: number) => {
			return (
				Math.abs(ball.position.z - paddleZ) < 40 &&
				Math.abs(ball.position.x - paddlePos.x) < 10
			);
		};

		if (ball.velocity.x < 0 && check(player1.position, player1.paddleZ)) {
			ball.velocity.x *= -1.05;
			const relativeIntersect = player1.paddleZ - ball.position.z;
			ball.velocity.z = -relativeIntersect / 40 * 5; // Adjust
		}
		else if (ball.velocity.x > 0 && check(player2.position, player2.paddleZ)) {
			ball.velocity.x *= -1.05;
			const relativeIntersect = player2.paddleZ - ball.position.z;
			ball.velocity.z = -relativeIntersect / 40 * 5; // Adjust
		}
	}

	private resetBall(game: GameState): void {
		game.ball.position = { x: 0, y: 20, z: 0 };
		game.ball.velocity = {
			x: game.ball.velocity.x > 0 ? -5 : 5,
			y: 0,
			z: (Math.random() - 0.5) * 6
		};
	}

	private broadcastGameState(gameId: string): void {
		const game = this.games.get(gameId);
		const players = this.connectedPlayers.get(gameId);
		if (!game || !players) return;   // Game and players not declared

		const message = JSON.stringify({
			type: 'gameState',
			payload: game
		});
		players.forEach((ws, playerId) => {
			if (ws.readyState === WebSocket.OPEN) {
				ws.send(message);
			} else {
				console.warn(`WebSocket for player ${playerId} is not open`);
			}
		});
	}

	private endGame(gameId: string): void {
		const loop = this.gameLoops.get(gameId);
		if (loop) {
			clearTimeout(loop);
			this.gameLoops.delete(gameId);
		}

		const game = this.games.get(gameId);
		const players = this.connectedPlayers.get(gameId);
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
