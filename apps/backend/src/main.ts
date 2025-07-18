import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import websocketPlugin from '@fastify/websocket';
import staticPlugin from '@fastify/static';
import sensible from '@fastify/sensible';
import path from 'path';

import gameRoute from './routes/api/games';
// import utilityRoute from './routes/api/utilities'; // add after, not implemented yet

/**
 * Builds and configures the Fastify server instance.
 * @returns A promise that resolves to the configured Fastify instance.
 */
async function buildServer(): Promise<FastifyInstance> {
	const server = fastify({ logger: true, trustProxy: true });

	// Register essential plugins
	server.register(cors, {origin: true, credentials: true});
	server.register(websocketPlugin);
	server.register(sensible);
	server.register(staticPlugin, {
		root: path.join(process.cwd(), '../../apps/frontend/dist'),
		prefix: '/',
	});

	server.register(gameRoute, { prefix: '/api/games' });
	// server.register(utilityRoute); // add after, it includes likes prometheus and health check

	server.setErrorHandler((error, request, reply) => {
		request.log.error(error);
		reply.status(500).send({
			error: 'Internal Server Error',
			message: 'Something went wrong on the server.',
		});
	});

	server.setNotFoundHandler((request, reply) => {
		reply.status(404).send({
			error: 'Not Found',
			message: 'The requested resource could not be found.',
		});
	});
	return server;
}

/**
 * start the fastify server
 */
async function start() {
	try {
		const server = await buildServer();
		const port = Number(process.env.PORT) || 3000;
		const host = process.env.HOST || '0.0.0.0';


		await server.listen({ port, host });
		server.log.info(`Server is running at http://${host}:${port}`);

	} catch (error) {
		console.error('Error starting server:', error);
		process.exit(1);
	}
}

/**
 * set up graceful shutdown
 */
const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];
signals.forEach((signal) => {
	process.on(signal, async () => {
		console.log(`Received ${signal}, shutting down gracefully...`);
		console.log('Server shutting down...');
		process.exit(0);
	});
});

start();

