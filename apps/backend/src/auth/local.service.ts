import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { dbGet, dbRun } from '../database/helpers';

class LocalAuthService {
	public static async register(nickname: string, email: string, password: string): Promise<string> {
		const existingUser = await dbGet(
			`SELECT * FROM users WHERE email = ? OR nickname = ?`,
			[email, nickname]
		);

		if (existingUser) {
			if (existingUser.email === email) {
				throw new Error('Email already in use');
			}
			if (existingUser.nickname === nickname) {
				throw new Error('Nickname already in use');
			}
		}

		// Password hashing
		const saltRounds = 12;
		const passwordHash = await bcrypt.hash(password, saltRounds);

		const result = await dbRun(
			`INSERT INTO users (nickname, email, password_hash, auth_provider, name, profile_setup_complete) VALUES (?, ?, ?, ?, ?, ?)`,
			[nickname, email, passwordHash, 'local', nickname, true]
		);

		const jwtPayload = {
			userId: result.lastID,
			profileComplete: true,
		};

		const secret = process.env.JWT_SECRET;
		if (!secret) {
			throw new Error('JWT secret is not defined');
		}

		return jwt.sign(jwtPayload, secret, { expiresIn: '1h' });
	}

	public static async login(nickname: string, password: string): Promise<string> {
		// Find the user by nickname (Just for local auth)
		const user = await dbGet(`SELECT * FROM users WHERE nickname = ? AND auth_provider = ?`, [nickname, 'local']);

		if (!user) {
			throw new Error('User not found');
		}

		if (!user.password_hash) {
			throw new Error('Not a local user');
		}

		const isPasswordValid = await bcrypt.compare(password, user.password_hash);
		if (!isPasswordValid) {
			throw new Error('Invalid password');
		}

		const jwtPayload = {
			userId: user.id,
			profileComplete: user.profile_setup_complete || false,
		};

		const secret = process.env.JWT_SECRET;
		if (!secret) {
			throw new Error('JWT secret is not defined');
		}

		return jwt.sign(jwtPayload, secret, { expiresIn: '1h' });
	}

	public static async loginByEmail(email: string, password: string): Promise<string> {
		const user = await dbGet(`SELECT * FROM users WHERE email = ? AND auth_provider = ?`, [email, 'local']);

		if (!user) {
			throw new Error('User not found');
		}

		if (!user.password_hash) {
			throw new Error('Not a local user');
		}

		const isPasswordValid = await bcrypt.compare(password, user.password_hash);
		if (!isPasswordValid) {
			throw new Error('Invalid password');
		}

		const jwtPayload = {
			userId: user.id,
			profileComplete: user.profile_setup_complete || false,
		};

		const secret = process.env.JWT_SECRET;
		if (!secret) {
			throw new Error('JWT secret is not defined');
		}

		return jwt.sign(jwtPayload, secret, { expiresIn: '1h' });
	}
}

export default LocalAuthService;
