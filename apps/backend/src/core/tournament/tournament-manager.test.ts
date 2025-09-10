/**
 * @description Tests the TournamentManager class.
 * @usage first build docker environment, then run tests
 */

import { expect } from 'chai';
import 'mocha';
import { TournamentManager } from './tournament-manager';
import { Tournament, TournamentPlayer, Match } from '@trans/common-types';
import { closeDatabase } from '../../database/helpers';
import { initializeDatabase } from '../../database/db';

/**
 * Creates an array of mock tournament players.
 * @param count The number of players to create.
 * @returns An array of mock tournament players.
 */
const createMockPlayers = (count: number): TournamentPlayer[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: (i + 1).toString(),
        nickname: `Player ${i + 1}`,
        rating: 1000 + (count - i) * 10,
        seed: 0,
    }));
}

/**
 * @description Tests the generateBracket method of the TournamentManager class.
 * This method is responsible for generating the tournament bracket (with logic of generateBracket).
 */
describe('TournamentManager - generateBracket', () => {

    before(async () => {
        await initializeDatabase();
    });

    after(async () => {
        await closeDatabase();
    });

    // Scenario 1: Test case of 4 participants (without walk-out case)
    it('should create a balanced bracket for 4 players (a power of 2)', () => {
        const tournamentManager = new TournamentManager();
        
        const playersNumber = 4;
        const players = createMockPlayers(playersNumber);
        const tournament: Tournament = {
            id: 'test-tourney-4',
            name: '4 Players Test',
            players: players,
            bracket: [] as Match[][], 
            status: 'waiting',
            currentRound: 0,
            winner: null,
            createdBy: '1'
        };

        // @ts-ignore
        tournamentManager.generateBracket(tournament);

        const { bracket } = tournament;

        expect(bracket).to.have.lengthOf(2);
        expect(bracket[0]).to.have.lengthOf(2);
        expect(bracket[1]).to.have.lengthOf(1);

        const firstRound: Match[] = bracket[0];
        expect(firstRound[0].player1?.id).to.equal('1');
        expect(firstRound[0].player2?.id).to.equal('4');
        expect(firstRound[1].player1?.id).to.equal('2');
        expect(firstRound[1].player2?.id).to.equal('3');
    });

    // Scenario 2: Test case of 6 participants (non power of 2, but pair number) --> walk-over
    it('should create a bracket with byes for 6 players', () => {
        const tournamentManager = new TournamentManager();
        
        const playersNumber = 6;   
        const players = createMockPlayers(playersNumber);
        const tournament: Tournament = {
            id: 'test-tourney-6',
            name: '6 Players Test',
            players: players,
            bracket: [] as Match[][],
            status: 'waiting',
            currentRound: 0,
            winner: null,
            createdBy: '1'
        };

        // @ts-ignore
        tournamentManager.generateBracket(tournament);

        const { bracket } = tournament;

        expect(bracket).to.have.lengthOf(3);
        expect(bracket[0]).to.have.lengthOf(4);

        const firstRound: Match[] = bracket[0];
        const byes = firstRound.filter((match: Match) => match.player2 === null);
        expect(byes).to.have.lengthOf(2);
        expect(byes[0].player1?.id).to.equal('1');
        expect(byes[1].player1?.id).to.equal('2');

        const actualMatches = firstRound.filter((match: Match) => match.player2 !== null);
        expect(actualMatches).to.have.lengthOf(2);
        expect(actualMatches[0].player1?.id).to.equal('3');
        expect(actualMatches[0].player2?.id).to.equal('6');
        expect(actualMatches[1].player1?.id).to.equal('4');
        expect(actualMatches[1].player2?.id).to.equal('5');
    });

    // Scenario 3: 5 Participants (odd number), with walk-over
    it('should create a bracket with byes for 5 players', () => {
        const tournamentManager = new TournamentManager();
        
        const playersNumber = 5;
        const players = createMockPlayers(playersNumber);

        const tournament: Tournament = {
            id: 'test-tourney-5',
            name: '5 Players Test',
            players: players,
            bracket: [] as Match[][], 
            status: 'waiting',
            currentRound: 0,
            winner: null,
            createdBy: '1'
        };

        // @ts-ignore
        tournamentManager.generateBracket(tournament);

        const { bracket } = tournament;

        expect(bracket).to.have.lengthOf(3);
        expect(bracket[0]).to.have.lengthOf(4);

        const firstRound: Match[] = bracket[0];
        const byes = firstRound.filter((match: Match) => match.player2 === null);
        expect(byes).to.have.lengthOf(3);
        expect(byes.map((b: Match) => b.winner?.id)).to.deep.equal(['1', '2', '3']);

        const actualMatch = firstRound.find((match: Match) => match.player2 !== null);
        expect(actualMatch).to.exist;
        expect(actualMatch!.player1?.id).to.equal('4');
        expect(actualMatch!.player2?.id).to.equal('5');
    });

    // Scenario 4: 3 Participants (minimum players)
    it('should create a correct bracket for the minimum of 3 players', () => {
        const tournamentManager = new TournamentManager();

        const playersNumber = 3;
        const players = createMockPlayers(playersNumber);
        const tournament: Tournament = {
            id: 'test-tourney-3',
            name: '3 Players Test',
            players: players,
            bracket: [] as Match[][], // FIX 2 적용
            status: 'waiting',
            currentRound: 0,
            winner: null,
            createdBy: '1'
        };

        // @ts-ignore
        tournamentManager.generateBracket(tournament);

        const { bracket } = tournament;

        expect(bracket).to.have.lengthOf(2);
        expect(bracket[0]).to.have.lengthOf(2);

        const firstRound: Match[] = bracket[0];
        const byeMatch = firstRound.find((match: Match) => match.player2 === null);
        expect(byeMatch).to.exist;
        expect(byeMatch!.player1?.id).to.equal('1');

        const actualMatch = firstRound.find((match: Match) => match.player2 !== null);
        expect(actualMatch).to.exist;
        expect(actualMatch!.player1?.id).to.equal('2');
        expect(actualMatch!.player2?.id).to.equal('3');
    });
});
