CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    oauth_provider TEXT,
    oauth_id TEXT,
    wallet_address TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME,
    avatar_url TEXT,
    total_games INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    elo_rating INTEGER DEFAULT 1200
);

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

CREATE TABLE IF NOT EXISTS tournaments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    max_participants INTEGER NOT NULL,
    current_participants INTEGER DEFAULT 0,
    entry_fee REAL DEFAULT 0,
    prize_pool REAL DEFAULT 0,
    blockchain_contract_id TEXT,
    status TEXT DEFAULT 'open', -- 'open', 'active', 'finished'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    starts_at DATETIME,
    ends_at DATETIME
);

CREATE TABLE IF NOT EXISTS tournament_participants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tournament_id INTEGER REFERENCES tournaments(id),
    user_id INTEGER REFERENCES users(id),
    joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    eliminated_at DATETIME,
    final_rank INTEGER
);

CREATE TABLE IF NOT EXISTS chat_channels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    description TEXT,
    is_private BOOLEAN DEFAULT FALSE,
    created_by INTEGER REFERENCES users(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS chat_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    channel_id INTEGER REFERENCES chat_channels(id),
    user_id INTEGER REFERENCES users(id),
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    edited_at DATETIME,
    is_deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS user_friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    friend_id INTEGER REFERENCES users(id),
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, friend_id)
);

CREATE TABLE IF NOT EXISTS blockchain_transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    transaction_hash TEXT UNIQUE NOT NULL,
    contract_address TEXT,
    transaction_type TEXT,
    amount TEXT,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    confirmed_at DATETIME
);

CREATE INDEX idx_games_players ON games(player1_id, player2_id);
CREATE INDEX idx_games_tournament ON games(tournament_id);
CREATE INDEX idx_chat_messages_channel ON chat_messages(channel_id, created_at);
CREATE INDEX idx_users_elo ON users(elo_rating DESC);
CREATE INDEX idx_blockchain_tx_status ON blockchain_transactions(status, created_at);

CREATE VIEW user_rankings AS
SELECT
    u.id,
    u.username,
    u.elo_rating,
    u.total_games,
    u.wins,
    u.losses,
    ROUND(CAST(u.wins AS REAL) / CASE WHEN u.total_games = 0 THEN 1 ELSE u.total_games END * 100, 2) as win_rate,
    RANK() OVER (ORDER BY u.elo_rating DESC) as rank
FROM users u
WHERE u.total_games > 0;
