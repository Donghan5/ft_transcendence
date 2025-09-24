export interface TournamentPlayer {
    id: number;
    nickname: string;
    rating: number;
    seed: number;
    isReady?: boolean;
}

export interface Match {
    id: string;
    player1: TournamentPlayer | null;
    player2: TournamentPlayer | null;
    winner: TournamentPlayer | null;
    round: number;
    matchNumber: number;
    gameId?: string;
    isReady?: boolean;
}

export interface Tournament {
    id: string;
    name: string;
    players: TournamentPlayer[];
    bracket: Match[][];
    status: 'waiting' | 'in_progress' | 'finished';
    currentRound: number;
    winner: TournamentPlayer | null;
    createdBy: number;
}