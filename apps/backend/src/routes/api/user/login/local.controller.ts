import { FastifyInstance } from 'fastify';
import LocalAuthService from '../../../../auth/local.service';

export default async function (fastify: FastifyInstance) {
	// Route to handle local login by nickname (registering user)
	fastify.post('/register', async (request: any, reply: any) => {
		try {
			const { nickname, email, password, confirmPassword } = request.body;

			if (!nickname || !email || !password ) {
				return reply.status(400).send({ error: 'Nickname, email, and password are required' });
			}

			if (password !== confirmPassword) {
				return reply.status(400).send({ error: 'Passwords do not match' });
			}

			if (password.length < 8) {
				return reply.status(400).send({ error: 'Password must be at least 8 characters long' });
			}

			if (nickname.length < 3 || nickname.length > 20) {
				return reply.status(400).send({ error: 'Nickname must be between 3 and 20 characters long' });
			}


			// email regex validation
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				return reply.status(400).send({ error: 'Invalid email format' });
			}

			const token = await LocalAuthService.register(nickname, email, password);

			reply.setCookie('auth_token', token, {
				httpOnly: true,
				secure: true,
				path: '/',
				sameSite: 'lax'
			});

			return reply.send({
				success: true,
				message: 'User registered successfully',
			});
		}
		catch (error) {
			console.error('Registration error:', error);
			const message = error instanceof Error ? error.message : 'Registration failed';
            return reply.status(400).send({ error: message });
		}
	});


	// login route for local authentication
	fastify.post('/login', async (request: any, reply: any) => {
		try {
			const { loginInput, password } = request.body;

			if (!loginInput || !password) {
				return reply.status(400).send({ error: 'Nickname and password are required' });
			}

			let token: string;

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (emailRegex.test(loginInput)) {
				token = await LocalAuthService.loginByEmail(loginInput, password);
			} else {
				token = await LocalAuthService.login(loginInput, password);
			}

			reply.setCookie('auth_token', token, {
				httpOnly: true,
				secure: true,
				path: '/',
				sameSite: 'lax'
			});

			return reply.send({
				success: true,
				message: 'User logged in successfully',
			});
		}
		catch (error) {
			console.error('Login error:', error);
			const message = error instanceof Error ? error.message : 'Login failed';
			return reply.status(401).send({ error: message });
		}
	});

	// change password route
	fastify.post('/change-password', async (request: any, reply: any) =>{
		try {
			const { currentPassword, newPassword, confirmNewPassword } = request.body;

			if (!currentPassword || !newPassword || !confirmNewPassword) {
				return reply.status(400).send({
					error: 'Please provide all required fields: current password, new password, and confirm new password'
				});
			}

			if (newPassword !== confirmNewPassword) {
				return reply.status(400).send({ error: 'New passwords do not match' });
			}

			if (newPassword.length < 8) {
				return reply.status(400).send({ error: 'New password must be at least 8 characters long' });
			}

			return reply.send({
				success: true,
				message: 'Password change successfully done'
			});
		} catch (error) {
			console.error('Change password error:', error);
			const message = error instanceof Error ? error.message : 'Password change failed';
			return reply.status(400).send({ error: message });
		}
	});

}
