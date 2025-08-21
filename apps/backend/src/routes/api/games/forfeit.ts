import { FastifyInstance, FastifyRequest } from 'fastify';
import { gameEngine } from '../../../core/game/game-engine';
import { dbRun, dbGet } from '../../../database/helpers';

export default async function forfeitRoutes(fastify: FastifyInstance) {
    fastify.post('/forfeit', async (request: FastifyRequest, reply) => {
        const { gameId, playerId } = request.body as { gameId: string; playerId: string };

        const game = gameEngine.getGameState(gameId);
        if (!game) {
            return reply.code(404).send({ error: 'Game not found' });
        }

        const winnerId = game.player1Id === playerId ? game.player2Id : game.player1Id;

        game.status = 'finished';
        game.player1.score = game.player1Id === playerId ? 0 : 7;
        game.player2.score = game.player2Id === playerId ? 0 : 7;

        await dbRun(`
            UPDATE games
            SET status = 'FINISHED',
                winner_id = ?,
                ended_at = datetime('now'),
                player1_score = ?,
                player2_score = ?,
                is_forfeited = 1
            WHERE id = ?
        `, [parseInt(winnerId), game.player1.score, game.player2.score, game.gameId]);
    
        await updateRankings(winnerId, playerId);

        // I have to add broadcating at the game engine class
        gameEngine.broadcastToGame(gameId, 'gameEnd', {
            winner: winnerId,
            forfeit: true,
            finalScore: {
                player1: game.player1.score,
                player2: game.player2.score
            }
        });

        return reply.send({ 
            success: true, 
            winner: winnerId,
            message: 'Game forfeited successfully',
        });
    });
}

async function updateRankings(winnerId: string, loserId: string) {
    const K = 32; // K-factor for Elo rating system

    const winner = await dbGet(
        `SELECT id, rating FROM users WHERE id = ?`, [parseInt(winnerId)]
    );

    const loser = await dbGet(
        `SELECT id, rating FROM users WHERE id = ?`, [parseInt(loserId)]
    );

    if (!winner || !loser) return;
    
    const winnerRating = winner.rating || 1000; // Default rating if not set
    const loserRating = loser.rating || 1000; // Default rating if not set
    
    const expectedWin = 1 / (1 + Math.pow(10, (loserRating - winnerRating) / 400));
    const expectedLose = 1 - expectedWin;

    const newWinnerRating = winnerRating + K * (1 - expectedWin) * 1.5;
    const newLoserRating = loserRating + K * (0 - expectedLose) * 1.5;

    // Updating winnner and loser ratings in the database
    await dbRun(
        `UPDATE users
        SET rating = ?,
            wins = wins + 1,
        WHERE id = ?`,
        [newWinnerRating, parseInt(winnerId)]
    );

    await dbRun(
        `UPDATE users
        SET rating = ?,
            losses = losses + 1,
        WHERE id = ?`,
        [newLoserRating, parseInt(loserId)]
    );
}