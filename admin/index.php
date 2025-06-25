<?php
class TournamentManager {
    private $db;
    
    public function __construct() {
        $this->db = new PDO('sqlite:../database/app.db');
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    
    public function createTournament($data) {
        $stmt = $this->db->prepare("
            INSERT INTO tournaments (name, description, max_participants, entry_fee, prize_pool, starts_at) 
            VALUES (?, ?, ?, ?, ?, ?)
        ");
        
        return $stmt->execute([
            $data['name'],
            $data['description'], 
            $data['max_participants'],
            $data['entry_fee'],
            $data['prize_pool'],
            $data['starts_at']
        ]);
    }
    
    public function getTournamentStats() {
        $stmt = $this->db->query("
            SELECT 
                COUNT(*) as total_tournaments,
                SUM(CASE WHEN status = 'open' THEN 1 ELSE 0 END) as open_tournaments,
                SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active_tournaments,
                SUM(current_participants) as total_participants,
                SUM(prize_pool) as total_prize_pool
            FROM tournaments
        ");
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    
    public function getGameStatistics() {
        $stmt = $this->db->query("
            SELECT 
                COUNT(*) as total_games,
                COUNT(CASE WHEN finished_at IS NOT NULL THEN 1 END) as completed_games,
                AVG(CASE WHEN finished_at IS NOT NULL 
                    THEN (julianday(finished_at) - julianday(started_at)) * 24 * 60 
                    ELSE NULL END) as avg_game_duration_minutes
            FROM games
            WHERE started_at > datetime('now', '-30 days')
        ");
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    
    public function exportTournamentData($tournamentId) {
        $stmt = $this->db->prepare("
            SELECT 
                t.name as tournament_name,
                u.username,
                u.email,
                tp.joined_at,
                tp.final_rank,
                g.player1_score,
                g.player2_score,
                g.finished_at
            FROM tournaments t
            JOIN tournament_participants tp ON t.id = tp.tournament_id
            JOIN users u ON tp.user_id = u.id
            LEFT JOIN games g ON g.tournament_id = t.id AND (g.player1_id = u.id OR g.player2_id = u.id)
            WHERE t.id = ?
            ORDER BY tp.final_rank ASC, tp.joined_at ASC
        ");
        
        $stmt->execute([$tournamentId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

//stats API endpoint
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['action'] === 'stats') {
    header('Content-Type: application/json');
    $manager = new TournamentManager();
    echo json_encode([
        'tournament_stats' => $manager->getTournamentStats(),
        'game_stats' => $manager->getGameStatistics()
    ]);
    exit;
}

// metrics endpoint
if ($_SERVER['REQUEST_URI'] === '/metrics') {
    header('Content-Type: text/plain');
    $manager = new TournamentManager();
    $stats = $manager->getTournamentStats();
    
    echo "php_tournaments_total {$stats['total_tournaments']}\n";
    echo "php_tournaments_open {$stats['open_tournaments']}\n";
    echo "php_tournaments_active {$stats['active_tournaments']}\n";
    echo "php_participants_total {$stats['total_participants']}\n";
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>ft_transcendence - Tournament Management</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8">Tournament Management Dashboard</h1>
        
        <!-- stats cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-sm font-medium text-gray-500">Total Tournaments</h3>
                <p class="text-2xl font-bold text-gray-900" id="total-tournaments">-</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-sm font-medium text-gray-500">Active Tournaments</h3>
                <p class="text-2xl font-bold text-blue-600" id="active-tournaments">-</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-sm font-medium text-gray-500">Total Participants</h3>
                <p class="text-2xl font-bold text-green-600" id="total-participants">-</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-sm font-medium text-gray-500">Total Prize Pool</h3>
                <p class="text-2xl font-bold text-purple-600" id="total-prize">-</p>
            </div>
        </div>
        
        <!-- tournament creation form -->
        <div class="bg-white p-6 rounded-lg shadow mb-8">
            <h2 class="text-xl font-bold mb-4">New Tournament</h2>
            <form id="tournament-form" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Tournament Name" required 
                           class="border rounded-lg px-3 py-2">
                    <input type="number" name="max_participants" placeholder="Max Participants" required 
                           class="border rounded-lg px-3 py-2">
                    <input type="number" name="entry_fee" placeholder="Entry Fee" step="0.01" 
                           class="border rounded-lg px-3 py-2">
                    <input type="datetime-local" name="starts_at" required 
                           class="border rounded-lg px-3 py-2">
                </div>
                <textarea name="description" placeholder="Tournament Description" 
                          class="w-full border rounded-lg px-3 py-2"></textarea>
                <button type="submit" 
                        class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Create Tournament
                </button>
            </form>
        </div>
    </div>

    <script>
        // load stats
        fetch('?action=stats')
            .then(response => response.json())
            .then(data => {
                document.getElementById('total-tournaments').textContent = data.tournament_stats.total_tournaments;
                document.getElementById('active-tournaments').textContent = data.tournament_stats.active_tournaments;
                document.getElementById('total-participants').textContent = data.tournament_stats.total_participants;
                document.getElementById('total-prize').textContent = '$' + parseFloat(data.tournament_stats.total_prize_pool).toFixed(2);
            });

        // real-time update (every 5 seconds)
        setInterval(() => {
            fetch('?action=stats')
                .then(response => response.json())
                .then(data => {
                    // update stats logic
                });
        }, 5000);
    </script>
</body>
</html>