import { Scene, Engine, PointerEventTypes, Mesh, ParticleSystem, KeyboardEventTypes } from '@babylonjs/core';
import { GameState } from '@trans/common-types';
import { Connection } from './connection';
import { SceneObjects, createSceneAndGameObjects } from './scene-builder';

export class PongGame3D {
    private engine: Engine;
    private scene: Scene;
    private connection: Connection;

    private player1Paddle: Mesh;
    private player2Paddle: Mesh;
    private ball: Mesh;
    private particleSystem: ParticleSystem;

    private state: GameState | null = null;
    private previousState: GameState | null = null;
    private lastStateTimestamp: number = 0;
    private localPlayerId: string;

    private inputState = {
        up: false,
        down: false
    };
    private paddleSpeed = 0.5;

    constructor(canvas: HTMLCanvasElement, gameId: string, playerId: string = 'player1') {
        this.engine = new Engine(canvas, true);
        this.scene = new Scene(this.engine);
        this.localPlayerId = playerId;

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
            this.updateLocalPaddlePosition();
            this.interpolatePositions();
            this.scene.render();
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

    private interpolatePositions(): void {
        if (!this.state || !this.previousState) return;

        const renderLoopTime = 1000 / 60;
        const timeSinceLastState = Date.now() - this.lastStateTimestamp;
        let interpolationFactor = timeSinceLastState / renderLoopTime;
        if (interpolationFactor > 1) interpolationFactor = 1;

        const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

        this.ball.position.x = lerp(this.previousState.ball.position.x, this.state.ball.position.x, interpolationFactor);
        this.ball.position.z = lerp(this.previousState.ball.position.z, this.state.ball.position.z, interpolationFactor);

        // interpolate paddle positions (opponent's paddle)
        if (this.localPlayerId === this.state.player1Id) {
             this.player2Paddle.position.z = lerp(this.previousState.player2.paddleZ, this.state.player2.paddleZ, interpolationFactor);
        } else {
             this.player1Paddle.position.z = lerp(this.previousState.player1.paddleZ, this.state.player1.paddleZ, interpolationFactor);
        }


        this.updateScoreDisplay();
    }

    private setupControls(): void {
        this.scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case KeyboardEventTypes.KEYDOWN:
                    if (kbInfo.event.key === 'w' || kbInfo.event.key === 'W') {
                        this.inputState.up = true;
                    } else if (kbInfo.event.key === 's' || kbInfo.event.key === 'S') {
                        this.inputState.down = true;
                    }
                    break;
                case KeyboardEventTypes.KEYUP:
                    if (kbInfo.event.key === 'w' || kbInfo.event.key === 'W') {
                        this.inputState.up = false;
                    } else if (kbInfo.event.key === 's' || kbInfo.event.key === 'S') {
                        this.inputState.down = false;
                    }
                    break;
            }
        });
    }

    private updateLocalPaddlePosition(): void {
        if (!this.state) return;

        const localPlayer = this.localPlayerId === this.state.player1Id ? this.player1Paddle : this.player2Paddle;
        let moved = false;

        if (this.inputState.down) {
            localPlayer.position.z -= this.paddleSpeed;
            moved = true;
        }
        if (this.inputState.up) {
            localPlayer.position.z += this.paddleSpeed;
            moved = true;
        }

        const limit = 12;
        if (localPlayer.position.z > limit) localPlayer.position.z = limit;
        if (localPlayer.position.z < -limit) localPlayer.position.z = -limit;

        if (moved) {
            this.sendPaddleUpdate(localPlayer.position.z);
        }
    }


    private sendPaddleUpdate(paddleZ: number): void {
        this.connection.sendGameAction('updatePaddle', { paddleZ });
    }

    private updateScoreDisplay(): void {
        if (!this.state) return;
        const scoreText = document.getElementById('score-display');
        if (scoreText) {
            scoreText.textContent = `${this.state.player1.score} - ${this.state.player2.score}`;
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

    private onGameEnd(winner: string): void {
		console.log(`[DEBUG] onGameEnd called with winner: ${winner}`);

		const modal = document.getElementById('gameOverModal');
		console.log(`[DEBUG] Modal element: ${modal}`);

		const winnerMessage = document.getElementById('winnerMessage');

		if (modal && winnerMessage) {
			const winnerName = winner === 'AI' ? 'AI' : winner;
			winnerMessage.textContent = `🏆 Game Over! Congratulations Winner: ${winnerName}`;
			modal.classList.remove('hidden');
		}
    }

    public dispose(): void {
        this.connection.disconnect();
        this.scene.dispose();
        this.engine.dispose();
    }
}
