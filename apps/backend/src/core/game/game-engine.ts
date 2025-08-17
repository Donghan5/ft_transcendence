import { WebSocket } from 'ws';
import { GameState, GameDTO } from '@trans/common-types';
import * as gameLogics from './logic';
import { dbRun } from '../../database/helpers';

class Enhanced3DPongGame {
	private games = new Map<string, GameState>();
	private gameLoops = new Map<string, NodeJS.Timeout>();
	private connectedPlayers = new Map<string, Map<string, WebSocket>>();
	private matchmakingSockets = new Map<string, WebSocket>();
	public waitingPlayer: { playerId: string } | null = null;

	private currentInputStates = new Map<string, Map<string, 'up' | 'down' | 'stop'>>();
	
	private gameLoopRunning = new Map<string, boolean>();
	/***
	 * Constructor for the Enhanced 3D Pong Game Engine
	 */
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
	public createGame(player1Id: string, player2Id: string, gameMode: string, aiLevel?: 'EASY' | 'MIDDLE' | 'HARD',
		player1Nickname?: string, player2Nickname?: string
	): string {
		const gameId = `game_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
		const initialState = gameLogics.initState(gameId);

		const gameState: GameState = {
			...initialState,
			player1Id: player1Id,
			player2Id: player2Id,
			player1: { 
				...initialState.player1, 
				position: { x: -12, y: 1.5, z: 0 }, 
				paddleZ: 0,
				nickname: player1Nickname || player1Id
			},
			player2: { 
				...initialState.player2, 
				position: { x: 12, y: 1.5, z: 0 }, 
				paddleZ: 0,
				nickname: player2Nickname || player2Id
			},
			ball: {
				position: { x: 0, y: 1, z: 0 },
				velocity: { x: 0.5, y: 0, z: (Math.random() - 0.5) * 0.3 },
			},
			gameId,
			status: 'waiting',
			lastUpdate: Date.now(),
			gameMode: gameMode,
			aiLevel: aiLevel
		};

		this.games.set(gameId, gameState);
		this.connectedPlayers.set(gameId, new Map());
		this.gameLoopRunning.set(gameId, false);
		// this.startGameLoop(gameId);
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

			const isReadyToStart = (game.player2Id !== 'AI' && players.size === 2) || (game.player2Id === 'AI' && players.size === 1) || (game.gameMode === 'LOCAL_PVP');
			if (isReadyToStart && game.status === 'waiting') {
				this.startCountdown(gameId);
			}

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
	 * @description Start the countdown for the game
	 * @param gameId - The ID of the game
	 * @returns
	 */
	public startCountdown(gameId: string): void {
        const game = this.games.get(gameId);
        if (!game || game.status !== 'waiting') return;

        game.status = 'countdown';
        let count = 3;
        game.countdownValue = count;

        const countdownInterval = setInterval(() => {
            gameLogics.broadcastGameState(gameId);
            count--;
            game.countdownValue = count;

            if (count < 0) {
                clearInterval(countdownInterval);
                game.status = 'playing';
                delete game.countdownValue;
                gameLogics.broadcastGameState(gameId);
                this.startGameLoop(gameId);
            }
        }, 1000);
    }

	// /**
	//  * Remove a player from the game
	//  * @param gameId - The ID of the game
	//  * @param playerId - The ID of the player
	//  */
	// public removePlayer(gameId: string, playerId: string): void {
	// 	const players = this.connectedPlayers.get(gameId);
	// 	if (players?.has(playerId)) {
	// 		players.delete(playerId);
	// 		console.log(`Player ${playerId} left game ${gameId}`);
	// 	}
	// }

	/**
	 * Update the paddle position of a player
	 * @param gameId - The ID of the game
	 * @param playerId - The ID of the player
	 * @param paddleZ - The new Z position of the paddle
	 */
	public updatePaddlePosition(gameId: string, playerId: string, paddleZ: number): void {
		  console.warn(`Legacy paddle update used for player ${playerId}. Consider migrating to input-based system.`);
		
		const game = this.games.get(gameId);
		if (!game) return;

		const playerKey = this.getPlayerKey(playerId, game);
		if (playerKey) {
			game[playerKey].paddleZ = Math.max(-13, Math.min(13, paddleZ));

			if (playerKey === 'player1') {
				game.player1.position.x = -12;
			}
			if (playerKey === 'player2') {
				game.player2.position.x = 12;
			}
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
	 * Add a WebSocket connection for a waiting player
	 * @param playerId - The ID of the player
	 * @param ws - The WebSocket connection
	 */
	public addWaitingPlayerSocket(playerId: string, ws: WebSocket): void {
		this.matchmakingSockets.set(playerId, ws);
	}

	/**
	 * Remove a WebSocket connection for a waiting player
	 * @param playerId - The ID of the player
	 */
	public removeWaitingPlayerSocket(playerId: string): void {
		this.matchmakingSockets.delete(playerId);
	}

	/**
	 * Notify a player that a match has been found
	 * @param playerId - The ID of the player
	 * @param gameId - The ID of the game
	 */
	public notifyMatchFound(playerId: string, gameId: string): void {
		const ws = this.matchmakingSockets.get(playerId);
		if (ws && ws.readyState === WebSocket.OPEN) {
			const message = JSON.stringify({ type: 'matchFound', gameId });
			ws.send(message);
			this.matchmakingSockets.delete(playerId); // Remove after notifying
		} else {
			console.warn(`WebSocket for player ${playerId} is not open or does not exist.`);
		}
	}

	public updatePlayerInputState(gameId: string, playerId: string, direction: 'up' | 'down' | 'stop'): void {
		if (!this.currentInputStates.has(gameId)) {
			this.currentInputStates.set(gameId, new Map());
		}

		const gameInputs = this.currentInputStates.get(gameId)!;
		gameInputs.set(playerId, direction);

		console.log(`Player ${playerId} input: ${direction}`);
	}

	private stopGameLoop(gameId: string): void {
		const interval = this.gameLoops.get(gameId);

		if (interval) {
			clearTimeout(interval);
			this.gameLoops.delete(gameId);
		}

		this.gameLoopRunning.set(gameId, false);
		this.currentInputStates.delete(gameId);
		console.log(`Game loop stopped for game ${gameId}`);
	}

	public removePlayer(gameId: string, playerId: string): void {
		const players = this.connectedPlayers.get(gameId);
		if (players?.has(playerId)) {
			players.delete(playerId);
			console.log(`Player ${playerId} removed from game ${gameId}`);
		}

		const gameInputs = this.currentInputStates.get(gameId);
		if (gameInputs?.has(playerId)) {
			gameInputs.delete(playerId);
			console.log(`Input state for player ${playerId} removed from game ${gameId}`);
		}
	}

	/**
	 * Start the game loop for a specific game
	 * @param gameId - The ID of the game
	 */
	public startGameLoop(gameId: string): void {
		if (this.gameLoopRunning.get(gameId)) {
			console.log(`Game loop for ${gameId} is already running`);
			return;
		}

		const game = this.games.get(gameId);
		if (!game) {
			console.log(`Game ${gameId} not found, cannot start loop`);
			return;
		}

		this.gameLoopRunning.set(gameId, true);
		console.log(`Starting game loop for game ${gameId}`);

		const targetFPS = 60;
		const frameTime = 1000 / targetFPS;
		let lastFrameTime = Date.now();

		const gameLoop = () => {
			if (!this.gameLoopRunning.get(gameId)) {
				return;
			}

			const currentGame = this.games.get(gameId);
			if (!currentGame || currentGame.status === 'finished') {
				this.stopGameLoop(gameId);
				return;
			}

			const currentTime = Date.now();
			const deltaTime = (currentTime - lastFrameTime) / 1000;
			lastFrameTime = currentTime;

			const gameInputs = this.currentInputStates.get(gameId);
			if (gameInputs) {
				gameInputs.forEach((direction, playerId) => {
					gameLogics.processPlayerInput(currentGame, playerId, direction);
				});
			}

			gameLogics.updatePhysics(currentGame);
			
			gameLogics.broadcastGameState(gameId);
		};

		const scheduleNextFrame = () => {
			if (!this.gameLoopRunning.get(gameId)) {
				return;
			}

			const timeToNextFrame = Math.max(0, frameTime - (Date.now() - lastFrameTime));
			
			const timeoutId = setTimeout(() => {
				gameLoop();
				scheduleNextFrame(); 
			}, timeToNextFrame);

			this.gameLoops.set(gameId, timeoutId);
		};

		scheduleNextFrame();
	}

	public async endGame(gameId: string): Promise<void> {
		console.log(`Ending game ${gameId}`);

		this.stopGameLoop(gameId);

		const game = this.games.get(gameId);
		const players = this.connectedPlayers.get(gameId);

		if (game) {
			game.status = 'finished';
			const winnerId = game.player1.score > game.player2.score ? game.player1Id : game.player2Id;

			try {
				const isP1User = game.player1Id !== 'AI' && game.player1Id !== 'Player2';
				const isP2User = game.player2Id !== 'AI' && game.player2Id !== 'Player2';

				if (isP1User || isP2User || game.gameMode === 'LOCAL_PVP') {
					await dbRun(
						`INSERT INTO games (game_id, player1_id, player2_id, player1_score, player2_score, winner_id, game_type, finished_at)
						VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
						[
							game.gameId,
							isP1User ? game.player1Id : null,
							isP2User ? game.player2Id : null,
							game.player1.score,
							game.player2.score,
							(isP1User || isP2User) ? winnerId : null,
							game.gameMode,
							new Date().toISOString()
						]
					);
					console.log(`[DB] Game ${gameId} result saved`);
				}
			} catch (error) {
				console.error(`Error saving game result for ${gameId}:`, error);
			}

			if (players) {
				const message = JSON.stringify({ 
					type: 'gameEnd', 
					winner: winnerId 
				});
				players.forEach((ws) => {
					if (ws.readyState === WebSocket.OPEN) {
						ws.send(message);
					}
				});
			}
		}

		console.log(`Game ${gameId} ended successfully`);

		setTimeout(() => {
			this.games.delete(gameId);
			this.connectedPlayers.delete(gameId);
			this.gameLoopRunning.delete(gameId);
			this.currentInputStates.delete(gameId);
			console.log(`Game ${gameId} data cleaned up`);
		}, 30000);
	}
}

// Sigleton instance of the game engine
export const gameEngine = new Enhanced3DPongGame();
