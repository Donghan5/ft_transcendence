// init db --> using sqlite3 and migrations/user.sql
import sqlite3 from 'sqlite3';
import fs from 'fs';
import path, { resolve } from 'path';

const dbPath = path.resolve(__dirname, 'user.db');           // Define the path to the SQLite database file

/**
 * Creates a new SQLite database connection.
 * It initializes the database asynchronously and returns the database instance.
 * @returns {Promise<sqlite3.Database>} A promise that resolves to the SQLite database instance.
 */
function initDatabase(): Promise<sqlite3.Database> {
	return new Promise((resolve, reject) => {
		const db = new sqlite3.Database(dbPath, (err) => {
			if (err) {
				console.error('Error opening database:', err.message);
				reject(err);
			} else {
				console.log('Connected to the SQLite database.');
				resolve(db);
			}
		});
	});
}

/**
 * Runs SQLite migrations from a specified SQL file.
 * @params db - Connected SQLite database instance.
 */
function runMigrations(db: sqlite3.Database): void {
	try{
		const migrationDir = path.resolve(__dirname, 'migrations'); // Define the path to the migration SQL file
		const migrationFiles = fs.readdirSync(migrationDir)
								.filter(file => file.endsWith('.sql'))
								.sort(); // Filter for SQL files in the migration directory

		console.log('Starting database migrations...');
		for (const file of migrationFiles) {
			const filePath = path.join(migrationDir, file);
			const sql = fs.readFileSync(filePath, 'utf8');
			db.exec(sql, (err) => {
				if (err) {
					console.error(`Error executing migration ${file}:`, err.message);
				} else {
					console.log(`Migration ${file} executed successfully.`);
				}
			});
		}
		console.log('All migrations executed successfully.');
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error('Error reading migration file:', error.message);
		} else {
			console.error('Unknown error occurred during migration:', error);
		}
		process.exit(1); // Exit the process with an error code
	}
}

// Initialize the database and run migrations with async
let db: sqlite3.Database;

// async IIFE(Immediately Invoked Function Expression) to initialize the database and run migrations
(async () => {
	try {
		db = await initDatabase(); // Initialize the database connection
		runMigrations(db); // Run migrations to set up the database schema
	} catch (error) {
		console.error('Failed to initialize the database:', error);
		process.exit(1); // Exit the process with an error code
	}
})();

export { db }; // Export the database instance for use in other modules

