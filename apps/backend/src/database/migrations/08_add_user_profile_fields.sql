ALTER TABLE users RENAME TO old_users;  -- when renaming the table, using RENAME TO
CREATE TABLE users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	google_id TEXT UNIQUE,
	email TEXT NOT NULL,
	name TEXT,
	token TEXT,
	nickname TEXT UNIQUE,
	avatar_url TEXT,
	profile_setup_complete BOOLEAN DEFAULT FALSE
);

INSERT INTO users (id, google_id, email, name, token)
SELECT id, google_id, email, name, token FROM old_users;

DROP TABLE old_users;
