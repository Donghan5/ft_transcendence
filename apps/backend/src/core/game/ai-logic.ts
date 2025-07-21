import { GameState } from "@trans/common-types";
import { PlayerState, BallState } from "@trans/common-types";
import { POINT_PER_GOAL, WIN_SCORE } from "./constant";
import { Vector3D } from "@trans/common-types";
import { Vector3 } from '@babylonjs/core'

export interface AiDecision {
	easy: boolean;
	middle: boolean;
	hard: boolean;
}

/**
 *
 * @param game
 * @returns AiDecision
 * this function is making decisions based on the current game state
 * Suppose that the Player 1 is controlling by the user and Player 2 is controlled by AI
 */
export function makeDecisions(game: GameState, level: string): AiDecision {
    const player = game.player1;   // player1 is the local player (not AI)
    const ball = game.ball;

	// init decision object
    const decision: AiDecision = {
        easy: false,
        middle: false,
        hard: false,
    };

    // The player chose the level of AI
	if (level === "easy") {
		decision.easy = true;
	} else if (level === "middle") {
		decision.middle = true;
	} else {
		decision.hard = true;
	}

	return decision;
}

/**
 * to correct the accuracy to playable.
 * @param newBallPosition 
 * @param currentBallPosition 
 * @param accuarcy 
 * @returns corrected: corrected value
 */
export function correctVectorPrediction(
	newBallPosition: Vector3,
	currentBallPosition: Vector3,
	accuarcy: number
): Vector3 {
	const ratio = 1 - accuarcy;
	const newBallScale = newBallPosition.scale(accuarcy);
	const corrected = newBallScale.add(currentBallPosition.scale(ratio));

	return corrected;
}

/**
 * to update the paddle of the AI (player2) - track the ball
 * @param ballPositionZ 
 * @param paddleZ (maybe like player2Paddle.position.z in render.ts)
 * @param correctedAccuracy 
 */
export function updateAIPaddlePosition(
	ballPositionZ: number, 
	paddleZ: number, 
	correctedAccuracy: number
): void {
	const diff = ballPositionZ - paddleZ;

	if (Math.abs(diff) > 0.5) {  // or this conditions (manage game level)?
		const moveSpeed = 0.2 * correctedAccuracy; // is here manage game level
		paddleZ += diff > 0 ? moveSpeed : -moveSpeed;

		if (paddleZ > 13) // avoid wall crash
			paddleZ = 13
		if (paddleZ < -13)
			paddleZ = -13
	}
}
