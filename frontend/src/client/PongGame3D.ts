import * as BABYLON from 'babylonjs'
import 'babylonjs/materials'
import 'babylonjs/loaders'

interface GameState {
	player1: { position: BABYLON.Vector3, score: number }
	player2: { position: BABYLON.Vector3, score: number }
	ball: { position: BABYLON.Vector3, velocity: BABYLON.Vector3 }
}

interface GameUpdate {
	type: string
	state?: {
		ball?: { x: number, y: number, z: number }
		player1?: { y: number, score: number }
		player2?: { y: number, score: number }
	}
	playerId?: string
}

export class PongGame3D {
	private engine: BABYLON.Engine
	private scene: BABYLON.Scene
	private canvas: HTMLCanvasElement
	private ws: WebSocket | null = null

	// game objects
	private player1Paddle!: BABYLON.Mesh
	private player2Paddle!: BABYLON.Mesh
	private ball!: BABYLON.Mesh
	private arena!: BABYLON.Mesh

	// game state
	private gameState: GameState = {
		player1: { position: new BABYLON.Vector3(-8, 1.5, 0), score: 0 },
		player2: { position: new BABYLON.Vector3(8, 1.5, 0), score: 0 },
		ball: { position: new BABYLON.Vector3(0, 1, 0), velocity: new BABYLON.Vector3(0, 0, 0) }
	}
	private localPlayer: 'player1' | 'player2' = 'player1'
	private particleSystem: BABYLON.ParticleSystem | null = null

	constructor(canvas: HTMLCanvasElement, gameId: string, playerId: string = 'player1') {
		this.canvas = canvas
		this.engine = new BABYLON.Engine(canvas, true)
		this.scene = new BABYLON.Scene(this.engine)
		this.localPlayer = playerId as 'player1' | 'player2'

		this.setupScene()
		this.createArena()
		this.createGameObjects()
		this.setupLighting()
		this.setupCamera()
		this.setupControls()
		this.connectWebSocket(gameId)

		// rendering loop
		this.engine.runRenderLoop(() => {
			this.scene.render()
		})

		window.addEventListener('resize', () => {
			this.engine.resize()
		})
	}

	private setupScene(): void {
		this.scene.fogMode = BABYLON.Scene.FOGMODE_EXP
		this.scene.fogColor = new BABYLON.Color3(0.02, 0.05, 0.05)
		this.scene.fogDensity = 0.01

		const glowLayer = new BABYLON.GlowLayer('glow', this.scene)
		glowLayer.intensity = 0.5
	}

	private createArena(): void {
		// arena neon style
		const arenaSize = { width: 20, height: 12, depth: 30 }

		// ground
		const ground = BABYLON.MeshBuilder.CreateGround('ground', 
			{ width: arenaSize.width, height: arenaSize.depth }, // height는 depth로
			this.scene
		)

		const groundMat = new BABYLON.StandardMaterial('groundMat', this.scene)
		groundMat.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.15)
		groundMat.specularColor = new BABYLON.Color3(0.05, 0.05, 0.1)
		groundMat.emissiveColor = new BABYLON.Color3(0.05, 0.05, 0.1)
		ground.material = groundMat

		// walls neon style
		this.createNeonBorder(arenaSize)

		// central line
		const centerLine = BABYLON.MeshBuilder.CreateBox('centerLine', 
			{ width: 0.1, height: 0.1, depth: arenaSize.depth }, 
			this.scene
		)
		centerLine.position.y = 0.05

