import { AI_LEVEL, selectLevelAI, predictBallPosition } from "./ai-logic";
import { GameState } from "@trans/common-types";
import { initState } from "./logic";

class AiStrategy {
	private gameState: GameState;
	private level: string;

	/**
	 * I don't have any idea how to use it...
	 */
	private AI_STRATEGIES = {
		DEFENSIVE: {
			targetOffset: 0,
			description: "Defensive: Stays near the center to block shots.",
		},
		BALANCED: {
			targetOffset: 5,
			description: "Balanced: Mixes offense and defense.",
		},
		AGGRESSIVE: {
			targetOffset: 10,
			description: "Aggressive: Moves forward to attack more.",
		}
	}

	/**
	 * @param gameState
	 * @param level : input by user choices
	 */
	constructor(gameState: GameState, level: string) {
		this.gameState = gameState;
		this.level = level;
	}

	public getLevel(): string {
		return this.level;
	}

	/**
	 * @description to update the game state with AI decisions
	 * @param game : current game state
	 */
	public updateAIPaddle(game: GameState): void {
		const levelKey = (game.aiLevel?.toUpperCase() || 'MIDDLE') as keyof typeof AI_LEVEL;
		const level = AI_LEVEL[levelKey] || AI_LEVEL.MIDDLE;   // if logic implemented, this level will be set by user input
		const humanPlayer = game.player1;
		const aiPlayer = game.player2;
		const ball = game.ball;

		// Drop out intended
		if (Math.random() < level.mistakeChance) {
			return;
		}

		const scoreDiff = aiPlayer.score - humanPlayer.score;
		let strategy;

		// Simple strategy selection based on score difference (I'm not sure that it works well)
		if (scoreDiff >= -2) {
			strategy = this.AI_STRATEGIES.DEFENSIVE;
		} else if (scoreDiff >= 2) {
			strategy = this.AI_STRATEGIES.AGGRESSIVE;
		} else {
			strategy = this.AI_STRATEGIES.BALANCED;
		}

		if (ball.velocity.x > 0) {
			let targetZ = predictBallPosition(ball, aiPlayer.position.x, level);

			const diff = targetZ - aiPlayer.paddleZ;
			const move = diff * level.speed;

			aiPlayer.paddleZ += move;
		} else {
			const diff = 0 - aiPlayer.paddleZ;

			aiPlayer.paddleZ += diff * 0.08;

			if (aiPlayer.justHitBall) {
				aiPlayer.justHitBall = false; // Reset the flag after moving back to center
			}
		}

		const paddleLimit = 13;  // Paddle movement boundaries (maybe 13...? / if not, change it to 12)
		if (aiPlayer.paddleZ > paddleLimit)
			aiPlayer.paddleZ = paddleLimit;
		if (aiPlayer.paddleZ < -paddleLimit)
			aiPlayer.paddleZ = -paddleLimit;
	}
}

export const strategy = new AiStrategy(initState('dummy-game-id'), 'middle');
