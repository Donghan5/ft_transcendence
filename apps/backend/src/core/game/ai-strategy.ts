import { AiDecision, makingDecisions } from "./ai-logic";
import { BallState, GameState, initialBallPosition, initialBallVelocity, Vector3D } from "@trans/common-types";
import { initState } from "./logic";
import { BABYLON } from '@babylonjs/core'

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
		const newBallPosition = (currentBallPosition: BABYLON.Vector3, 
			currentBallVelocity: BABYLON.Vector3, 
			deltaTime: number) => {
				return (currentBallPosition.add(currentBallVelocity.scale(deltaTime)));
		}


	}

	public playAttack(): void {
		// The strategy aggressive the AI's actions
		// same as playBalance logic
		// low accuarcy, because it focus on the attacking
		const newBallPosition = (currentBallPosition: BABYLON.Vector3, 
			currentBallVelocity: BABYLON.Vector3, 
			deltaTime: number) => {
				return (currentBallPosition.add(currentBallVelocity.scale(deltaTime)));
		}


	}

	public playDefend(): void {
		// The strategy defensive the AI's actions
		// same as playBalance logic
		// high accuracy, because it focus on the defending
		const newBallPosition = (currentBallPosition: BABYLON.Vector3, 
			currentBallVelocity: BABYLON.Vector3, 
			deltaTime: number) => {
				return (currentBallPosition.add(currentBallVelocity.scale(deltaTime)));
		}
		


	}

	public aiStrategyDecision(): void {
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
 * 3. Making and define accurency...
 */
