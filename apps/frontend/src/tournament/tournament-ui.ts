// frontend/src/tournament/tournament-ui.ts
import { StatusManager } from '../status/status-manager';
import StateManager from '../utils/state-manager';

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
    private statusManager: any = null;

    constructor(containerId: string, statusManager?: any) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with id "${containerId}" not found`);
        }
        this.container = container;
        this.statusManager = statusManager;
    }

    setTournamentId(tournamentId: string): void {
        this.tournamentId = tournamentId;
    }

    connectToExistingTournament(tournamentId: string): void {
        this.tournamentId = tournamentId;
        this.connectToTournament(tournamentId);
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

                    <button id="cancel-tournament" 
                            class="flex-1 bg-red-500 text-white py-3 border-thick hover-anarchy">
                        Cancel Tournament
                    </button>
                            
                    <button id="start-tournament" 
                            class="flex-1 bg-green-500 text-white py-3 border-thick hover-anarchy"
                            disabled>
                        Start Tournament
                    </button>
                </div>

                <div class="mt-6"> 
                    <p class="text-lg">Tournament Description:</p>
                    <p class="text-sm text-gray-600">Create a tournament and invite your friends to join! 
                    Once enough players have joined (at least 3), you can start the tournament and see the bracket unfold.</p>
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

                        if (!this.tournamentId) {
                            throw new Error('No tournament ID returned from server');
                        }
                        
                        StateManager.saveTournamentState(this.tournamentId, true, name);
                        
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
        
        const joinBtn = document.getElementById('join-tournament');
        if (joinBtn) {
        joinBtn.addEventListener('click', async () => {
            try {
                const response = await fetch('/api/tournament/active/list', {
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    const activeTournaments = data.tournaments;

                    if (activeTournaments.length === 0) {
                        this.showStatusMessage('No active tournaments available to join.', 'info');
                        return;
                    }

                    const waitingTournament = activeTournaments.find((t: any) => t.status === 'waiting');
                    
                    if (!waitingTournament) {
                        this.showStatusMessage('No tournaments waiting for players.', 'info');
                        return;
                    }

                    const success = await this.joinTournament(waitingTournament.id);
                    if (success) {
                        StateManager.saveTournamentState(waitingTournament.id, false, waitingTournament.name);
                        this.showStatusMessage('Successfully joined tournament!', 'success');
                    } else {
                        this.showStatusMessage('Failed to join tournament.', 'error');
                    }
                } else {
                    this.showStatusMessage('Failed to get active tournaments.', 'error');
                }
            } catch (error) {
                console.error('Error getting active tournaments:', error);
                this.showStatusMessage('Error getting tournaments list.', 'error');
            }
        });
    }

        const inviteBtn = document.getElementById('invite-friends');
        if (inviteBtn) {
            inviteBtn.addEventListener('click', () => {
                if (!this.tournamentId) {
                    this.showStatusMessage('Please Create Tournament first.', 'error');
                    return;
                }
                this.showInviteFriendsModal();
            });
        }

        const cancelBtn = document.getElementById('cancel-tournament');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', async () => {
                if (!this.tournamentId) return;

                try {
                    const response = await fetch('/api/tournament/cancel', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ tournamentId: this.tournamentId }),
                        credentials: 'include'
                    });

                    if (response.ok) {
                        StateManager.clearTournamentState();
                        
                        this.tournamentId = null;
                        this.stopBracketPolling();
                        
                        this.showStatusMessage('Tournament cancelled successfully!', 'success');
                        this.showTournamentLobby(); 
                    } else {
                        const error = await response.json();
                        throw new Error(error.message || 'Tournament cancellation failed');
                    }
                } catch (error) {
                    console.error('Tournament cancellation error:', error);
                    this.showStatusMessage(`Cancellation failed: ${error}`, 'error');
                }
            });
        }
    }

    private setupBracketEventListeners(): void {
        const tournamentId = this.tournamentId;
        if (!tournamentId) return;
        const refreshBtn = document.getElementById('refresh-bracket');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.refreshTournament(tournamentId);
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
        this.refreshTournament(tournamentId);
        this.startTournamentPolling(tournamentId);
    }

    private async refreshTournament(tournamentId: string): Promise<void> {
        try {
            const response = await fetch(`/api/tournament/${tournamentId}`, {
                credentials: 'include'
            });
            
            if (response.ok) {
                const tournament = await response.json();
                this.updateParticipantsList(tournament.players);

                if (tournament.status === 'in_progress') {
                    this.showBracket(tournament);
                }
            }
        } catch (error) {
            console.error('Error refreshing tournament:', error);
        }
    }

    private updateActivity(): void {
        if (this.tournamentId) {
            StateManager.updateTournamentActivity();
        }
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
                    
                    this.updateActivity();

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
            this.refreshTournament(this.tournamentId!);
        }, 3000); 
    }

    private stopBracketPolling(): void {
        if (this.pollInterval) {
            clearInterval(this.pollInterval);
            this.pollInterval = null;
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
            startBtn.disabled = players.length < 3 || players.length > 10;
            startBtn.textContent = players.length < 3 || players.length > 10
                ? `Start Tournament (${players.length}/10 Participants)` 
                : `Start Tournament (${players.length} Participants)`;
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

    async joinTournament(tournamentId: string): Promise<boolean> {
        try {
            const response = await fetch('/api/tournament/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tournamentId }),
                credentials: 'include'
            });

            if (response.ok) {
                this.tournamentId = tournamentId;
                
                const infoResponse = await fetch(`/api/tournament/${tournamentId}`, {
                    credentials: 'include'
                });
                
                if (infoResponse.ok) {
                    const tournament = await infoResponse.json();
                    StateManager.saveTournamentState(tournamentId, false, tournament.name);
                }
                
                this.connectToTournament(tournamentId);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error joining tournament:', error);
            return false;
        }
    }
    public leaveTournament(): void {
        this.stopBracketPolling();
        this.tournamentId = null;
        
        if (this.websocket) {
            this.websocket.close();
            this.websocket = null;
        }
    }

    public async cancelTournament(): Promise<void> {
        if (!this.tournamentId) {
            console.error('No tournament ID to cancel');
            return;
        }

        this.stopBracketPolling();
        
        try {
            const response = await fetch('/api/tournament/cancel', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    tournamentId: this.tournamentId 
                }),
                credentials: 'include'
            });

            if (response.ok) {
                console.log('Tournament cancelled successfully');
                this.tournamentId = null;
                this.showStatusMessage('Tournament cancelled successfully', 'success');
            } else {
                const error = await response.json();
                console.error('Cancel failed:', error);
                this.showStatusMessage(`Failed to cancel: ${error.error}`, 'error');
            }
        } catch (err) {
            console.error('Cancel tournament error:', err);
            this.showStatusMessage('Failed to cancel tournament', 'error');
        }
    }

    public getCurrentTournamentId(): string | null {
        return this.tournamentId;
    }

    public cleanup(): void {
        this.leaveTournament();
    }

    private showInviteFriendsModal(): void {
        const onlineFriends = this.statusManager?.getFriends() || [];

       const invitableFriends = onlineFriends.filter((friend: any) => {
            const status = friend.status || friend.stats;
            return status === 'online' || status === 'away';
        });

        const modalHtml = `
            <div id="invite-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white border-thick shadow-sharp p-8 max-w-2xl w-full max-h-[80vh] overflow-auto">
                    <h3 class="text-3xl uppercase mb-6">Invite Friends to Tournament</h3>
                    
                    <div id="friends-list" class="space-y-2 mb-6">
                        ${invitableFriends.length > 0 ? invitableFriends.map((friend: any) => `
                            <div class="flex justify-between items-center bg-gray-100 p-3 border-thick">
                                <div class="flex items-center gap-3">
                                    <div class="w-3 h-3 rounded-full ${this.getStatusColor(friend.status)}" 
                                         title="${friend.status}"></div>
                                    <span class="font-bold">${friend.nickname}</span>
                                    <span class="text-sm text-gray-600">${friend.status}</span>
                                </div>
                                <button class="invite-friend-btn bg-blue-500 text-white px-4 py-2 border-thick hover-anarchy"
                                        data-user-id="${friend.userId}"
                                        data-nickname="${friend.nickname}">
                                    Invite
                                </button>
                            </div>
                        `).join('') : `
                            <p class="text-gray-600">No friends are currently online to invite.</p>
                        `}
                    </div>
                    
                    <div class="flex gap-4">
                        <button id="refresh-friends" class="flex-1 bg-gray-500 text-white py-3 border-thick hover-anarchy">
                            Refresh List
                        </button>
                        <button id="close-invite-modal" class="flex-1 bg-red-500 text-white py-3 border-thick hover-anarchy">
                            Close
                        </button>
                    </div>
                    
                    <div id="invite-status" class="mt-4"></div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);

        this.setupInviteModalEventListeners();
    }

    private setupInviteModalEventListeners(): void {
        document.querySelectorAll('.invite-friend-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const button = e.target as HTMLButtonElement;
                const userId = button.dataset.userId;
                const nickname = button.dataset.nickname;

                if (!userId || !this.tournamentId) return;

                button.disabled = true;
                button.textContent = 'Inviting...';

                try {
                    const response = await fetch(`api/tournament/${this.tournamentId}/invite`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ targetUserId: userId }),
                        credentials: 'include'
                    });

                    if (response.ok) {
                        button.textContent = 'Invited';
                        button.classList.remove('bg-blue-500');
                        button.classList.add('bg-green-500');
                        this.showInviteStatus(`Invitation sent to ${nickname}!`, 'success');
                    }
                    else {
                        const error = await response.json();
                        button.disabled = false;
                        button.textContent = 'Invite';
                        this.showInviteStatus(`Failed to invite ${nickname}: ${error.message || 'Unknown error'}`, 'error');
                    }
                } catch (error) {                    
                    button.disabled = false;
                    button.textContent = 'Invite';
                    this.showInviteStatus(`Error inviting ${nickname}: ${error}`, 'error');
                }
            });
        });

        const refreshBtn = document.getElementById('refresh-friends');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.closeInviteModal();
                this.showInviteFriendsModal();
            });
        }

        const closeBtn = document.getElementById('close-invite-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeInviteModal();
            });
        }

        const modal = document.getElementById('invite-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeInviteModal();
                }
            });
        }
    }

    private closeInviteModal(): void {
        const modal = document.getElementById('invite-modal');
        if (modal) {
            modal.remove();
        }
    }


    /**
     * Show invite status message (success or error) in the modal
     * @param message 
     * @param type 
     */
    private showInviteStatus(message: string, type: 'success' | 'error'): void {
        const statusDiv = document.getElementById('invite-status');
        if (statusDiv) {
            const colorClass = type === 'success' ? 'text-green-600' : 'text-red-600';
            statusDiv.innerHTML = `<p class="${colorClass} font-bold">${message}</p>`;
            
            setTimeout(() => {
                statusDiv.innerHTML = '';
            }, 3000);
        }
    }

    destroy(): void {
        if (this.pollInterval) {
            clearInterval(this.pollInterval);
            this.pollInterval = null;
        }
        
        if (this.websocket) {
            this.websocket.close();
            this.websocket = null;
        }
        
        this.container.innerHTML = '';
    }
}