-- This file is to create the user table in the database (for google login)

CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	google_id TEXT UNIQUE,
	email TEXT NOT NULL,
	name TEXT,
	token TEXT
);
