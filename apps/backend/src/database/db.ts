// ts/apps/backend/src/database/db.ts

import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';

let dbInstance: sqlite3.Database | null = null;

const dbPath = process.env.DATABASE_URL
    ? process.env.DATABASE_URL.replace('file:', '')
    : path.resolve(__dirname, 'user.db');

const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

function query(db: sqlite3.Database, sql: string, params: any[] = []): Promise<any[]> {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

function run(db: sqlite3.Database, sql: string, params: any[] = []): Promise<sqlite3.RunResult> {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) return reject(err);
            resolve(this);
        });
    });
}

async function runMigrations(db: sqlite3.Database): Promise<void> {
    await run(db, `
        CREATE TABLE IF NOT EXISTS schema_migrations (
            version TEXT PRIMARY KEY
        )
    `);

    const executedMigrations = (await query(db, 'SELECT version FROM schema_migrations'))
        .map(row => row.version);

    const migrationDir = path.resolve(__dirname, 'migrations');
    const allMigrationFiles = fs.readdirSync(migrationDir)
        .filter(file => file.endsWith('.sql'))
        .sort();

    const pendingMigrations = allMigrationFiles.filter(file => !executedMigrations.includes(file));

    if (pendingMigrations.length === 0) {
        console.log('Database is up to date. No new migrations to run.');
        return;
    }

    console.log('Starting database migrations...');
    for (const file of pendingMigrations) {
        try {
            const filePath = path.join(migrationDir, file);
            const sql = fs.readFileSync(filePath, 'utf8');

            await run(db, 'BEGIN TRANSACTION;');
            await run(db, sql);
            await run(db, 'INSERT INTO schema_migrations (version) VALUES (?)', [file]);
            await run(db, 'COMMIT;');

            console.log(`Migration ${file} executed successfully.`);
        } catch (err: any) {
            console.error(`Error executing migration ${file}:`, err.message);
            await run(db, 'ROLLBACK;');
            throw new Error(`Migration failed for ${file}`);
        }
    }
    console.log('All new migrations executed successfully.');
}


async function initializeDatabase(): Promise<sqlite3.Database> {
    console.log('Database will be created at:', dbPath);

    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error('Error opening database:', err.message);
            throw err;
        }
    });

    console.log('Connected to the SQLite database.');
    await runMigrations(db);
    return db;
}


export async function getDb(): Promise<sqlite3.Database> {
    if (!dbInstance) {
        dbInstance = await initializeDatabase();
    }
    return dbInstance;
}
