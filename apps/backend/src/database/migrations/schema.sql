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
