import { AI_LEVEL, selectLevelAI, predictBallPosition } from "./ai-logic";
import { BallState, GameState, PlayerState,initialBallPosition, initialBallVelocity, Vector3D } from "@trans/common-types";
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
	const level = AI_LEVEL.MIDDLE;   // if logic implemented, this level will be set by user input

	const aiPlayer = game.player2;
	const ball = game.ball;

	if (ball.velocity.x > 0) {
		let targetZ = predictBallPosition(ball, aiPlayer.position.x);

		const errorMargin = (1 - level.accuracy) * 280;
		targetZ += (Math.random() - 0.5) * errorMargin;

		const diff = targetZ - aiPlayer.paddleZ;
		const move = diff * level.speed;

		aiPlayer.paddleZ += move;
	} else {
		const diff = 0 - aiPlayer.paddleZ;
		aiPlayer.paddleZ += diff * 0.02;
	}

	const paddleLimit = 120;
	if (aiPlayer.paddleZ > paddleLimit)
		aiPlayer.paddleZ = paddleLimit;
	if (aiPlayer.paddleZ < -paddleLimit)
		aiPlayer.paddleZ = -paddleLimit;
	}
}

export const strategy = new AiStrategy(initState('gameId'), 'middle');
