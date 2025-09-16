import { expect } from 'chai';
import 'mocha';
import { FastifyInstance } from 'fastify';
import WebSocket from 'ws';
import jwt from 'jsonwebtoken';
import { buildServer } from '../../main';
import { closeDatabase, dbRun } from '../../database/helpers';
import { initializeDatabase } from '../../database/db';
import { Tournament, Match } from '@trans/common-types';
import { gameEngine } from '../../core/game/game-engine';
import { tournamentManager } from './tournament-manager';

// Helper to wait for a specific state update via WebSocket
const waitForStateUpdate = (ws: WebSocket, condition: (payload: any) => boolean, description: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error(`Timeout waiting for: ${description}`));
            ws.removeListener('message', listener);
        }, 14000);

        const listener = (data: WebSocket.Data) => {
            try {
                const message = JSON.parse(data.toString());
                if (message.type === 'tournamentUpdate' && condition(message.payload)) {
                    clearTimeout(timeout);
                    ws.removeListener('message', listener);
                    resolve(message.payload);
                }
            } catch (e) {
                // Ignore parse errors
            }
        };
        ws.on('message', listener);
    });
};

const createTestToken = (userId: number) => {
    return jwt.sign({ userId, profileComplete: true }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};

describe('TournamentManager - Full Flow Test', () => {
    let app: FastifyInstance;
    let wsUrl: string;

    before(async () => {
        console.log('Initialize database...')
        await initializeDatabase();

        console.log('Adding 3 Players in database to test...')
        await dbRun("INSERT OR IGNORE INTO users (id, nickname, email, name, profile_setup_complete, rating) VALUES (?, ?, ?, ?, ?, ?)", [1, 'Alice', 'a@test.com', 'Alice', true, 1200]);
        await dbRun("INSERT OR IGNORE INTO users (id, nickname, email, name, profile_setup_complete, rating) VALUES (?, ?, ?, ?, ?, ?)", [2, 'Bob', 'b@test.com', 'Bob', true, 1100]);
        await dbRun("INSERT OR IGNORE INTO users (id, nickname, email, name, profile_setup_complete, rating) VALUES (?, ?, ?, ?, ?, ?)", [3, 'Charlie', 'c@test.com', 'Charlie', true, 1000]);

        app = await buildServer();
        await app.listen({ port: 0 });

        const address = app.server.address();
        if (typeof address === 'string' || address === null) {
            throw new Error('Server address is not available');
        }
        wsUrl = `ws://localhost:${address.port}`;
    });

    after(async () => {
        await app.close();
        await closeDatabase();
    });

    it('should handle the full tournament flow: create -> join -> start -> process game result', async function() {
        this.timeout(15000);

        console.log('Creating tokens for players...');
        const creatorToken = createTestToken(1);
        const player2Token = createTestToken(2);
        const player3Token = createTestToken(3);

        const createResponse = await app.inject({
            method: 'POST',
            url: '/api/tournament/create',
            payload: { name: 'Full Flow Test Tournament' },
            cookies: { auth_token: creatorToken }
        });
        const { tournamentId } = createResponse.json();
        expect(tournamentId).to.be.a('string');

        console.log('Connecting WebSocket as tournament creator...');
        const wsCreator = new WebSocket(`${wsUrl}/api/tournament/ws/${tournamentId}`, { headers: { cookie: `auth_token=${creatorToken}` } });
        await new Promise(resolve => wsCreator.on('open', resolve));

        console.log('Waiting for tournament state updates...');
        let tournamentState = await waitForStateUpdate(wsCreator, (p: Tournament) => p.players.length === 1, "creator joining");
        expect(tournamentState.players[0].nickname).to.equal('Alice');

        console.log('Joining tournament as player 2...');
        await app.inject({ method: 'POST', url: '/api/tournament/join', payload: { tournamentId }, cookies: { auth_token: player2Token } });
        tournamentState = await waitForStateUpdate(wsCreator, (p: Tournament) => p.players.length === 2, "player 2 joining");

        console.log('Joining tournament as player 3...');
        await app.inject({ method: 'POST', url: '/api/tournament/join', payload: { tournamentId }, cookies: { auth_token: player3Token } });
        tournamentState = await waitForStateUpdate(wsCreator, (p: Tournament) => p.players.length === 3, "player 3 joining");
        expect(tournamentState.players.map((p: any) => p.nickname)).to.have.members(['Alice', 'Bob', 'Charlie']);

        console.log('Starting the tournament...');
        const startPromise = waitForStateUpdate(
            wsCreator,
            (p: Tournament) => p.status === 'in_progress',
            "tournament start"
        );

        await app.inject({ 
            method: 'POST', 
            url: '/api/tournament/start',
            payload: { tournamentId },
            cookies: { auth_token: creatorToken }
        });

        tournamentState = await startPromise;
        expect(tournamentState.bracket.length).to.be.greaterThan(0);

        console.log('Simulating game play for the first match...');
        const firstMatch = tournamentState.bracket[0].find((m: Match) => m.player1 && m.player2);
        expect(firstMatch).to.exist;
        expect(firstMatch!.player1!.nickname).to.equal('Bob');
        expect(firstMatch!.player2!.nickname).to.equal('Charlie');

        const gameId = gameEngine.createGame(firstMatch!.player1!.id, firstMatch!.player2!.id, 'TOURNAMENT');
        const game = gameEngine.getGameState(gameId);
        
        expect(game).to.exist;

        game!.player1.score = 5;
        game!.player2.score = 2;
        game!.status = 'finished';

        console.log('Reporting game end to tournament manager...');
        // @ts-ignore
        await tournamentManager.handleGameEnd(gameId, tournamentState, firstMatch.id, game);

        console.log('Waiting for tournament state updates...');
        const finalState = await waitForStateUpdate(wsCreator,
            (p: Tournament) => {
                const finalMatch = p.bracket[1] && p.bracket[1][0];
                return finalMatch && finalMatch.player1 !== null && finalMatch.player2 !== null;
            },
            "winner advancing to the final round"
        );

        const updatedMatch = finalState.bracket[0].find((m: Match) => m.id === firstMatch!.id);
        expect(updatedMatch.winner.id, "Winner of the first match should be Bob").to.equal(firstMatch.player1.id);

        const finalMatch = finalState.bracket[1][0];
        console.log('Final match participants:', finalMatch.player1?.nickname, finalMatch.player2?.nickname);

        const finalMatchPlayerNicks = [finalMatch.player1.nickname, finalMatch.player2.nickname];
        expect(finalMatchPlayerNicks, "Final match should be between Alice and Bob").to.have.members(['Alice', 'Bob']);
        
        console.log('Test completed successfully, closing WebSocket...');
        wsCreator.close();
    });
});