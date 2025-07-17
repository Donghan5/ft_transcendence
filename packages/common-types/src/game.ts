// packages/common-types/src/game.ts
export type GameStatus = 'WAITING' | 'PLAYING' | 'FINISHED' | 'CANCELED';

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export interface PlayerState {
  position: Vector3D;
  score: number;
  paddleZ: number;
}

export interface BallState {
  position: Vector3D;
  velocity: Vector3D;
}

export interface GameState {
  player1: PlayerState;
  player2: PlayerState;
  ball: BallState;
  player1Id: string;
  player2Id: string;
  gameId: string;
  status: 'waiting' | 'playing' | 'finished';
  lastUpdate: number;
}

export interface GameDTO {
  id: number;
  mode: 'PVP' | 'AI';
  status: GameStatus;
  players: { id: number; score: number }[];
  createdAt: string;
  startedAt?: string;
  finishedAt?: string;
}

export type GameUpdate = {
	type: 'gameState';
	payload: GameState;
} | {
    type: 'gameEnd';
    winner: string;
} | {
    type: 'playerJoined' | 'playerLeft';
    playerId: string;
}

export const initialBallVelocity: Vector3D = {
  x: 0.2,
  y: 0,
  z: 0.15,
};
