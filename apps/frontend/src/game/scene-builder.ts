import {
    Scene,
    Vector3,
    Color3,
	Color4,
    Mesh,
    MeshBuilder,
    StandardMaterial,
    ParticleSystem,
    Texture,
    ArcRotateCamera,
    HemisphericLight,
    CubeTexture,
    TrailMesh
} from '@babylonjs/core';
import '@babylonjs/core/Rendering/outlineRenderer';

export interface SceneObjects {
    player1Paddle: Mesh;
    player2Paddle: Mesh;
    ball: Mesh;
    particleSystem: ParticleSystem; // This is the continuous smoke trail
    spawnParticleSystem: ParticleSystem; // FIX: This is the one-shot spawn effect
}

export function createSceneAndGameObjects(scene: Scene, canvas: HTMLCanvasElement): SceneObjects {
    const engine = scene.getEngine();
	engine.enableOfflineSupport = false; // Disable offline support for faster loading

	const light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
    light.intensity = 1.0;
    light.groundColor = new Color3(0.5, 0.5, 0.5);

    const skybox = MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
	const skyboxMaterial = new StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new CubeTexture("https://www.babylonjs-playground.com/textures/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
	skyboxMaterial.specularColor = new Color3(0, 0, 0);
	skybox.material = skyboxMaterial;

    createVisualBorders(scene);
    const gameObjects = createMovableObjects(scene);
    setupCamera(scene, canvas);

    return gameObjects;
}

function createVisualBorders(scene: Scene) {
    const wallMat = new StandardMaterial('wallMat', scene);
    wallMat.diffuseColor = new Color3(0.2, 0.2, 0.25);
    wallMat.alpha = 0.5;

    const paddleDepth = 4;
    const paddleMoveLimit = 12;
    const borderOffset = paddleDepth / 2;
    const borderZPosition = paddleMoveLimit + borderOffset;

    const wallHeight = 1.5;
    const wallThickness = 0.5;
    const playfieldWidth = 28.0;

    const topWall = MeshBuilder.CreateBox("topWall", { width: playfieldWidth, height: wallHeight, depth: wallThickness }, scene);
    topWall.position = new Vector3(0, wallHeight / 2, borderZPosition);
    topWall.material = wallMat;
    topWall.renderOutline = true;
    topWall.outlineWidth = 0.05;
    topWall.outlineColor = Color3.Black();

    const bottomWall = topWall.clone("bottomWall");
    bottomWall.position.z = -borderZPosition;
}

function createBallTrail(scene: Scene, ball: Mesh): void {
	const trail = new TrailMesh('ballTrail', ball, scene, 0.2, 30, true);
	const trailMaterial = new StandardMaterial('trailMat', scene);
	trailMaterial.emissiveColor = new Color3(1, 0.85, 0.1);
	trailMaterial.disableLighting = true;
	trailMaterial.alpha = 0.5;
	trail.material = trailMaterial;
}

/**
 * FIX: This function now uses a valid texture URL to prevent the 404 error.
 * The "flare" texture creates the desired star-pop effect.
 */
function createSpawnParticleEffect(scene: Scene, emitter: Mesh): ParticleSystem {
    const particleSystem = new ParticleSystem('spawnParticles', 500, scene);

    // FIX: Using a reliable "flare" texture from the BabylonJS playground assets.
    // This resolves the "404 Not Found" error for star.png.
    particleSystem.particleTexture = new Texture("https://playground.babylonjs.com/textures/flare.png", scene);

    particleSystem.emitter = emitter;

    // Make the effect very quick and poppy
    particleSystem.minLifeTime = 0.2;
    particleSystem.maxLifeTime = 0.5;

    // Vibrant "comix" colors: Yellow, Pink, and Cyan
    particleSystem.color1 = new Color4(1, 0.85, 0.1, 1.0); // Yellow
    particleSystem.color2 = new Color4(0.85, 0.2, 0.4, 1.0); // Pink
    particleSystem.colorDead = new Color4(0.1, 0.7, 0.8, 0.0); // Fade to transparent Cyan

    // Larger, more dramatic stars
    particleSystem.minSize = 1.5;
    particleSystem.maxSize = 3.0;
    particleSystem.minScaleX = 0.5;
    particleSystem.minScaleY = 1.5;

    // Fast, spinning motion
    particleSystem.minAngularSpeed = -Math.PI * 4;
    particleSystem.maxAngularSpeed = Math.PI * 4;

    // This creates a single, powerful burst of 200 particles.
    particleSystem.manualEmitCount = 200;
    particleSystem.maxEmitPower = 15;
    particleSystem.minEmitPower = 8;

    // Use additive blending for a bright, glowing effect
    particleSystem.blendMode = ParticleSystem.BLENDMODE_ADD;

    // Ensure particles shoot outwards, not downwards
    particleSystem.gravity = new Vector3(0, 0, 0);

    // Emit in all directions from a single point
    particleSystem.createSphereEmitter(1.2);

    // The system should not start on its own.
    particleSystem.stop();

    return particleSystem;
}

function createMovableObjects(scene: Scene): SceneObjects {
    const p1Mat = new StandardMaterial('p1Mat', scene);
    p1Mat.diffuseColor = new Color3(0.85, 0.2, 0.4);
    const player1Paddle = MeshBuilder.CreateBox('p1Paddle', { width: 0.5, height: 1, depth: 4 }, scene);
    player1Paddle.position = new Vector3(-12, 0.5, 0);
    player1Paddle.material = p1Mat;
    player1Paddle.renderOutline = true;
    player1Paddle.outlineWidth = 0.05;
    player1Paddle.outlineColor = Color3.Black();

    const p2Mat = new StandardMaterial('p2Mat', scene);
    p2Mat.diffuseColor = new Color3(0.1, 0.7, 0.8);
    const player2Paddle = MeshBuilder.CreateBox('p2Paddle', { width: 0.5, height: 1, depth: 4 }, scene);
    player2Paddle.position = new Vector3(12, 0.5, 0);
    player2Paddle.material = p2Mat;
    player2Paddle.renderOutline = true;
    player2Paddle.outlineWidth = 0.05;
    player2Paddle.outlineColor = Color3.Black();

    const ballMat = new StandardMaterial('ballMat', scene);
    ballMat.diffuseColor = new Color3(1, 0.85, 0.1);
    const ball = MeshBuilder.CreateSphere('ball', { diameter: 1, segments: 24 }, scene);
    ball.position = new Vector3(0, 0.5, 0);
    ball.material = ballMat;
    ball.renderOutline = true;
    ball.outlineWidth = 0.05;
    ball.outlineColor = Color3.Black();

    createBallTrail(scene, ball);
    // This is the continuous "smoke" trail. It starts automatically.
    const particleSystem = createParticleEffects(scene, ball);
    particleSystem.start(); // This is why you see smoke

    // This is the new "star pop" spawn effect. It does NOT start automatically.
    const spawnParticleSystem = createSpawnParticleEffect(scene, ball);

    return { player1Paddle, player2Paddle, ball, particleSystem, spawnParticleSystem };
}

function createParticleEffects(scene: Scene, emitter: Mesh): ParticleSystem {
    const particleSystem = new ParticleSystem('particles', 1500, scene);

    // FIX: Changed texture from smoke.png to flare.png for a star/sparkle look
    particleSystem.particleTexture = new Texture("https://playground.babylonjs.com/textures/flare.png", scene);
    particleSystem.emitter = emitter;

    // FIX: Colors changed from grey smoke to a fiery, energetic yellow/orange
    particleSystem.color1 = new Color4(1, 0.85, 0.1, 1.0); // Bright Yellow
    particleSystem.color2 = new Color4(0.9, 0.4, 0.1, 1.0); // Fiery Orange
    particleSystem.colorDead = new Color4(1, 0.8, 0.5, 0.0); // Fade to transparent

    // FIX: Smaller, more numerous particles to look like a trail of sparks
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.4;
    particleSystem.minLifeTime = 0.2;
    particleSystem.maxLifeTime = 0.5;

    // Increased rate for a denser trail
    particleSystem.emitRate = 1000;
    particleSystem.createSphereEmitter(0.4);
    particleSystem.minEmitPower = 0.5;
    particleSystem.maxEmitPower = 1.5;
    particleSystem.updateSpeed = 0.007;

    // FIX: Changed blend mode to ADD for a bright, glowing effect
    particleSystem.blendMode = ParticleSystem.BLENDMODE_ADD;

    // FIX: Set gravity to zero to stop sparks from falling downwards
    particleSystem.gravity = new Vector3(0, 0, 0);

    return particleSystem;
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
