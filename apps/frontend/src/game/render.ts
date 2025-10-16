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
import { returnToMainMenu } from '../utils/tools';
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


/**
 * Function lists
 * showCountDownDisplay (feature changed)
 * hideCountDownDisplay (feature changed)
 * onGameEnd (feature changed)
 */
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

    public updatePlayerAvatars(player1Avatar?: string, player2Avatar?: string): void {
        if (player1Avatar) {
            const p1AvatarEl = document.getElementById('player1-avatar') as HTMLImageElement;
            if (p1AvatarEl) {
                p1AvatarEl.src = player1Avatar + '?t=' + new Date().getTime();
            }
        }
        
        if (player2Avatar) {
            const p2AvatarEl = document.getElementById('player2-avatar') as HTMLImageElement;
            if (p2AvatarEl) {
                p2AvatarEl.src = player2Avatar + '?t=' + new Date().getTime();
            }
        }
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
            if (newState.status === 'playing') {
                this.hideWaitingForOpponent();
                this.hideCountdownSpotlight();
            }
            
            if (newState.status === 'countdown') {
                this.hideWaitingForOpponent();
                
                // Determine which paddle(s) to highlight
                let highlightMode: 'player1' | 'player2' | 'both';
                if (this.gameMode === 'LOCAL_PVP') {
                    highlightMode = 'both';
                } else {
                    highlightMode = this.localPlayerId === newState.player1Id ? 'player1' : 'player2';
                }
                
                if (newState.countdownValue !== undefined) {
                    this.showCountdownSpotlight(highlightMode, newState.countdownValue!);
                }
            }
            
            this.previousState = this.state ? { ...this.state } : newState;
            this.state = newState;
            this.lastStateTimestamp = Date.now();
            this.updateScoreDisplay();
            
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
        this.connection.on('waitingForOpponent', (playerSide: 'player1' | 'player2') => {
            this.showWaitingForOpponent(playerSide);
        });

        this.connection.on('playerJoined', (joinedPlayerId: string) => {
            this.hideWaitingForOpponent();
        });

        this.connection.on('connectionLost', () => {
            this.hideWaitingForOpponent();
            this.removePaddleHighlight();
        });
    }

    private removePaddleHighlight() {
        if ((this as any)._paddleHighlightCleanup) {
            (this as any)._paddleHighlightCleanup();
            delete (this as any)._paddleHighlightCleanup;
        }
    }


    private showWaitingForOpponent(playerSide: 'player1' | 'player2') {
        this.hideWaitingForOpponent();
        
        const player1UI = document.querySelector('.absolute.top-6.left-6') as HTMLElement;
        const player2UI = document.querySelector('.absolute.top-6.right-6') as HTMLElement;
        if (player1UI) player1UI.style.display = 'none';
        if (player2UI) player2UI.style.display = 'none';
        
        const isSpectator = this.gameMode === 'spectator';
        const isLocalMode = this.gameMode === 'LOCAL_PVP';
        
        const overlay = document.createElement('div');
        overlay.id = 'waiting-opponent-overlay';
        overlay.className = 'fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-[11000] font-anton';
        overlay.style.backgroundImage = 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)';

        if (isLocalMode) {
            overlay.innerHTML = `
                <div class="text-center">
                    <div class="bg-white border-[8px] border-black p-12 px-16 shadow-[12px_12px_0_rgba(0,0,0,0.5)] -rotate-2 mb-12">
                        <h1 class="text-6xl text-black uppercase tracking-wider m-0 [text-shadow:4px_4px_0_#FCD34D]">
                            QUICK GAME!
                        </h1>
                    </div>
                    
                    <div class="flex gap-16 justify-center items-center">
                        <div class="text-center">
                            <div class="bg-player1-pink border-[6px] border-black p-8 shadow-[8px_8px_0_rgba(0,0,0,0.5)] mb-4">
                                <div class="text-5xl text-white font-bold [text-shadow:3px_3px_0_black]">PINK</div>
                            </div>
                            <div class="bg-white border-4 border-black p-4 text-2xl font-bold">
                                W / S
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <div class="bg-player2-blue border-[6px] border-black p-8 shadow-[8px_8px_0_rgba(0,0,0,0.5)] mb-4">
                                <div class="text-5xl text-white font-bold [text-shadow:3px_3px_0_black]">BLUE</div>
                            </div>
                            <div class="bg-white border-4 border-black p-4 text-2xl font-bold">
                                ↑ / ↓
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (isSpectator) {
            overlay.innerHTML = `
                <div class="text-center">
                    <div class="bg-white border-[8px] border-black py-12 px-16 shadow-[12px_12px_0_rgba(0,0,0,0.5)] -rotate-2 mb-8">
                        <h1 class="text-6xl text-black uppercase tracking-wider m-0 [text-shadow:4px_4px_0_#FCD34D]">
                            WAITING...
                        </h1>
                    </div>
                    
                    <div class="bg-comic-yellow border-[6px] border-black py-6 px-8 shadow-[8px_8px_0_rgba(0,0,0,0.5)] rotate-1 text-2xl font-bold uppercase">
                        FOR PLAYERS TO CONNECT
                    </div>
                    
                    <p class="text-base text-white mt-8 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
                        Press ESC to return to tournament
                    </p>
                </div>
            `;
        } else {
            const sideColorClass = playerSide === 'player1' ? 'bg-player1-pink' : 'bg-player2-blue';
            const sideName = playerSide === 'player1' ? 'PINK' : 'BLUE';
            
            overlay.innerHTML = `
                <div class="text-center">
                    <div class="bg-white border-[8px] border-black py-12 px-16 shadow-[12px_12px_0_rgba(0,0,0,0.5)] -rotate-2 mb-8">
                        <h1 class="text-6xl text-black uppercase tracking-wider m-0 [text-shadow:4px_4px_0_#FCD34D]">
                            WAITING...
                        </h1>
                    </div>
                    
                    <div class="${sideColorClass} border-[6px] border-black py-6 px-8 shadow-[8px_8px_0_rgba(0,0,0,0.5)] rotate-1 mb-8">
                        <div class="text-4xl text-white font-bold uppercase [text-shadow:3px_3px_0_black]">
                            YOU ARE ${sideName}
                        </div>
                    </div>
                    
                    <div class="bg-comic-yellow border-[6px] border-black py-6 px-8 shadow-[8px_8px_0_rgba(0,0,0,0.5)] -rotate-1 text-2xl font-bold uppercase">
                        WAITING FOR OPPONENT
                    </div>
                    
                    <p class="text-base text-white mt-8 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
                        Press ESC to forfeit and return
                    </p>
                </div>
            `;
        }
        
        document.body.appendChild(overlay);
    }


    private hideWaitingForOpponent() {
        const overlay = document.getElementById('waiting-opponent-overlay');
        if (overlay) overlay.remove();
        
        const styles = document.getElementById('waiting-screen-styles');
        if (styles) styles.remove();
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
        
        // Update names
        if (this.player1NameEl) {
            this.player1NameEl.textContent = this.state.player1.nickname || 'Player 1';
        }
        if (this.player2NameEl) {
            this.player2NameEl.textContent = this.state.player2.nickname || 'Player 2';
        }
        
        // Update scores
        if (this.player1ScoreEl) {
            this.player1ScoreEl.textContent = this.state.player1.score.toString();
        }
        if (this.player2ScoreEl) {
            this.player2ScoreEl.textContent = this.state.player2.score.toString();
        }
        
        // Update avatars if they're provided in the game state
        if (this.state.player1.avatarUrl) {
            const p1Avatar = document.getElementById('player1-avatar') as HTMLImageElement;
            if (p1Avatar && p1Avatar.src !== this.state.player1.avatarUrl) {
                p1Avatar.src = this.state.player1.avatarUrl + '?t=' + new Date().getTime();
            }
        }
        
        if (this.state.player2.avatarUrl) {
            const p2Avatar = document.getElementById('player2-avatar') as HTMLImageElement;
            if (p2Avatar && p2Avatar.src !== this.state.player2.avatarUrl) {
                p2Avatar.src = this.state.player2.avatarUrl + '?t=' + new Date().getTime();
            }
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

    private showCountdownSpotlight(playerSide: 'player1' | 'player2' | 'both' = 'both', count: number) {
        const isLocalPlay = this.gameMode === 'LOCAL_PVP' || this.gameMode === 'quick';
        const isSpectator = this.gameMode === 'spectator';
        
        console.log(`[COUNTDOWN DEBUG] gameMode="${this.gameMode}", isLocalPlay=${isLocalPlay}, isSpectator=${isSpectator}, playerSide="${playerSide}"`);
        
        if (isLocalPlay && playerSide !== 'both') {
            console.log('[COUNTDOWN] Forcing playerSide to "both" for local play');
            playerSide = 'both';
        }
        
        if (count === 0) {
            console.log('[COUNTDOWN] Count is 0, hiding countdown (no GO!)');
            this.hideCountdownSpotlight();
            return;
        }
        
        const isFirstCall = count === 3 || !document.getElementById('countdown-spotlight-overlay');
        
        if (isFirstCall) {
            this.hideCountdownSpotlight();
            
            const overlay = document.createElement('div');
            overlay.id = 'countdown-spotlight-overlay';
            overlay.className = `fixed top-0 left-0 w-full h-full bg-black/75 pointer-events-none z-[10500] flex items-center ${isSpectator ? 'justify-center' : 'justify-between'} font-['Anton',sans-serif]`;
            
            if (isSpectator) {
                // SPECTATOR MODE - message at BOTTOM (SMALLER SIZE)
                const spectatorMessageBottom = document.createElement('div');
                spectatorMessageBottom.className = 'spectator-countdown-message-bottom fixed bottom-[5%] left-1/2 -translate-x-1/2 z-[10501] text-center opacity-0';
                
                spectatorMessageBottom.innerHTML = `
                    <div class="bg-white border-[6px] border-black p-4 px-8 shadow-[8px_8px_0_rgba(0,0,0,0.8)] -rotate-[2deg] mb-3">
                        <h1 class="text-[1.8rem] text-black uppercase tracking-[3px] m-0 [text-shadow:3px_3px_0_#FCD34D]">
                            SPECTATOR MODE
                        </h1>
                    </div>
                    
                    <div class="bg-purple-700 border-4 border-black py-3 px-6 shadow-[6px_6px_0_rgba(0,0,0,0.8)] rotate-1 text-base font-bold text-white uppercase [text-shadow:2px_2px_0_black] mb-2">
                        MATCH STARTING SOON
                    </div>
                    
                    <p class="text-[0.85rem] text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] m-0">
                        Press ESC to return to tournament
                    </p>
                `;
                
                overlay.appendChild(spectatorMessageBottom);
                document.body.appendChild(overlay);
                
                // Animate in from bottom
                spectatorMessageBottom.animate([
                    { opacity: '0', transform: 'translateX(-50%) translateY(50px)' },
                    { opacity: '1', transform: 'translateX(-50%) translateY(0)' }
                ], {
                    duration: 500,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    fill: 'forwards'
                });
            } else {
                // PLAYER MODE - Function to create a side panel
                const createSidePanel = (side: 'left' | 'right', playerNum: 1 | 2, playerName: string) => {
                    const panel = document.createElement('div');
                    
                    const isLeft = side === 'left';
                    const rotation = isLeft ? '-2deg' : '2deg';
                    const positionClass = isLeft ? 'left-[5%]' : 'right-[5%]';
                    const bgColorClass = playerNum === 1 ? 'bg-player1-pink' : 'bg-player2-blue';
                    const arrowColorClass = playerNum === 1 ? 'border-l-player1-pink' : 'border-r-player2-blue';

                    panel.className = `countdown-panel absolute ${positionClass} top-1/2 -translate-y-1/2 rotate-[${rotation}] w-[280px] z-[10501] opacity-0`;
                    
                    const arrowPositionClass = isLeft ? 'right-[-30px]' : 'left-[-30px]';
                    const arrowBorderClass = isLeft ? 'border-l-[30px]' : 'border-r-[30px]';
                    
                    panel.innerHTML = `
                        <div class="absolute ${arrowPositionClass} top-1/2 -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent ${arrowBorderClass} ${arrowColorClass}"></div>
                        <div class="border-[6px] border-black p-8 px-6 shadow-[8px_8px_0_rgba(0,0,0,0.8)] relative ${bgColorClass}">
                            <div class="text-[2.5rem] text-white font-bold text-center [text-shadow:4px_4px_0_black] mb-4 uppercase">${playerName}</div>
                        </div>
                    `;
                    
                    panel.animate([
                        { transform: `translateY(-50%) translateY(-100px) rotate(${rotation})`, opacity: '0' },
                        { transform: `translateY(-50%) translateY(20px) rotate(${rotation})`, opacity: '1', offset: 0.6 },
                        { transform: `translateY(-50%) translateY(0) rotate(${rotation})`, opacity: '1' }
                    ], {
                        duration: 600,
                        easing: 'ease-out',
                        fill: 'forwards'
                    });
                    
                    return panel;
                };
                
                // Create panels for players
                if (playerSide === 'both' || playerSide === 'player1') {
                    const player1Label = 'YOU';
                    const leftPanel = createSidePanel('left', 1, player1Label);
                    overlay.appendChild(leftPanel);
                }
                
                if (playerSide === 'both' || playerSide === 'player2') {
                    const player2Label = isLocalPlay ? 'PLAYER 2' : 'YOU';
                    const rightPanel = createSidePanel('right', 2, player2Label);
                    overlay.appendChild(rightPanel);
                }
                
                // Add CONTROLS AT BOTTOM
                const controlsBottom = document.createElement('div');
                controlsBottom.className = 'countdown-controls-bottom fixed bottom-[5%] left-1/2 -translate-x-1/2 z-[10501] opacity-100';
                
                if (isLocalPlay) {
                    // LOCAL MODE - Show both players' controls
                    controlsBottom.innerHTML = `
                        <div class="bg-white border-[6px] border-black py-5 px-10 shadow-[8px_8px_0_rgba(0,0,0,0.8)] flex gap-16 items-center">
                            <div class="flex flex-col items-center gap-2.5">
                                <div class="text-xl font-bold text-player1-pink [text-shadow:2px_2px_0_black]">YOU</div>
                                <div class="flex gap-2.5">
                                    <div class="bg-player1-pink border-[3px] border-black py-2 px-4 text-2xl font-bold text-white [text-shadow:2px_2px_0_black]">W</div>
                                    <div class="bg-player1-pink border-[3px] border-black py-2 px-4 text-2xl font-bold text-white [text-shadow:2px_2px_0_black]">S</div>
                                </div>
                            </div>
                            
                            <div class="text-3xl font-bold text-black">VS</div>
                            
                            <div class="flex flex-col items-center gap-2.5">
                                <div class="text-xl font-bold text-player2-blue [text-shadow:2px_2px_0_black]">PLAYER 2</div>
                                <div class="flex gap-2.5">
                                    <div class="bg-player2-blue border-[3px] border-black py-2 px-4 text-2xl font-bold text-white [text-shadow:2px_2px_0_black]">↑</div>
                                    <div class="bg-player2-blue border-[3px] border-black py-2 px-4 text-2xl font-bold text-white [text-shadow:2px_2px_0_black]">↓</div>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    // ONLINE MODE - Always show W/S (never arrows)
                    controlsBottom.innerHTML = `
                        <div class="bg-white border-[6px] border-black py-5 px-10 shadow-[8px_8px_0_rgba(0,0,0,0.8)]">
                            <div class="text-3xl text-black font-bold text-center">CONTROLS: <span class="text-player2-blue [text-shadow:2px_2px_0_white]">W / S</span></div>
                        </div>
                    `;
                }
                
                overlay.appendChild(controlsBottom);
                document.body.appendChild(overlay);
                
                if (isLocalPlay) {
                    const bannerDiv = document.createElement('div');
                    bannerDiv.className = 'countdown-banner fixed top-[8%] left-1/2 -translate-x-1/2 -rotate-[2deg] z-[10502] pointer-events-none';
                    
                    bannerDiv.innerHTML = `
                        <div class="bg-comic-yellow border-[6px] border-black p-4 px-12 shadow-[8px_8px_0_rgba(0,0,0,0.8)] relative">
                            <div class="text-[2.5rem] text-black font-bold uppercase tracking-[3px] [text-shadow:3px_3px_0_white]">LOCAL BATTLE!</div>
                            
                            <div class="absolute -top-1.5 -right-1.5 w-[30px] h-[30px] bg-gradient-to-br from-black from-50% to-comic-yellow to-50% border-l-[6px] border-b-[6px] border-black"></div>
                        </div>
                    `;
                    
                    document.body.appendChild(bannerDiv);
                    
                    bannerDiv.animate([
                        { opacity: '0', transform: 'translateX(-50%) translateY(-50px) rotate(-2deg)' },
                        { opacity: '1', transform: 'translateX(-50%) translateY(0) rotate(-2deg)' }
                    ], {
                        duration: 500,
                        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                        fill: 'forwards'
                    });
                }
                
                setTimeout(() => {
                    const panels = document.querySelectorAll('.countdown-panel');
                    panels.forEach((panel, index) => {
                        setTimeout(() => {
                            (panel as HTMLElement).animate([
                                { opacity: '0', transform: 'translateY(-50%) scale(0.8)' },
                                { opacity: '1', transform: 'translateY(-50%) scale(1)' }
                            ], {
                                duration: 500,
                                easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                                fill: 'forwards'
                            });
                        }, index * 150);
                    });
                }, 100);
            }
        }
        
        // Update countdown number
        const oldCountdown = document.getElementById('countdown-number');
        if (oldCountdown) {
            oldCountdown.remove();
        }
        
        const countdownDiv = document.createElement('div');
        countdownDiv.id = 'countdown-number';
        countdownDiv.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10502]';
        
        const displayNumber = count.toString();
        const finalRotation = '-2deg';
        
        countdownDiv.innerHTML = `
            <div class="bg-white border-[8px] border-black p-12 px-20 shadow-[12px_12px_0_rgba(0,0,0,0.8)] -rotate-[2deg] relative">
                <div class="text-[10rem] text-black font-bold [text-shadow:6px_6px_0_#FCD34D] leading-none">${displayNumber}</div>
            </div>
        `;
        
        document.body.appendChild(countdownDiv);
        
        countdownDiv.animate([
            { transform: `translate(-50%, -50%) rotate(-7deg)`, opacity: '1' },
            { transform: `translate(-50%, -50%) rotate(-4deg)`, opacity: '1', offset: 0.5 },
            { transform: `translate(-50%, -50%) rotate(${finalRotation})`, opacity: '1' }
        ], {
            duration: 300,
            easing: 'ease-out',
            fill: 'forwards'
        });
    }

    private onGameEnd(data: { winnerNickname: string, winnerId: string, finalScore: any }): void {
        if (this.gameEndHandled) {
            console.log('[DEBUG] Game end already handled, ignoring duplicate event');
            return;
        }
        
        this.hideWaitingForOpponent();
        this.hideCountdownSpotlight();
        
        this.gameEndHandled = true;
        this.connection?.disconnect();

        const modal = document.getElementById('gameOverModal');
        const modalContent = document.getElementById('gameOverModalContent');
        const winnerMessage = document.getElementById('winnerMessage');
        const gameOverTitle = document.getElementById('gameOverTitle');

        if (modal && modalContent && winnerMessage && gameOverTitle) {
            const isWinner = data.winnerId?.toString() === this.connection?.playerId?.toString();
            
            // Reset state
            modalContent.classList.remove('bg-yellow-300', 'bg-red-600', 'text-comic-red', 'text-comic-yellow');
            
            if (isWinner) {
                gameOverTitle.textContent = 'VICTORY!';
                modalContent.classList.add('bg-yellow-300');
                gameOverTitle.className = 'text-6xl text-red-600 text-outline-lg-black font-black mb-4';
            } else {
                gameOverTitle.textContent = 'DEFEAT!';
                modalContent.classList.add('bg-red-600');
                gameOverTitle.className = 'text-6xl text-yellow-300 text-outline-lg-black font-black mb-4';
            }
            
            winnerMessage.textContent = `${data.winnerNickname} WINS!`;
            winnerMessage.className = 'text-3xl uppercase mb-8 font-black text-black';
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            modalContent.animate([
                { transform: 'scale(0.8) rotate(-5deg)', opacity: '0' },
                { transform: 'scale(1.05) rotate(2deg)', opacity: '1' },
                { transform: 'scale(1) rotate(0deg)', opacity: '1' }
            ], {
                duration: 400,
                easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            });
        }
    }

    // Also update the highlightPlayerPaddle method for cleaner effect
    // Where is it called?
    private highlightPlayerPaddle(playerSide: 'player1' | 'player2') {
        if (this.gameMode === 'spectator') return;
        
        const color = playerSide === 'player1' ? '#3B82F6' : '#EF4444';
        const paddleMesh = playerSide === 'player1' ? this.player1Paddle : this.player2Paddle;
        
        if (!paddleMesh) return;

        const glowMaterial = new StandardMaterial(`${playerSide}-glow`, this.scene);
        glowMaterial.diffuseColor = Color3.FromHexString(color);
        glowMaterial.emissiveColor = Color3.FromHexString(color).scale(0.3);
        
        const originalMaterial = paddleMesh.material;
        paddleMesh.material = glowMaterial;
        
        let pulseValue = 0;
        const pulseInterval = setInterval(() => {
            pulseValue += 0.1;
            const intensity = 0.3 + Math.sin(pulseValue) * 0.2;
            glowMaterial.emissiveColor = Color3.FromHexString(color).scale(intensity);
        }, 50);
        
        (this as any)._paddleHighlightCleanup = () => {
            clearInterval(pulseInterval);
            if (paddleMesh && originalMaterial) {
                paddleMesh.material = originalMaterial;
            }
        };
        
        setTimeout(() => {
            if ((this as any)._paddleHighlightCleanup) {
                (this as any)._paddleHighlightCleanup();
                delete (this as any)._paddleHighlightCleanup;
            }
        }, 3000);
    }

    private hideCountdownSpotlight() {
        const overlay = document.getElementById('countdown-spotlight-overlay');
        
        // // If overlay has "keep alive" flag, don't hide it yet (GO! is showing)
        // if (overlay && overlay.getAttribute('data-keep-alive') === 'true') {
        //     console.log('[COUNTDOWN] Keep alive flag set, not hiding yet');
        //     return;
        // }
        
        if (overlay) overlay.remove();
        
        const countdown = document.getElementById('countdown-number');
        if (countdown) countdown.remove();
        
        // Remove all countdown-related elements
        document.querySelectorAll('.countdown-panel, .countdown-banner, .countdown-controls-bottom').forEach(el => el.remove());
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
