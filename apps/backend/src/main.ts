import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import websocketPlugin from '@fastify/websocket';
import sensible from '@fastify/sensible';
import path from 'path';
import fastifyOAuth2 from '@fastify/oauth2';
import cookie from '@fastify/cookie';
import * as dotenv from 'dotenv';
import { initializeDatabase } from './database/db';
import multipart from '@fastify/multipart';

import profileRoute from './routes/api/user/profile.controller';

dotenv.config({ path: path.resolve(__dirname, '../../../../.env')});

import gameRoute from './routes/api/games';
import googleLoginRoute from './routes/api/user/login/google.controller';
import authStatusRoute from './routes/api/auth/status.controller';
import friendsRoute from './routes/api/user/friends.controller';

async function buildServer(): Promise<FastifyInstance> {
    const server = fastify({ logger: true, trustProxy: true });

    server.register(cors, {origin: "https://localhost:8443", credentials: true });
    server.register(websocketPlugin);
    server.register(sensible);
	server.register(multipart);
    await server.register(cookie);

    // Google OAuth2
    server.register<any>(fastifyOAuth2, {
        name: 'googleOAuth2',
        scope: ['profile', 'email'],
        credentials: {
            client: {
                id: process.env.GOOGLE_CLIENT_ID,
                secret: process.env.GOOGLE_CLIENT_SECRET
            },
            auth: fastifyOAuth2.GOOGLE_CONFIGURATION
        },
        startRedirectPath: '/api/users/login/google',
        callbackUri: `https://localhost:8443/api/users/login/google/callback`
    });

    // register Routes API
    server.register(gameRoute, { prefix: '/api/games' });
    server.register(googleLoginRoute, { prefix: '/api/users/login/google' });
    server.register(authStatusRoute, { prefix: '/api/auth' });
	server.register(profileRoute, { prefix: '/api/user' });
	server.register(friendsRoute, { prefix: '/api/user' });

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

async function start() {
    try {
        console.log('Initializing database...');
        const db = await initializeDatabase();

        // Temporary: Force check if users table exists
        try {
            const result = await new Promise((resolve, reject) => {
                db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='users'", (err, row) => {
                    if (err) reject(err);
                    else resolve(row);
                });
            });
            console.log('Users table check result:', result);
        } catch (error) {
            console.error('Error checking users table:', error);
        }

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

// Graceful shutdown
const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];
signals.forEach((signal) => {
    process.on(signal, async () => {
        console.log(`Received ${signal}, shutting down gracefully...`);
        console.log('Server shutting down...');
        process.exit(0);
    });
});

start();
