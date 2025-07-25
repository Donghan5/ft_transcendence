import { GameState, PlayerState, BallState, Vector3D, scaleVector, addVectors } from "@trans/common-types";
import { POINT_PER_GOAL, WIN_SCORE } from "./constant";

export const AI_LEVEL = {
	EASY: { accuracy: 0.45, speed: 0.08 },
	MIDDLE: { accuracy: 0.65, speed: 0.12 },
	HARD: { accuracy: 0.85, speed: 0.16 },
};

/**
 *
 * @param level : input by user choices
 * @returns level of AI
 * this function is making decisions based on the current game state
 * Suppose that the Player 1 is controlling by the user and Player 2 is controlled by AI
 */
export function selectLevelAI(level: string): string {

    // The player chose the level of AI
	if (level === "easy") {
		const level = AI_LEVEL.EASY;
	} else if (level === "middle") {
		const level = AI_LEVEL.MIDDLE;
	} else {
		const level = AI_LEVEL.HARD;
	}

	return level;
}

export function predictBallPosition(
	ball: BallState,
	targetX: number
): number {
	let predictedPosition: Vector3D = { ...ball.position };
	let predictedVelocity: Vector3D = { ...ball.velocity };

	while (predictedVelocity.x > 0 && predictedPosition.x < targetX ||
		predictedVelocity.x < 0 && predictedPosition.x > targetX) {
		predictedPosition = addVectors(predictedPosition, predictedVelocity);

		// before value was 140, -140. chaneged to 13, -13 to test
		if (predictedPosition.z >= 13 || predictedPosition.z <= -13) {
			predictedVelocity.z *= -1; // bounce off the top or bottom wall
		}
	}

	return predictedPosition.z;
}
