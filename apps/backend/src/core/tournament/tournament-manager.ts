import { WebSocket } from 'ws';
import { dbGet, dbRun, dbAll, getDatabase } from '../../database/helpers';
import { gameEngine } from '../game/game-engine';
import { Tournament, TournamentPlayer, Match } from '@trans/common-types';

export class TournamentManager {
    private tournaments: Map<string, Tournament> = new Map();
    private playerTournamentMap: Map<string, string> = new Map();
    private tournamentSockets = new Map<string, Map<string, WebSocket>>();

    async initializeTournaments(): Promise<void> {
        const activeTournaments = await dbAll(
            `SELECT * FROM tournaments WHERE status IN ('waiting', 'in_progress')`
        );

        for (const dbTournament of activeTournaments) {
            const tournament = await this.getTournamentInfo(dbTournament.id);
            if (tournament) {
                this.tournaments.set(tournament.id, tournament);
                tournament.players.forEach(player => {
                    this.playerTournamentMap.set(player.id, tournament.id);
                });
            }
        }
    }

    private async updateTournamentInDB(tournament: Tournament): Promise<void> {
        try {
            await dbRun(
                `UPDATE tournaments SET
                status = ?, 
                current_round = ?, 
                bracket = ?
                WHERE id = ?`,
                [
                    tournament.status,
                    tournament.currentRound,
                    JSON.stringify(tournament.bracket),
                    tournament.id
                ]
            );

            for (const player of tournament.players) {
                await dbRun(
                    `UPDATE tournament_participants 
                    SET seed = ?
                    WHERE tournament_id = ? AND user_id = ?`,
                    [player.seed, tournament.id, parseInt(player.id)]
                );
            }

            console.log(`Tournament ${tournament.id} updated successfully in DB.`);
        } catch (error) {
            console.error(`Error updating tournament ${tournament.id} in DB: ${error}`);
        }
    }

    async createTournament(creatorId: string, name: string): Promise<string> {
        const tournamentId = `tournament_${Date.now()}`;

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

        // set in memory
        this.tournaments.set(tournamentId, tournament);

        // set in database
        await dbRun(
        `INSERT INTO tournaments (id, name, created_by, status, created_at) 
         VALUES (?, ?, ?, ?, datetime('now'))`,
        [tournamentId, name, creatorId, 'waiting']
        );

        console.log(`Tournament created: ${name} by ${creatorId}. Get ready to fight!`);
        return tournamentId;
    }


    public async joinTournament(tournamentId: string, playerId: string): Promise<boolean> {
        const tournament = await this.getTournamentInfo(tournamentId); // DB에서 조회
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

        await this.addPlayerToTournament(tournament, playerId, user);
        this.broadcastTournamentUpdate(tournamentId);
        return true;
    }

    async startTournament(tournamentId: string): Promise<boolean> {
        const tournament = await this.getTournamentInfo(tournamentId);
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

        await this.updateTournamentInDB(tournament);
        this.broadcastTournamentUpdate(tournamentId);
        await this.startNextMatch(tournamentId);
        return true;
    }

