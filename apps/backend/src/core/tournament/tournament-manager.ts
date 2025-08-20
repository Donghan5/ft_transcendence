import { dbGet, dbRun, dbAll } from '../../database/helpers';
import { gameEngine } from '../game/game-engine';

interface TournamentPlayer {
    id: string;
    nickname: string;
    rating: number;
    seed: number
}

interface Match {
    id: string;
    player1: TournamentPlayer | null;
    player2: TournamentPlayer | null;
    winner: TournamentPlayer | null;
    round: number;
    matchNumber: number;
    gameId?: string; // Optional game ID if the match is played
}

interface Tournament {
    id: string;
    name: string;
    players: TournamentPlayer[];
    bracket: Match[][];
    status: 'waiting' | 'in_progress' | 'finished';
    currentRound: number;
    winner: TournamentPlayer | null;
    createdBy: string;
}

export class TournamentManager {
    private tournaments: Map<string, Tournament> = new Map();
    private playerTournamentMap: Map<string, string> = new Map();

    createTournament(creatorId: string, name: string): string {
        const tournamentId = 'tournament_${Date.now()}';

        const tournament: Tournament = {
            id: tournamentId,
            name,
            players: [],
            bracket: [],
            status: 'waiting',
            currentRound: 0,
            winner: null,
            createdBy: creatorId
        };

        this.tournaments.set(tournamentId, tournament);
        console.log(`Tournament created: ${name} by ${creatorId}. Get ready to fight!`);
        return tournamentId;
    }


    async joinTournament(tournamentId: string, playerId: string): Promise<boolean> {
        const tournament = this.tournaments.get(tournamentId);
        if (!tournament || tournament.status !== 'waiting') {
            console.error(`Tournament with ID ${tournamentId} not found.`);
            return false;
        }

        if (tournament.players.some(p => p.id === playerId)) {
            console.error(`Player ${playerId} is already in the tournament.`);
            return false;
        }

        const user = await dbGet(
            `SELECT id, nickname, rating FROM users WHERE id = ?`, [parseInt(playerId)]
        );

        if (!user) {
            console.error(`User with ID ${playerId} not found.`);
            return false;
        }

        tournament.players.push({
            id: playerId,
            nickname: user.nickname,
            rating: user.rating || 1000, // Default rating if not set
            seed: 0
        });

        this.playerTournamentMap.set(playerId, tournamentId);
        return true;
    }

    startTournament(tournamentId: string): boolean {
        const tournament = this.tournaments.get(tournamentId);
        if (!tournament || tournament.status !== 'waiting') {
            console.error(`Tournament with ID ${tournamentId} not found or already started.`);
            return false;
        }

        if (tournament.players.length < 3) return false;

        // Sort players by rating for seeding
        tournament.players.sort((a, b) => b.rating - a.rating);

        // Assign seeds
        tournament.players.forEach((player, index) => {
            player.seed = index + 1;
        });

        // Create initial bracket
        this.generateBracket(tournament);
        tournament.status = 'in_progress';
        tournament.currentRound = 1;

        this.startNextMatch(tournamentId);
        return true;
    }

