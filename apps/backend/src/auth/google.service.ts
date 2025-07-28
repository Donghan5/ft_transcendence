import { OAuth2Token } from '@fastify/oauth2';
import { User } from '@trans/common-types'
import { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';
import { db } from '../database/db'; // Adjust the import path as necessary

const dbGet = (query: string, params: any[]): Promise<User | undefined> => {
	return new Promise((resolve, reject) => {
		db.get(query, params, (err, row: User | undefined) => {
			if (err) return reject(err);
			resolve(row);
		});
	});
};

const dbRun = (query: string, params: any[]): Promise<{ lastID: number }> => {
	return new Promise((resolve, reject) => {
		db.run(query, params, function (err) {
			if (err) return reject(err);
			resolve({ lastID: this.lastID });
		});
	});
};

class GoogleService {
	public static async handleGoogleLogin(token: any): Promise<string> {
		const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
			headers: {
				Authorization: `Bearer ${token.access_token}`,
			},
		});
		const googleUser = await response.json();

		// Getting user from the database
		let user: User | undefined = await dbGet('SELECT * FROM "users" WHERE email = ?', [googleUser.email]);

		if (!user) {     // If user does not exist, create a new user
			console.log('Creating new user in the database:', googleUser.email);
			const result = await dbRun(
				'INSERT INTO "users" (google_id, email, name, token) VALUES (?, ?, ?, ?)',
				[googleUser.id, googleUser.email, googleUser.name, token.access_token]
			);
			user = await dbGet('SELECT * FROM "users" WHERE id = ?', [result.lastID]);
		} else {
			await dbRun('UPDATE "users" SET token = ?, google_id = ? WHERE id = ?', [token.access_token, googleUser.id, user.id]);

			user = await dbGet('SELECT * FROM "users" WHERE id = ?', [user.id]);
		}

		if (!user) {
			throw new Error('User not found after creation');
		}

		const secret = process.env.JWT_SECRET;
		if (!secret) {
			throw new Error('JWT secret is not defined');
		}

		const ourJwtToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
		return ourJwtToken;
	}
}

export default GoogleService;
