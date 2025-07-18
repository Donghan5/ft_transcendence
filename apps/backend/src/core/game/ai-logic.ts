import { GameState } from "@trans/common-types";
import { PlayerState, BallState } from "@trans/common-types";
import { POINT_PER_GOAL, WIN_SCORE } from "./constant";
import { Vector3D } from "@trans/common-types";

export interface AiDecision {
	attack: boolean;
	defend: boolean;
	balance: boolean;
}

/**
 *
 * @param game
 * @returns AiDecision
 * this function is making decisions based on the current game state
 * Suppose that the Player 1 is controlling by the user and Player 2 is controlled by AI
 */
export function makingDecisions(game: GameState): AiDecision {
    const player = game.player1;   // player1 is the local player (not AI)
    const ball = game.ball;

	// init decision object
    const decision: AiDecision = {
        attack: false,
        defend: false,
        balance: false,
    };

    // If the score of the player is less than (3 points) the AI player, use defend strategy
	if (player.score <= game.player2.score - 3) {
		decision.defend = true;
	} else if (player.score >= game.player2.score + 3) {
		decision.attack = true;
	} else {
		decision.balance = true;
	}

	return decision;
}
