import {
    Scene,
	Vector3,
	HemisphericLight,
	ArcRotateCamera,
	GlowLayer,
	Color3,
    MeshBuilder,
	StandardMaterial,
	PointLight,
	SpotLight,
	TrailMesh,
	ParticleSystem,
	Color4
} from '@babylonjs/core';

import { GameState } from '@trans/common-types';

export interface SceneObjects {
    player1Paddle: any;
    player2Paddle: any;
    ball: any;
    particleSystem: ParticleSystem;
}

export function createSceneAndGameObjects(scene: Scene, canvas: HTMLCanvasElement): SceneObjects {
	setupScene(scene);
    createArena(scene);

    const gameObjects = createMovableObjects(scene);

	setupLighting(scene, gameObjects);
    setupCamera(scene, canvas);


    return gameObjects;
}


function setupScene(scene: Scene): void {
	scene.fogMode = Scene.FOGMODE_EXP;
	scene.fogColor = new Color3(0.02, 0.05, 0.05);
	scene.fogDensity = 0.01;

	const glowLayer = new GlowLayer('glow', scene);
	glowLayer.intensity = 0.5;
}

function createArena(scene: Scene): void {
	const arenaSize = { width: 30, height: 12, depth: 30 }

	createImprovedGround(arenaSize, scene)

	createNeonBorder(arenaSize, scene)

	const centerLine = MeshBuilder.CreateBox('centerLine',
		{ width: 0.15, height: 0.02, depth: arenaSize.depth },
		scene
	)
	centerLine.position.y = 0.01

	const centerLineMat = new StandardMaterial('centerLineMat', scene)
	centerLineMat.diffuseColor = new Color3(0.2, 0.2, 0.5)
	centerLine.material = centerLineMat
}

function createImprovedGround(arenaSize: { width: number, height: number, depth: number }, scene: Scene): void {
	const ground = MeshBuilder.CreateGround('ground',
		{ width: arenaSize.width, height: arenaSize.depth, subdivisions: 20 },
		scene
	)

	const groundMat = new StandardMaterial('groundMat', scene)
	groundMat.diffuseColor = new Color3(0, 0, 1)
	ground.material = groundMat

	createGridLines(arenaSize, scene)
}

function createGridLines(arenaSize: { width: number, height: number, depth: number }, scene: Scene): void {
	const gridMat = new StandardMaterial('gridMat', scene);
	gridMat.emissiveColor = new Color3(0, 0.3, 0.5);
	gridMat.alpha = 0.6;

	for (let i = -4; i <= 4; i++) {
		if (i === 0) continue
		const line = MeshBuilder.CreateBox(`gridV${i}`,
			{ width: 0.05, height: 0.01, depth: arenaSize.depth },
			scene
		)
		line.position.x = i * 2.5
		line.position.y = 0.005
		line.material = gridMat
	}

	for (let i = -7; i <= 7; i++) {
		const line = MeshBuilder.CreateBox(`gridH${i}`,
			{ width: arenaSize.width, height: 0.01, depth: 0.05 },
			scene
		)
		line.position.z = i * 2
		line.position.y = 0.005
		line.material = gridMat
	}
}

function createNeonBorder(arenaSize: { width: number, height: number, depth: number }, scene: Scene): void {
	const borderMat = new StandardMaterial('borderMat', scene);
	borderMat.diffuseColor = new Color3(0, 0, 1);

	const wallHeight = 0.8;
	const wallThickness = 0.2;

	const topWall = MeshBuilder.CreateBox('topWall',
		{ width: arenaSize.width, height: wallHeight, depth: wallThickness },
		scene
	)
	topWall.position.z = arenaSize.depth / 2 + wallThickness/2
	topWall.position.y = wallHeight/2
	topWall.material = borderMat

	const bottomWall = MeshBuilder.CreateBox('bottomWall',
		{ width: arenaSize.width, height: wallHeight, depth: wallThickness },
		scene
	)
	bottomWall.position.z = -arenaSize.depth / 2 - wallThickness/2
	bottomWall.position.y = wallHeight/2
	bottomWall.material = borderMat

	const leftWall = MeshBuilder.CreateBox('leftWall',
		{ width: wallThickness + 1, height: wallHeight, depth: arenaSize.depth },
		scene
	)
	leftWall.position.x = -arenaSize.width / 2 - wallThickness/2
	leftWall.position.y = wallHeight/2
	leftWall.material = borderMat

	const rightWall = MeshBuilder.CreateBox('rightWall',
		{ width: wallThickness + 1, height: wallHeight, depth: arenaSize.depth },
		scene
	)
	rightWall.position.x = arenaSize.width / 2 + wallThickness/2
	rightWall.position.y = wallHeight/2
	rightWall.material = borderMat

	createCornerConnectors(arenaSize, borderMat, wallHeight, wallThickness, scene)
}

