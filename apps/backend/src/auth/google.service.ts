// ts/apps/backend/src/auth/google.service.ts

import { User } from '@trans/common-types';
import { getDb } from '../database/db';
import jwt from 'jsonwebtoken';
import { RunResult } from 'sqlite3';

const dbGet = async (query: string, params: any[]): Promise<User | undefined> => {
    const db = await getDb();
    return new Promise((resolve, reject) => {
        db.get(query, params, (err, row: User | undefined) => {
            if (err) return reject(err);
            resolve(row);
        });
    });
};

const dbRun = async (query: string, params: any[]): Promise<{ lastID: number }> => {
    const db = await getDb();
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

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Google API error: ${response.statusText}`, errorBody);
            throw new Error(`Google API error: ${response.statusText}`);
        }

        const googleUser = await response.json();
        const userName = googleUser.name || googleUser.email.split('@')[0];

        let user: User | undefined = await dbGet('SELECT * FROM "users" WHERE email = ?', [googleUser.email]);

        if (!user) {
            console.log('Creating new user in the database:', googleUser.email);
            const result = await dbRun(
                'INSERT INTO "users" (google_id, email, name, token) VALUES (?, ?, ?, ?)',
                [googleUser.id, googleUser.email, userName, token.access_token]
            );
            user = await dbGet('SELECT * FROM "users" WHERE id = ?', [result.lastID]);
        } else {
            await dbRun('UPDATE "users" SET token = ?, google_id = ?, name = ? WHERE id = ?', [token.access_token, googleUser.id, userName, user.id]);
            user = await dbGet('SELECT * FROM "users" WHERE id = ?', [user.id]);
        }

        if (!user) {
            throw new Error('User not found after creation/update');
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT secret is not defined');
        }

        const jwtPayload = {
            userId: user.id,
            profileComplete: user.profile_setup_complete || false,
        };

        const ourJwtToken = jwt.sign(jwtPayload, secret, { expiresIn: '1h' });
        return ourJwtToken;
    }
}

export default GoogleService;
