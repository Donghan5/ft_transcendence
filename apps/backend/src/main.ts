import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import websocketPlugin from '@fastify/websocket';
import staticPlugin from '@fastify/static';
import sensible from '@fastify/sensible';
import path from 'path';
import fastifyOAuth2 from '@fastify/oauth2';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

import gameRoute from './routes/api/games';
import googleController from './routes/api/user/login/google.controller';
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
	// server.register(staticPlugin, {
	// 	root: path.join(process.cwd(), '../../apps/frontend/dist'),
	// 	prefix: '/',
	// });

	server.register(gameRoute, { prefix: '/api/games' });
	// server.register(utilityRoute); // add after, it includes likes prometheus and health check

	server.register<any>(fastifyOAuth2, {
		name: 'googleOAuth2',
		scope: ['profile', 'email'],
		credentials: {
			client: {
				id: process.env.VITE_GOOGLE_CLIENT_ID,
				secret: process.env.GOOGLE_CLIENT_SECRET,
			},
			auth: fastifyOAuth2.GOOGLE_CONFIGURATION,
		},
		startRedirectPath: '/login/google',
		callbackUri: 'http://localhost:3000/api/users/login/google/callback'
	});

	server.register(googleController);

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