function createCornerConnectors(arenaSize: { width: number, height: number, depth: number }, borderMat: any, wallHeight: number, wallThickness: number, scene: Scene): void {
	const cornerSize = wallThickness * 1.5

	const corners = [
		{ x: -arenaSize.width/2, z: arenaSize.depth/2 },
		{ x: arenaSize.width/2, z: arenaSize.depth/2 },
		{ x: -arenaSize.width/2, z: -arenaSize.depth/2 },
		{ x: arenaSize.width/2, z: -arenaSize.depth/2 }
	]

	corners.forEach((corner, index) => {
		const connector = MeshBuilder.CreateBox(`corner${index}`,
			{ width: cornerSize, height: wallHeight, depth: cornerSize },
			scene
		)
		connector.position.x = corner.x
		connector.position.z = corner.z
		connector.position.y = wallHeight/2
		connector.material = borderMat
	})
}

function createMovableObjects(scene: Scene): SceneObjects {
    const player1Paddle = MeshBuilder.CreateBox('player1Paddle', { width: 0.5, height: 0.5, depth: 4 }, scene);
    player1Paddle.position = new Vector3(-12, 1.5, 0);
    const p1Mat = new StandardMaterial('p1Mat', scene);
    p1Mat.diffuseColor = new Color3(0, 0, 1);
    player1Paddle.material = p1Mat;

    const player2Paddle = MeshBuilder.CreateBox('player2Paddle', { width: 0.5, height: 0.5, depth: 4 }, scene);
    player2Paddle.position = new Vector3(12, 1.5, 0);
    const p2Mat = new StandardMaterial('p2Mat', scene);
    p2Mat.diffuseColor = new Color3(1, 0, 0);
    player2Paddle.material = p2Mat;

    const ball = MeshBuilder.CreateSphere('ball', { diameter: 1 }, scene);
    ball.position = new Vector3(0, 0, 0);
    const ballMat = new StandardMaterial('ballMat', scene);
    ballMat.diffuseColor = new Color3(1, 1, 1);
    ball.material = ballMat;

    createBallTrail(scene, ball);
    const particleSystem = createParticleEffects(scene, ball);

    return { player1Paddle, player2Paddle, ball, particleSystem };
}

function createBallTrail(scene: Scene, ball: any): void {
	if (TrailMesh) {
		const trail = new TrailMesh('trail', ball, scene, 0.5, 30, true)

		const trailMat = new StandardMaterial('trailMat', scene)
		trailMat.emissiveColor = new Color3(1, 0.8, 0)
		trailMat.alpha = 0.5
		trail.material = trailMat
	}
}

function createParticleEffects(scene: Scene, ball: any): ParticleSystem {
	const particleSystem = new ParticleSystem('particles', 2000, scene)

	particleSystem.emitter = ball
	particleSystem.minEmitBox = new Vector3(-0.5, 0, -0.5)
	particleSystem.maxEmitBox = new Vector3(0.5, 0, 0.5)

	particleSystem.color1 = new Color4(1, 0.5, 0, 1)
	particleSystem.color2 = new Color4(1, 0, 0, 1)
	particleSystem.colorDead = new Color4(0, 0, 0, 0)

	particleSystem.minSize = 0.1
	particleSystem.maxSize = 0.3

	particleSystem.minLifeTime = 0.3
	particleSystem.maxLifeTime = 1.5

	particleSystem.emitRate = 100

	return particleSystem;
}

function setupLighting(scene: Scene, gameObjects: SceneObjects): void {
	const ambientLight = new HemisphericLight('ambient',
		new Vector3(0, 1, 0),
		scene
	)
	ambientLight.intensity = 0.3
	ambientLight.diffuse = new Color3(0.5, 0.5, 0.7)

	const ballLight = new PointLight('ballLight',
		gameObjects.ball.position,
		scene
	)
	ballLight.intensity = 2
	ballLight.diffuse = new Color3(1, 1, 0.5)
	ballLight.parent = gameObjects.ball

	const spot1 = new SpotLight('spot1',
		new Vector3(10, 10, 0),
		new Vector3(-1, -1, 0),
		Math.PI / 3,
		2,
		scene
	)
	spot1.intensity = 0.5
	spot1.diffuse = new Color3(0, 0.5, 1)

	const spot2 = new SpotLight('spot2',
		new Vector3(-10, 10, 0),
		new Vector3(1, -1, 0),
		Math.PI / 3,
		2,
		scene
	)
	spot2.intensity = 0.5
	spot2.diffuse = new Color3(1, 0, 0.5)
}

function setupCamera(scene: Scene, canvas: HTMLCanvasElement): void {
    const camera = new ArcRotateCamera('camera',
        -Math.PI / 2,
        Math.PI / 3,
        60,
        new Vector3(0, 0, 0),
        scene
    );
    camera.attachControl(canvas, true);

	camera.inputs.remove(camera.inputs.attached.keyboard);

    camera.lowerRadiusLimit = 30;
    camera.upperRadiusLimit = 100;
    camera.upperBetaLimit = Math.PI / 2.2;
}
