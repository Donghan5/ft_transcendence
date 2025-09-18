import { Scene, Engine, PointerEventTypes, Mesh, ParticleSystem, KeyboardEventTypes } from '@babylonjs/core';
import { GameState } from '@trans/common-types';
import { Connection } from './connection';
import { SceneObjects, createSceneAndGameObjects } from './scene-builder';
import { returnToMainMenu } from '../../main.ts';

export class PongGame3D {
    private engine: Engine;
    private scene: Scene;
    private connection: Connection;
	private gameMode: string;
	private localPlayerNickname: string;

    private player1Paddle: Mesh;
    private player2Paddle: Mesh;
    private ball: Mesh;
    private particleSystem: ParticleSystem;

    public state: GameState | null = null;
    private previousState: GameState | null = null;
    private lastStateTimestamp: number = 0;
    private localPlayerId: string;

    private player1NameEl: HTMLElement | null;
    private player1ScoreEl: HTMLElement | null;
    private player2NameEl: HTMLElement | null;
    private player2ScoreEl: HTMLElement | null;

    private disposed: boolean = false; // tracking disposal state

    private lastSentInputStateP1: 'up' | 'down' | 'stop' = 'stop';
    private lastSentInputStateP2: 'up' | 'down' | 'stop' = 'stop';

    private inputStatePlayer1 = {
        up: false,
        down: false
    };

	private inputStatePlayer2 = {
		up: false,
		down: false
	};

    private paddleSpeed = 0.5;

    private resizeHandler: () => void;

    constructor(canvas: HTMLCanvasElement, gameId: string, playerId: string = 'player1', gameMode: string = 'PVP', playerNickname: string = 'Player') {
        this.engine = new Engine(canvas, true);
        this.scene = new Scene(this.engine);
        this.localPlayerId = playerId;
        this.gameMode = gameMode;
		this.localPlayerNickname = playerNickname;

        const sceneObjects: SceneObjects = createSceneAndGameObjects(this.scene, canvas);
        this.player1Paddle = sceneObjects.player1Paddle;
        this.player2Paddle = sceneObjects.player2Paddle;
        this.ball = sceneObjects.ball;
        this.particleSystem = sceneObjects.particleSystem;

        this.player1NameEl = document.getElementById('player1-name');
        this.player1ScoreEl = document.getElementById('player1-score');
        this.player2NameEl = document.getElementById('player2-name');
        this.player2ScoreEl = document.getElementById('player2-score');

        this.setupControls();
        this.connection = new Connection(gameId, this.localPlayerId);
        this.setupConnectionHandlers();
        this.connection.connect().catch(err => console.error('Connection failed:', err));

        this.engine.runRenderLoop(() => {
            if (this.disposed) return;
			this.scene.render(true, true);

			if (this.gameMode === 'quick') {
				this.updateMultiPlayerPaddlePosition();
			} else {
				this.updateSinglePlayerPaddlePosition();
			}
			
			this.interpolatePositions();
        });

    this.resizeHandler = () => this.engine.resize();
        window.addEventListener('resize', this.resizeHandler);
    }