    private async generateBracket(tournament: Tournament) {
        const players = [ ...tournament.players ];
        const totalPlayers = players.length;

        const nextPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(totalPlayers)));
        const byesNeeded = nextPowerOfTwo - totalPlayers;

        // Sort players by rating for seeding
        players.sort((a, b) => b.rating - a.rating);
        players.forEach((player, index) => {
            player.seed = index + 1;
        });

        const firstRound: Match[] = [];
        let matchNumber = 0;
    
        const highSeeds = players.slice(0, byesNeeded);
        const remainingPlayers = players.slice(byesNeeded);

        // case walk-over
        highSeeds.forEach(player => {
            const match: Match = {
                id: `${tournament.id}_r1_m${matchNumber}`,
                player1: player,
                player2: null,
                winner: player,
                round: 1,
                matchNumber: matchNumber++
            };
            firstRound.push(match);
        });

        for (let i = 0; i < remainingPlayers.length / 2; i++) {
            const match: Match = {
                id: `${tournament.id}_r1_m${matchNumber}`,
                player1: remainingPlayers[i],
                player2: remainingPlayers[remainingPlayers.length - 1 - i],
                winner: null,
                round: 1,
                matchNumber: matchNumber++
            };
            firstRound.push(match);
        }

        tournament.bracket.push(firstRound);

        // Generate subsequent rounds (starting from round 2 up to final round)
        let numMatchesInPreviousRound = firstRound.length;
        let round = 2;

        while (numMatchesInPreviousRound > 1) {
            const currentRound: Match[] = [];
            const numMatchesInCurrentRound = numMatchesInPreviousRound / 2;

            for (let i = 0; i < numMatchesInCurrentRound; i++) {
                const match: Match = {
                    id: `${tournament.id}_r${round}_m${i}`,
                    player1: null,
                    player2: null,
                    winner: null,
                    round: round,
                    matchNumber: i
                };
                currentRound.push(match);
            }

            tournament.bracket.push(currentRound);
            numMatchesInPreviousRound = numMatchesInCurrentRound;
            round++;
        }

        for (const round of tournament.bracket) {
            for (const match of round) {
                await dbRun(
                    `INSERT INTO tournament_matches (id, tournament_id, round, match_number, player1_id, player2_id, winner_id, status)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        match.id,
                        tournament.id,
                        match.round,
                        match.matchNumber,
                        match.player1 ? parseInt(match.player1.id) : null,
                        match.player2 ? parseInt(match.player2.id) : null,
                        match.winner ? parseInt(match.winner.id) : null,
                        match.winner ? 'walkover' : 'waiting'
                    ]
                );
            }
        }
    }
    
    private async startNextMatch(tournamentId: string) {
        const tournament = await this.getTournamentInfo(tournamentId);
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

    /**
     * @description Starts polling for the end of a tournament game.
     * @param gameId The ID of the game.
     * @param tournamentId The ID of the tournament.
     * @param match The match object.
     * @fix --> It will be changed to WebSocket method
     */
    private startGameEndPolling(gameId: string, tournamentId: string, match: Match) {
        const checkInterval = setInterval(() => {
            const gameState = gameEngine.getGameState(gameId);
            
            if (!gameState) {
                clearInterval(checkInterval);
                return;
            }

            if (gameState.status === 'finished') {
                clearInterval(checkInterval);
                this.handleGameEnd(gameId, tournamentId, match.id, gameState);
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(checkInterval);
        }, 10 * 60 * 1000);
    }
 
    /**
     * @description Handles the end of a tournament game.
     * @param gameId The ID of the game.
     * @param tournamentId The ID of the tournament.
     * @param matchId The ID of the match.
     * @param gameState The state of the game.
     * @returns 
     */
    private async handleGameEnd(gameId: string, tournamentId: string, matchId: string, gameState: any) {
        const db = await getDatabase();

        try {
            await dbRun('BEGIN TRANSACTION');

            const matchInDb = await dbGet('SELECT winner_id FROM tournament_matches WHERE id = ?', [matchId]);
            if (matchInDb && matchInDb.winner_id !== null) {
                console.log(`Match ${matchId} has already been processed.`);
                await dbRun('COMMIT');
                return;
            }

            const tournament = await this.getTournamentInfo(tournamentId);
            if (!tournament) {
                throw new Error(`Tournament ${tournamentId} not found`);
            }

            const match = this.findMatch(tournament, matchId);
            if (!match) {
                throw new Error(`Match ${matchId} not found in tournament ${tournamentId}`);
            }

            const winnerId = gameState.player1.score > gameState.player2.score ? gameState.player1.id : gameState.player2.id;

            match.winner = winnerId === match.player1?.id ? match.player1 : match.player2;

            await this.placeWinnerInNextRound(tournament, match);
    
            await dbRun('COMMIT');

            console.log(`Successfully processed game ${gameId} for match ${matchId}`);
            this.broadcastTournamentUpdate(tournamentId);

            setTimeout(() => {
                this.startNextMatch(tournamentId);
            }, 3000);
        } catch (error) {
            console.error(`Error processing game ${gameId} for match ${matchId}:`, error);
            await dbRun('ROLLBACK');
        }
    }

    /**
     * @description Places the winner of the current match into the next round of the tournament.
     * @param tournament The tournament object.
     * @param match The match object.
     * @returns 
     */
    private async placeWinnerInNextRound(tournament: Tournament, match: Match) {
        await dbRun(
            `UPDATE tournament_matches SET winner_id = ?, status = 'finished', game_id = ? WHERE id = ?`,
            [match.winner ? parseInt(match.winner.id) : null, match.gameId, match.id]
        );

        if (match.round >= tournament.bracket.length) {
            tournament.winner = match.winner;
            tournament.status = 'finished';
            await this.saveTournamentResults(tournament); 
            console.log(`Tournament ${tournament.name} finished. Winner: ${match.winner?.nickname}`);
            return;
        }

        const nextRoundIndex = match.round; 
        const nextMatchIndex = Math.floor(match.matchNumber / 2);
        const nextMatch = tournament.bracket[nextRoundIndex][nextMatchIndex];

        const playerFieldToUpdate = match.matchNumber % 2 === 0 ? 'player1_id' : 'player2_id';

        await dbRun(
            `UPDATE tournament_matches SET ${playerFieldToUpdate} = ? WHERE id = ?`,
            [match.winner ? parseInt(match.winner.id) : null, nextMatch.id]
        );
    }


    private isRoundComplete(tournament: Tournament): boolean {
        const currentRound = tournament.bracket[tournament.currentRound - 1];
        return currentRound.every(match => match.winner !== null || (!match.player1 || !match.player2));
    }

    private advanceToNextRound(tournament: Tournament) {
        tournament.currentRound++;

        if (tournament.currentRound <= tournament.bracket.length) {
            console.log(`Advancing to round ${tournament.currentRound} of tournament ${tournament.name}`);
            this.updateTournamentInDB(tournament);
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

    // I'm not sure of the return value
    public async inviteToTournament(tournamentId: string, playerId: string): Promise<boolean> {
        const tournament = this.tournaments.get(tournamentId);
        if (!tournament || tournament.status !== 'waiting') {
            console.error(`Tournament with ID ${tournamentId} not found or already started.`);
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

        if (this.playerTournamentMap.has(playerId)) {
            console.error(`Player ${playerId} is already in another tournament.`);
            return false;
        }

        await this.addPlayerToTournament(tournament, playerId, user);

        return true;
    }

    async getTournamentPlayers(tournamentId: string): Promise<TournamentPlayer[]> {
        const players = await dbAll(
            `SELECT u.id, u.nickname, u.rating, tp.seed 
            FROM tournament_participants tp
            JOIN users u ON u.id = tp.user_id
            WHERE tp.tournament_id = ?`,
            [tournamentId]
        );

        return players.map(p => ({
            id: p.id.toString(),
            nickname: p.nickname,
            rating: p.rating || 1000,
            seed: p.seed || 0
        }));
    }

    /**
     * Get information about a specific tournament.
     * @param tournamentId The ID of the tournament to retrieve.
     * @returns The tournament information or null if not found.
     */
    async getTournamentInfo(tournamentId: string): Promise<Tournament | null> {
        const tournamentData = await dbGet(`SELECT * FROM tournaments WHERE id = ?`, [tournamentId]);

        if (!tournamentData) return null;

        const matchesData = await dbAll(`SELECT * FROM tournament_matches WHERE tournament_id = ? ORDER BY round, match_number`, [tournamentId]);
        const players = await this.getTournamentPlayers(tournamentId); // 참가자 정보 가져오기
        
        const bracket: Match[][] = [];
        matchesData.forEach(match => {
            while (bracket.length < match.round) {
                bracket.push([]);
            }
            bracket[match.round - 1][match.match_number] = {
                id: match.id,
                player1: players.find(p => p.id === match.player1_id?.toString()) || null,
                player2: players.find(p => p.id === match.player2_id?.toString()) || null,
                winner: players.find(p => p.id === match.winner_id?.toString()) || null,
                round: match.round,
                matchNumber: match.match_number,
                gameId: match.game_id,
            };
        });

        const tournament: Tournament = {
            id: tournamentData.id,
            name: tournamentData.name,
            players: players,
            bracket: bracket,
            status: tournamentData.status,
            currentRound: tournamentData.current_round,
            winner: players.find(p => p.id === tournamentData.winner_id?.toString()) || null,
            createdBy: tournamentData.created_by.toString(),
        };

        return tournament;
    }

    private async loadTournamentFromDB(tournamentId: string): Promise<Tournament | null> {
        const dbTournament = await dbGet(
            `SELECT * FROM tournaments WHERE id = ? AND status IN ('waiting', 'in_progress')`,
            [tournamentId]
        );

        if (!dbTournament) return null;

        const participants = await dbAll(
            `SELECT u.id, u.nickname, u.rating, tp.seed 
            FROM tournament_participants tp
            JOIN users u ON u.id = tp.user_id
            WHERE tp.tournament_id = ?`,
            [tournamentId]
        );

        const tournament: Tournament = {
            id: dbTournament.id,
            name: dbTournament.name,
            players: participants.map(p => ({
                id: p.id.toString(), 
                nickname: p.nickname,
                rating: p.rating || 1000,
                seed: p.seed || 0
            })),
            bracket: dbTournament.bracket ? JSON.parse(dbTournament.bracket) : [], 
            status: dbTournament.status,
            currentRound: dbTournament.current_round || 0,
            winner: null,
            createdBy: dbTournament.created_by.toString()
        };

        if (tournament.id) {
            tournament.players.forEach(player => {
                this.playerTournamentMap.set(player.id, tournament.id);
            });
        }

        return tournament;
    }

    async getActiveTournaments(): Promise<Tournament[]> {
        const activeTournaments = await dbAll(
            `SELECT * FROM tournaments WHERE status IN ('waiting', 'in_progress')`
        );
        
        const tournaments: Tournament[] = [];
        
        for (const dbTournament of activeTournaments) {
            let tournament: Tournament | undefined | null = this.tournaments.get(dbTournament.id);
            
            if (!tournament) {
                tournament = await this.loadTournamentFromDB(dbTournament.id);
                if (tournament) {
                    this.tournaments.set(dbTournament.id, tournament);
                }
            }
            
            if (tournament) {
                tournaments.push(tournament);
            }
        }
        
        return tournaments;
    }

    async getCurrentMatches(tournamentId: string): Promise<Match[]> {
        const tournament = await this.getTournamentInfo(tournamentId);
        if (!tournament || tournament.currentRound === 0) {
            return [];
        }

        const currentRound = tournament.bracket[tournament.currentRound - 1];
        return currentRound.filter(m => m.gameId && !m.winner);
    }

    async cancelTournament(tournamentId: string, userId: string): Promise<boolean> {
        const tournament = await this.getTournamentInfo(tournamentId); // DB에서 조회

        console.log('Cancelling tournament:', tournamentId);
        console.log('Tournament found:', tournament);
        console.log('Tournament createdBy:', tournament?.createdBy);
        console.log('User ID:', userId);

        if (!tournament) {
            console.error('Tournament not found');
            return false;
        }

        if (tournament.createdBy !== userId) {
            console.error('User is not the creator');
            return false;
        }

        if (tournament.status !== 'waiting') {
            console.error('Tournament already started');
            return false;
        }

        try {
            await dbRun(`DELETE FROM tournaments WHERE id = ?`, [tournamentId]);
            await dbRun(`DELETE FROM tournament_participants WHERE tournament_id = ?`, [tournamentId]);

            this.tournaments.delete(tournamentId);
            
            tournament.players.forEach(player => {
                if (this.playerTournamentMap.get(player.id) === tournamentId) {
                    this.playerTournamentMap.delete(player.id);
                }
            });

            console.log('Tournament cancelled successfully');
            return true;
        } catch (error) {
            console.error('Error cancelling tournament:', error);
            return false;
        }
    }

    /**
     * @description tool to add a player to a tournament (both in memory and database)
     * @param tournament 
     * @param playerId 
     * @param user 
     */
    private async addPlayerToTournament(
        tournament: Tournament, 
        playerId: string, 
        user: any
    ): Promise<void> {
        tournament.players.push({
            id: playerId,
            nickname: user.nickname,
            rating: user.rating || 1000,
            seed: 0
        });

        this.playerTournamentMap.set(playerId, tournament.id);

        await dbRun(
            `INSERT INTO tournament_participants (tournament_id, user_id, seed)
            VALUES (?, ?, ?)`,
            [tournament.id, parseInt(playerId), 0]
        );
    }

    /**
     * @description Get the tournament ID that a user is currently participating in
     * @param playerId 
     * @returns string | null - tournament ID or null if not participating
     */
    async getUserCurrentTournament(playerId: string): Promise<string | null> {
        let tournamentId = this.playerTournamentMap.get(playerId) || null;

        if (!tournamentId) {
            const result = await dbGet(
                `SELECT tournament_id FROM tournament_participants tp
                JOIN tournaments t ON tp.tournament_id = t.id
                WHERE tp.user_id = ? AND t.status IN ('waiting', 'in_progress')`,
                [parseInt(playerId)]
            );
            
            if (result) {
                tournamentId = result.tournament_id;
                if (tournamentId) {
                    this.playerTournamentMap.set(playerId, tournamentId);
                }
            }
        }
        
        return tournamentId;
    }

    
    /**
     * @description check if a user is the creator of a tournament
     * @param tournamentId 
     * @param userId 
     * @returns boolean
     */
    async isUserTournamentCreator(tournamentId: string, userId: string): Promise<boolean> {
        const tournament = await this.getTournamentInfo(tournamentId);
        return tournament ? tournament.createdBy === userId : false;
    }
    
    /**
     * @description Check if a suer is participating in a tournament
     * @param tournamentId 
     * @param userId 
     * @returns boolean
     */
    async isUserInTournament(tournamentId: string, userId: string): Promise<boolean> {
        const tournament = await this.getTournamentInfo(tournamentId);
        return tournament ? tournament.players.some(p => p.id === userId) : false;
    }

    async leaveTournament(tournamentId: string, userId: string): Promise<boolean> {
        const tournament = await this.getTournamentInfo(tournamentId); // DB에서 조회
        if (!tournament) {
            console.error('Tournament not found');
            return false;
        }

        if (tournament.status !== 'waiting') {
            console.error('Tournament already started');
            return false;
        }
        
        const playerIndex = tournament.players.findIndex(p => p.id === userId);
        if (playerIndex === -1) {
            console.error('User is not in the tournament');
            return false;
        }

        try {
            const result = await dbRun(
                `DELETE FROM tournament_participants WHERE tournament_id = ? AND user_id = ?`,
                [tournamentId, parseInt(userId)]
            );

            if (result.changes > 0) {
                tournament.players.splice(playerIndex, 1);
                this.playerTournamentMap.delete(userId);
                this.broadcastTournamentUpdate(tournamentId);
                console.log(`User ${userId} removed from tournament ${tournamentId} in DB`);
                return true;
            } else {
                console.error(`User ${userId} not found in tournament ${tournamentId} in DB`);
                return false;
            }
        } catch (error) {
            console.error(`Error removing user ${userId} from tournament ${tournamentId} in DB: ${error}`);
            return false;
        }
    }

    private async broadcastTournamentUpdate(tournamentId: string): Promise<void> {
        const sockets = this.tournamentSockets.get(tournamentId);
         if (!sockets || sockets.size === 0) return;

         try {
            const tournament = await this.getTournamentInfo(tournamentId);
            if (!tournament) return;

            const message = JSON.stringify({
                type: 'tournamentUpdate',
                payload: tournament
            });

            sockets.forEach((ws, userId) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(message);
                }
            });
        } catch (error) {
            console.error(`Error broadcasting tournament update for ${tournamentId}: ${error}`);
        }
    }

    public addSocket(tournamentId: string, userId: string, ws: WebSocket): void {
        if (!this.tournamentSockets.has(tournamentId)) {
            this.tournamentSockets.set(tournamentId, new Map());
        }

        this.tournamentSockets.get(tournamentId)?.set(userId, ws);
        console.log(`[WS] User ${userId} connected to tournament ${tournamentId}`);

        this.broadcastTournamentUpdate(tournamentId);
    }

    public removeSocket(tournamentId: string, userId: string): void {
        const sockets = this.tournamentSockets.get(tournamentId);

        if (sockets) {
            sockets.delete(userId);
            console.log(`[WS] User ${userId} disconnected from tournament ${tournamentId}`);
            
            if (sockets.size === 0) {
                this.tournamentSockets.delete(tournamentId);
            }
        }
    }
}

export const tournamentManager = new TournamentManager();