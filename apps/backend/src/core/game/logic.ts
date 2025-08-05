// apps/backend/src/core/game/logic.ts
import { WIN_SCORE, POINT_PER_GOAL } from "./constant";
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
export function updatePhysics(game: GameState): void {
	// Update ball position
	game.ball.position.x += game.ball.velocity.x;
	game.ball.position.y += game.ball.velocity.y;
	game.ball.position.z += game.ball.velocity.z;

	// I don't know why I didn't put this before...
	const ballRadius = 0.5; // Assuming ball diameter is 1, radius is 0.5
	const arenaDepth = 30;
	const wallZ = arenaDepth / 2 - ballRadius;

	if (game.ball.position.z > wallZ || game.ball.position.z < -wallZ) {
		game.ball.velocity.z *= -1; // Bounce off walls
	}

	if (game.player2Id === 'AI')
			strategy.updateAIPaddle(game);

	// Check for collisions with paddles
	checkPaddleCollisions(game);

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

export function checkPaddleCollisions(game: GameState): void {
	const { ball, player1, player2 } = game;
	const check = (paddlePos: Vector3D, paddleZ: number) => {
		return (
			Math.abs(ball.position.z - paddleZ) < 4 &&
			Math.abs(ball.position.x - paddlePos.x) < 1
		);
	};

	if (ball.velocity.x < 0 && check(player1.position, player1.paddleZ)) {
		ball.velocity.x *= -1.05;
		const relativeIntersect = player1.paddleZ - ball.position.z;
		ball.velocity.z = -relativeIntersect / 4 * 0.5; // Adjust
	}
	else if (ball.velocity.x > 0 && check(player2.position, player2.paddleZ)) {
		ball.velocity.x *= -1.05;
		const relativeIntersect = player2.paddleZ - ball.position.z;
		ball.velocity.z = -relativeIntersect / 4 * 0.5; // Adjust
	}
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