		const centerLineMat = new BABYLON.StandardMaterial('centerLineMat', this.scene)
		centerLineMat.emissiveColor = new BABYLON.Color3(0.5, 0.5, 1)
		centerLine.material = centerLineMat
	}

	private createNeonBorder(arenaSize: { width: number, height: number, depth: number }): void {
		const borderMat = new BABYLON.StandardMaterial('borderMat', this.scene)
		borderMat.emissiveColor = new BABYLON.Color3(0, 0.8, 1)

		// top wall
		const topWall = BABYLON.MeshBuilder.CreateBox('topWall', 
			{ width: arenaSize.width, height: 2, depth: 0.2 }, 
			this.scene
		)
		topWall.position.z = arenaSize.depth / 2 + 0.1
		topWall.position.y = 1
		topWall.material = borderMat

		// bottom wall
		const bottomWall = topWall.clone('bottomWall')
		bottomWall.position.z = -arenaSize.depth / 2 - 0.1 // 수정

		// side walls
		const leftWall = BABYLON.MeshBuilder.CreateBox('leftWall',
			{ width: 0.2, height: 2, depth: arenaSize.depth },
			this.scene
		)
		leftWall.position.x = -arenaSize.width / 2 - 0.1
		leftWall.position.y = 1
		leftWall.material = borderMat

		const rightWall = leftWall.clone('rightWall')
		rightWall.position.x = arenaSize.width / 2 + 0.1
	}

	private createGameObjects(): void {
		// Player 1 paddle
		this.player1Paddle = BABYLON.MeshBuilder.CreateBox('player1Paddle', 
			{ width: 3, height: 3, depth: 0.5 }, 
			this.scene
		)
		this.player1Paddle.position = new BABYLON.Vector3(-8, 1.5, 0)

		const p1Mat = new BABYLON.StandardMaterial('p1Mat', this.scene)
		p1Mat.diffuseColor = new BABYLON.Color3(0.1, 0.3, 0.8)
		p1Mat.emissiveColor = new BABYLON.Color3(0, 0.5, 1)
		p1Mat.specularPower = 64
		this.player1Paddle.material = p1Mat

		// Player 2 paddle
		this.player2Paddle = this.player1Paddle.clone('player2Paddle')
		this.player2Paddle.position = new BABYLON.Vector3(8, 1.5, 0)

		const p2Mat = new BABYLON.StandardMaterial('p2Mat', this.scene)
		p2Mat.diffuseColor = new BABYLON.Color3(0.8, 0.1, 0.3)
		p2Mat.emissiveColor = new BABYLON.Color3(1, 0, 0.5)
		p2Mat.specularPower = 64
		this.player2Paddle.material = p2Mat

		// ball
		this.ball = BABYLON.MeshBuilder.CreateSphere('ball', { diameter: 1 }, this.scene)
		this.ball.position = new BABYLON.Vector3(0, 1, 0)

		const ballMat = new BABYLON.StandardMaterial('ballMat', this.scene)
		ballMat.diffuseColor = new BABYLON.Color3(1, 1, 1)
		ballMat.emissiveColor = new BABYLON.Color3(1, 1, 0.5)
		ballMat.specularPower = 128
		this.ball.material = ballMat

		this.createBallTrail()
		this.createParticleEffects()
	}

	private createBallTrail(): void {
		// TrailMesh는 지원 안될 수 있어서 체크
		if (BABYLON.TrailMesh) {
			const trail = new BABYLON.TrailMesh('trail', this.ball, this.scene, 0.5, 30, true)

			const trailMat = new BABYLON.StandardMaterial('trailMat', this.scene)
			trailMat.emissiveColor = new BABYLON.Color3(1, 0.8, 0)
			trailMat.alpha = 0.5
			trail.material = trailMat
		}
	}

	private createParticleEffects(): void {
		// particle effect
		this.particleSystem = new BABYLON.ParticleSystem('particles', 2000, this.scene)
		
		// 텍스처 없이 기본 파티클 사용
		this.particleSystem.emitter = this.ball
		this.particleSystem.minEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5)
		this.particleSystem.maxEmitBox = new BABYLON.Vector3(0.5, 0, 0.5)

		this.particleSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1)
		this.particleSystem.color2 = new BABYLON.Color4(1, 0, 0, 1)
		this.particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0)

		this.particleSystem.minSize = 0.1
		this.particleSystem.maxSize = 0.3

		this.particleSystem.minLifeTime = 0.3
		this.particleSystem.maxLifeTime = 1.5

		this.particleSystem.emitRate = 100

		// 처음엔 꺼둠
		// this.particleSystem.start()
	}

	private setupLighting(): void {
		// ambient light
		const ambientLight = new BABYLON.HemisphericLight('ambient', 
			new BABYLON.Vector3(0, 1, 0), 
			this.scene
		)
		ambientLight.intensity = 0.3
		ambientLight.diffuse = new BABYLON.Color3(0.5, 0.5, 0.7)

		// point Light
		const ballLight = new BABYLON.PointLight('ballLight', 
			this.ball.position, 
			this.scene
		)
		ballLight.intensity = 2
		ballLight.diffuse = new BABYLON.Color3(1, 1, 0.5)
		ballLight.parent = this.ball

		// spot light
		const spot1 = new BABYLON.SpotLight('spot1', 
			new BABYLON.Vector3(10, 10, 0), 
			new BABYLON.Vector3(-1, -1, 0), 
			Math.PI / 3, 
			2, 
			this.scene
		)
		spot1.intensity = 0.5
		spot1.diffuse = new BABYLON.Color3(0, 0.5, 1)

		const spot2 = new BABYLON.SpotLight('spot2', 
			new BABYLON.Vector3(-10, 10, 0), 
			new BABYLON.Vector3(1, -1, 0), 
			Math.PI / 3, 
			2, 
			this.scene
		)
		spot2.intensity = 0.5
		spot2.diffuse = new BABYLON.Color3(1, 0, 0.5)
	}

	private setupCamera(): void {
		// game view camera
		const camera = new BABYLON.UniversalCamera('camera', 
			new BABYLON.Vector3(0, 15, -20), 
			this.scene
		)
		camera.setTarget(new BABYLON.Vector3(0, 0, 0))
		camera.attachControl(this.canvas, false)

		// 카메라 인트로 애니메이션
		BABYLON.Animation.CreateAndStartAnimation(
			'cameraIntro', 
			camera, 
			'position', 
			30, 
			60, 
			camera.position, 
			new BABYLON.Vector3(0, 12, -18), 
			BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
		)
	}

	private setupControls(): void {
		this.scene.onPointerObservable.add((pointerInfo) => {
			if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERMOVE) {
				const pickResult = this.scene.pick(
					this.scene.pointerX, 
					this.scene.pointerY
				)
				if (pickResult && pickResult.pickedPoint) {
					const paddleZ = pickResult.pickedPoint.z
					this.sendPaddleUpdate(paddleZ)
				}
			}
		})

		this.scene.actionManager = new BABYLON.ActionManager(this.scene)
		
		this.scene.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				BABYLON.ActionManager.OnKeyDownTrigger,
				(evt) => {
					if (evt.sourceEvent.key === 'w' || evt.sourceEvent.key === 'W') {
						this.movePaddle(0.5)
					}
				}
			)
		)

		this.scene.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				BABYLON.ActionManager.OnKeyDownTrigger,
				(evt) => {
					if (evt.sourceEvent.key === 's' || evt.sourceEvent.key === 'S') {
						this.movePaddle(-0.5)
					}
				}
			)
		)
	}

	private movePaddle(delta: number): void {
		const paddle = this.localPlayer === 'player1' ? this.player1Paddle : this.player2Paddle
		const newZ = paddle.position.z + delta
		
		if (newZ >= -13 && newZ <= 13) {
			this.sendPaddleUpdate(newZ)
		}
	}

	private connectWebSocket(gameId: string): void {
		const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
		const host = window.location.host || 'localhost:3000'
		this.ws = new WebSocket(`${protocol}//${host}/game/${gameId}`)

		this.ws.onopen = () => {
			console.log('🎮 WebSocket connected!')
			this.ws?.send(JSON.stringify({ 
				type: 'join', 
				playerId: this.localPlayer 
			}))
		}

		this.ws.onmessage = (event) => {
			try {
				const gameUpdate: GameUpdate = JSON.parse(event.data)
				if (gameUpdate.type === 'update' && gameUpdate.state) {
					this.updateGameState(gameUpdate.state)
				} else if (gameUpdate.type === 'score') {
					this.onScoreUpdate()
				} else if (gameUpdate.type === 'gameEnd') {
					this.onGameEnd(gameUpdate.playerId || '')
				}
			} catch (error) {
				console.error('❌ Failed to parse WebSocket message:', error)
			}
		}

		this.ws.onclose = () => {
			console.log('🔌 WebSocket disconnected')
		}

		this.ws.onerror = (error) => {
			console.error('❌ WebSocket error:', error)
		}
	}

	private updateGameState(update: any): void {
		if (update.ball) {
			const targetPos = new BABYLON.Vector3(
				update.ball.x / 20, 
				1, 
				update.ball.y / 20
			)
			
			BABYLON.Animation.CreateAndStartAnimation(
				'ballMove', 
				this.ball, 
				'position', 
				60, 
				2, 
				this.ball.position, 
				targetPos, 
				BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
			)
		}

		if (update.player1) {
			const targetPos = new BABYLON.Vector3(
				this.player1Paddle.position.x,
				this.player1Paddle.position.y,
				update.player1.y / 20
			)
			
			BABYLON.Animation.CreateAndStartAnimation(
				'player1Move', 
				this.player1Paddle, 
				'position', 
				60, 
				2, 
				this.player1Paddle.position, 
				targetPos, 
				BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
			)
		}

		if (update.player2) {
			const targetPos = new BABYLON.Vector3(
				this.player2Paddle.position.x,
				this.player2Paddle.position.y,
				update.player2.y / 20
			)
			
			BABYLON.Animation.CreateAndStartAnimation(
				'player2Move', 
				this.player2Paddle, 
				'position', 
				60, 
				2, 
				this.player2Paddle.position, 
				targetPos, 
				BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
			)
		}

		if (update.player1?.score !== undefined || update.player2?.score !== undefined) {
			this.updateScoreDisplay(
				update.player1?.score || this.gameState.player1.score, 
				update.player2?.score || this.gameState.player2.score
			)
		}
	}

	private sendPaddleUpdate(zPosition: number): void {
		if (this.ws && this.ws.readyState === WebSocket.OPEN) {
			this.ws.send(JSON.stringify({ 
				type: 'paddleUpdate', 
				playerId: this.localPlayer, 
				paddleZ: zPosition * 20 
			}))
		}
	}

	private updateScoreDisplay(player1Score: number, player2Score: number): void {
		this.gameState.player1.score = player1Score
		this.gameState.player2.score = player2Score
		
		const scoreText = document.getElementById('score-display')
		if (scoreText) {
			scoreText.textContent = `${player1Score} - ${player2Score}`
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
		this.ws?.close()
		this.scene.dispose()
		this.engine.dispose()
	}
}

