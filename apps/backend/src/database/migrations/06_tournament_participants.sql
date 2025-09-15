CREATE TABLE IF NOT EXISTS tournament_participants (
    tournament_id TEXT,
    user_id INTEGER,
    placement INTEGER,
    seed INTEGER,
    is_ready BOOLEAN DEFAULT 0,
    PRIMARY KEY (tournament_id, user_id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);