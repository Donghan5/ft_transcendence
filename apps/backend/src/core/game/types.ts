// PongGame types
export type PlayerId = string;

export interface GameState {
	leftScore: number;
	rightScore: number;
	winner: PlayerId | null;
}
