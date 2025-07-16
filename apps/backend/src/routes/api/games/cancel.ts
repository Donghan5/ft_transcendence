// this file is to cancel the game
import { FastifyInstance, FastifyRequest } from 'fastify';
import { GameStatus } from '@trans/common-types';

export default async function (app: FastifyInstance) {
	app.patch(
		'/route/api/games/:id/cancel',
		async (req: FastifyRequest<{ Params: {id: string} }>) => {
			const gameId = Number(req.params.id);
			const userId = req.user.id;

			const game = await app.db
				.selectFrom('games')
				.selectAll()
				.where('id', '=', gameId)
				.executeTakeFirst();
			if (!game) return app.httpErrors.notFound();

			if (game.status !== 'WAITING') {
				return app.httpErrors.conflict('Game has already started');
			}

			const isOwner = await app.db
				.selectFrom('game_players')
				.where('game_id', '=', gameId)
				.where('user_id', '=', userId)
				.executeTakeFirst();
			if (!isOwner) return app.httpErrors.forbidden();

			await app.db
				.deleteFrom('games')
				.set({ status: 'CANCELLED' satisfies GameStatus})
				.where('id', '=', gameId)
				.execute();


			return { ok: true };
		}
	);
}