    private generateBracket(tournament: Tournament) {
        const players = [ ...tournament.players ];
        const totalPlayers = players.length;

        const nextPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(totalPlayers)));
        const byesNeeded = nextPowerOfTwo - totalPlayers;

        const firstRound: Match[] = [];
        let matchNumber = 0;
        for (let i = 0; i < nextPowerOfTwo / 2; i++) {
            const match: Match = {
                id: `${tournament.id}_r1_m${matchNumber}`,
                player1: null,
                player2: null,
                winner: null,
                round: 1,
                matchNumber: matchNumber++,
            };

            if (i < byesNeeded) {  // WALKOVER CASE
                match.player1 = players[i];
                match.winner = players[i];
            } else {
                const player1Index = i;
                const player2Index = nextPowerOfTwo - 1 - i;

                if (player1Index < players.length) {
                    match.player1 = players[player1Index];
                }
                if (player2Index < players.length) {
                    match.player2 = players[player2Index];
                }
            }

            firstRound.push(match);
        }

        tournament.bracket.push(firstRound);

        let prevRoundMatches = firstRound.length;
        let round = 2;
    
        while (prevRoundMatches > 1) {
            const roundMatches: Match[] = [];
            prevRoundMatches /= 2;

            for (let i = 0; i < prevRoundMatches; i++) {
                const match: Match = {
                    id: `${tournament.id}_r${round}_m${i}`,
                    player1: null,
                    player2: null,
                    winner: null,
                    round: round,
                    matchNumber: i
                };

                tournament.bracket.push(roundMatches);
                round++;
            }
        }
    }

    private async startNextMatch(tournamentId: string) {
        const tournament = this.tournaments.get(tournamentId);
        if (!tournament) return;

        const currentRoundMatches = tournament.bracket[tournament.currentRound - 1];

        const nextMatch = currentRoundMatches.find(m => !m.winner && m.player1 && m.player2);

        if (nextMatch) {
            const gameId = await this.createTournamentGame(
                nextMatch.player1!.id,
                nextMatch.player2!.id,
                nextMatch.player1!.nickname,
                nextMatch.player2!.nickname,
            );

            nextMatch.gameId = gameId;

            this.startGameEndPolling(gameId, tournamentId, nextMatch);

        } else if (this.isRoundComplete(tournament)) {
            this.advanceToNextRound(tournament);
        }
    }


    private async createTournamentGame(
        player1Id: string,
        player2Id: string,
        player1Nickname: string,
        player2Nickname: string
    ): Promise<string> {
        const gameId = gameEngine.createGame(
            player1Id,
            player2Id,
            'TOURNAMENT',
            undefined, // AI level not used in tournaments
            player1Nickname,
            player2Nickname
        );

        console.log(`Tournament game created: ${gameId} between ${player1Nickname} and ${player2Nickname}`);
        return gameId;
    }

    private startGameEndPolling(gameId: string, tournamentId: string, matchId: string) {
        const checkInterval = setInterval(() => {
            const gameState = gameEngine.getGameState(gameId);
            
            if (!gameState) {
                clearInterval(checkInterval);
                return;
            }

            if (gameState.status === 'finished') {
                clearInterval(checkInterval);
                this.handleGameEnd(gameId, tournamentId, matchId, gameState);
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(checkInterval);
        }, 10 * 60 * 1000);
    }
 
    private async handleGameEnd(gameId: string, tournamentId: string, matchId: Match, gameState: any) {
        const tournament = this.tournaments.get(tournamentId);
        
        if (!tournament) return;

        const match = this.findMatch(tournament, matchId);
        if (!match) return;

        let winnerId: string;
        if (gameState.player1.score > gameState.player2.score) {
            winnerId = gameState.player1.id;
        } else {
            winnerId = gameState.player2.id;
        }

        match.winner = winnerId === match.player1?.id ? match.player1 : match.player2;

        this.placeWinnerInNextRound(tournament, match);

        setTimeout(() => {
            this.startNextMatch(tournamentId);
        }, 3000);
    }

    private placeWinnerInNextRound(tournament: Tournament, match: Match) {
        if (match.round >= tournament.bracket.length) {  // if it's the last round (finals)
            tournament.winner = match.winner;
            tournament.status = 'finished';
            this.saveTournamentResults(tournament);
            console.log(`Tournament ${tournament.name} finished. Winner: ${match.winner?.nickname}`);
            return;
        }

        const nextRound = tournament.bracket[match.round];
        const nextMatchIndex = Math.floor(match.matchNumber / 2);
        let nextMatch = nextRound[nextMatchIndex];

        if (match.matchNumber % 2 === 0) { // Put winner side
            nextMatch.player1 = match.winner;
        }
        else {
            nextMatch.player2 = match.winner;
        }
    }

    private isRoundComplete(tournament: Tournament): boolean {
        const currentRound = tournament.bracket[tournament.currentRound - 1];
        return currentRound.every(match => match.winner !== null || (!match.player1 || !match.player2));
    }

    private advanceToNextRound(tournament: Tournament) {
        tournament.currentRound++;

        if (tournament.currentRound <= tournament.bracket.length) {
            console.log(`Advancing to round ${tournament.currentRound} of tournament ${tournament.name}`);
            this.startNextMatch(tournament.id);
        } else {
            tournament.status = 'finished';
            this.saveTournamentResults(tournament);
        }
    }

    private findMatch(tournament: Tournament, matchId: string): Match | null {
        for (const round of tournament.bracket) {
            const match = round.find(m => m.id === matchId);
            if (match) return match;
        }

        return null;
    }

    private async saveTournamentResults(tournament: Tournament) {
        try {
            // Create tournament if not exists (commit for now)
            // await dbRun(`
            //     CREATE TABLE IF NOT EXISTS tournaments (
            //         id TEXT PRIMARY KEY,
            //         name TEXT NOT NULL,
            //         winner_id INTEGER,
            //         bracket TEXT,
            //         created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            //         ended_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            //         FOREIGN KEY (winner_id) REFERENCES users(id)
            //     )
            // `);

            await dbRun(
                `INSERT OR REPLACE INTO tournaments (id, name, winner_id, bracket, ended_at)
                VALUES (?, ?, ?, ?, datetime('now'))`,
                [
                    tournament.id,
                    tournament.name,
                    tournament.winner ? parseInt(tournament.winner.id) : null,
                    JSON.stringify(tournament.bracket)
                ]
            );

            console.log(`Tournament ${tournament.name} results saved successfully.`);

            // Create participants table if not exists (skip for now)

            for (let i = 0; i < tournament.players.length; i++) {
                await dbRun(
                    `INSERT OR REPLACE INTO tournament_participants (tournament_id, user_id, placement)
                    VALUES (?, ?, ?)`,
                    [
                        tournament.id,
                        parseInt(tournament.players[i].id),
                        i + 1, // Placement is 1-based index
                    ]
                )
            }

            await this.updateLeaderboard(tournament);
        } catch (error) {
            console.error(`Error saving tournament results: ${error}`);
        }
    }

    private async updateLeaderboard(tournament: Tournament) {
        try {
            const points = {
                winner: 100,
                finalist: 50,
                semiFinalist: 25, // Assuming semi-finalists get 25 points (not sure)
                quarterFinalist: 10
            };

            if (tournament.winner) {
                await dbRun(
                    `UPDATE users SET tournament_points = tournament_points + ?, tournament_wins = tournament_wins + 1
                    WHERE id = ?`,
                    [points.winner, parseInt(tournament.winner.id)]
                );
            }

            const finalMatch = tournament.bracket[tournament.bracket.length - 1][0];
            const finalist = finalMatch.player1?.id === tournament.winner?.id ? finalMatch.player2 : finalMatch.player1;

            if (finalist) {
                await dbRun(
                    `UPDATE users SET tournament_points = tournament_points + ?
                    WHERE id = ?`,
                    [points.finalist, parseInt(finalist.id)]
                );
            }
        } catch (error) {
            console.error(`Error updating leaderboard: ${error}`);
        }
    }

    getTournamentInfo(tournamentId: string): Tournament | null {
        return this.tournaments.get(tournamentId) || null;
    }

    getActiveTournaments(): Tournament[] {
        return Array.from(this.tournaments.values()).filter(t => t.status !== 'finished');
    }

    getCurrentMatches(tournamentId: string): Match[] {
        const tournament = this.tournaments.get(tournamentId);
        if (!tournament || tournament.currentRound === 0) {
            return [];
        }

        const currentRound = tournament.bracket[tournament.currentRound - 1];
        return currentRound.filter(m => m.gameId && !m.winner);
    }
}

export const tournamentManager = new TournamentManager();