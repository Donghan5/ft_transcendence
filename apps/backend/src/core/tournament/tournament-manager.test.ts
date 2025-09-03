/**
 * @description Tests the TournamentManager class.
 * @usage first build docker environment, then run tests
 */

import { expect } from 'chai';
import 'mocha';
import { TournamentManager } from './tournament-manager';
import { Tournament, TournamentPlayer } from '@trans/common-types';

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
 *              This method is responsible for generating the tournament bracket (with logic of generateBracket).
 */
describe('TournamentManager - generateBracket', () => {
    let tournamentManager: TournamentManager;

    beforeEach(() => {
        // @ts-ignore
        tournamentManager = new TournamentManager()
    });

    // Scenario 1: Test case of 4 participants (without walk-out case)
    it('should create a balanced bracket for 4 players (a power of 2)', () => {
        const players = createMockPlayers(4);
        const tournament: Tournament = {
            id: 'test-tourney-4',
            players: players,
            bracket: [],
            status : 'waiting',
            currentRound: 0,
            winner: null,
            createdBy: '1'
        };

        // @ts-ignore
        tournamentManager.generateBracket(tournament);
        
        const { bracket } = tournament;

        expect(bracket).to.have.lengthOf(2); // 2 Round (semi-final and final)
        expect(bracket[0]).to.have.lengthOf(2); // 2 Matches in the first round
        expect(bracket[1]).to.have.lengthOf(1); // 1 Match in the final round

        // check 1st round matches
        expect(bracket[0][0].player1?.id).to.equal('1');
        expect(bracket[0][0].player2?.id).to.equal('4');
        expect(bracket[0][1].player1?.id).to.equal('2');
        expect(bracket[0][1].player2?.id).to.equal('3');
    });

    // Scenario 2: Test case of 6 participants (non power of 2, but pair number) --> walk-over
    it('should create a bracket with byes for 6 players', () => {
        const players = createMockPlayers(6);
        const tournament: Tournament = {
            id: 'test-tourney-6',
            name: '6 Players Test',
            players: players,
            bracket: [],
            status: 'waiting',
            currentRound: 0,
            winner: null,
            createdBy: '1'
        };

        // @ts-ignore
        tournamentManager.generateBracket(tournament);

        const { bracket } = tournament;

        // 6 person --> sizeof the bracket 8 people, 2 byes (walk-overs)
        expect(bracket).to.have.lengthOf(3); // 3 rounds
        expect(bracket[0]).to.have.lengthOf(4); // 1Round: 4 Matches

        const byes = bracket[0].filter(match => match.player2 === null);
        expect(byes).to.have.lengthOf(2);
        expect(byes[0].player1?.id).to.equal('1'); // top seed gets a bye
        expect(byes[1].player1?.id).to.equal('2'); // 2nd seed gets a bye

        const actualMatches = bracket[0].filter(match => match.player2 !== null);
        expect(actualMatches).to.have.lengthOf(2);
        expect(actualMatches[0].player1?.id).to.equal('3');
        expect(actualMatches[0].player2?.id).to.equal('6');
        expect(actualMatches[1].player1?.id).to.equal('4');
        expect(actualMatches[1].player2?.id).to.equal('5');
    });

    // Scenario 3: 5 Participants (odd number), with walk-over
    it('should create a bracket with byes for 5 players', () => {
        const players = createMockPlayers(5);

        const tournament: Tournament = {
            id: 'test-tourney-5',
            players: players,
            bracket: [],
            status: 'waiting',
            currentRound: 0,
            winner: null,
            createdBy: '1'
        };

        // @ts-ignore
        tournamentManager.generateBracket(tournament);

        const { bracket } = tournament;

        // sizeof 5 --> sizeof 8
        expect(bracket).to.have.lengthOf(3); // 3 rounds
        expect(bracket[0]).to.have.lengthOf(4); // 1Round: 4 Matches (3 is walk)
        
        const byes = bracket[0].filter(match => match.player2 === null);
        expect(byes).to.have.lengthOf(3);
        expect(byes.map(b => b.winner?.id)).to.deep.equal(['1', '2', '3']);

        const actualMatches = bracket[0].find(match => match.player2 !== null);
        expect(actualMatches).to.exist;
        expect(actualMatches.player1?.id).to.equal('4');
        expect(actualMatches.player2?.id).to.equal('5');
    });


    // Scenario 4: 3 Participants (minimum players)
    it('should create a correct bracket for the minimum of 3 players', () => {
        const players = createMockPlayers(3);
        const tournament: Tournament = {
            id: 'test-tourney-3',
            name: '3 Players Test',
            players: players,
            bracket: [],
            status: 'waiting',
            currentRound: 0,
            winner: null,
            createdBy: '1'
        };

        // @ts-ignore
        tournamentManager.generateBracket(tournament);

        const { bracket } = tournament;

        expect(bracket).to.have.lengthOf(2); // 2 rounds
        expect(bracket[0]).to.have.lengthOf(2); // 1Round: 2 Matches (1 is walk)

        const byeMatch = bracket[0].find(match => match.player2 === null);
        expect(byeMatch).to.exist;
        expect(byeMatch.player1?.id).to.equal('1');

        const actualMatches = bracket[0].find(match => match.player2 !== null);
        expect(actualMatches).to.exist;
        expect(actualMatches.player1?.id).to.equal('2');
        expect(actualMatches.player2?.id).to.equal('3');
    });
})