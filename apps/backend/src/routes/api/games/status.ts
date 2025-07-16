// this file shows the status of the game
import { FastifyInstance, FastifyRequest } from 'fastify';
import { GameDTO } from '@trans/common-types';

export default async function (app: FastifyInstance) {
  app.get(
    '/api/games/:id',
    async (req: FastifyRequest<{ Params: { id: string } }>) => {
      const gameId = Number(req.params.id);

      const game = await app.db
        .selectFrom('games')
        .select(['id', 'mode', 'status', 'created_at', 'started_at', 'finished_at'])
        .where('id', '=', gameId)
        .executeTakeFirst();

      if (!game) return app.httpErrors.notFound();

      const players = await app.db
        .selectFrom('game_players')
        .select(['user_id as id', 'score'])
        .where('game_id', '=', gameId)
        .execute();

      const dto: GameDTO = {
        id: game.id,
        mode: game.mode as 'PVP' | 'AI',
        status: game.status as GameDTO['status'],
        players,
        createdAt: game.created_at,
        startedAt: game.started_at ?? undefined,
        finishedAt: game.finished_at ?? undefined,
      };

      return { game: dto };
    }
  );
}
