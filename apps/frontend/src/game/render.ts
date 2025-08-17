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

    private state: GameState | null = null;
    private previousState: GameState | null = null;
    private lastStateTimestamp: number = 0;
    private localPlayerId: string;

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

        this.setupControls();
        this.connection = new Connection(gameId, this.localPlayerId);
        this.setupConnectionHandlers();
        this.connection.connect().catch(err => console.error('Connection failed:', err));

        this.engine.runRenderLoop(() => {
			this.scene.render(true, true);

			if (this.gameMode === 'quick') {
				this.updateMultiPlayerPaddlePosition();
			} else {
				this.updateSinglePlayerPaddlePosition();
			}
			
			this.interpolatePositions();
        });

        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    }

    private setupConnectionHandlers(): void {
        this.connection.on('gameState', (newState: GameState) => {
            this.previousState = this.state ? { ...this.state } : newState;
            this.state = newState;
            this.lastStateTimestamp = Date.now();

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

        this.connection.on('gameEnd', (winner: string) => {
            console.log(`Game ended. Winner: ${winner}`);
            this.onGameEnd(winner);
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
        const interpolationFactor = Math.min(timeSinceUpdate / (1000 / 60), 1);

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
        const scoreText = document.getElementById('score-display');
        if (scoreText) {
            let player1Name: string;
            let player2Name: string;

            if (this.gameMode === 'quick') {
                player1Name = this.localPlayerNickname;
                player2Name = 'Player 2';
            } else if (this.gameMode === 'ai') {
                player1Name = this.localPlayerNickname;
                player2Name = 'AI';
            } else {
                player1Name = this.state.player1.nickname || this.localPlayerNickname;
                player2Name = this.state.player2.nickname || 'Opponent';
            }
            
            scoreText.textContent = `${player1Name} ${this.state.player1.score} ${this.state.player2.score} ${player2Name}`;
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

    private onGameEnd(winnerId: string): void {
		console.log(`[DEBUG] onGameEnd called with winner: ${winnerId}`);

		const modal = document.getElementById('gameOverModal');
		const returnBtn = document.getElementById('gameOverReturnBtn');
		console.log(`[DEBUG] Modal element: ${modal}`);

		const winnerMessage = document.getElementById('winnerMessage');

		if (modal && winnerMessage) {
			let winnerName: string;

			if (winnerId === 'AI') {
				winnerName = 'AI';
			} else if (this.state && winnerId === this.localPlayerId) {
				winnerName = this.localPlayerNickname;
			} else if (this.state) {
				const opponentId = this.localPlayerId === this.state.player1Id ? this.state.player2Id : this.state.player1Id;
				// Using API to get opponent's nickname future improvement
				winnerName = `Player ${winnerId}`;
			} else {
				winnerName = `Player ${winnerId}`;
			}

			winnerMessage.textContent = `Game Over! ${winnerName} wins!`

			modal.classList.remove('hidden');

			const returnToMenuHandler = () => {
				returnToMainMenu();
				console.log('Returned to main menu from game over modal');
			};

			returnBtn?.addEventListener('click', returnToMenuHandler, { once: true });
		}
    }

    public dispose(): void {
        if (this.disposed) return;

        this.disposed = true;

        if (this.engine) {
            this.engine.stopRenderLoop();
        }
        if (this.connection) {
            this.connection.disconnect();
        }

        if (this.scene) {
            this.scene.dispose();
        }
        if (this.engine) {
            this.engine.dispose();
        }

       console.log('PongGame3D disposed');
    }
}

function lerp(start: number, end: number, factor: number): number {
    return start + (end - start) * factor;
}