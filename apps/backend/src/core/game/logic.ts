// apps/backend/src/core/game/logic.ts
import { WIN_SCORE, POINT_PER_GOAL, BALL_RADIUS, ARENA_DEPTH,PADDLE_WIDTH, PADDLE_DEPTH, PADDLE_HEIGHT, PADDLE_X_POSITION } from "./constant";
import { GameState, PlayerState, BallState, initialBallVelocity, GameStatus, Vector3D } from "@trans/common-types"; // 👍 수정된 부분
import { gameEngine } from "./game-engine"; // Import the games map from game-engine
import { strategy } from "./ai-strategy";
import WebSocket from 'ws'; // Import WebSocket for broadcasting game state

function createInitialPlayerState(): PlayerState {
    return {
        position: { x: 0, y: 0, z: 0 },
        score: 0,
        paddleZ: 0,
    };
}

function createInitialBallState(): BallState {
    return {
        position: { x: 0, y: 0, z: 0 },
        velocity: initialBallVelocity,
    };
}

export function initState(gameId: string): GameState {
    return {
        gameId,
        player1: createInitialPlayerState(),
        player2: createInitialPlayerState(),
		player1Id: '',
		player2Id: '',
        ball: createInitialBallState(),
        status: 'waiting',
        lastUpdate: Date.now(),
        gameMode: '',
    };
}

export function addPoint(
    state: GameState,
    scorerId: string,
): GameState {
    if (state.status === 'finished') return state;

    const nextState: GameState = {
        ...state,
        player1: { ...state.player1 },
        player2: { ...state.player2 },
    };

    if (scorerId === state.player1Id) {
        nextState.player1.score += POINT_PER_GOAL;
    } else if (scorerId === state.player2Id) {
        nextState.player2.score += POINT_PER_GOAL;
    }

    if (nextState.player1.score >= WIN_SCORE || nextState.player2.score >= WIN_SCORE) {
        nextState.status = 'finished';
    }

    nextState.lastUpdate = Date.now();

    return nextState;
}

export function isGameOver(state: GameState): boolean {
    return state.status === 'finished';
}

/**
 * Update the physics of the game
 * @param game - The current game state
 */
// ... (imports and other functions remain the same)

export function updatePhysics(game: GameState): void {
    const substeps = 8; // Increased to 8 for better accuracy (reduces dt to 0.125, lowering overshoot risk without high cost)
    const dt = 1 / substeps;
    const wallZ = ARENA_DEPTH / 2 - BALL_RADIUS;
    const maxSpeed = 0.6; // Reduced from 0.8 to make the ball feel slower at max
    const speedIncrease = 1.015; // Reduced from 1.02 for slower acceleration

    for (let i = 0; i < substeps; i++) {
        // Simulate the substep with continuous collision detection
        simulateSubstep(game, dt, BALL_RADIUS, wallZ, PADDLE_WIDTH, PADDLE_HEIGHT, maxSpeed, speedIncrease);
    }

    if (game.player2Id === 'AI') {
        strategy.updateAIPaddle(game);
    }

    const scorerSide = game.ball.position.x < -16 ? 'right' : game.ball.position.x > 16 ? 'left' : null;
    if (scorerSide) {
        const scorerId = scorerSide === 'left' ? game.player1Id : game.player2Id;
        const updatedState = addPoint(game, scorerId);
        gameEngine.getGames().set(game.gameId, updatedState);
        resetBall(updatedState);

        if (isGameOver(updatedState)) {
            gameEngine.endGame(game.gameId);
        }
    }
}

