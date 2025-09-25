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
    TrailMesh,
    DynamicTexture
} from '@babylonjs/core';
import '@babylonjs/core/Rendering/outlineRenderer';
import {
    PADDLE_START_X,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_DEPTH,
    BALL_DIAMETER,
    WALL_Z_POSITION,
    VISUAL_PLAYFIELD_WIDTH,
    VISUAL_PLAYFIELD_DEPTH,
    BORDER_HEIGHT,
    BORDER_THICKNESS,
    ARENA_WIDTH
} from '@trans/common-types';

export interface SceneObjects {
    player1Paddle: Mesh;
    player2Paddle: Mesh;
    ball: Mesh;
    particleSystem: ParticleSystem;
    spawnParticleSystem: ParticleSystem;
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

function createCityscape(scene: Scene) {
    const buildingMat = new StandardMaterial("buildingMat", scene);
    buildingMat.diffuseColor = new Color3(0.1, 0.1, 0.2);
    buildingMat.specularColor = new Color3(0.2, 0.2, 0.3);
    for (let i = 0; i < 60; i++) { // Increased number of buildings to 60 for more interest
        const windowTex = new DynamicTexture("windowTex_" + i, { width: 128, height: 256 }, scene, false);
        const ctx = windowTex.getContext();
        ctx.fillStyle = "#151525";
        ctx.fillRect(0, 0, 128, 256);
        const colors = ["#ffdd00", "#00ddff", "#ff00dd", "#00ff00"]; // Added more colors for variety
        for (let y = 8; y < 256; y += 16) {
            for (let x = 8; x < 128; x += 24) {
                if (Math.random() > 0.3) {
                    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                    ctx.fillRect(x, y, 12, 8);
                }
            }
        }
        windowTex.update();
        const windowMat = new StandardMaterial("windowMat_" + i, scene);
        windowMat.diffuseTexture = windowTex;
        windowMat.emissiveTexture = windowTex;
        windowMat.specularColor = new Color3(0.1, 0.1, 0.1);
        const height = 10 + Math.random() * 60; // Increased max height for taller buildings
        const width = 3 + Math.random() * 7; // Slightly increased width variation
        const depth = 3 + Math.random() * 7;
        const building = MeshBuilder.CreateBox(`building_${i}`, { width, height, depth }, scene);
        building.material = windowMat;
        const side = Math.sign(Math.random() - 0.5);
        const xPos = side * (35 + Math.random() * 50);
        const zSide = Math.sign(Math.random() - 0.5);
        const zPos = zSide * (40 + Math.random() * 70);
        building.position.x = xPos;
        building.position.z = zPos;
        building.position.y = height / 2 - 5;
        building.freezeWorldMatrix();
    }
}

function createComicBackground(scene: Scene): void {
    scene.clearColor = new Color4(0.05, 0.05, 0.1, 1.0);
    createCityscape(scene);
    const ground = MeshBuilder.CreateGround("ground", {width: 200, height: 200}, scene); // Increased for larger game
    ground.position.y = -0.1;
    const groundMat = new StandardMaterial("groundMat", scene);
    const gridTexture = new DynamicTexture("gridTexture", 512, scene, false);
    const ctx = gridTexture.getContext();
    const gridSize = 48;
    const bgColor = "#1a1a3d";
    const lineColor = "#00ffcc";
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1.5;
    for (let i = 0; i <= 512; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 512);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(512, i);
        ctx.stroke();
    }
    gridTexture.update();
    groundMat.diffuseTexture = gridTexture;
    groundMat.emissiveColor = new Color3(0.05, 0.08, 0.12);
    groundMat.specularColor = new Color3(0, 0, 0);
    if (groundMat.diffuseTexture) {
        (groundMat.diffuseTexture as Texture).uScale = 20; // Adjusted for larger ground
        (groundMat.diffuseTexture as Texture).vScale = 20;
    }
    ground.material = groundMat;
}

