// ts/apps/backend/src/database/db.ts

import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';

// .env 파일에서 DATABASE_URL을 읽어 데이터베이스 경로 설정
const dbPath = process.env.DATABASE_URL
    ? process.env.DATABASE_URL.replace('file:', '')
    : path.resolve(__dirname, 'user.db'); // fallback

// 디렉토리가 없으면 생성
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

console.log('Database will be created at:', dbPath);
let db: sqlite3.Database;

// Promise 기반으로 DB 쿼리를 실행하는 헬퍼 함수들
function query(db: sqlite3.Database, sql: string, params: any[] = []): Promise<any[]> {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

function run(db: sqlite3.Database, sql: string, params: any[] = []): Promise<void> {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) return reject(err);
            resolve();
        });
    });
}

function initDatabase(): Promise<sqlite3.Database> {
    return new Promise((resolve, reject) => {
        const dbInstance = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error opening database:', err.message);
                return reject(err);
            }
            console.log('Connected to the SQLite database.');
            resolve(dbInstance);
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
