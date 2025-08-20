// frontend/src/tournament/tournament-ui.ts

interface TournamentPlayer {
    id: string;
    nickname: string;
    rating: number;
    seed: number;
}

interface Match {
    id: string;
    player1: TournamentPlayer | null;
    player2: TournamentPlayer | null;
    winner: TournamentPlayer | null;
    round: number;
    matchNumber: number;
    gameId?: string;
}

interface Tournament {
    id: string;
    name: string;
    players: TournamentPlayer[];
    bracket: Match[][];
    status: 'waiting' | 'in_progress' | 'finished';
    currentRound: number;
    winner: TournamentPlayer | null;
    createdBy: string;
}

export class TournamentUI {
    private container: HTMLElement;
    private tournamentId: string | null = null;
    private websocket: WebSocket | null = null;
    private pollInterval: number | null = null;

    constructor(containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with id "${containerId}" not found`);
        }
        this.container = container;
    }

    showTournamentLobby(): void {
        this.container.innerHTML = `
            <div class="tournament-lobby bg-white border-thick shadow-sharp p-8">
                <h2 class="text-4xl uppercase mb-6">Tournament Waiting Room</h2>
                
                <div class="mb-6">
                    <input type="text" id="tournament-name" 
                           placeholder="Tournament Name" 
                           class="w-full p-2 border-thick">
                    <button id="create-tournament" 
                            class="mt-2 w-full bg-black text-white py-3 border-thick hover-anarchy">
                        Create Tournament
                    </button>
                </div>

                <div id="participants-list" class="mb-6">
                    <h3 class="text-2xl mb-2">List of participants</h3>
                    <ul id="participants" class="space-y-2"></ul>
                </div>

                <div class="flex gap-4">
                    <button id="invite-friends" 
                            class="flex-1 bg-blue-500 text-white py-3 border-thick hover-anarchy">
                        Invite Friends
                    </button>
                    <button id="start-tournament" 
                            class="flex-1 bg-green-500 text-white py-3 border-thick hover-anarchy"
                            disabled>
                        Start Tournament (at least 3 players required)
                    </button>
                </div>

                <div id="tournament-status" class="mt-4 p-3 bg-gray-100 border-thick hidden">
                    <p id="status-text">status: Waiting</p>
                </div>
            </div>
        `;

        this.setupEventListeners();
    }

    showBracket(tournament: Tournament): void {
        this.container.innerHTML = `
            <div class="tournament-bracket bg-white border-thick shadow-sharp p-8">
                <h2 class="text-4xl uppercase mb-6">${tournament.name} - Bracket</h2>
                
                <div class="mb-4">
                    <p class="text-lg">Current Round: ${tournament.currentRound}</p>
                    <p class="text-md text-gray-600">Status: ${this.getStatusText(tournament.status)}</p>
                </div>

                <div id="bracket-container" class="overflow-x-auto">
                    ${this.generateBracketHTML(tournament.bracket)}
                </div>

                <div class="mt-6 flex gap-4">
                    <button id="refresh-bracket" 
                            class="bg-blue-500 text-white py-3 px-6 border-thick hover-anarchy">
                        Refresh Bracket
                    </button>
                    <button id="back-to-lobby" 
                            class="bg-gray-500 text-white py-3 px-6 border-thick hover-anarchy">
                        Go Back to Lobby
                    </button>
                </div>

                ${tournament.winner ? `
                    <div class="mt-6 p-4 bg-yellow-300 border-thick">
                        <h3 class="text-2xl font-bold">🏆 Winner: ${tournament.winner.nickname}!</h3>
                    </div>
                ` : ''}
            </div>
        `;

        this.setupBracketEventListeners();
        
        if (tournament.status === 'in_progress') {
            this.startBracketPolling();
        }
    }

    private generateBracketHTML(bracket: Match[][]): string {
        if (!bracket.length) return '<p>Bracket not generated.</p>';

        let html = '<div class="flex gap-8 overflow-x-auto">';
        
        bracket.forEach((round, roundIndex) => {
            html += `
                <div class="round min-w-max">
                    <h3 class="text-xl mb-4 font-bold">Round ${roundIndex + 1}</h3>
                    <div class="space-y-4">
            `;
            
            round.forEach(match => {
                const player1Class = match.winner?.id === match.player1?.id ? 'font-bold text-green-600' : '';
                const player2Class = match.winner?.id === match.player2?.id ? 'font-bold text-green-600' : '';
                const matchStatus = this.getMatchStatus(match);
                
                html += `
                    <div class="match border-thick p-3 bg-white shadow-sm min-w-[200px]">
                        <div class="text-xs text-gray-500 mb-1">Match ${match.matchNumber + 1}</div>
                        <div class="${player1Class} mb-1">
                            ${match.player1?.nickname || 'waiting...'}
                        </div>
                        <div class="text-center text-gray-500 text-sm">VS</div>
                        <div class="${player2Class} mb-1">
                            ${match.player2?.nickname || (match.player1 ? 'walk-over' : 'waiting...')}
                        </div>
                        <div class="text-xs text-center mt-2 ${this.getStatusColor(matchStatus)}">
                            ${matchStatus}
                        </div>
                    </div>
                `;
            });
            
            html += '</div></div>';
        });
        
        html += '</div>';
        return html;
    }

    private getMatchStatus(match: Match): string {
        if (match.winner) return 'done';
        if (match.gameId) return 'in progress';
        if (match.player1 && match.player2) return 'waiting';
        if (match.player1 && !match.player2) return 'walkover';
        return 'waiting';
    }

    private getStatusColor(status: string): string {
        switch (status) {
            case 'done': return 'text-green-600';
            case 'in progress': return 'text-blue-600';
            case 'walkover': return 'text-yellow-600';
            default: return 'text-gray-500';
        }
    }

    private getStatusText(status: string): string {
        switch (status) {
            case 'waiting': return 'waiting';
            case 'in_progress': return 'in progress';
            case 'finished': return 'done';
            default: return 'unknown';
        }
    }

    private setupEventListeners(): void {
        const createBtn = document.getElementById('create-tournament');
        if (createBtn) {
            createBtn.addEventListener('click', async () => {
                const nameInput = document.getElementById('tournament-name') as HTMLInputElement;
                const name = nameInput?.value?.trim();
                
                if (!name) {
                    alert('Please put the tournament name.');
                    return;
                }

                try {
                    const response = await fetch('/api/tournament/create', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name }),
                        credentials: 'include'
                    });

                    if (response.ok) {
                        const data = await response.json();
                        this.tournamentId = data.tournamentId;
                        this.showStatusMessage('Tournament created!', 'success');
                        this.connectToTournament(data.tournamentId);
                    } else {
                        const error = await response.json();
                        throw new Error(error.message || 'Failed to create tournament');
                    }
                } catch (error) {
                    console.error('Tournament creation error:', error);
                    this.showStatusMessage(`Tournament creation error: ${error}`, 'error');
                }
            });
        }

        const startBtn = document.getElementById('start-tournament');
        if (startBtn) {
            startBtn.addEventListener('click', async () => {
                if (!this.tournamentId) {
                    alert('Please Create Tournament first.');
                    return;
                }

                try {
                    const response = await fetch('/api/tournament/start', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ tournamentId: this.tournamentId }),
                        credentials: 'include'
                    });

                    if (response.ok) {
                        const data = await response.json();
                        this.showBracket(data.tournament);
                    } else {
                        const error = await response.json();
                        throw new Error(error.message || 'Tournament start failed');
                    }
                } catch (error) {
                    console.error('Tournament start error:', error);
                    this.showStatusMessage(`Tournament started failed: ${error}`, 'error');
                }
            });
        }

        const inviteBtn = document.getElementById('invite-friends');
        if (inviteBtn) {
            inviteBtn.addEventListener('click', () => {
                this.showStatusMessage('Currently working...', 'info');
            });
        }
    }

    private setupBracketEventListeners(): void {
        const refreshBtn = document.getElementById('refresh-bracket');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.refreshTournament();
            });
        }

        const backBtn = document.getElementById('back-to-lobby');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.stopBracketPolling();
                this.showTournamentLobby();
            });
        }
    }

    private connectToTournament(tournamentId: string): void {
        this.startTournamentPolling(tournamentId);
    }

    private startTournamentPolling(tournamentId: string): void {
        if (this.pollInterval) {
            clearInterval(this.pollInterval);
        }

        this.pollInterval = window.setInterval(async () => {
            try {
                const response = await fetch(`/api/tournament/${tournamentId}`, {
                    credentials: 'include'
                });

                if (response.ok) {
                    const tournament: Tournament = await response.json();
                    this.updateParticipantsList(tournament.players);
                    
                    if (tournament.status === 'in_progress') {
                        this.showBracket(tournament);
                    }
                }
            } catch (error) {
                console.error('Polling error:', error);
            }
        }, 2000); 
    }

    private startBracketPolling(): void {
        if (!this.tournamentId) return;

        if (this.pollInterval) {
            clearInterval(this.pollInterval);
        }

        this.pollInterval = window.setInterval(() => {
            this.refreshTournament();
        }, 3000); 
    }

    private stopBracketPolling(): void {
        if (this.pollInterval) {
            clearInterval(this.pollInterval);
            this.pollInterval = null;
        }
    }

    private async refreshTournament(): Promise<void> {
        if (!this.tournamentId) return;

        try {
            const response = await fetch(`/api/tournament/${this.tournamentId}`, {
                credentials: 'include'
            });

            if (response.ok) {
                const tournament: Tournament = await response.json();
                
                const bracketContainer = document.getElementById('bracket-container');
                if (bracketContainer) {
                    bracketContainer.innerHTML = this.generateBracketHTML(tournament.bracket);
                    
                    if (tournament.status === 'finished') {
                        this.stopBracketPolling();
                        this.showTournamentComplete(tournament);
                    }
                }
            }
        } catch (error) {
            console.error('Error refreshing tournament:', error);
        }
    }

    private updateParticipantsList(players: TournamentPlayer[]): void {
        const list = document.getElementById('participants');
        if (!list) return;

        list.innerHTML = players.map(p => `
            <li class="flex justify-between items-center p-2 bg-gray-100 border-thick">
                <span class="font-medium">${p.nickname}</span>
                <div class="text-sm text-gray-600">
                    <span>Rating: ${p.rating}</span>
                    ${p.seed > 0 ? `<span class="ml-2">Seed: ${p.seed}</span>` : ''}
                </div>
            </li>
        `).join('');

        const startBtn = document.getElementById('start-tournament') as HTMLButtonElement;
        if (startBtn) {
            startBtn.disabled = players.length < 3;
            startBtn.textContent = players.length < 3 
                ? `Start Tournament (${players.length}/3 Participants)` 
                : `Start Tournament (${players.length}Participants)`;
        }
    }

    private showMatchNotification(match: Match): void {
        if (!match.player1 || !match.player2) return;

        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-yellow-300 border-thick shadow-sharp p-4 animate-pop z-50';
        notification.innerHTML = `
            <h3 class="text-xl mb-2">🏆 Start Game!</h3>
            <p class="font-medium">${match.player1.nickname} VS ${match.player2.nickname}</p>
            <p class="text-sm text-gray-600">Round ${match.round}</p>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    private showTournamentComplete(tournament: Tournament): void {
        const winnerSection = document.querySelector('.mt-6.p-4.bg-yellow-300');
        if (!winnerSection && tournament.winner) {
            const container = document.querySelector('.tournament-bracket');
            if (container) {
                const winnerDiv = document.createElement('div');
                winnerDiv.className = 'mt-6 p-4 bg-yellow-300 border-thick';
                winnerDiv.innerHTML = `
                    <h3 class="text-2xl font-bold">🏆 Tournament Winner: ${tournament.winner.nickname}!</h3>
                    <p class="text-sm mt-2">Congrat! Tournament done!</p>
                `;
                container.appendChild(winnerDiv);
            }
        }
    }

    private showStatusMessage(message: string, type: 'success' | 'error' | 'info'): void {
        const statusDiv = document.getElementById('tournament-status');
        const statusText = document.getElementById('status-text');
        
        if (!statusDiv || !statusText) return;

        const colorClass = {
            success: 'bg-green-100 border-green-300 text-green-800',
            error: 'bg-red-100 border-red-300 text-red-800',
            info: 'bg-blue-100 border-blue-300 text-blue-800'
        }[type];

        statusDiv.className = `mt-4 p-3 border-thick ${colorClass}`;
        statusText.textContent = message;
        statusDiv.classList.remove('hidden');

        if (type !== 'error') {
            setTimeout(() => {
                statusDiv.classList.add('hidden');
            }, 3000);
        }
    }

    public joinTournament(tournamentId: string): void {
        this.tournamentId = tournamentId;
        this.connectToTournament(tournamentId);
    }

    public leaveTournament(): void {
        this.stopBracketPolling();
        this.tournamentId = null;
        
        if (this.websocket) {
            this.websocket.close();
            this.websocket = null;
        }
    }

    public getCurrentTournamentId(): string | null {
        return this.tournamentId;
    }

    public cleanup(): void {
        this.leaveTournament();
    }
}