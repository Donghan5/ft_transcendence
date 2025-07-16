// Game logic
import { WIN_SCORE, POINT_PER_GOAL } from "./constant";
import { GameState, PlayerId } from "./types";

export function initState(): GameState {
	return { leftScore: 0, rightScore: 0, winner: null };
}

export function addPoint(
	state: GameState,
	side: 'left' | 'right',
	scorerId: PlayerId,
): GameState {
	if (state.winner) return state;

	const next: GameState = { ...state };

	if (side === 'left') next.leftScore += POINT_PER_GOAL;
	else next.rightScore += POINT_PER_GOAL;

	if (next.leftScore >= WIN_SCORE) {
		next.winner = scorerId;
	} else if (next.rightScore >= WIN_SCORE) {
		next.winner = scorerId;
	}
	return next;
}

// adding sudden death logic ? -> at the future