// New function to handle a single substep with proper collision timing
function simulateSubstep(
    game: GameState,
    dt: number,
    ballRadius: number,
    wallZ: number,
    paddleWidth: number,
    paddleHeight: number,
    maxSpeed: number,
    speedIncrease: number
): void {
    let remainingTime = dt;
    let safetyCounter = 0; // Prevent infinite loops (max 5 collisions per substep)
    const maxCollisions = 5;

    while (remainingTime > 0 && safetyCounter < maxCollisions) {
        safetyCounter++;

        // Calculate times to potential collisions (must be in [0, remainingTime])
        const times = calculateCollisionTimes(game, remainingTime, ballRadius, wallZ, paddleWidth, paddleHeight);

        // Find the earliest collision time
        let minTime = remainingTime;
        let collisionType: 'none' | 'topWall' | 'bottomWall' | 'leftPaddle' | 'rightPaddle' = 'none';
        if (times.topWall >= 0 && times.topWall < minTime) {
            minTime = times.topWall;
            collisionType = 'topWall';
        }
        if (times.bottomWall >= 0 && times.bottomWall < minTime) {
            minTime = times.bottomWall;
            collisionType = 'bottomWall';
        }
        if (times.leftPaddle >= 0 && times.leftPaddle < minTime) {
            minTime = times.leftPaddle;
            collisionType = 'leftPaddle';
        }
        if (times.rightPaddle >= 0 && times.rightPaddle < minTime) {
            minTime = times.rightPaddle;
            collisionType = 'rightPaddle';
        }

        // Advance position by minTime (no collision if minTime == remainingTime)
        game.ball.position.x += game.ball.velocity.x * minTime;
        game.ball.position.y += game.ball.velocity.y * minTime;
        game.ball.position.z += game.ball.velocity.z * minTime;

        // Handle the collision if any
        if (collisionType !== 'none') {
            switch (collisionType) {
                case 'topWall':
                case 'bottomWall':
                    game.ball.velocity.z *= -1;
                    // No position adjustment needed since time is exact (no overshoot)
                    break;
                case 'leftPaddle':
                    // Calculate intersectZ at exact hit time (already advanced)
                    const relativeIntersectLeft = (game.ball.position.z - game.player1.paddleZ) / (paddleHeight / 2);
                    game.ball.velocity.z = relativeIntersectLeft * 0.5;
                    game.ball.velocity.x = Math.min(Math.abs(game.ball.velocity.x) * speedIncrease, maxSpeed);
                    game.ball.position.x += 0.01; // Small nudge to prevent sticking
                    break;
                case 'rightPaddle':
                    const relativeIntersectRight = (game.ball.position.z - game.player2.paddleZ) / (paddleHeight / 2);
                    game.ball.velocity.z = relativeIntersectRight * 0.5;
                    game.ball.velocity.x = -Math.min(Math.abs(game.ball.velocity.x) * speedIncrease, maxSpeed);
                    game.ball.position.x -= 0.01; // Small nudge
                    break;
            }
        }

        remainingTime -= minTime;
    }

    // If safety counter hit max, just advance remaining (rare edge case)
    if (remainingTime > 0) {
        game.ball.position.x += game.ball.velocity.x * remainingTime;
        game.ball.position.y += game.ball.velocity.y * remainingTime;
        game.ball.position.z += game.ball.velocity.z * remainingTime;
    }
}

