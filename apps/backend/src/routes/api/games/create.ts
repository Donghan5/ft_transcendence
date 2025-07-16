// this part are creating a new game (api)
import { FastifyInstance, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { GameDTO } from '@trans/common-types';


const bodySchema = z.object({
	mode: z.eum('PVP', 'AI'),
	oppenentId: z.number().optional(),
});

export default async function (app: FastifyInstance) {
	app.post('/routes/api/games',
		{ schema: { body: bodySchema } },
		async (req: FastifyRequest) => {
			const { mode, oppenentId } = bodySchema.parse(req.body);
			const userId = req.user.id;

			// create game row instance
			const [game] = await app.db
				.insertInto('games')
				.values({ mode, status: 'WAITING' })
				.returningAll()
				.execute();

			await app.db
				.insertInto('game_players')
				.values({ game_id: game.id, user_id: userId})
				.execute();

			await app.redis.lpush('match_queue', JSON.stringify({ gameId: game.id, userId, mode }));

			const dto: GameDTO = {
				...game,
				players: [{
					id: userId,
					score: 0}]
			};
			return { game: dto };
		}
	)
}
