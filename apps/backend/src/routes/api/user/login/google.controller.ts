// apps/backend/src/routes/api/users/login/google.controller.ts
import { FastifyInstance } from 'fastify';
import GoogleService from '../../../../auth/google.service';

export default async function (fastify: FastifyInstance) {
	fastify.get('/api/users/login/google/callback', async (request: any, reply: any) => {
		try {
			const { token } = await (fastify as any).googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);

			const ourJwtToken = await GoogleService.handleGoogleLogin(token);

			reply.setCookie('auth_token', ourJwtToken, {
				httpOnly: true,
				secure: true,
				path: '/',
			});

			return reply.redirect('http://localhost:5173/dashboard'); // Redirect to the dashboard or any other page
		} catch (error) {
			console.error('Error during Google login callback:', error);
			reply.status(500).send({ message: 'Internal Server Error' });
		}
	});
}