export function initializeGame(
	containerId: string, 
	gameId: string,
	playerId: string = 'player1'
): PongGame3D | null {
	const container = document.getElementById(containerId)
	if (!container) return null

	container.innerHTML = `
		<div class="game-container">
			<canvas id="game-canvas"></canvas>
			<div id="score-display" class="score-display">0 - 0</div>
			<div class="controls">
				<p>W/S 키 또는 마우스로 패들 조작</p>
			</div>
		</div>
		<style>
			.game-container {
				position: relative;
				width: 100%;
				height: 100vh;
				background-color: black;
				overflow: hidden;
			}
			#game-canvas {
				width: 100%;
				height: 100%;
			}
			.score-display {
				position: absolute;
				top: 20px;
				left: 50%;
				transform: translateX(-50%);
				font-size: 3rem;
				font-weight: bold;
				color: white;
				text-shadow: 0 0 20px cyan, 0 0 40px cyan;
				font-family: 'Orbitron', monospace;
			}
			.controls {
				position: absolute;
				bottom: 20px;
				left: 50%;
				transform: translateX(-50%);
				color: white;
				text-align: center;
				font-family: 'Orbitron', monospace;
				text-shadow: 0 0 10px cyan;
			}
		</style>
	`

	const canvas = document.getElementById('game-canvas') as HTMLCanvasElement
	return new PongGame3D(canvas, gameId, playerId)
}