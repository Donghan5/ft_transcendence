CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game_id TEXT UNIQUE NOT NULL,
    player1_id INTEGER REFERENCES users(id),
    player2_id INTEGER REFERENCES users(id),
    player1_score INTEGER DEFAULT 0,
    player2_score INTEGER DEFAULT 0,
    winner_id INTEGER REFERENCES users(id),
    game_type TEXT DEFAULT 'casual',
    tournament_id INTEGER,
    blockchain_tx_hash TEXT,
    started_at DATETIME,
    finished_at DATETIME,
    game_data TEXT
);
