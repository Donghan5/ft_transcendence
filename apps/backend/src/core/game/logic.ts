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

	const scoreKey = side === 'left' ? 'leftScore' : 'rightScore';
	next[scoreKey] += POINT_PER_GOAL;

	if (next[scoreKey] >= WIN_SCORE) {
		next.winner = scorerId;
	}

	return next;
}

export function isGameOver(state: GameState): boolean {
	return state.winner !== null;
}

// adding sudden death logic ? -> at the future
