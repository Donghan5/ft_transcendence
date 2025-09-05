import { expect } from 'chai';
import 'mocha';
import { FastifyInstance } from 'fastify';
import WebSocket from 'ws';
import jwt from 'jsonwebtoken';
import { buildServer } from '../../main'; // main.ts에서 서버 빌더를 가져옴
import { initializeDatabase, closeDatabase, dbRun } from '../../database/helpers';
import { Tournament } from '@trans/common-types';


const waitForMessage = (ws: WebSocket, messageType: string): Promise<any> => {
    return new Promise((resolve) => {
        const listener = (data: WebSocket.Data) => {
            const message = JSON.parse(data.toString());
            if (message.type === messageType) {
                ws.removeListener('message', listener);
                resolve(message.payload);
            }
        };
        ws.on('message', listener);
    });
};

const createTestToken = (userId: number) => {
    return jwt.sign({ userId, profileComplete: true }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};



describe('TournamentManager - WebSocket Communication', () => {
    let app: FastifyInstance;
    let wsUrl: string;

    before(async () => {
        await initializeDatabase();
        await dbRun("INSERT OR IGNORE INTO users (id, nickname, email, name, profile_setup_complete) VALUES (?, ?, ?, ?, ?)", [1, 'Alice', 'a@test.com', 'Alice', true]);
        await dbRun("INSERT OR IGNORE INTO users (id, nickname, email, name, profile_setup_complete) VALUES (?, ?, ?, ?, ?)", [2, 'Bob', 'b@test.com', 'Bob', true]);
        await dbRun("INSERT OR IGNORE INTO users (id, nickname, email, name, profile_setup_complete) VALUES (?, ?, ?, ?, ?)", [3, 'Charlie', 'c@test.com', 'Charlie', true]);

        app = await buildServer();
        await app.listen({ port: 0 }); 
        if (typeof address === 'string' || address === null) {
            throw new Error('Server address is not available');
        }
        wsUrl = `ws://localhost:${address.port}`;
    });

    after(async () => {
        await app.close();
        await closeDatabase();
    });

    // 실제 테스트 케이스
    it('should broadcast tournament updates to all participants when players join and the tournament starts', async function() {
        this.timeout(10000); 

        const creatorToken = createTestToken(1);
        const player2Token = createTestToken(2);
        const player3Token = createTestToken(3);

        const createResponse = await app.inject({
            method: 'POST',
            url: '/api/tournament/create',
            payload: { name: 'WebSocket Test Tournament' },
            cookies: { auth_token: creatorToken }
        });

        const { tournamentId } = createResponse.json();
        expect(tournamentId).to.be.a('string');

        const wsCreator = new WebSocket(`${wsUrl}/api/tournament/ws/${tournamentId}`, { headers: { cookie: `auth_token=${creatorToken}` } });
        const wsPlayer2 = new WebSocket(`${wsUrl}/api/tournament/ws/${tournamentId}`, { headers: { cookie: `auth_token=${player2Token}` } });
        const wsPlayer3 = new WebSocket(`${wsUrl}/api/tournament/ws/${tournamentId}`, { headers: { cookie: `auth_token=${player3Token}` } });

        const initialUpdatePromise = waitForMessage(wsCreator, 'tournamentUpdate');
        
        await new Promise(resolve => wsCreator.on('open', resolve));
        await new Promise(resolve => wsPlayer2.on('open', resolve));
        await new Promise(resolve => wsPlayer3.on('open', resolve));

        let initialTournamentState: Tournament = await initialUpdatePromise;
        expect(initialTournamentState.players).to.have.lengthOf(1);
        expect(initialTournamentState.players[0].nickname).to.equal('Alice');

        const player2JoinPromise = waitForMessage(wsCreator, 'tournamentUpdate'); // 방장이 업데이트를 받는지 확인
        await app.inject({
            method: 'POST',
            url: '/api/tournament/join',
            payload: { tournamentId },
            cookies: { auth_token: player2Token }
        });

        let afterPlayer2Joined: Tournament = await player2JoinPromise;
        expect(afterPlayer2Joined.players).to.have.lengthOf(2);
        expect(afterPlayer2Joined.players.map(p => p.nickname)).to.include.members(['Alice', 'Bob']);

        const player3JoinPromise = waitForMessage(wsCreator, 'tournamentUpdate'); // 방장이 업데이트를 받는지 확인
        await app.inject({
            method: 'POST',
            url: '/api/tournament/join',
            payload: { tournamentId },
            cookies: { auth_token: player3Token }
        });

        let afterPlayer3Joined: Tournament = await player3JoinPromise;
        expect(afterPlayer3Joined.players).to.have.lengthOf(3);
        expect(afterPlayer3Joined.players.map(p => p.nickname)).to.include.members(['Alice', 'Bob', 'Charlie']);


        const startPromises = [
            waitForMessage(wsCreator, 'tournamentUpdate'),
            waitForMessage(wsPlayer2, 'tournamentUpdate'),
            waitForMessage(wsPlayer3, 'tournamentUpdate')
        ];

        await app.inject({
            method: 'POST',
            url: '/api/tournament/start',
            payload: { tournamentId },
            cookies: { auth_token: creatorToken }
        });

        const [creatorUpdate, p2Update, p3Update] = await Promise.all(startPromises);

        expect(creatorUpdate.status).to.equal('in_progress');
        expect(p2Update.status).to.equal('in_progress');
        expect(p3Update.status).to.equal('in_progress');

        expect(creatorUpdate.bracket).to.not.be.empty;
        expect(p2Update.bracket).to.deep.equal(creatorUpdate.bracket);
        expect(p3Update.bracket).to.deep.equal(creatorUpdate.bracket);

        wsCreator.close();
        wsPlayer2.close();
        wsPlayer3.close();
    });
});