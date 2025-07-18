// apps/backend/src/routes/api/users/login/google.controller.ts
import { FastifyInstance } from 'fastify';
import oauthPlugin from '@fastify/oauth2';

export default async function (fastify: FastifyInstance) {
  fastify.register(oauthPlugin, {
    name: 'googleOAuth2',
    scope: ['profile', 'email'],
    credentials: {
      client: {
        id: process.env.GOOGLE_CLIENT_ID, // have to set in .env file
        secret: process.env.GOOGLE_CLIENT_SECRET, // have to set in .env file
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION,
    },
    startRedirectPath: '/api/users/login/google',
    callbackUri: 'http://localhost/api/users/login/google/callback',
  });

  fastify.get('/api/users/login/google/callback', async function (request, reply) {
    const { token } = await this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);

    // Google API로 사용자 정보 요청
    const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
    const googleUser = await response.json();

    // TODO:
    // 1. Use googleUser information, serach or create user in your database
    // 2. Create login session, such as JWT token for our service
    // 3. Send the generated token to the frontend (e.g., set cookie or JSON response)

    // 예시: 사용자 정보로 리디렉션 (실제로는 JWT 토큰을 전달해야 함)
    reply.redirect(`/?username=${googleUser.name}`);
  });
}
