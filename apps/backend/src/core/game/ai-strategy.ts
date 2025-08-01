import { AI_LEVEL, selectLevelAI, predictBallPosition } from "./ai-logic";
import { GameState } from "@trans/common-types";
import { initState } from "./logic";

class AiStrategy {
	private gameState: GameState;
	private level: string;


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
	 * to update the game state with AI decisions
	 */
	public updateAIPaddle(game: GameState): void {
	const levelKey = (game.aiLevel?.toUpperCase() || 'MIDDLE') as keyof typeof AI_LEVEL;
	const level = AI_LEVEL[levelKey] || AI_LEVEL.MIDDLE;   // if logic implemented, this level will be set by user input

	const aiPlayer = game.player2;
	const ball = game.ball;

	// Drop out intended
	if (Math.random() < level.mistakeChance) {
        return;
    }

	if (ball.velocity.x > 0) {
		let targetZ = predictBallPosition(ball, aiPlayer.position.x);

		const errorMargin = (1 - level.accuracy) * 30;
		targetZ += (Math.random() - 0.5) * errorMargin;

		const diff = targetZ - aiPlayer.paddleZ;
		const move = diff * level.speed;

		aiPlayer.paddleZ += move;
	} else {
		const diff = 0 - aiPlayer.paddleZ;
		aiPlayer.paddleZ += diff * 0.02;
	}

	const paddleLimit = 12;
	if (aiPlayer.paddleZ > paddleLimit)
		aiPlayer.paddleZ = paddleLimit;
	if (aiPlayer.paddleZ < -paddleLimit)
		aiPlayer.paddleZ = -paddleLimit;
	}
}

export const strategy = new AiStrategy(initState('dummy-game-id'), 'middle');
