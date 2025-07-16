export type GameStatus = 'WAITING' | 'PLAYING' | 'FINISHED' | 'CANCELED';

export interface GameDTO {
  id: number;
  mode: 'PVP' | 'AI';
  status: GameStatus;
  players: { id: number; score: number }[];
  createdAt: string;
  startedAt?: string;
  finishedAt?: string;
}
