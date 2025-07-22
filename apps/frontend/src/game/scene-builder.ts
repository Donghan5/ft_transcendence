import {
    Scene, Vector3, HemisphericLight, UniversalCamera, Animation, GlowLayer, Color3,
    MeshBuilder, StandardMaterial, PointLight, SpotLight, TrailMesh, ParticleSystem, Color4
} from '@babylonjs/core';

import { GameState } from '@trans/common-types';

declare const BABYLON: any;

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
	scene.fogMode = BABYLON.Scene.FOGMODE_EXP
	scene.fogColor = new BABYLON.Color3(0.02, 0.05, 0.05)
	scene.fogDensity = 0.01

	const glowLayer = new BABYLON.GlowLayer('glow', scene)
		glowLayer.intensity = 0.5
	}

function createArena(scene: Scene): void {
	const arenaSize = { width: 20, height: 12, depth: 30 }

	createImprovedGround(arenaSize, scene)

	createNeonBorder(arenaSize, scene)

	const centerLine = BABYLON.MeshBuilder.CreateBox('centerLine',
		{ width: 0.15, height: 0.02, depth: arenaSize.depth },
		scene
	)
	centerLine.position.y = 0.01

	const centerLineMat = new BABYLON.StandardMaterial('centerLineMat', scene)
	centerLineMat.emissiveColor = new BABYLON.Color3(0.8, 0.8, 1)
	centerLineMat.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.5)
	centerLine.material = centerLineMat
}

function createImprovedGround(arenaSize: { width: number, height: number, depth: number }, scene: Scene): void {
	const ground = BABYLON.MeshBuilder.CreateGround('ground',
		{ width: arenaSize.width, height: arenaSize.depth, subdivisions: 20 },
		scene
	)

	const groundMat = new BABYLON.StandardMaterial('groundMat', scene)
	groundMat.diffuseColor = new BABYLON.Color3(0.05, 0.05, 0.1)
	groundMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.2)
	groundMat.emissiveColor = new BABYLON.Color3(0.02, 0.02, 0.05)
	ground.material = groundMat

	createGridLines(arenaSize, scene)
}

function createGridLines(arenaSize: { width: number, height: number, depth: number }, scene: Scene): void {
	const gridMat = new BABYLON.StandardMaterial('gridMat', scene)
	gridMat.emissiveColor = new BABYLON.Color3(0, 0.3, 0.5)
	gridMat.alpha = 0.6

	for (let i = -4; i <= 4; i++) {
		if (i === 0) continue
		const line = BABYLON.MeshBuilder.CreateBox(`gridV${i}`,
			{ width: 0.05, height: 0.01, depth: arenaSize.depth },
			scene
		)
		line.position.x = i * 2.5
		line.position.y = 0.005
		line.material = gridMat
	}

	for (let i = -7; i <= 7; i++) {
		const line = BABYLON.MeshBuilder.CreateBox(`gridH${i}`,
			{ width: arenaSize.width, height: 0.01, depth: 0.05 },
			scene
		)
		line.position.z = i * 2
		line.position.y = 0.005
		line.material = gridMat
	}
}

