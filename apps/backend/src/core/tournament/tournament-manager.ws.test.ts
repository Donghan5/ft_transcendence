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


/**
 * @description Helper to wait for a specified state update via WebSocket
 */
const waitForStateUpdate = (ws: WebSocket, condition: (payload: any) => boolean): Promise<any> => {
    return new Promise((resolve) => {
        const listener = (data: WebSocket.Data) => {
            const message = JSON.parse(data.toString());
            if (message.type === 'tournamentUpdate' && condition(message.payload)) {
                ws.removeListener('message', listener);
                resolve(message.payload);
            }
        };
        ws.on('message', listener);
    });
}

const createTestToken = (userId: number) => {
    return jwt.sign({ userId, profileComplete: true }, process.env.JWT_SECRET!, { expiresIn: '1h' });
}

describe('TournamentManager - Full Flow Test', () => {
    let app: FastifyInstance;
    let wsUrl: string;

    before(async () => {
        await initializeDatabase();
        await dbRun("INSERT OR IGNORE INTO users (id, nickname, email, name, profile_setup_complete) VALUES (?, ?, ?, ?, ?)", [1, 'Alice', 'a@test.com', 'Alice', true]);
        await dbRun("INSERT OR IGNORE INTO users (id, nickname, email, name, profile_setup_complete) VALUES (?, ?, ?, ?, ?)", [2, 'Bob', 'b@test.com', 'Bob', true]);
        await dbRun("INSERT OR IGNORE INTO users (id, nickname, email, name, profile_setup_complete) VALUES (?, ?, ?, ?, ?)", [3, 'Charlie', 'c@test.com', 'Charlie', true]);
    
        app = await buildServer();
        await app.listen({ port: 0});

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

    it('should handle the full tournament flow: create -> join -> start -> play matches -> conclude', async () => {
        this.timeout(15000);

        const creatorToken = createTestToken(1);
        const player2Token = createTestToken(2);
        const player3Token = createTestToken(3);

        const createResponse = await app.inject({
            method: 'POST',
            url: '/api/tournament/create',
            payload: { name: 'Full Flow Test Tournament' },
            cookies: { auth_token: creatorToken };
        });

        const { tournamentId } = createResponse.json();
        expect(tournamentId).to.be.a('string');

        const wsCreator = new WebSocket(`${wsUrl}/api/tournament/ws/${tournamentId}`, 
            { headers: { cookie: `auth_token=${creatorToken}` } });
        await new Promise(resolve => wsCreator.on('open', resolve));

        let tournamentState = await waitForStateUpdate(wsCreator, (p: Tournament) => p.players.length === 1);
        expect(tournamentState.players[0].nickname).to.equal('Alice');

        await app.inject({
            method: 'POST',
            url: '/api/tournament/join',
            payload: { tournamentId },
            cookies: { auth_token: player2Token }
        });
        tournamentState = await waitForStateUpdate(wsCreator, (p: Tournament) => p.players.length === 2);
        expect(tournamentState.players.map((p: any) => p.nickname)).to.include.members(['Alice', 'Bob']);
    
        await app.inject({
            method: 'POST',
            url: '/api/tournament/join',
            payload: { tournamentId },
            cookies: { auth_token: player3Token }
        });
        tournamentState = await waitForStateUpdate(wsCreator, (p: Tournament) => p.players.length === 3);
        expect(tournamentState.players.map((p: any) => p.nickname)).to.include.members(['Alice', 'Bob', 'Charlie']);
   
        await app.inject({
            method: 'POST',
            url: '/api/tournament/start',
            payload: { tournamentId },
            cookies: { auth_token: creatorToken }
        });
        tournamentState = await waitForStateUpdate(wsCreator, (p: Tournament) => p.status === 'in_progress');
        expect(tournamentState.bracket.length).to.be.greaterThan(0);

        const firstMatch = tournamentState.bracket[0].find((m: Match) => m.player1 && m.player2);
        expect(firstMatch).to.exist;

        const gameId = gameEngine.createGame(firstMatch!.player1!.id, firstMatch!.player2!.id, 'TOURNAMENT');
        const game = gameEngine.getGameState(gameId);
        if(game) {
            game.player1.score = 5; // Player 2 (Bob) wins
            game.player2.score = 2; // Player 3 (Charlie) loses
            game.status = 'finished';
            await gameEngine.endGame(gameId);
        }

         const finalState = await waitForStateUpdate(wsCreator, (p: Tournament) => p.bracket[0].find((m: Match) => m.id === firstMatch!.id)?.winner !== null);

        const updatedMatch = finalState.bracket[0].find((m: Match) => m.id === firstMatch!.id);
        expect(updatedMatch.winner.id).to.equal(firstMatch.player1.id);

        wsCreator.close();
    });
});