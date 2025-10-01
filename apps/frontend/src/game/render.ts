// render.ts
import {
    Scene,
    Engine,
    PointerEventTypes,
    Mesh,
    ParticleSystem,
    KeyboardEventTypes,
    Animation,
    IAnimationKey,
    EasingFunction,
    ElasticEase,
    Vector3,
    ArcRotateCamera,
    StandardMaterial,
    Color3,
    MeshBuilder,
    DynamicTexture
} from '@babylonjs/core';
import { GameState } from '@trans/common-types';
import { Connection } from './connection';
import { SceneObjects, createSceneAndGameObjects } from './scene-builder';
import { returnToMainMenu } from '../../main.ts';
import {
    PADDLE_START_X,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_DEPTH,
    BALL_RADIUS,
    WALL_Z_POSITION,
    BORDER_THICKNESS,
    PADDLE_COLLISION_X_LEFT,
    PADDLE_COLLISION_X_RIGHT,
    WALL_COLLISION_Z_TOP,
    WALL_COLLISION_Z_BOTTOM,
    SERVER_UPDATE_INTERVAL,
    INTERPOLATION_DELAY
} from "@trans/common-types";

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
    private spawnParticleSystem: ParticleSystem;
    public state: GameState | null = null;
    private previousState: GameState | null = null;
    private lastStateTimestamp: number = 0;
    private localPlayerId: string;
    private previousBallPosition: Vector3 | null = null;
    private player1NameEl: HTMLElement | null;
    private player1ScoreEl: HTMLElement | null;
    private player2NameEl: HTMLElement | null;
    private player2ScoreEl: HTMLElement | null;
    private disposed: boolean = false;
    private lastSentInputStateP1: 'up' | 'down' | 'stop' = 'stop';
    private lastSentInputStateP2: 'up' | 'down' | 'stop' = 'stop';
    private inputStatePlayer1 = { up: false, down: false };
    private inputStatePlayer2 = { up: false, down: false };
    private paddleSpeed = 0.5;
    private gameEndHandled: boolean = false;
    private resizeHandler: () => void;

    constructor(canvas: HTMLCanvasElement, gameId: string, playerId: string = 'player1', gameMode: string = 'PVP', playerNickname: string = 'Player') {
        this.engine = new Engine(canvas, true);
        this.engine.setHardwareScalingLevel(1 / window.devicePixelRatio);
        this.scene = new Scene(this.engine);
        this.localPlayerId = playerId;
        this.gameMode = gameMode;
        this.localPlayerNickname = playerNickname;
        const sceneObjects: SceneObjects = createSceneAndGameObjects(this.scene, canvas);
        this.player1Paddle = sceneObjects.player1Paddle;
        this.player2Paddle = sceneObjects.player2Paddle;
        this.ball = sceneObjects.ball;
        this.particleSystem = sceneObjects.particleSystem;
        this.spawnParticleSystem = sceneObjects.spawnParticleSystem;
        this.player1NameEl = document.getElementById('player1-name');
        this.player1ScoreEl = document.getElementById('player1-score');
        this.player2NameEl = document.getElementById('player2-name');
        this.player2ScoreEl = document.getElementById('player2-score');
        this.setupControls();
        this.connection = new Connection(gameId, this.localPlayerId);
        this.setupConnectionHandlers();
        this.connection.connect().catch(err => console.error('Connection failed:', err));
        setTimeout(() => {
            this.engine.resize();
        }, 100);
        this.engine.runRenderLoop(() => {
            if (this.disposed) return;
            this.scene.render(true, true);
            if (this.gameMode === 'quick') {
                this.updateMultiPlayerPaddlePosition();
            } else {
                this.updateSinglePlayerPaddlePosition();
            }
            this.interpolatePositions();
            this.updateBallSpeedEffects();
            this.detectCollisions();
            this.previousBallPosition = this.ball.position.clone();
        });
        this.resizeHandler = () => this.engine.resize();
        window.addEventListener('resize', this.resizeHandler);
    }

    private detectCollisions(): void {
        if (!this.previousBallPosition) return;
        const ballPos = this.ball.position;
        const prevBallPos = this.previousBallPosition;
        if (prevBallPos.x > PADDLE_COLLISION_X_LEFT && ballPos.x <= PADDLE_COLLISION_X_LEFT) {
            const paddleTopBallCenterLimit = this.player1Paddle.position.z + (PADDLE_DEPTH / 2) + BALL_RADIUS;
            const paddleBottomBallCenterLimit = this.player1Paddle.position.z - (PADDLE_DEPTH / 2) - BALL_RADIUS;
            if (ballPos.z >= paddleBottomBallCenterLimit && ballPos.z <= paddleTopBallCenterLimit) {
                this.createHitAnimation(this.player1Paddle);
                this.createScreenShake(0.3);
            }
        }
        if (prevBallPos.x < PADDLE_COLLISION_X_RIGHT && ballPos.x >= PADDLE_COLLISION_X_RIGHT) {
            const paddleTopBallCenterLimit2 = this.player2Paddle.position.z + (PADDLE_DEPTH / 2) + BALL_RADIUS;
            const paddleBottomBallCenterLimit2 = this.player2Paddle.position.z - (PADDLE_DEPTH / 2) - BALL_RADIUS;
            if (ballPos.z >= paddleBottomBallCenterLimit2 && ballPos.z <= paddleTopBallCenterLimit2) {
                this.createHitAnimation(this.player2Paddle);
                this.createScreenShake(0.3);
            }
        }
        if (prevBallPos.z < WALL_COLLISION_Z_TOP && ballPos.z >= WALL_COLLISION_Z_TOP) {
            this.createScreenShake(0.15);
        }
        if (prevBallPos.z > WALL_COLLISION_Z_BOTTOM && ballPos.z <= WALL_COLLISION_Z_BOTTOM) {
            this.createScreenShake(0.15);
        }
    }

    private createHitAnimation(paddle: Mesh): void {
        const scalingAnimation = new Animation(
            "paddleHit",
            "scaling",
            60,
            Animation.ANIMATIONTYPE_VECTOR3,
            Animation.ANIMATIONLOOPMODE_CONSTANT
        );
        const keys: IAnimationKey[] = [];
        keys.push({ frame: 0, value: new Vector3(1, 1, 1) });
        keys.push({ frame: 5, value: new Vector3(1.3, 1.3, 1.3) });
        keys.push({ frame: 10, value: new Vector3(0.9, 0.9, 0.9) });
        keys.push({ frame: 15, value: new Vector3(1, 1, 1) });
        scalingAnimation.setKeys(keys);
        const easingFunction = new ElasticEase(1.5, 4);
        easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
        scalingAnimation.setEasingFunction(easingFunction);
        paddle.animations.push(scalingAnimation);
        this.scene.beginAnimation(paddle, 0, 15, false);
    }

    private createScreenShake(intensity: number = 0.5): void {
        const camera = this.scene.activeCamera as ArcRotateCamera;
        if (!camera) return;
        const originalAlpha = camera.alpha;
        const originalBeta = camera.beta;
        const originalRadius = camera.radius;
        let shakeTime = 0;
        const shakeObserver = this.scene.onBeforeRenderObservable.add(() => {
            shakeTime += 0.1;
            if (shakeTime > 1) {
                camera.alpha = originalAlpha;
                camera.beta = originalBeta;
                camera.radius = originalRadius;
                this.scene.onBeforeRenderObservable.remove(shakeObserver);
                return;
            }
            camera.alpha = originalAlpha + Math.sin(shakeTime * 50) * intensity * 0.01;
            camera.beta = originalBeta + Math.cos(shakeTime * 50) * intensity * 0.01;
            camera.radius = originalRadius + Math.sin(shakeTime * 30) * intensity;
        });
    }

    private updateBallSpeedEffects(): void {
        if (!this.state || !this.ball) return;
        const velocity = this.state.ball.velocity;
        const speed = Math.sqrt(velocity.x ** 2 + velocity.z ** 2);
        const normalizedSpeed = Math.min(speed / 20, 1);
        const ballMat = this.ball.material as StandardMaterial;
        if (ballMat) {
            ballMat.emissiveColor = new Color3(
                0.8 + normalizedSpeed * 0.2,
                0.7 - normalizedSpeed * 0.3,
                normalizedSpeed * 0.5
            );
            const scale = 1 + normalizedSpeed * 0.2;
            this.ball.scaling = new Vector3(scale, scale, scale);
        }
        if (this.particleSystem) {
            this.particleSystem.emitRate = 1000 + normalizedSpeed * 1500;
            this.particleSystem.minEmitPower = 0.5 + normalizedSpeed * 1.5;
            this.particleSystem.maxEmitPower = 1.5 + normalizedSpeed * 2;
        }
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

    private hideCountDownDisplay(): void {
        const countdownDisplay = document.getElementById('countdown-display');
        if (countdownDisplay) {
            countdownDisplay.style.display = 'none';
        }
    }

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
        if (!this.state || !this.previousState) return;
        if (this.spawnParticleSystem) {
            this.spawnParticleSystem.manualEmitCount = 300;
            this.spawnParticleSystem.start();
            setTimeout(() => {
                this.spawnParticleSystem?.stop();
            }, 100);
        }
        this.createScreenShake(1.5);
        const scoringPaddle = this.state.player1.score > this.previousState.player1.score
            ? this.player1Paddle
            : this.player2Paddle;
        if (scoringPaddle) {
            this.createHitAnimation(scoringPaddle);
            const originalMat = scoringPaddle.material as StandardMaterial;
            const flashMat = originalMat.clone(originalMat.name + "_flash");
            flashMat.emissiveColor = new Color3(1, 1, 1);
            scoringPaddle.material = flashMat;
            setTimeout(() => {
                scoringPaddle.material = originalMat;
                flashMat.dispose();
            }, 200);
        }
        this.createComicTextEffect();
    }

    private createComicTextEffect(): void {
        console.log('[DEBUG] createComicTextEffect called');
        const texts = ["POW!", "BAM!", "BOOM!", "WHAM!", "ZAP!", "SMASH!"];
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        const ballPos = this.ball.position.clone();
        const textPlane = MeshBuilder.CreatePlane("comicText", { size: 9 }, this.scene);
        textPlane.position = new Vector3(ballPos.x, ballPos.y + 1.5, ballPos.z);
        textPlane.billboardMode = Mesh.BILLBOARDMODE_ALL;
        console.log('[DEBUG] Text plane created at position:', textPlane.position);
        const dynamicTexture = new DynamicTexture("comicTexture", 256, this.scene, true);
        dynamicTexture.hasAlpha = true;
        const ctx = dynamicTexture.getContext() as CanvasRenderingContext2D;
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.clearRect(0, 0, 256, 256);
        ctx.font = "bold 80px Anton";
        ctx.fillStyle = "#FFD700";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 19;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText(randomText, 128, 128);
        ctx.fillText(randomText, 128, 128);
        dynamicTexture.update();
        console.log('[DEBUG] Dynamic texture updated with text:', randomText);
        const textMat = new StandardMaterial("comicTextMat", this.scene);
        textMat.diffuseTexture = dynamicTexture;
        textMat.opacityTexture = dynamicTexture;
        textMat.emissiveColor = new Color3(1, 1, 1);
        textMat.disableLighting = true;
        textMat.backFaceCulling = false;
        textMat.useAlphaFromDiffuseTexture = true;
        textPlane.material = textMat;
        console.log('[DEBUG] Material applied, initial alpha:', textMat.alpha);
        const easingFunc = new ElasticEase(2, 3);
        easingFunc.setEasingMode(EasingFunction.EASINGMODE_EASEOUT);
        const scaleAnim = new Animation(
            "comicScale",
            "scaling",
            60,
            Animation.ANIMATIONTYPE_VECTOR3,
            Animation.ANIMATIONLOOPMODE_CONSTANT
        );
        const scaleKeys: IAnimationKey[] = [
            { frame: 0, value: new Vector3(0.5, 0.5, 0.5) },
            { frame: 10, value: new Vector3(1.5, 1.5, 1.5) },
            { frame: 20, value: new Vector3(1.2, 1.2, 1.2) },
            { frame: 30, value: new Vector3(0.1, 0.1, 0.1) }
        ];
        scaleAnim.setKeys(scaleKeys);
        scaleAnim.setEasingFunction(easingFunc);
        const alphaAnim = new Animation(
            "comicAlpha",
            "material.alpha",
            60,
            Animation.ANIMATIONTYPE_FLOAT,
            Animation.ANIMATIONLOOPMODE_CONSTANT
        );
        const alphaKeys: IAnimationKey[] = [
            { frame: 0, value: 0 },
            { frame: 5, value: 1 },
            { frame: 20, value: 1 },
            { frame: 30, value: 0 }
        ];
        alphaAnim.setKeys(alphaKeys);
        alphaAnim.setEasingFunction(easingFunc);
        const rotAnim = new Animation(
            "comicRot",
            "rotation.z",
            60,
            Animation.ANIMATIONTYPE_FLOAT,
            Animation.ANIMATIONLOOPMODE_CONSTANT
        );
        const startRot = (Math.random() - 0.5) * 1.0;
        const rotKeys: IAnimationKey[] = [
            { frame: 0, value: startRot },
            { frame: 30, value: -startRot * 0.5 }
        ];
        rotAnim.setKeys(rotKeys);
        rotAnim.setEasingFunction(easingFunc);
        textPlane.animations = [scaleAnim, alphaAnim, rotAnim];
        console.log('[DEBUG] Animations assigned to textPlane:', textPlane.animations.length);
        const animation = this.scene.beginAnimation(textPlane, 0, 30, false, 1.0, () => {
            console.log('[DEBUG] Comic text animation completed, disposing resources');
            textPlane.dispose();
            dynamicTexture.dispose();
            textMat.dispose();
        });
        let debugFrameCount = 0;
        const debugObserver = this.scene.onBeforeRenderObservable.add(() => {
            if (textPlane.isDisposed() || debugFrameCount >= 30) {
                this.scene.onBeforeRenderObservable.remove(debugObserver);
                return;
            }
            console.log(`[DEBUG] Animation progress: scale=${textPlane.scaling.x.toFixed(2)}, alpha=${textMat.alpha.toFixed(2)}, rotation.z=${textPlane.rotation.z.toFixed(2)}`);
            debugFrameCount++;
        });
        setTimeout(() => {
            if (!textPlane.isDisposed()) {
                console.warn('[DEBUG] Fallback cleanup triggered for comic text');
                textPlane.dispose();
                dynamicTexture.dispose();
                textMat.dispose();
                animation.stop();
            }
        }, 600);
    }

    private onGameEnd(data: { winnerNickname: string, winnerId: string, finalScore: any }): void {
        if (this.gameEndHandled) {
            console.log('[DEBUG] Game end already handled, ignoring duplicate event');
            return;
        }
        
        this.gameEndHandled = true;
        console.log(`[DEBUG] onGameEnd called with winner: ${data.winnerNickname}`);

        this.connection?.disconnect();
        console.log('[DEBUG] Game WebSocket disconnected to prevent duplicate events');

        const modal = document.getElementById('gameOverModal');
        const winnerMessage = document.getElementById('winnerMessage');
        const gameOverTitle = document.getElementById('gameOverTitle');

        if (modal && winnerMessage && gameOverTitle) {
            // Determine if current player won
            const currentPlayerId = this.connection?.playerId?.toString();
            const isWinner = data.winnerId?.toString() === currentPlayerId;
            
            gameOverTitle.textContent = isWinner ? 'VICTORY!' : 'DEFEAT!';
            winnerMessage.textContent = `${data.winnerNickname} wins!`;
            modal.classList.remove('hidden');
        }
    }

    public dispose(): void {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.engine.stopRenderLoop();
        this.connection?.disconnect();
        window.removeEventListener('resize', this.resizeHandler);
        this.scene?.dispose();
        this.engine?.dispose();
        this.ball = null as any;
        this.player1Paddle = null as any;
        this.player2Paddle = null as any;
        this.particleSystem = null as any;
        this.spawnParticleSystem = null as any;
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
