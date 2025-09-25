import { WebSocket } from 'ws';
import { GameState, GameDTO } from '@trans/common-types';
import * as gameLogics from './logic';
import { dbRun } from '../../database/helpers';
import { OnlineStatusManager } from '../../core/status/online-status-manager';
import { UserStatsManager } from '../../core/stats/user-stats-manager';
import { gameLogger, logGameEvent, logUserActivity } from '../../utils/logger';
import { tournamentManager } from '../tournament/tournament-manager';

class Enhanced3DPongGame {
	private games = new Map<string, GameState>();
	private gameLoops = new Map<string, NodeJS.Timeout>();
	private connectedPlayers = new Map<string, Map<string, WebSocket>>();
	private matchmakingSockets = new Map<string, WebSocket>();
	public waitingPlayer: { playerId: string } | null = null;

	private statusManager: OnlineStatusManager;
	private statsManager: UserStatsManager;

	private currentInputStates = new Map<string, Map<string, 'up' | 'down' | 'stop'>>();
	
	private gameLoopRunning = new Map<string, boolean>();
	/***
	 * Constructor for the Enhanced 3D Pong Game Engine
	 */
	constructor() {
		console.log('Enhanced 3D Pong Game Engine Initialized');

		this.statusManager = OnlineStatusManager.getInstance();
		this.statsManager = UserStatsManager.getInstance();
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
		
		// Log the game
		gameLogger.info(`Creating game ${gameId}`, {
			game_id: gameId,
			game_mode: gameMode,
			player1: { id: player1Id, nickname: player1Nickname },
			player2: { id: player2Id, nickname: player2Nickname },
			ai_level: aiLevel
		});

		// Log game creation event
		logGameEvent(gameId, 'game_create', {
			players: [
				{ id: player1Id, nickname: player1Nickname || 'Player 1' },
				{ id: player2Id, nickname: player2Nickname || 'Player 2' }
			],
			game_mode: gameMode,
			ai_level: aiLevel
		});
		
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
				velocity: { x: 20.0, y: 0, z: (Math.random() - 0.5) * 40 },
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
		if (!this.connectedPlayers.has(gameId)) {
			this.connectedPlayers.set(gameId, new Map());
		}

		this.connectedPlayers.get(gameId)!.set(playerId, ws);

		// Log player join event
		gameLogger.info(`Player ${playerId} joined game ${gameId}`);
		logGameEvent(gameId, 'player_connect', {
			player_id: playerId,
			total_players: this.connectedPlayers.get(gameId)?.size || 0
		});

		const players = this.connectedPlayers.get(gameId);
		const game = this.games.get(gameId);

		if (players && game) {
			players.set(playerId, ws);
			console.log(`Player ${playerId} joined game ${gameId}`);

			this.statusManager.setUserInGame(parseInt(playerId), gameId);

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
		// Log player input for activity tracking
		if (direction !== 'stop') {
			logGameEvent(gameId, 'player_input', {
				player_id: playerId,
				input: direction
			});
		}
		
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

		// Log game loop stop event
		const game = this.games.get(gameId);
		if (game) {
			gameLogger.info(`Game loop stopped for game ${gameId}`);
			logGameEvent(gameId, 'game_end', {
				final_status: game.status,
				player1_score: game.player1?.score || 0,
				player2_score: game.player2?.score || 0,
				duration: this.calculateGameDuration(game),
				ended_at: new Date().toISOString()
			});
		}
	}

	/**
	 * @description Calculate the duration of the game in milliseconds
	 * @param game 
	 * @returns duration in ms
	 */
	private calculateGameDuration(game: any): number {
		// You can add a startTime property to your game state to track this
		// For now, return a placeholder value
		return Date.now() - (game.startTime || Date.now());
	}

	/**
	 * Remove a player from a game
	 * @param gameId - The ID of the game
	 * @param playerId - The ID of the player
	 */
	public removePlayer(gameId: string, playerId: string): void {
		const players = this.connectedPlayers.get(gameId);
		if (players?.has(playerId)) {
			players.delete(playerId);

			// Log player leave event
			gameLogger.info(`Player ${playerId} removed from game ${gameId}`);
			logGameEvent(gameId, 'player_disconnect', {
				player_id: playerId,
				remaining_players: this.connectedPlayers.get(gameId)?.size || 0
			});
			console.log(`Player ${playerId} removed from game ${gameId}`);
		}

		const gameInputs = this.currentInputStates.get(gameId);
		if (gameInputs?.has(playerId)) {
			gameInputs.delete(playerId);
			console.log(`Input state for player ${playerId} removed from game ${gameId}`);
		}

		this.statusManager.setUserBackOnline(parseInt(playerId));
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
			gameLogger.error(`Game ${gameId} not found, cannot start loop`);
			console.log(`Game ${gameId} not found, cannot start loop`);
			return;
		}

		this.gameLoopRunning.set(gameId, true);
		console.log(`Starting game loop for game ${gameId}`);

		gameLogger.info(`Starting game loop for game ${gameId}`);
		logGameEvent(gameId, 'game_start', {
			status: 'game_loop_started',
			start_time: new Date().toISOString()
		});

		const targetFPS = 60;
		const frameTime = 1000 / targetFPS;
		let lastFrameTime = Date.now();

		let updateCounter = 0;
		const gameLoop = () => {
			if (!this.gameLoopRunning.get(gameId)) {
				return;
			}

			const currentGame = this.games.get(gameId);
			if (!currentGame || currentGame.status === 'finished') {
				this.stopGameLoop(gameId);
				return;
			}

			updateCounter++;

			if (updateCounter % 100 === 0) {
				logGameEvent(gameId, 'performance_metric', {
					update_count: updateCounter,
					active_players: this.connectedPlayers.get(gameId)?.size || 0,
					game_status: game.status,  // if not working, try currentGame.status
					timestamp: new Date().toISOString()
				});
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

			gameLogics.updatePhysics(currentGame, deltaTime);
			
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

	/**
	 * @description Broadcast a message to all players in a game
	 * @param gameId 
	 * @param type 
	 * @param payload 
	 * @returns 
	 */
	public broadcastToGame(gameId: string, type: string, payload: any): void {
		const players = this.connectedPlayers.get(gameId);
		if (!players) {
			console.warn(`No players found for game ${gameId}`);
			return;
		}

		const message = JSON.stringify({
			type,
			...payload
		});

		players.forEach((ws, playerId) => {
			if (ws.readyState === 1) { // WebSocket.OPEN
				ws.send(message);
			} else {
				console.warn(`WebSocket for player ${playerId} is not open`);
			}
		});
	}

	public async endGame(gameId: string): Promise<void> {
		console.log(`Ending game ${gameId}`);

		this.stopGameLoop(gameId);

		const game = this.games.get(gameId);
		const players = this.connectedPlayers.get(gameId);

		if (game) {
			game.status = 'finished';
			const winnerId = game.player1.score > game.player2.score ? game.player1Id : game.player2Id;

			const winner = winnerId === game.player1Id ? game.player1 : game.player2;

			await this.updatePlayersStats(game, winnerId);
			await this.setPlayersBackOnline(game);

			let isTournamentFinal = false;

			if (game.isTournamentGame) {
				console.log(`Game ${gameId} is a tournament game, updating tournament status`);

				const tournamentInfo = tournamentManager.findMatchByGameId(gameId);

				if (tournamentInfo) {
					const { tournamentId, match } = tournamentInfo;
					const tournament = await tournamentManager.getTournamentInfo(tournamentId);

					if (tournament) {
						const result = await tournamentManager.handleGameEnd(gameId, tournament, match.id, game);
                		isTournamentFinal = result.tournamentFinished;
					} else {
						console.error(`Tournament ${tournamentId} not found for game ${gameId}`);
					}
				} else {
					console.error(`No tournament match found for game ${gameId}`);
				}
			}

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
					payload: {
						winnerId: winnerId,
						winnerNickname: winner.nickname,
						finalScore: {
							player1: game.player1.score,
							player2: game.player2.score
						},
						isTournamentFinal: isTournamentFinal
					}
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

	 private async updatePlayersStats(game: GameState, winnerId: string): Promise<void> {
        try {
            const player1Id = parseInt(game.player1Id);
            const player2Id = parseInt(game.player2Id);

            if (game.player1Id !== 'AI' && !isNaN(player1Id)) {
                const isWinner = winnerId === game.player1Id;
                const pointsChange = this.calculateRankPoints(isWinner, game.player1.score, game.player2.score);
                await this.statsManager.updateRankPoints(player1Id, pointsChange);
            }

            if (game.player2Id !== 'AI' && !isNaN(player2Id)) {
                const isWinner = winnerId === game.player2Id;
                const pointsChange = this.calculateRankPoints(isWinner, game.player2.score, game.player1.score);
                await this.statsManager.updateRankPoints(player2Id, pointsChange);
            }
        } catch (error) {
            console.error('Error updating player stats:', error);
        }
    }

    /**
     * Sets players back online after a game ends
     */
    private async setPlayersBackOnline(game: GameState): Promise<void> {
        try {
            if (game.player1Id !== 'AI') {
                const player1Id = parseInt(game.player1Id);
                if (!isNaN(player1Id)) {
                    await this.statusManager.setUserBackOnline(player1Id);
                }
            }

            if (game.player2Id !== 'AI') {
                const player2Id = parseInt(game.player2Id);
                if (!isNaN(player2Id)) {
                    await this.statusManager.setUserBackOnline(player2Id);
                }
            }
        } catch (error) {
            console.error('Error setting players back online:', error);
        }
    }

    /**
     * Rank points calculation based on game outcome
     */
    private calculateRankPoints(isWinner: boolean, playerScore: number, opponentScore: number): number {
        const basePoints = 25;
        const scoreDifference = playerScore - opponentScore;
        
        if (isWinner) {
            return Math.max(15, basePoints + Math.floor(scoreDifference / 2));
        } else {
            return Math.min(-15, -basePoints + Math.floor(scoreDifference / 2));
        }
    }

}

// Sigleton instance of the game engine
export const gameEngine = new Enhanced3DPongGame();
