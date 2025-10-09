import { GameState, PlayerState, BallState, Vector3D, scaleVector, addVectors } from "@trans/common-types";
import { POINT_PER_GOAL, WIN_SCORE } from "@trans/common-types";

/**
 * @elements accuracy: how accurate the AI is in predicting the ball's position
 * @elements speed: how fast the AI can move its paddle
 * @elements mistakeChance: the chance that the AI will make a mistake (Drop out intended)
 */
export const AI_LEVEL = {
	EASY: { accuracy: 0.3, speed: 0.1, mistakeChance: 0.7 },
	MIDDLE: { accuracy: 0.5, speed: 0.15, mistakeChance: 0.5 },
	HARD: { accuracy: 0.85, speed: 0.2, mistakeChance: 0.3 },
};

/**
 *
 * @param level : input by user choices
 * @returns level of AI
 * this function is making decisions based on the current game state
 * Suppose that the Player 1 is controlling by the user and Player 2 is controlled by AI
 */
export function selectLevelAI(level: string): { accuracy: number, speed: number, mistakeChance: number} {

    // The player chose the level of AI
	if (level === "easy") {
		return AI_LEVEL.EASY;
	} else if (level === "middle") {
		return AI_LEVEL.MIDDLE;
	} else {
		return AI_LEVEL.HARD;
	}
}

/**
 * @description Dinamically predict the ball position when it reaches the AI paddle's x-coordinate
 * @param ball 
 * @param targetX 
 * @param aiParams 
 * @returns Coordinate Z where the ball is expected to cross the AI's paddle plane
 */
export function predictBallPosition(
	ball: BallState,
	targetX: number,
    aiParams: { accuracy: number, speed: number, mistakeChance: number }
): number {
    let predictedPosition: Vector3D = { ...ball.position };
    let predictedVelocity: Vector3D = { ...ball.velocity };

    const timeToTarget = Math.abs((targetX - predictedPosition.x) / predictedVelocity.x);
    const simulationSteps = Math.min(Math.floor(timeToTarget * 60), 120); 
    
	for (let i = 0; i < simulationSteps; i++) {
        predictedPosition.x += predictedVelocity.x / 60;
        predictedPosition.z += predictedVelocity.z / 60;

        if (predictedPosition.z >= 13 || predictedPosition.z <= -13) {
            predictedVelocity.z *= -1;
        }

        if ((predictedVelocity.x > 0 && predictedPosition.x >= targetX) ||
            (predictedVelocity.x < 0 && predictedPosition.x <= targetX)) {
            break;
        }
    }

    // const distanceFactor = Math.abs(ball.position.x - targetX) / 24;
    // const maxError = (1 - aiParams.accuracy) * 10;
    // const error = (Math.random() - 0.5) * maxError * distanceFactor;

    let finalZ = predictedPosition.z // + error;

    if (Math.random() < 0.2) {
        const speedMisjudgeFactor = (Math.random() - 0.5) * 0.2;
        finalZ += predictedVelocity.z * timeToTarget * speedMisjudgeFactor;
    }

    const arenaLimit = 16;
    if (finalZ > arenaLimit) finalZ = arenaLimit;
    if (finalZ < -arenaLimit) finalZ = -arenaLimit;

    return finalZ;
}
