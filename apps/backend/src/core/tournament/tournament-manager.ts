// apps/backend/src/core/tournament/tournament-manager.ts

import { Tournament, BracketMatch, TournamentPlayer, TournamentHistory } from '../../../../../packages/common-types/src/tournament';
import { dbGet, dbRun, dbAll } from '../../database/helpers';
import { WebSocket } from 'ws';

export class TournamentManager {
    private tournaments = new Map<string, Tournament>();
    private sockets = new Map<string, Map<string, WebSocket>>(); // tournamentId -> userId -> socket
    private activeTournamentsSockets = new Set<WebSocket>();

    constructor() {
        this.loadActiveTournaments();
    }


    public addActiveTournamentsSocket(ws: WebSocket) {
        this.activeTournamentsSockets.add(ws);
        this.sendActiveTournaments(ws);
    }

    public removeActiveTournamentsSocket(ws: WebSocket) {
        this.activeTournamentsSockets.delete(ws);
    }

    private async sendActiveTournaments(ws: WebSocket) {
        if (ws.readyState !== WebSocket.OPEN) return;

        const tournaments = await this.getActiveTournaments();
        const message = JSON.stringify({ type: 'activeTournaments', payload: tournaments });
        this.activeTournamentsSockets.forEach(ws => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(message);
            }
        });
    }

    public async broadcastActiveTournamentsUpdate(): Promise<void> {
        const tournaments = await this.getActiveTournaments();
        const message = JSON.stringify({ type: 'activeTournaments', payload: tournaments });
        this.activeTournamentsSockets.forEach(ws => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(message);
            }
        });
    }

    // Load active tournaments from database on startup
    private async loadActiveTournaments() {
        try {
            const tournaments = await dbAll(`
                SELECT t.*, u.nickname as host_nickname
                FROM tournaments t
                LEFT JOIN users u ON t.created_by = u.id
                WHERE t.status IN ('waiting', 'active')
            `);

            for (const tournamentData of tournaments) {
                const tournament = await this.buildTournamentFromDb(tournamentData);
                if (tournament) {
                    this.tournaments.set(tournament.id, tournament);
                }
            }

            console.log(`Loaded ${this.tournaments.size} active tournaments`);
        } catch (error) {
            console.error('Error loading active tournaments:', error);
        }
    }

    private async buildTournamentFromDb(tournamentData: any): Promise<Tournament | undefined> {
        try {
            // Get players
            const players = await dbAll(`
                SELECT u.id, u.nickname, u.rating, u.avatar_url
                FROM tournament_participants tp
                JOIN users u ON tp.user_id = u.id
                WHERE tp.tournament_id = ?
            `, [tournamentData.id]);

            // Get bracket matches
            const matches = await dbAll(`
                SELECT tm.*, 
                    p1.nickname as player1_nickname, p1.rating as player1_rating, p1.avatar_url as player1_avatar,
                    p2.nickname as player2_nickname, p2.rating as player2_rating, p2.avatar_url as player2_avatar,
                    w.nickname as winner_nickname, w.rating as winner_rating, w.avatar_url as winner_avatar
                FROM tournament_matches tm
                LEFT JOIN users p1 ON tm.player1_id = p1.id
                LEFT JOIN users p2 ON tm.player2_id = p2.id
                LEFT JOIN users w ON tm.winner_id = w.id
                WHERE tm.tournament_id = ?
                ORDER BY tm.round, tm.position
            `, [tournamentData.id]);

            const tournament: Tournament = {
                id: tournamentData.id,
                name: tournamentData.name,
                hostId: tournamentData.created_by.toString(),
                players: players.map(p => ({
                    id: p.id.toString(),
                    nickname: p.nickname,
                    rating: p.rating,
                    avatarUrl: p.avatar_url || '/default-avatar.png'
                })),
                bracket: matches.map(m => ({
                    id: m.id,
                    player1: m.player1_id ? {
                        id: m.player1_id.toString(),
                        nickname: m.player1_nickname,
                        rating: m.player1_rating,
                        avatarUrl: m.player1_avatar || '/default-avatar.png'
                    } : null,
                    player2: m.player2_id ? {
                        id: m.player2_id.toString(),
                        nickname: m.player2_nickname,
                        rating: m.player2_rating,
                        avatarUrl: m.player2_avatar || '/default-avatar.png'
                    } : null,
                    winner: m.winner_id ? {
                        id: m.winner_id.toString(),
                        nickname: m.winner_nickname,
                        rating: m.winner_rating,
                        avatarUrl: m.winner_avatar || '/default-avatar.png'
                    } : null,
                    round: m.round,
                    position: m.position,
                    status: m.status,
                    confirmations: m.confirmations ? JSON.parse(m.confirmations) : [],
                    gameId: m.game_id
                })),
                status: tournamentData.status,
                currentRound: tournamentData.current_round || 1,
                maxPlayers: tournamentData.max_players || 8,
                createdAt: tournamentData.created_at,
                finishedAt: tournamentData.finished_at,
                winner: tournamentData.winner_id ? players.find(p => p.id === tournamentData.winner_id) : undefined
            };

            return tournament;
        } catch (error) {
            console.error('Error building tournament from DB:', error);
            return undefined;
        }
    }

    async createTournament(hostId: string, name: string, maxPlayers: number = 8): Promise<string> {
        const tournamentId = `tournament_${Date.now()}`;
        
        // Check if user exists
        const user = await dbGet(`SELECT id, nickname, rating FROM users WHERE id = ?`, [parseInt(hostId)]);
        if (!user) {
            throw new Error('User not found');
        }

        const tournament: Tournament = {
            id: tournamentId,
            name,
            hostId,
            players: [],
            bracket: [],
            status: 'waiting',
            currentRound: 1,
            maxPlayers,
            createdAt: new Date().toISOString()
        };

        // Save to database
        await dbRun(`
            INSERT INTO tournaments (id, name, created_by, status, current_round, max_players, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [tournamentId, name, parseInt(hostId), 'waiting', 1, maxPlayers, tournament.createdAt]);

        // Store in memory
        this.tournaments.set(tournamentId, tournament);

        console.log(`Tournament created: ${name} by ${hostId}`);
        return tournamentId;
    }

    async joinTournament(tournamentId: string, userId: string): Promise<boolean> {
        const tournament = this.tournaments.get(tournamentId);
        if (!tournament) {
            return false;
        }

        if (tournament.status !== 'waiting') {
            return false;
        }

        if (tournament.players.length >= tournament.maxPlayers) {
            return false;
        }

        // Check if already joined
        if (tournament.players.some(p => p.id === userId)) {
            return true; // Already joined
        }

        // Get user info
        const user = await dbGet(`SELECT id, nickname, rating, avatar_url FROM users WHERE id = ?`, [parseInt(userId)]);
        if (!user) {
            return false;
        }

        const player: TournamentPlayer = {
            id: userId,
            nickname: user.nickname,
            rating: user.rating,
            avatarUrl: user.avatar_url || '/default-avatar.png'
        };

        // Add to tournament
        tournament.players.push(player);

        // Save to database
        await dbRun(`
            INSERT INTO tournament_participants (tournament_id, user_id)
            VALUES (?, ?)
        `, [tournamentId, parseInt(userId)]);

        // Notify all connected clients
        this.broadcastToTournament(tournamentId, {
            type: 'player_joined',
            players: tournament.players
        });

        console.log(`Player ${user.nickname} joined tournament ${tournament.name}`);
        return true;
    }

    async startTournament(tournamentId: string): Promise<boolean> {
        const tournament = this.tournaments.get(tournamentId);
        if (!tournament) {
            return false;
        }

        if (tournament.status !== 'waiting') {
            return false;
        }

        if (tournament.players.length < 4) {
            return false;
        }

        // Generate bracket
        tournament.bracket = this.generateBracket(tournament.players, tournamentId);
        tournament.status = 'active';
        tournament.currentRound = 1;

        // Save bracket to database
        await this.saveBracketToDb(tournament);

        // Update tournament status
        await dbRun(`
            UPDATE tournaments 
            SET status = ?, current_round = ?
            WHERE id = ?
        `, ['active', 1, tournamentId]);

        // Start first round matches
        await this.startRoundMatches(tournament, 1);

        // Notify all clients
        this.broadcastToTournament(tournamentId, {
            type: 'tournament_updated',
            tournament
        });

        console.log(`Tournament ${tournament.name} started with ${tournament.players.length} players`);
        return true;
    }

    private generateBracket(players: TournamentPlayer[], tournamentId: string): BracketMatch[] {
        const bracket: BracketMatch[] = [];
        const numPlayers = players.length;
        
        // Shuffle players for random seeding
        const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
        
        // Calculate number of rounds needed
        const numRounds = Math.ceil(Math.log2(numPlayers));
        
        // Generate first round matches
        const firstRoundMatches = Math.ceil(numPlayers / 2);
        let matchId = 0;
        
        for (let i = 0; i < firstRoundMatches; i++) {
            const player1 = shuffledPlayers[i * 2] || null;
            const player2 = shuffledPlayers[i * 2 + 1] || null;
            
            const match: BracketMatch = {
                id: `${tournamentId}_r1_m${i}`,
                player1,
                player2,
                winner: null,
                round: 1,
                position: i,
                status: player1 && player2 ? 'waiting' : 'finished',
                confirmations: [],
                gameId: undefined
            };
            
            // If only one player, they automatically advance
            if (player1 && !player2) {
                match.winner = player1;
                match.status = 'finished';
            }
            
            bracket.push(match);
        }
        
        // Generate subsequent rounds (empty matches to be filled as tournament progresses)
        for (let round = 2; round <= numRounds; round++) {
            const matchesInRound = Math.ceil(firstRoundMatches / Math.pow(2, round - 1));
            
            for (let i = 0; i < matchesInRound; i++) {
                const match: BracketMatch = {
                    id: `${tournamentId}_r${round}_m${i}`,
                    player1: null,
                    player2: null,
                    winner: null,
                    round,
                    position: i,
                    status: 'waiting',
                    confirmations: [],
                    gameId: undefined
                };
                
                bracket.push(match);
            }
        }
        
        return bracket;
    }

    async refreshPlayerAvatar(userId: string, newAvatarUrl: string): Promise<void> {
        // Update avatar in all tournaments where this user is a participant
        for (const [tournamentId, tournament] of this.tournaments) {
            const playerIndex = tournament.players.findIndex(p => p.id === userId);
            
            if (playerIndex !== -1) {
                // Update the player's avatar
                tournament.players[playerIndex].avatarUrl = newAvatarUrl;
                
                // Broadcast the update to all connected clients
                this.broadcastToTournament(tournamentId, {
                    type: 'player_updated',
                    players: tournament.players
                });
                
                console.log(`Updated avatar for user ${userId} in tournament ${tournament.name}`);
            }
        }
    }

    private async saveBracketToDb(tournament: Tournament) {
        // Clear existing matches
        await dbRun(`DELETE FROM tournament_matches WHERE tournament_id = ?`, [tournament.id]);
        
        // Insert new matches
        for (const match of tournament.bracket) {
            await dbRun(`
                INSERT INTO tournament_matches 
                (id, tournament_id, round, position, player1_id, player2_id, winner_id, status, confirmations, game_id)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `, [
                match.id,
                tournament.id,
                match.round,
                match.position,
                match.player1 ? parseInt(match.player1.id) : null,
                match.player2 ? parseInt(match.player2.id) : null,
                match.winner ? parseInt(match.winner.id) : null,
                match.status,
                JSON.stringify(match.confirmations),
                match.gameId
            ]);
        }
    }

    private async startRoundMatches(tournament: Tournament, round: number) {
        const roundMatches = tournament.bracket.filter(m => m.round === round && m.status === 'waiting');
        
        for (const match of roundMatches) {
            if (match.player1 && match.player2) {
                match.status = 'confirming';
                
                // Update in database
                await dbRun(`
                    UPDATE tournament_matches 
                    SET status = ?
                    WHERE id = ?
                `, ['confirming', match.id]);
                
                // Notify players
                this.broadcastToTournament(tournament.id, {
                    type: 'match_ready',
                    match
                });
            }
        }
    }

     /**
     * Updates all in-memory tournament records after a user has been anonymized.
     * This ensures that any cached finished tournaments reflect the user's new anonymous status.
     * @param userId The ID of the user who was anonymized.
     * @param newAnonymousNickname The new "Anonymous_XXXX" nickname.
     */
    public async anonymizeUserInTournaments(userId: string, newAnonymousNickname: string): Promise<void> {
        console.log(`Anonymizing user ${userId} to "${newAnonymousNickname}" in all cached tournaments.`);

        for (const [tournamentId, tournament] of this.tournaments.entries()) {
            let wasUpdated = false;

            // Anonymize the top-level winner, if applicable
            if (tournament.winner?.id === userId) {
                tournament.winner.nickname = newAnonymousNickname;
                wasUpdated = true;
            }

            // Anonymize the user in the main players list
            const player = tournament.players.find(p => p.id === userId);
            if (player) {
                player.nickname = newAnonymousNickname;
                wasUpdated = true;
            }

            // Anonymize the user in every single bracket match (player1, player2, winner)
            for (const match of tournament.bracket) {
                if (match.player1?.id === userId) {
                    match.player1.nickname = newAnonymousNickname;
                    wasUpdated = true;
                }
                if (match.player2?.id === userId) {
                    match.player2.nickname = newAnonymousNickname;
                    wasUpdated = true;
                }
                if (match.winner?.id === userId) {
                    match.winner.nickname = newAnonymousNickname;
                    wasUpdated = true;
                }
            }

            // If any part of this tournament was updated, notify connected clients.
            if (wasUpdated) {
                console.log(`Updated cached tournament ${tournamentId} with anonymized user data.`);
                this.broadcastToTournament(tournamentId, {
                    type: 'tournament_updated',
                    tournament: tournament // Send the fully updated tournament object
                });
            }
        }
    }

    /**
     * Scrubs all historical records of a user after account deletion.
     * This method is critical for ensuring data integrity after a hard delete.
     * It updates the database AND invalidates any relevant in-memory caches.
     * @param userId The ID of the user to scrub.
     */
    public async scrubUserFromHistory(userId: string): Promise<void> {
        const userIdNum = parseInt(userId);
        const DELETED_USER_ID = -99;

        if (isNaN(userIdNum)) return;

        console.log(`Scrubbing all historical records for deleted user ${userId}`);

        // STEP 1: Invalidate any finished tournaments involving this user from the in-memory cache.
        // This forces them to be re-fetched from the DB with the correct [Deleted User] data on next view.
        // We find the IDs first, then delete, to avoid modifying the map while iterating.
        const tournamentIdsToInvalidate: string[] = [];
        for (const [id, tournament] of this.tournaments.entries()) {
            if (tournament.status === 'finished') {
                const isUserInvolved = 
                    tournament.winner?.id === userId ||
                    tournament.bracket.some(match => 
                        match.player1?.id === userId ||
                        match.player2?.id === userId ||
                        match.winner?.id === userId
                    );
                
                if (isUserInvolved) {
                    tournamentIdsToInvalidate.push(id);
                }
            }
        }

        for (const id of tournamentIdsToInvalidate) {
            this.tournaments.delete(id);
            console.log(`Invalidated stale cache for finished tournament ${id}`);
        }

        // STEP 2: Update all historical database records to point to the sentinel [Deleted User].
        await dbRun('UPDATE tournaments SET winner_id = ? WHERE winner_id = ?', [DELETED_USER_ID, userIdNum]);
        await dbRun('UPDATE tournament_matches SET player1_id = ? WHERE player1_id = ?', [DELETED_USER_ID, userIdNum]);
        await dbRun('UPDATE tournament_matches SET player2_id = ? WHERE player2_id = ?', [DELETED_USER_ID, userIdNum]);
        await dbRun('UPDATE tournament_matches SET winner_id = ? WHERE winner_id = ?', [DELETED_USER_ID, userIdNum]);
        
        // Also update general game history
        await dbRun('UPDATE games SET player1_id = ? WHERE player1_id = ?', [DELETED_USER_ID, userIdNum]);
        await dbRun('UPDATE games SET player2_id = ? WHERE player2_id = ?', [DELETED_USER_ID, userIdNum]);
        await dbRun('UPDATE games SET winner_id = ? WHERE winner_id = ?', [DELETED_USER_ID, userIdNum]);

        console.log(`Finished scrubbing database records for user ${userId}`);
    }

    async forceDeleteTournament(tournamentId: string): Promise<void> {
        try {
            const tournament = this.tournaments.get(tournamentId);
            const tournamentName = tournament ? tournament.name : 'Unknown Tournament';

            console.log(`Force deleting tournament ${tournamentId} (${tournamentName}) due to administrative action.`);

            // 1. Notify all connected clients that the tournament is being terminated
            this.broadcastToTournament(tournamentId, {
                type: 'tournament_deleted',
                tournamentId: tournamentId,
                tournamentName: tournamentName,
                message: `This tournament has been canceled due to an administrative action (e.g., host account deletion).`
            });

            // Small delay to allow the message to be sent before sockets are closed
            await new Promise(resolve => setTimeout(resolve, 500));

            // 2. Remove from in-memory state
            this.tournaments.delete(tournamentId);
            this.sockets.delete(tournamentId); // Also remove all associated websockets

            // 3. Delete from the database (this now includes deleting games first)
            await dbRun('DELETE FROM games WHERE tournament_id = ?', [tournamentId]);
            await dbRun('DELETE FROM tournaments WHERE id = ?', [tournamentId]); // Cascade should handle participants/matches

            // 4. Broadcast an update to the general "active tournaments" list for all users in the lobby
            this.broadcastActiveTournamentsUpdate();

            console.log(`Tournament ${tournamentId} successfully force-deleted from memory and database.`);
        } catch (error) {
            console.error(`Error during force-delete for tournament ${tournamentId}:`, error);
        }
    }

    async removeParticipant(tournamentId: string, userId: string): Promise<boolean> {
        const tournament = this.tournaments.get(tournamentId);

        // This operation is only valid for tournaments in the 'waiting' state
        if (!tournament || tournament.status !== 'waiting') {
            return false;
        }

        const playerIndex = tournament.players.findIndex(p => p.id === userId);

        // If player isn't in the tournament, consider it a success
        if (playerIndex === -1) {
            return true;
        }

        // 1. Remove the player from the in-memory players array
        const removedPlayer = tournament.players.splice(playerIndex, 1)[0];
        console.log(`Removed participant ${removedPlayer.nickname} (ID: ${userId}) from waiting tournament ${tournamentId}`);

        // 2. Remove the player from the database
        await dbRun('DELETE FROM tournament_participants WHERE tournament_id = ? AND user_id = ?', [tournamentId, userId]);

        // 3. Notify all other clients in that specific tournament that the player has left
        this.broadcastToTournament(tournamentId, {
            type: 'player_left',
            payload: {
                tournamentId,
                userId,
                nickname: removedPlayer.nickname,
                players: tournament.players // Send the updated player list
            }
        });

        // 4. Broadcast an update to the main lobby so the player count updates there too
        this.broadcastActiveTournamentsUpdate();

        return true;
    }

    async confirmMatch(tournamentId: string, matchId: string, userId: string): Promise<boolean> {
        const tournament = this.tournaments.get(tournamentId);
        if (!tournament) {
            return false;
        }

        const match = tournament.bracket.find(m => m.id === matchId);
        if (!match || match.status !== 'confirming') {
            return false;
        }

        // Check if user is in this match
        if (match.player1?.id !== userId && match.player2?.id !== userId) {
            return false;
        }

        // Add confirmation
        if (!match.confirmations.includes(userId)) {
            match.confirmations.push(userId);
        }

        // Update database
        await dbRun(`
            UPDATE tournament_matches 
            SET confirmations = ?
            WHERE id = ?
        `, [JSON.stringify(match.confirmations), matchId]);

        // If both players confirmed, start the game
        if (match.confirmations.length >= 2) {
            await this.startMatch(tournament, match);
        }

        // Notify clients
        this.broadcastToTournament(tournamentId, {
            type: 'tournament_updated',
            tournament
        });

        return true;
    }

    private async startMatch(tournament: Tournament, match: BracketMatch) {
        if (!match.player1 || !match.player2) {
            console.error('Cannot start match: missing players');
            return;
        }

        try {
            // Create real game session using your existing game API
            const gameResponse = await fetch('http://localhost:3000/api/games', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    player1Id: match.player1.id,
                    player1Nickname: match.player1.nickname,
                    player2Id: match.player2.id,
                    player2Nickname: match.player2.nickname,
                    gameMode: 'TOURNAMENT',
                    tournamentId: tournament.id,
                    matchId: match.id
                })
            });

            if (!gameResponse.ok) {
                const errorText = await gameResponse.text();
                throw new Error(`Failed to create game session: ${errorText}`);
            }

            const gameData = await gameResponse.json();
            const realGameId = gameData.gameId;

            match.status = 'playing';
            match.gameId = realGameId;

            // Update database with real game ID
            await dbRun(`
                UPDATE tournament_matches 
                SET status = ?, game_id = ?
                WHERE id = ?
            `, ['playing', realGameId, match.id]);

            console.log(`Started match ${match.id}: ${match.player1.nickname} vs ${match.player2.nickname} - Game ID: ${realGameId}`);

            // Notify players that game is ready
            this.broadcastToTournament(tournament.id, {
                type: 'game_ready',
                match,
                gameId: realGameId
            });

        } catch (error) {
            console.error('Error starting match:', error);
            match.status = 'confirming'; // Reset to confirming on error
            match.confirmations = []; // Clear confirmations to retry
            
            // Update database to reset status
            await dbRun(`
                UPDATE tournament_matches 
                SET status = ?, confirmations = ?
                WHERE id = ?
            `, ['confirming', '[]', match.id]);
        }
    }

    async finishMatch(tournamentId: string, matchId: string, winnerId: string): Promise<boolean> {
        const tournament = this.tournaments.get(tournamentId);
        if (!tournament) {
            return false;
        }

        const match = tournament.bracket.find(m => m.id === matchId);
        if (!match || match.status !== 'playing') {
            return false;
        }

        // Set winner
        match.winner = match.player1?.id === winnerId ? match.player1 : match.player2;
        match.status = 'finished';

        // Update database
        await dbRun(`
            UPDATE tournament_matches 
            SET winner_id = ?, status = ?
            WHERE id = ?
        `, [parseInt(winnerId), 'finished', matchId]);

        // Advance winner to next round
        await this.advanceWinner(tournament, match);

        // Check if tournament is complete
        await this.checkTournamentComplete(tournament);

        // Notify clients
        this.broadcastToTournament(tournamentId, {
            type: 'tournament_updated',
            tournament
        });

        return true;
    }

    private async advanceWinner(tournament: Tournament, finishedMatch: BracketMatch) {
        if (!finishedMatch.winner) return;

        const nextRound = finishedMatch.round + 1;
        const nextPosition = Math.floor(finishedMatch.position / 2);
        
        const nextMatch = tournament.bracket.find(m => 
            m.round === nextRound && m.position === nextPosition
        );

        if (nextMatch) {
            // Determine if winner goes to player1 or player2 slot
            if (finishedMatch.position % 2 === 0) {
                nextMatch.player1 = finishedMatch.winner;
            } else {
                nextMatch.player2 = finishedMatch.winner;
            }

            // Update database
            await dbRun(`
                UPDATE tournament_matches 
                SET player1_id = ?, player2_id = ?
                WHERE id = ?
            `, [
                nextMatch.player1 ? parseInt(nextMatch.player1.id) : null,
                nextMatch.player2 ? parseInt(nextMatch.player2.id) : null,
                nextMatch.id
            ]);

            // If both players are set, start confirmation
            if (nextMatch.player1 && nextMatch.player2 && nextMatch.status === 'waiting') {
                nextMatch.status = 'confirming';
                await dbRun(`
                    UPDATE tournament_matches 
                    SET status = ?
                    WHERE id = ?
                `, ['confirming', nextMatch.id]);
            }
        }
    }

    private async checkTournamentComplete(tournament: Tournament) {
        const finalMatch = tournament.bracket.find(m => 
            m.round === Math.max(...tournament.bracket.map(m => m.round)) && 
            m.status === 'finished' && 
            m.winner
        );

        if (finalMatch?.winner) {
            tournament.status = 'finished';
            tournament.winner = finalMatch.winner;
            tournament.finishedAt = new Date().toISOString();

            // Update database
            await dbRun(`
                UPDATE tournaments 
                SET status = ?, winner_id = ?, finished_at = ?
                WHERE id = ?
            `, ['finished', parseInt(finalMatch.winner.id), tournament.finishedAt, tournament.id]);

            console.log(`Tournament ${tournament.name} completed! Winner: ${finalMatch.winner.nickname}`);
        }
    }

    async deleteTournament(tournamentId: string, userId: string): Promise<boolean> {
        try {
            const tournament = this.tournaments.get(tournamentId);
            if (!tournament) {
                return false;
            }

            // Only host can delete, and only if not started
            if (tournament.hostId !== userId || tournament.status !== 'waiting') {
                return false;
            }

            // Notify all connected clients before deletion
            this.broadcastToTournament(tournamentId, {
                type: 'tournament_deleted',
                tournamentId: tournamentId,
                tournamentName: tournament.name,
                message: `Tournament "${tournament.name}" has been deleted by the host`
            });

            // Small delay to ensure message is sent
            await new Promise(resolve => setTimeout(resolve, 500));

            // Remove from memory
            this.tournaments.delete(tournamentId);

            // Remove from database (cascade will handle related tables)
            await dbRun(`DELETE FROM tournaments WHERE id = ?`, [tournamentId]);

            console.log(`Tournament ${tournament.name} deleted by host`);
            return true;
        } catch (error) {
            console.error('Error deleting tournament:', error);
            return false;
        }
    }

    async getActiveTournaments(): Promise<Tournament[]> {
        const tournaments = Array.from(this.tournaments.values())
        .filter(t => t.status === 'waiting' || t.status === 'active');
    
        // Add host nicknames
        return Promise.all(
            tournaments.map(async (t) => {
                const host = await dbGet('SELECT nickname FROM users WHERE id = ?', [parseInt(t.hostId)]);
                return {
                    ...t,
                    hostNickname: host?.nickname || 'Unknown'
                };
            })
        );
    }

    async getTournament(tournamentId: string): Promise<Tournament | null> {
        let tournament = this.tournaments.get(tournamentId);
        
        if (tournament) {
            return tournament;
        }
        
        try {
            const tournamentData = await dbGet(`
                SELECT * FROM tournaments WHERE id = ?
            `, [tournamentId]);
            
            if (!tournamentData) {
                return null;
            }
            
            tournament = await this.buildTournamentFromDb(tournamentData);
            
            if (!tournament) {
                return null;
            }
            
            if (tournament.status === 'waiting' || tournament.status === 'active') {
                this.tournaments.set(tournamentId, tournament);
            }
            
            return tournament;
        } catch (error) {
            console.error('Error getting tournament:', error);
            return null;
        }
    }

    async getUserTournamentHistory(userId: string): Promise<TournamentHistory[]> {
        const tournaments = await dbAll(`
            SELECT DISTINCT t.*
            FROM tournaments t
            JOIN tournament_participants tp ON t.id = tp.tournament_id
            WHERE tp.user_id = ? AND t.status = 'finished'
            ORDER BY t.finished_at DESC
        `, [parseInt(userId)]);

        const history: TournamentHistory[] = [];

        for (const tournamentData of tournaments) {
            const tournament = await this.buildTournamentFromDb(tournamentData);
            if (tournament) {
                const myMatches = tournament.bracket.filter(m => 
                    m.player1?.id === userId || m.player2?.id === userId
                );
                
                history.push({
                    tournament,
                    myMatches,
                    finalBracket: tournament.bracket
                });
            }
        }

        return history;
    }

    // WebSocket management
    addSocket(tournamentId: string, userId: string, socket: WebSocket) {
        if (!this.sockets.has(tournamentId)) {
            this.sockets.set(tournamentId, new Map());
        }
        this.sockets.get(tournamentId)!.set(userId, socket);
        console.log(`Socket added for user ${userId} in tournament ${tournamentId}`);
    }

    removeSocket(tournamentId: string, userId: string) {
        const tournamentSockets = this.sockets.get(tournamentId);
        if (tournamentSockets) {
            tournamentSockets.delete(userId);
            if (tournamentSockets.size === 0) {
                this.sockets.delete(tournamentId);
            }
        }
        console.log(`Socket removed for user ${userId} in tournament ${tournamentId}`);
    }

    private broadcastToTournament(tournamentId: string, message: any) {
        const tournamentSockets = this.sockets.get(tournamentId);
        if (tournamentSockets) {
            const messageStr = JSON.stringify(message);
            tournamentSockets.forEach((socket, userId) => {
                if (socket.readyState === WebSocket.OPEN) {
                    socket.send(messageStr);
                }
            });
        }
    }

    async getUserHostedTournaments(userId: string): Promise<Tournament[]> {
        try {
            const tournaments = await dbAll(`
                SELECT t.*, u.nickname as host_nickname
                FROM tournaments t
                LEFT JOIN users u ON t.created_by = u.id
                WHERE t.created_by = ?
                ORDER BY t.created_at DESC
            `, [parseInt(userId)]);

            const hostedTournaments: Tournament[] = [];

            for (const tournamentData of tournaments) {
                const tournament = await this.buildTournamentFromDb(tournamentData);
                if (tournament) {
                    hostedTournaments.push(tournament);
                }
            }

            console.log(`Found ${hostedTournaments.length} hosted tournaments for user ${userId}`);
            return hostedTournaments;
        } catch (error) {
            console.error('Error getting user hosted tournaments:', error);
            return [];
        }
    }
}

// Export singleton instance
export const tournamentManager = new TournamentManager();