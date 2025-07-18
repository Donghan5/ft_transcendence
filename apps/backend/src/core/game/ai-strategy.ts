import { AiDecision, makingDecisions } from "./ai-logic";
import { GameState } from "@trans/common-types";

class AiStrategy {
	private gameState: GameState;
	private decision: AiDecision;

	constructor(gameState: GameState) {
		this.gameState = gameState;
		this.decision = makingDecisions(this.gameState);
	}

	public updateDecision(): void {
		this.decision = makingDecisions(this.gameState);
	}

	public getDecision(): AiDecision | null {
		return this.decision;
	}

	public playBalance(): void {
		// The strategy just balances the AI's actions
		// 1. define the center of the paddle using the paddleZ (?)

		// 2. when the ball is approaching the AI's paddle, using prediction

		// 3. apply accuracy (middle accuracy)
	}

	public playAttack(): void {

	}

	public playDefend(): void {

	}

	public aiPlay(): void {
		if (!this.decision) {
			this.updateDecision();
		}

		if (this.decision.attack) {
			this.playAttack();
		} else if (this.decision.defend) {
			this.playDefend();
		} else if (this.decision.balance) {
			this.playBalance();
		}
	}
}

/**
 * TO DO:
 * 1. Implement the AI strategy for the game
 * 2. Making predictions base on the ball's position and velocity
 * 3. Making accurency...
 */
