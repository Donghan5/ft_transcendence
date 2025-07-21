import { AiDecision, correctVectorPrediction, makeDecisions, updateAIPaddlePosition } from "./ai-logic";
import { BallState, GameState, PlayerState,initialBallPosition, initialBallVelocity, Vector3D } from "@trans/common-types";
import { initState } from "./logic";
import { BABYLON } from '@babylonjs/core'

class AiStrategy {
	private gameState: GameState;
	private decision: AiDecision;

	/**
	 * @param gameState 
	 * @param level : input by user choices
	 */
	constructor(gameState: GameState, level: string) {
		this.gameState = gameState;
		this.decision = makeDecisions(this.gameState, level);
	}

	public updateDecision(level: string): void {
		this.decision = makeDecisions(this.gameState, level);
	}

	public getDecision(): AiDecision | null {
		return this.decision;
	}

	private playMiddleLevel(player2: PlayerState): void {
		// The strategy middle-mode the AI's actions
		// 1. define the center of the paddle using the paddleZ (?)
		// 2. when the ball is approaching the AI's paddle, using prediction
		// 3. apply accuracy (middle accuracy)
		const currentBallPosition = initialBallPosition;
		const newBallPosition = (currentBallPosition: BABYLON.Vector3, 
			currentBallVelocity: BABYLON.Vector3, 
			deltaTime: number) => {
				return (currentBallPosition.add(currentBallVelocity.scale(deltaTime)));
		}
		const accuarcy = 0.5;

		const correctedAccuracy = correctVectorPrediction(newBallPosition, currentBallPosition, accuarcy);

		updateAIPaddlePosition(currentBallPosition.z, player2.paddleZ, correctedAccuracy)
	
	}

	private playEasyLevel(player2: PlayerState): void {
		// The strategy easy-mode the AI's actions
		// same as playBalance logic
		// low accuarcy, because it focus on the attacking
		const currentBallPosition = initialBallPosition;
		const newBallPosition = (currentBallPosition: BABYLON.Vector3, 
			currentBallVelocity: BABYLON.Vector3, 
			deltaTime: number) => {
				return (currentBallPosition.add(currentBallVelocity.scale(deltaTime)));
		}

		const accuracy = 0.3;

		const correctedAccuracy = correctVectorPrediction(newBallPosition, currentBallPosition, accuracy);

		updateAIPaddlePosition(currentBallPosition.z, player2.paddleZ, correctedAccuracy);
	
	}

	private playHardLevel(player2: PlayerState): void {
		// The strategy hard-mode the AI's actions
		// same as playBalance logic
		// high accuracy, because it focus on the defending
		const currentBallPosition = initialBallPosition;
		const newBallPosition = (currentBallPosition: BABYLON.Vector3, 
			currentBallVelocity: BABYLON.Vector3, 
			deltaTime: number) => {
				return (currentBallPosition.add(currentBallVelocity.scale(deltaTime)));
		}
		
		const accuracy = 0.8;

		const correctedAccuracy = correctVectorPrediction(newBallPosition, currentBallPosition, accuracy);
	
		updateAIPaddlePosition(currentBallPosition.z, player2.paddleZ, correctedAccuracy)
	}

	public aiStrategyDecisionAndPlay(level: string, player2: PlayerState): void {
		if (!this.decision) {
			this.updateDecision(level);
		}
		if (this.decision.easy) {
			this.playEasyLevel(player2);
			console.log("You selected Easy level, take it easy mate")
		} else if (this.decision.hard) {
			this.playHardLevel(player2);
			console.log("You selected Hard level, Bon courage")
		} else if (this.decision.middle) {
			this.playMiddleLevel(player2);
			console.log("You selected Middle level, enjoy")
		}
	}

}