function createNeonBorder(arenaSize: { width: number, height: number, depth: number }, scene: Scene): void {
	const borderMat = new BABYLON.StandardMaterial('borderMat', scene)
	borderMat.emissiveColor = new BABYLON.Color3(0, 0.8, 1)
	borderMat.diffuseColor = new BABYLON.Color3(0, 0.4, 0.6)

	const wallHeight = 0.8
	const wallThickness = 0.2

	const topWall = BABYLON.MeshBuilder.CreateBox('topWall',
		{ width: arenaSize.width, height: wallHeight, depth: wallThickness },
		scene
	)
	topWall.position.z = arenaSize.depth / 2 + wallThickness/2
	topWall.position.y = wallHeight/2
	topWall.material = borderMat

	const bottomWall = BABYLON.MeshBuilder.CreateBox('bottomWall',
		{ width: arenaSize.width, height: wallHeight, depth: wallThickness },
		scene
	)
	bottomWall.position.z = -arenaSize.depth / 2 - wallThickness/2
	bottomWall.position.y = wallHeight/2
	bottomWall.material = borderMat

	const leftWall = BABYLON.MeshBuilder.CreateBox('leftWall',
		{ width: wallThickness + 1, height: wallHeight, depth: arenaSize.depth },
		scene
	)
	leftWall.position.x = -arenaSize.width / 2 - wallThickness/2
	leftWall.position.y = wallHeight/2
	leftWall.material = borderMat

	const rightWall = BABYLON.MeshBuilder.CreateBox('rightWall',
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
		const connector = BABYLON.MeshBuilder.CreateBox(`corner${index}`,
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
    player1Paddle.position = new Vector3(-8, 1.5, 0);
    const p1Mat = new StandardMaterial('p1Mat', scene);
    p1Mat.emissiveColor = new Color3(0, 0.5, 1);
    player1Paddle.material = p1Mat;

    const player2Paddle = player1Paddle.clone('player2Paddle');
    player2Paddle.position = new Vector3(8, 1.5, 0);
    const p2Mat = new StandardMaterial('p2Mat', scene);
    p2Mat.emissiveColor = new Color3(1, 0, 0.5);
    player2Paddle.material = p2Mat;

    const ball = MeshBuilder.CreateSphere('ball', { diameter: 1 }, scene);
    ball.position = new Vector3(0, 1, 0);
    const ballMat = new StandardMaterial('ballMat', scene);
    ballMat.emissiveColor = new Color3(1, 1, 0.5);
    ball.material = ballMat;

    createBallTrail(scene, ball);
    const particleSystem = createParticleEffects(scene, ball);

    return { player1Paddle, player2Paddle, ball, particleSystem };
}

function createBallTrail(scene: Scene, ball: any): void {
	if (BABYLON.TrailMesh) {
		const trail = new BABYLON.TrailMesh('trail', ball, scene, 0.5, 30, true)

		const trailMat = new BABYLON.StandardMaterial('trailMat', scene)
		trailMat.emissiveColor = new BABYLON.Color3(1, 0.8, 0)
		trailMat.alpha = 0.5
		trail.material = trailMat
	}
}

function createParticleEffects(scene: Scene, ball: any): ParticleSystem {
	const particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene)

	particleSystem.emitter = ball
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

	return particleSystem;
}

function setupLighting(scene: Scene, ball: any): void {
	const ambientLight = new BABYLON.HemisphericLight('ambient',
		new BABYLON.Vector3(0, 1, 0),
		scene
	)
	ambientLight.intensity = 0.3
	ambientLight.diffuse = new BABYLON.Color3(0.5, 0.5, 0.7)

	const ballLight = new BABYLON.PointLight('ballLight',
		ball.position,
		scene
	)
	ballLight.intensity = 2
	ballLight.diffuse = new BABYLON.Color3(1, 1, 0.5)
	ballLight.parent = ball

	const spot1 = new BABYLON.SpotLight('spot1',
		new BABYLON.Vector3(10, 10, 0),
		new BABYLON.Vector3(-1, -1, 0),
		Math.PI / 3,
		2,
		scene
	)
	spot1.intensity = 0.5
	spot1.diffuse = new BABYLON.Color3(0, 0.5, 1)

	const spot2 = new BABYLON.SpotLight('spot2',
		new BABYLON.Vector3(-10, 10, 0),
		new BABYLON.Vector3(1, -1, 0),
		Math.PI / 3,
		2,
		scene
	)
	spot2.intensity = 0.5
	spot2.diffuse = new BABYLON.Color3(1, 0, 0.5)
}

function setupCamera(scene: Scene, canvas: HTMLCanvasElement): void {
	const camera = new BABYLON.UniversalCamera('camera',
		new BABYLON.Vector3(0, 30, 0),
		scene
	)
	camera.setTarget(new BABYLON.Vector3(0, 0, 0))
	camera.attachControl(canvas, false)

	camera.rotation.x = Math.PI / 2
	camera.rotation.y = Math.PI / 2

	BABYLON.Animation.CreateAndStartAnimation(
		'cameraIntro',
		camera,
		'position',
		30,
		90,
		new BABYLON.Vector3(0, 35, -5),
		new BABYLON.Vector3(0, 25, 0),
		BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
	)
}
