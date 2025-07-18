import { Scene, ParticleSystem, Vector3, Engine, SceneLoader, HemisphericLight, UniversalCamera, Animation, GlowLayer, Color3, Color4, MeshBuilder, StandardMaterial, PointerEventTypes, ActionManager, ExecuteCodeAction, TrailMesh, PointLight, SpotLight } from '@babylonjs/core';
import { GameState } from '@trans/common-types';
import { Connection } from './connection'; // connection.ts import
import { SceneObjects, createSceneAndGameObjects } from './scene-builder';
import { initializeGame } from './init';

declare const BABYLON: any;

export class PongGame3D {
    private engine: Engine;
    private scene: Scene;
    private connection: Connection;

    private player1Paddle: any;
    private player2Paddle: any;
    private ball: any;
    private particleSystem: any;

    private state: GameState | null = null;
    private localPlayerId: string;

    constructor(canvas: HTMLCanvasElement, gameId: string, playerId: string = 'player1') {
        this.engine = new BABYLON.Engine(canvas, true)
        this.scene = new BABYLON.Scene(this.engine)
        this.localPlayerId = playerId

        const sceneObjects: SceneObjects = createSceneAndGameObjects(this.scene, canvas);
        this.player1Paddle = sceneObjects.player1Paddle;
        this.player2Paddle = sceneObjects.player2Paddle;
        this.ball = sceneObjects.ball;
        this.particleSystem = sceneObjects.particleSystem;

        this.setupControls();
        this.connection = new Connection(gameId, this.localPlayerId);
        this.setupConnectionHandlers();
        this.connection.connect().catch(err => console.error('Connection failed:', err));

        // rendering loop
        this.engine.runRenderLoop(() => {
            this.scene.render()
        })

        window.addEventListener('resize', () => {
            this.engine.resize()
        })
    }

    private setupConnectionHandlers(): void {
        this.connection.on('gameState', (newstate: GameState) => {
            const oldstate = this.state;
            this.state = newstate;

            this.updateGameObjectsFromState();
            if (oldstate && (oldstate.player1.score !== newstate.player1.score || oldstate.player2.score !== newstate.player2.score)) {
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

    private updateGameObjectsFromState(): void {
        if (!this.state) return;

        const frameRate = 60;
        const animationFrames = 2;

        Animation.CreateAndStartAnimation('p1Move', this.player1Paddle, 'position.z', frameRate, animationFrames, this.player1Paddle.position.z, this.state.player1.paddleZ / 20, Animation.ANIMATIONLOOPMODE_CONSTANT);
        Animation.CreateAndStartAnimation('p2Move', this.player2Paddle, 'position.z', frameRate, animationFrames, this.player2Paddle.position.z, this.state.player2.paddleZ / 20, Animation.ANIMATIONLOOPMODE_CONSTANT);
        Animation.CreateAndStartAnimation('ballMoveX', this.ball, 'position.x', frameRate, animationFrames, this.ball.position.x, this.state.ball.position.x / 20, Animation.ANIMATIONLOOPMODE_CONSTANT);
        Animation.CreateAndStartAnimation('ballMoveZ', this.ball, 'position.z', frameRate, animationFrames, this.ball.position.z, this.state.ball.position.z / 20, Animation.ANIMATIONLOOPMODE_CONSTANT);

        this.updateScoreDisplay();
    }

    private setupControls(): void {
        // Mouse movement
        this.scene.onPointerObservable.add((pointerInfo) => {
            if (pointerInfo.type === PointerEventTypes.POINTERMOVE) {
                const pickResult = this.scene.pick(this.scene.pointerX, this.scene.pointerY);
                if (pickResult?.pickedPoint) {
                    const zPosition = pickResult.pickedPoint.z * 20;
                    this.sendPaddleUpdate(zPosition);
                }
            }
        });
    }

    private sendPaddleUpdate(paddleZ: number): void {
        this.connection.sendGameAction('paddleUpdate', { paddleZ });
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
            this.particleSystem.start()
            setTimeout(() => {
                this.particleSystem?.stop()
            }, 1000)
        }
    }

    private onGameEnd(winner: string): void {
        console.log(`🏆 Game Over! Winner: ${winner}`)
    }

    public dispose(): void {
        this.connection.disconnect()
        this.scene.dispose()
        this.engine.dispose()
    }
}