function createVisualBorders(scene: Scene) {
    const borderMat = new StandardMaterial('borderMat', scene);
    borderMat.emissiveColor = new Color3(1, 0.9, 0);
    borderMat.disableLighting = true;

    const topWall = MeshBuilder.CreateBox("topWall", {
        width: VISUAL_PLAYFIELD_WIDTH,
        height: BORDER_HEIGHT,
        depth: BORDER_THICKNESS
    }, scene);
    topWall.position = new Vector3(0, BORDER_HEIGHT / 2, WALL_Z_POSITION + (BORDER_THICKNESS / 2));
    topWall.material = borderMat;

    const bottomWall = topWall.clone("bottomWall");
    bottomWall.position.z = -(WALL_Z_POSITION + (BORDER_THICKNESS / 2));

    const leftWall = MeshBuilder.CreateBox("leftWall", {
        width: BORDER_THICKNESS,
        height: BORDER_HEIGHT,
        depth: VISUAL_PLAYFIELD_DEPTH + BORDER_THICKNESS
    }, scene);
    leftWall.position = new Vector3(-ARENA_WIDTH / 2, BORDER_HEIGHT / 2, 0);
    leftWall.material = borderMat;

    const rightWall = leftWall.clone("rightWall");
    rightWall.position.x = ARENA_WIDTH / 2;

    createComicFrameElements(scene);
}

function createComicFrameElements(scene: Scene): void {
    const speedLineMat = new StandardMaterial('speedLineMat', scene);
    speedLineMat.emissiveColor = new Color3(1, 0.9, 0);
    speedLineMat.disableLighting = true;
    for (let i = 0; i < 5; i++) {
        const speedLine = MeshBuilder.CreateBox(`speedLine${i}`, {
            width: 0.15 * (1 - i * 0.1), // Slightly tapering for step effect
            height: 0.15 * (1 - i * 0.1),
            depth: VISUAL_PLAYFIELD_DEPTH
        }, scene);
        speedLine.position.x = - (ARENA_WIDTH / 2 + i * 0.3);
        speedLine.position.y = 0.5 - i * 0.1; // Slight downward step
        speedLine.material = speedLineMat;
        const speedLine2 = speedLine.clone(`speedLine2_${i}`);
        speedLine2.position.x = ARENA_WIDTH / 2 + i * 0.3;
    }
}

function createBallTrail(scene: Scene, ball: Mesh): void {
    const trail = new TrailMesh('ballTrail', ball, scene, 0.3, 40, true);
    const trailMaterial = new StandardMaterial('trailMat', scene);
    trailMaterial.emissiveColor = new Color3(1, 0.3, 0.6);
    trailMaterial.disableLighting = true;
    trailMaterial.alpha = 0.7;
    trail.material = trailMaterial;
}

function createSpawnParticleEffect(scene: Scene, emitter: Mesh): ParticleSystem {
    const particleSystem = new ParticleSystem('spawnParticles', 800, scene);
    particleSystem.particleTexture = new Texture("https://playground.babylonjs.com/textures/flare.png", scene);
    particleSystem.emitter = emitter;
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 0.8;
    particleSystem.color1 = new Color4(1, 0, 0.5, 1.0);
    particleSystem.color2 = new Color4(1, 1, 0, 1.0);
    particleSystem.colorDead = new Color4(0, 1, 1, 0.0);
    particleSystem.minSize = 2.0;
    particleSystem.maxSize = 4.5;
    particleSystem.minScaleX = 0.8;
    particleSystem.minScaleY = 2.0;
    particleSystem.minAngularSpeed = -Math.PI * 6;
    particleSystem.maxAngularSpeed = Math.PI * 6;
    particleSystem.manualEmitCount = 300;
    particleSystem.maxEmitPower = 20;
    particleSystem.minEmitPower = 12;
    particleSystem.blendMode = ParticleSystem.BLENDMODE_ADD;
    particleSystem.gravity = new Vector3(0, -2, 0);
    particleSystem.createSphereEmitter(1.5);
    particleSystem.stop();
    return particleSystem;
}

