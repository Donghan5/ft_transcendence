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
