import * as BABYLON from '@babylonjs/core'
import '@babylonjs/materials'
import '@babylonjs/loaders'

interface GameState {
	player1: { position: BABYLON.Vector3 , score: number}
	player2: { position: BABYLON.Vector3 , score: number}
	ball: { position: BABYLON.Vector3 , velocity: BABYLON.Vector3}
}

export class PongGame3D {
	private engine: BABYLON.Engine
	private scene: BABYLON.Scene
	private canvas: HTMLCanvasElement
	private ws: WebSocket | null = null

	// game objects
	private player1Paddle: BABYLON.Mesh
	private player2Paddle: BABYLON.Mesh
	private ball: BABYLON.Mesh
	private arena: BABYLON.Mesh

	// game state
	private gameState: GameState
	private localPlayer: 'player1' | 'player2'

	constructor(canvas: HTMLCanvasElement, gameId: string) {
		this.canvas = canvas
		this.engine = new BABYLON.Engine(canvas, true)
		this.scene = new BABYLON.Scene(this.engine)

		this.setupScene();
		this.createArena();
		this.createGameObjects();
		this.setupLighting();
		this.setupCamera();
		this.connectWebSocket(gameId);

		// randering loop
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
		const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: arenaSize.width, height: arenaSize.height }, this.scene)

		const groundMat = new BABYLON.StandardMaterial('groundMat', this.scene)
		groundMat.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.15)
		groundMat.specularColor = new BABYLON.Color3(0.05, 0.05, 0.1)
		groundMat.emissiveColor = new BABYLON.Color3(0.05, 0.05, 0.1)
		ground.material = groundMat

		// walls neon style
		this.createNeonBorder(arenaSize)

		// central line
		const centerLine = BABYLON.MeshBuilder.CreateBox('centerLine', { width: 0.1, height: 0.1, depth: arenaSize.depth }, this.scene)
		centerLine.position.y = 0.05

		const centerLineMat = new BABYLON.StandardMaterial('centerLineMat',  this.scene)
		centerLineMat.emissiveColor = new BABYLON.Color3(0.5, 0.5, 1)
		centerLine.material = centerLineMat
	}

	private createNeonBorder(arenaSize: any): void {
		const borderMat = new BABYLON.StandardMaterial('borderMat', this.scene)
		borderMat.emissiveColor = new BABYLON.Color3(0, 0.8, 1)

		// top wall
		const topWall = BABYLON.MeshBuilder.CreateBox('topWall', { width: arenaSize.width, height: 2, depth: 0.2 }, this.scene)
		topWall.position.z = arenaSize.depth / 2 + 0.1
		topWall.position.y =  1
		topWall.material = borderMat

		// bottom wall
		const bottomWall = topWall.clone('bottomWall')
		bottomWall.position.z = -arenaSize.depth / 2

		// size particles effects
		this.createParticleEffects()
	}

	private createGameObjects(): void {
		// Player 1 paddle
		this.player1Paddle = BABYLON.MeshBuilder.CreateBox('player1Paddle', { width: 3, height: 3, depth: 0.5 }, this.scene)
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
	}

	private createBallTrail(): void {
		const trail = new BABYLON.TrailMesh('trail', this.ball, this.scene, 0.5, 30, true)

		const trailMat = new BABYLON.StandardMaterial('trailMat', this.scene)
		trailMat.emissiveColor = new BABYLON.Color3(1, 0.8, 0)
		trailMat.alpha = 0.5
		trail.material = trailMat
	}

	private createParticleEffects(): void {
		// particle effect (gravity)
		const particleSystem = new BABYLON.ParticleSystem('particles', 2000, this.scene)
		particleSystem.particleTexture = new BABYLON.Texture('textures/flare.png', this.scene)

		particleSystem.emitter = this.ball
		particleSystem.minEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5)
		particleSystem.maxEmitBox = new BABYLON.Vector3(0.5, 0, 0.5)

		particleSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1)
		particleSystem.color2 = new BABYLON.Color4(1, 0, 0, 1)
		particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0)

		particleSystem.minSize = 0.1
		particleSystem.maxSize = 0.3

		particleSystem.minLifeTime = 0.3
		particleSystem.maxLifeTime = 1.5

		particleSystem.emitRate = 100

		// activate when get the points
		// particleSystem.start()
	}

	private setupLighting(): void {
		// ambient light
		const ambientLight = new BABYLON.HemisphericLight('ambient', new BABYLON.Vector3(0, 1, 0), this.scene)
		ambientLight.intensity = 0.3
		ambientLight.diffuse = new BABYLON.Color3(0.5, 0.5, 0.7)

		// point Light
		const ballLight = new BABYLON.PointLight('ballLight', this.ball.position, this.scene)
		ballLight.intensity = 2
		ballLight.diffuse = new BABYLON.Color3(1, 1, 0.5)
		ballLight.parent = this.ball

		// spot light
		const spot1 = new BABYLON.SpotLight('spot1', new BABYLON.Vector3(10, 10, 0), new BABYLON.Vector3(1, -1, 0), Math.PI / 3, 2 , this.scene)
		spot1.intensity = 0.5
		spot1.diffuse = new BABYLON.Color3(0, 0.5, 1)

		const spot2 = new BABYLON.SpotLight('spot2', new BABYLON.Vector3(-10, 10, 0), new BABYLON.Vector3(-1, -1, 0), Math.PI / 3, 2 , this.scene)
		spot2.intensity = 0.5
		spot2.diffuse = new BABYLON.Color3(1, 0, 0.5)
	}

	private setupCamera(): void {
		// game view camera
		const camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 15, -20), this.scene)
		camera.setTarget(new BABYLON.Vector3(0, 0, 0))
		camera.attachControl(this.canvas, false)

		BABYLON.Animation.CreateAndStartAnimation('cameraIntro', camera, 'position', 30, 60, camera.position, new BABYLON.Vector3(0, 12, -18), BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
	}

	private connectWebSocket(gameId: string): void {
		this.ws = new WebSocket(`ws://localhost:3000/game/${gameId}`)

		this.ws.onmessage = (event) => {
			const gameUpdate = JSON.parse(event.data)
			if (gameUpdate.type === 'update') {
				this.updateGameState(gameUpdate.state)
			}
		}

		this.scene.actionManager = new BABYLON.ActionManager(this.scene)

		this.scene.onPointerObservable.add((pointerInfo) => {
			if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERMOVE) {
				const pickResult = this.scene.pick(this.scene.pointerX, this.scene.pointerY)
				if (pickResult && pickResult.pickedPoint) {  // trace mouse position
					const paddleZ = pickResult.pickedPoint.z
					this.sendPaddleUpdate(paddleZ)
				}
			}
		})
	}

	private updateGameState(update: any): void {
		if (update.ball ) {
			BABYLON.Animation.CreateAndStartAnimation('ballMove', this.ball, 'position', 60, 2, this.ball.position, new BABYLON.Vector3(update.ball.x / 20, 1, update.ball.y / 20), BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
		}
		if (update.player1) {
			BABYLON.Animation.CreateAndStartAnimation('player1Move', this.player1Paddle, 'position', 60, 2, this.player1Paddle.position.z, update.player1.y / 20, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
		}
		if (update.player2) {
			BABYLON.Animation.CreateAndStartAnimation('player2Move', this.player2Paddle, 'position', 60, 2, this.player2Paddle.position.z, update.player2.y / 20, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
		}

		// update score
		this.updateScoreDisplay(update.player1?.score || 0, update.player2?.score || 0)
	}

	private sendPaddleUpdate(zPosition: number): void {
		if (this.ws && this.ws.readyState === WebSocket.OPEN) {
			this.ws.send(JSON.stringify({ type: 'paddleUpdate', playerId: this.localPlayer, paddleZ: zPosition * 20 }))
		}
	}

	private updateScoreDisplay(player1Score: number, player2Score: number): void {
		const scoreText = document.getElementById('score-display') // score display element in 3D
		if (scoreText) {
			scoreText.textContent = `${player1Score} : ${player2Score}`
		}
	}

	public dispose(): void {
		this.ws?.close()
		this.engine.dispose()
	}
}

export function initializeGame(containerId: string, gameId: string): PongGame3D | null {
	const container = document.getElementById(containerId)
	if (!container) return null

	// create HTML
	container.innerHTML = `
	  <div class="game-container">
		<canvas id="game-canvas"></canvas>
		<div id="score-display" class="score-display">0 - 0</div>
	  </div>
	  <style>
		.game-container {
		  position: relative;
		  width: 100%;
		  height: 100vh;
		  background-color: black;
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
		}
	  </style>
	`

	const canvas = document.getElementById('game-canvas') as HTMLCanvasElement
	return new PongGame3D(canvas, gameId)
  }
