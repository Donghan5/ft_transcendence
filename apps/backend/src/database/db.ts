// ts/apps/backend/src/database/db.ts

import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';

const dbPath = path.resolve(__dirname, 'user.db');
let db: sqlite3.Database;

function initDatabase(): Promise<sqlite3.Database> {
    return new Promise((resolve, reject) => {
        const dbInstance = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error opening database:', err.message);
                reject(err);
            } else {
                console.log('Connected to the SQLite database.');
                resolve(dbInstance);
            }
        });
    });
}

function runMigrations(db: sqlite3.Database): Promise<void> {
    return new Promise((resolve, reject) => {
        const migrationDir = path.resolve(__dirname, 'migrations');
        const migrationFiles = fs.readdirSync(migrationDir)
            .filter(file => file.endsWith('.sql'))
            .sort();

        console.log('Starting database migrations...');
        db.serialize(() => {
            migrationFiles.forEach(file => {
                const filePath = path.join(migrationDir, file);
                const sql = fs.readFileSync(filePath, 'utf8');
                db.exec(sql, (err) => {
                    if (err) {
                        console.error(`Error executing migration ${file}:`, err.message);
                        return reject(new Error(`Migration failed for ${file}`));
                    }
                    console.log(`Migration ${file} executed successfully.`);
                });
            });
            db.exec('', (err) => {
                if(err) {
                    return reject(err);
                }
                console.log('All migrations executed successfully.');
                resolve();
            });
        });
    });
}

export async function initializeDatabase(): Promise<sqlite3.Database> {
    if (db) return db;

    try {
        const dbInstance = await initDatabase();
        await runMigrations(dbInstance);
        db = dbInstance;
        return db;
    } catch (error) {
        console.error('Failed to initialize the database:', error);
        process.exit(1);
    }
}

export { db };