// New function to calculate collision times
function calculateCollisionTimes(
    game: GameState,
    dt: number,
    ballRadius: number,
    wallZ: number,
    paddleWidth: number,
	paddleHeight: number
): {
    topWall: number;
    bottomWall: number;
    leftPaddle: number;
    rightPaddle: number;
} {
    const pos = game.ball.position;
    const vel = game.ball.velocity;
    const player1X = -12;
    const player2X = 12;
    const paddle1Front = player1X + paddleWidth;
    const paddle2Front = player2X - paddleWidth;

    let topWall = -1;
    if (vel.z > 0) {
        topWall = (wallZ - pos.z) / vel.z;
        if (topWall < 0 || topWall > dt) topWall = -1;
    }

    let bottomWall = -1;
    if (vel.z < 0) {
        bottomWall = (-wallZ - pos.z) / vel.z;
        if (bottomWall < 0 || bottomWall > dt) bottomWall = -1;
    }

    let leftPaddle = -1;
    if (vel.x < 0) {
        const ballLeft = pos.x - ballRadius;
        leftPaddle = (paddle1Front - ballLeft) / vel.x; // Since vel.x < 0, this is positive if approaching
        if (leftPaddle < 0 || leftPaddle > dt) {
            leftPaddle = -1;
        } else {
            // Predict z at hit time and check if within paddle height
            const hitZ = pos.z + vel.z * leftPaddle;
            const paddleTop = game.player1.paddleZ - (paddleHeight / 2) - BALL_RADIUS;
            const paddleBottom = game.player1.paddleZ + (paddleHeight / 2) + BALL_RADIUS;
            if (hitZ < paddleTop || hitZ > paddleBottom) {
                leftPaddle = -1; // Miss if not in height
            }
        }
    }

    let rightPaddle = -1;
    if (vel.x > 0) {
        const ballRight = pos.x + ballRadius;
        rightPaddle = (paddle2Front - ballRight) / vel.x; // vel.x > 0
        if (rightPaddle < 0 || rightPaddle > dt) {
            rightPaddle = -1;
        } else {
            const hitZ = pos.z + vel.z * rightPaddle;
            const paddleTop = game.player2.paddleZ - (paddleHeight / 2) - BALL_RADIUS;
            const paddleBottom = game.player2.paddleZ + (paddleHeight / 2) + BALL_RADIUS;
            if (hitZ < paddleTop || hitZ > paddleBottom) {
                rightPaddle = -1;
            }
        }
    }

    return { topWall, bottomWall, leftPaddle, rightPaddle };
}

export function processPlayerInput(
    game: GameState,
    playerId: string,
    direction: 'up' | 'down' | 'stop',
    deltaTime: number = 1/60
): void {
    const PADDLE_SPEED = 0.6;
    const PADDLE_LIMIT = 12;

    const playerKey = getPlayerKey(playerId, game);
    if (!playerKey) return;

    let currentPaddleZ = game[playerKey].paddleZ;

    switch (direction) {
        case 'up':
            currentPaddleZ += PADDLE_SPEED;
            break;
        case 'down':
            currentPaddleZ -= PADDLE_SPEED;
            break;
        case 'stop':
            break;
    }

    if (currentPaddleZ > PADDLE_LIMIT) currentPaddleZ = PADDLE_LIMIT;
    if (currentPaddleZ < -PADDLE_LIMIT) currentPaddleZ = -PADDLE_LIMIT;
    
    game[playerKey].paddleZ = currentPaddleZ;
    
    if (playerKey === 'player1') {
        game.player1.position.x = -12;
        game.player1.position.z = currentPaddleZ;
    } else {
        game.player2.position.x = 12;
        game.player2.position.z = currentPaddleZ;
    }
}

function getPlayerKey(playerId: string, game: GameState): 'player1' | 'player2' | null {
    if (game.player1Id === playerId) {
        return 'player1';
    }
    if (game.player2Id === playerId) {
        return 'player2';
    }

    return null; // Player not found in the game
}

export function resetBall(game: GameState): void {
	game.ball.position = { x: 0, y: 1, z: 0 };
	game.ball.velocity = {
		x: game.ball.velocity.x > 0 ? -0.25 : 0.25,
		y: 0,
		z: (Math.random() - 0.5) * 0.3
	};
}

export function broadcastGameState(gameId: string): void {
	const game = gameEngine.getGames().get(gameId);
	const players = gameEngine.getConnectedPlayers().get(gameId);
	if (!game || !players) return;   // Game and players not declared

	const message = JSON.stringify({
		type: 'gameState',
		payload: game
	});
	players.forEach((ws, playerId) => {
		if (ws.readyState === WebSocket.OPEN) {
			ws.send(message);
		} else {
			console.warn(`WebSocket for player ${playerId} is not open`);
		}
	});
}
