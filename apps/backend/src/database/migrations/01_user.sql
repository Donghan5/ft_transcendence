CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    google_id TEXT UNIQUE,
    email TEXT NOT NULL,
    name TEXT,
    token TEXT,
    nickname TEXT UNIQUE,
    avatar_url TEXT,
	password_hash VARCHAR(255),
	auth_provider TEXT DEFAULT 'google',
    profile_setup_complete BOOLEAN DEFAULT FALSE
);