    private createGameUI(): void {
        const cancelBtn = document.getElementById('button');

        if (!cancelBtn) {
            console.error('Cancel button not found');
            return;
        }

        cancelBtn.id = 'game-cancel-btn';
        cancelBtn.textContent = 'Quit Game';
        cancelBtn.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400';
        cancelBtn.style.zIndex = '1000';

        cancelBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to quit and forfeit the game?')) {
                this.forfeitGame();
            }
        });
        document.getElementById('game-container')?.appendChild(cancelBtn);
    }

    private forfeitGame(): void {
        if (this.connection) {
            this.connection.sendGameAction('forfeit', { 
                gameId: this.connection.gameId,
                playerId: this.connection.playerId
             });
        }
    }

    private setupConnectionHandlers(): void {
        this.connection.on('gameState', (newState: GameState) => {
            this.previousState = this.state ? { ...this.state } : newState;
            this.state = newState;
            this.lastStateTimestamp = Date.now();

            this.updateScoreDisplay();

			if (newState.status === 'countdown') {
				this.updateCountDownDisplay(newState.countdownValue);
			} else {
				this.hideCountDownDisplay();
			}

            if (this.previousState && (this.previousState.player1.score !== newState.player1.score || this.previousState.player2.score !== newState.player2.score)) {
                this.updateScoreDisplay();
                this.onScoreUpdate();
            }
        });

        this.connection.on('gameEnd', (data) => {
            console.log(`Game ended. Winner: ${data.winnerNickname}`);
            this.onGameEnd(data);
        });

        this.connection.on('error', (errorMsg: string) => {
            console.error('Connection error:', errorMsg);
        });
    }

	/**
	 * @description Update the countdown display
	 * @param count
	 */
	private updateCountDownDisplay(count: number | undefined): void {
		const countdownDisplay = document.getElementById('countdown-display');
		if (countdownDisplay) {
			countdownDisplay.style.display = 'block';
			if (count !== undefined && count > 0) {
				countdownDisplay.textContent = count.toString();
			} else if (count === 0) {
				countdownDisplay.textContent = 'GO!';
			}
		}
	}

	/**
	 * @description Hide the countdown display
	 */
	private hideCountDownDisplay(): void {
		const countdownDisplay = document.getElementById('countdown-display');
		if (countdownDisplay) {
			countdownDisplay.style.display = 'none';
		}
	}

	/**
	 * @description Interpolate positions for smoother rendering
	 * @returns void
     * const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;
	 */
    private interpolatePositions(): void {
        if (this.disposed || !this.state || !this.previousState) return;

        const now = Date.now();
        const timeSinceUpdate = now - this.state.lastUpdate;
        const serverUpdateInterval = 1000 / 60;
        let interpolationFactor = timeSinceUpdate / (serverUpdateInterval * 1.5);

        if (timeSinceUpdate > serverUpdateInterval * 3) {
            interpolationFactor = 1;
        }

        interpolationFactor = Math.min(interpolationFactor, 1);

        this.ball.position.x = lerp(this.previousState.ball.position.x, this.state.ball.position.x, interpolationFactor);
        this.ball.position.y = lerp(this.previousState.ball.position.y, this.state.ball.position.y, interpolationFactor);
        this.ball.position.z = lerp(this.previousState.ball.position.z, this.state.ball.position.z, interpolationFactor);

        this.player1Paddle.position.z = lerp(
            this.previousState.player1.paddleZ, 
            this.state.player1.paddleZ, 
            interpolationFactor
        );
        this.player2Paddle.position.z = lerp(
            this.previousState.player2.paddleZ, 
            this.state.player2.paddleZ, 
            interpolationFactor
        );

        this.updateScoreDisplay();
    }

    private setupControls(): void {
        this.scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case KeyboardEventTypes.KEYDOWN:
                    if (kbInfo.event.key === 'w' || kbInfo.event.key === 'W') {
                        this.inputStatePlayer1.up = true;
                    } else if (kbInfo.event.key === 's' || kbInfo.event.key === 'S') {
                        this.inputStatePlayer1.down = true;
                    }
                    else if (kbInfo.event.key === 'ArrowUp') {
                        this.inputStatePlayer2.up = true;
                    } else if (kbInfo.event.key === 'ArrowDown') {
                        this.inputStatePlayer2.down = true;
                    }
                    break;
                case KeyboardEventTypes.KEYUP:
                    if (kbInfo.event.key === 'w' || kbInfo.event.key === 'W') {
                        this.inputStatePlayer1.up = false;
                    } else if (kbInfo.event.key === 's' || kbInfo.event.key === 'S') {
                        this.inputStatePlayer1.down = false;
                    }
                    else if (kbInfo.event.key === 'ArrowUp') {
                        this.inputStatePlayer2.up = false;
                    } else if (kbInfo.event.key === 'ArrowDown') {
                        this.inputStatePlayer2.down = false;
                    }
                    break;
            }
        });
    }

    private updateSinglePlayerPaddlePosition(): void {
        if (this.disposed || !this.state) return;

        this.sendPlayer1InputState();
    }

	private updateMultiPlayerPaddlePosition(): void {
		if (this.disposed || !this.state) return;

        this.sendPlayer1InputState();
        this.sendPlayer2InputState();
	}

    private sendPlayer1InputState(): void {
        let inputState: 'up' | 'down' | 'stop' = 'stop';
        if (this.inputStatePlayer1.up) {
            inputState = 'up';
        }
        else if (this.inputStatePlayer1.down) {
            inputState = 'down';
        }

        if (this.lastSentInputStateP1 !== inputState) {
            this.connection.sendPlayerInput(inputState, this.localPlayerId);
            this.lastSentInputStateP1 = inputState;
            console.log(`Player 1 input: ${inputState}`);
        }
    }

    private sendPlayer2InputState(): void {
        if (!this.state?.player2Id || this.state.player2Id === 'AI') return;

        let inputState: 'up' | 'down' | 'stop' = 'stop';
        
        if (this.inputStatePlayer2.up) {
            inputState = 'up';
        } else if (this.inputStatePlayer2.down) {
            inputState = 'down';
        }
        
        if (this.lastSentInputStateP2 !== inputState) {
            this.connection.sendPlayerInput(inputState, this.state.player2Id);
            this.lastSentInputStateP2 = inputState;
            console.log(`🎮 Player 2 input: ${inputState}`);
        }
    }

    private sendPaddleUpdate(playerId: string, paddleZ: number): void {
        this.connection.sendGameAction('updatePaddle', { playerId, paddleZ });
    }

    private updateScoreDisplay(): void {
        if (!this.state) return;

        if (this.player1NameEl && this.player1ScoreEl && this.player2NameEl && this.player2ScoreEl) {
            this.player1NameEl.textContent = this.state.player1.nickname || 'Player 1';
            this.player1ScoreEl.textContent = this.state.player1.score.toString();
            this.player2NameEl.textContent = this.state.player2.nickname || 'Player 2';
            this.player2ScoreEl.textContent = this.state.player2.score.toString();
        }
    }

    private onScoreUpdate(): void {
        if (this.particleSystem) {
            this.particleSystem.start();
            setTimeout(() => {
                this.particleSystem?.stop();
            }, 1000);
        }
    }

    private onGameEnd(data: { winnerNickname: string }): void {
		console.log(`[DEBUG] onGameEnd called with winner: ${data.winnerNickname}`);

		const modal = document.getElementById('gameOverModal');
		const returnBtn = document.getElementById('gameOverReturnBtn');
		const winnerMessage = document.getElementById('winnerMessage');

		if (modal && winnerMessage) {
			winnerMessage.textContent = `Game Over! ${data.winnerNickname} wins!`;

			modal.classList.remove('hidden');

			const returnToMenuHandler = () => {
				returnToMainMenu();
				console.log('Returned to main menu from game over modal');
			};

			returnBtn?.addEventListener('click', returnToMenuHandler, { once: true });
		}
    }

    public dispose(): void {
        if (this.disposed) {
            console.warn('PongGame3D already disposed, skipping');
            return;
        }

        console.log('PongGame3D disposing...');
        this.disposed = true;

        try {
            if (this.engine) {
                this.engine.stopRenderLoop();
                console.log('Render loop stopped');
            }
        } catch (error) {
            console.error('Error stopping render loop:', error);
        }

        try {
            if (this.connection) {
                this.connection.disconnect();
                console.log('Connection disconnected');
            }
        } catch (error) {
            console.error('Error disconnecting connection:', error);
        }

        try {
            if (this.resizeHandler) {
                window.removeEventListener('resize', this.resizeHandler);
                console.log('Resize handler removed');
            }
        } catch (error) {
            console.error('Error removing resize handler:', error);
        }

        try {
            if (this.scene) {
                if (this.ball) {
                    this.ball.dispose();
                    console.log('Ball mesh disposed');
                }
                if (this.player1Paddle) {
                    this.player1Paddle.dispose();
                    console.log('Player1 paddle disposed');
                }
                if (this.player2Paddle) {
                    this.player2Paddle.dispose();
                    console.log('Player2 paddle disposed');
                }
                if (this.particleSystem) {
                    this.particleSystem.dispose();
                    console.log('Particle system disposed');
                }

                this.scene.dispose();
                console.log('Scene disposed');
            }
        } catch (error) {
            console.error('Error disposing scene:', error);
        }

        try {
            if (this.engine) {
                this.engine.dispose();
                console.log('Engine disposed');
            }
        } catch (error) {
            console.error('Error disposing engine:', error);
        }

        this.ball = null as any;
        this.player1Paddle = null as any;
        this.player2Paddle = null as any;
        this.particleSystem = null as any;
        this.scene = null as any;
        this.engine = null as any;
        this.connection = null as any;
        this.state = null;
        this.previousState = null;

        console.log('PongGame3D fully disposed');
    }
}

function lerp(start: number, end: number, factor: number): number {
    return start + (end - start) * factor;
}