function createMovableObjects(scene: Scene): SceneObjects {
    const p1Mat = new StandardMaterial('p1Mat', scene);
    p1Mat.diffuseColor = new Color3(1, 0.2, 0.5);
    p1Mat.specularColor = new Color3(1, 1, 1);
    p1Mat.specularPower = 64;
    const player1Paddle = MeshBuilder.CreateBox('p1Paddle', {
        width: PADDLE_WIDTH,
        height: PADDLE_HEIGHT,
        depth: PADDLE_DEPTH
    }, scene);
    player1Paddle.position = new Vector3(-PADDLE_START_X, 0.7, 0);
    player1Paddle.material = p1Mat;
    player1Paddle.renderOutline = true;
    player1Paddle.outlineWidth = 0.15;
    player1Paddle.outlineColor = Color3.Black();
    const p2Mat = new StandardMaterial('p2Mat', scene);
    p2Mat.diffuseColor = new Color3(0, 0.7, 1);
    p2Mat.specularColor = new Color3(1, 1, 1);
    p2Mat.specularPower = 64;
    const player2Paddle = MeshBuilder.CreateBox('p2Paddle', {
        width: PADDLE_WIDTH,
        height: PADDLE_HEIGHT,
        depth: PADDLE_DEPTH
    }, scene);
    player2Paddle.position = new Vector3(PADDLE_START_X, 0.7, 0);
    player2Paddle.material = p2Mat;
    player2Paddle.renderOutline = true;
    player2Paddle.outlineWidth = 0.15;
    player2Paddle.outlineColor = Color3.Black();
    const ballMat = new StandardMaterial('ballMat', scene);
    ballMat.diffuseColor = new Color3(1, 1, 0);
    ballMat.specularColor = new Color3(1, 1, 1);
    ballMat.specularPower = 128;
    const ball = MeshBuilder.CreateSphere('ball', {
        diameter: BALL_DIAMETER,
        segments: 32
    }, scene);
    ball.position = new Vector3(0, 0.65, 0);
    ball.material = ballMat;
    ball.renderOutline = true;
    ball.outlineWidth = 0.12;
    ball.outlineColor = Color3.Black();
    createBallTrail(scene, ball);
    const particleSystem = createEnhancedParticleEffects(scene, ball);
    particleSystem.start();
    const spawnParticleSystem = createSpawnParticleEffect(scene, ball);
    return { player1Paddle, player2Paddle, ball, particleSystem, spawnParticleSystem };
}

function createEnhancedParticleEffects(scene: Scene, emitter: Mesh): ParticleSystem {
    const particleSystem = new ParticleSystem('particles', 2000, scene);
    particleSystem.particleTexture = new Texture("https://playground.babylonjs.com/textures/flare.png", scene);
    particleSystem.emitter = emitter;
    particleSystem.color1 = new Color4(1, 1, 0, 1.0);
    particleSystem.color2 = new Color4(1, 0.5, 0, 1.0);
    particleSystem.colorDead = new Color4(1, 0, 0, 0.0);
    particleSystem.minSize = 0.2;
    particleSystem.maxSize = 0.8;
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 0.8;
    particleSystem.emitRate = 1500;
    particleSystem.createSphereEmitter(0.5);
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 2;
    particleSystem.updateSpeed = 0.008;
    particleSystem.blendMode = ParticleSystem.BLENDMODE_ADD;
    particleSystem.gravity = new Vector3(0, 0, 0);
    particleSystem.minAngularSpeed = -2;
    particleSystem.maxAngularSpeed = 2;
    return particleSystem;
}

function setupCamera(scene: Scene, canvas: HTMLCanvasElement): void {
    const camera = new ArcRotateCamera('camera',
        -Math.PI / 2,
        Math.PI / 8,  // Adjusted to ~22.5 degrees for even more top-down view
        120,  // Increased default radius for larger game
        new Vector3(0, 0, 0),
        scene
    );
    camera.attachControl(canvas, true);
    camera.inputs.remove(camera.inputs.attached.keyboard);
    camera.lowerRadiusLimit = 70;
    camera.upperRadiusLimit = 160;
    camera.upperBetaLimit = Math.PI / 3; // Adjusted for more top-down constraint
    camera.inertia = 0.9;
    camera.speed = 2;
}
