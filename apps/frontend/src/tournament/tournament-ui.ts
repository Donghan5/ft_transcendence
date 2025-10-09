// apps/frontend/src/tournament/tournament-ui.ts

import { Tournament, BracketMatch, TournamentPlayer } from '../../../../packages/common-types/src/tournament';
import { appState } from '../state/state';
import { renderActiveTournamentsList, showMyTournaments, showTournamentHistory, renderBracketView, renderMatch, renderPlayersView } from './tournament-render';
import { setCurrentTournament, startTournamentGame, showNotification, openTournament, joinTournament, startTournament, deleteTournament, confirmMatch } from './tournament-services';
import { connectWebSocketTournament, disconnectWebSocketTournament } from './tournament-ws';

export class TournamentUI {
    private container: HTMLElement;
    private currentTournament: Tournament | null = null;
    private currentUser: any | null = null;

    constructor(containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with id ${containerId} not found`);
        }
        this.container = container;
    }

    setCurrentUser(user: any) {
        this.currentUser = user;
    }

    /**
     * View tournament as a spectator (non-participant)
     */
    async viewTournamentAsSpectator(tournamentId: string) {
        try {
            const response = await fetch(`/api/tournament/${tournamentId}`, {
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Failed to load tournament');
            }

            const tournament = await response.json();
            appState.isSpectatorMode = true;
            this.showTournamentView(tournament);
        } catch (error) {
            console.error('Error viewing tournament as spectator:', error);
            showNotification('Failed to load tournament', 'error');
        }
    }

    // Main tournament screen - shows tournament management buttons
    showTournamentHome() {
        this.container.innerHTML = `
            <div class="tournament-home animate-pop">
                <button id="tournament-return-btn" class="mb-4 bg-black text-white px-6 py-2 text-lg uppercase border-thick shadow-sharp hover-anarchy">&lt; Back</button>
                <div class="bg-white border-thick shadow-sharp p-8">
                    <h1 class="text-6xl text-center mb-8 text-outline-black">TOURNAMENTS</h1>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <button id="create-tournament-btn" class="bg-green-500 text-white py-4 px-6 text-2xl border-thick shadow-sharp hover-anarchy">CREATE TOURNAMENT</button>
                        <button id="my-tournaments-btn" class="bg-blue-500 text-white py-4 px-6 text-2xl border-thick shadow-sharp hover-anarchy">MY TOURNAMENTS</button>
                        <button id="tournament-history-btn" class="bg-purple-500 text-white py-4 px-6 text-2xl border-thick shadow-sharp hover-anarchy">HISTORY</button>
                    </div>
                    <div id="active-tournaments-list">
                        <h2 class="text-3xl mb-4 text-outline-white">ACTIVE TOURNAMENTS</h2>
                        <div id="tournaments-container"><div class="text-center p-4">Loading tournaments...</div></div>
                    </div>
                </div>
            </div>`;

        this.setupTournamentHomeListeners();
        this.loadActiveTournamentsForUI();
    }

    private async loadActiveTournamentsForUI() {
        try {
            if (!this.currentUser) {
                this.currentUser = await appState.userReady;
            }
            
            await this.loadActiveTournamentsPage();
            
            renderActiveTournamentsList('tournaments-container', true);
        } catch (error) {
            console.error('Error loading tournaments for UI:', error);
            const container = document.getElementById('tournaments-container');
            if (container) {
                container.innerHTML = '<div class="text-center p-4 text-red-500">Failed to load tournaments</div>';
            }
        }
    }

    // Show create tournament form
    showCreateTournament() {
        this.container.innerHTML = `
            <div class="create-tournament bg-white border-thick shadow-sharp p-8 animate-pop">
                <h1 class="text-4xl text-center mb-8 text-outline-black">CREATE TOURNAMENT</h1>
                
                <div class="max-w-md mx-auto">
                    <div class="mb-6">
                        <label class="block text-xl mb-2">Tournament Name:</label>
                        <input type="text" id="tournament-name-input" 
                               class="w-full p-3 text-xl border-thick" 
                               placeholder="Enter tournament name">
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-xl mb-2">Max Players:</label>
                        <select id="max-players-select" class="w-full p-3 text-xl border-thick">
                            <option value="4">4 Players</option>
                            <option value="8" selected>8 Players</option>
                            <option value="16">16 Players</option>
                        </select>
                    </div>
                    
                    <div class="flex gap-4">
                        <button id="create-confirm-btn" 
                                class="flex-1 bg-green-500 text-white py-3 text-xl border-thick shadow-sharp hover-anarchy">
                            CREATE
                        </button>
                        <button id="create-cancel-btn" 
                                class="flex-1 bg-red-500 text-white py-3 text-xl border-thick shadow-sharp hover-anarchy">
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.setupCreateTournamentListeners();
    }

    // Show tournament view with brackets
    showTournamentView(tournament: Tournament) {
        disconnectWebSocketTournament();
        this.currentTournament = tournament;
        
        // Set global tournament reference for return navigation
        if (setCurrentTournament) {
            setCurrentTournament(tournament);
        }

        const isHost = tournament.hostId === this.currentUser?.id?.toString();
        const isParticipant = tournament.players.some(p => p.id === this.currentUser?.id?.toString());

        this.container.innerHTML = `
            <div class="tournament-view animate-pop">
                <button id="tournament-view-return-btn" class="mb-4 bg-black text-white px-6 py-2 text-lg uppercase border-thick shadow-sharp hover-anarchy">&lt; Back</button>
                
                <div class="bg-white border-thick shadow-sharp p-8">
                    <div class="flex justify-between items-center mb-8">
                        <div>
                            <h1 class="text-4xl text-outline-black">${tournament.name}</h1>
                            ${appState.isSpectatorMode ? `
                                <p class="text-lg text-purple-600 font-teko uppercase mt-2">Spectator Mode</p>
                            ` : ''}
                            ${tournament.status === 'finished' && tournament.winner ? `
                                <div class="mt-4 p-4 bg-yellow-300 border-thick">
                                    <h2 class="text-2xl font-bold text-black">TOURNAMENT CHAMPION</h2>
                                    <p class="text-xl text-black">${tournament.winner.nickname}</p>
                                    <p class="text-sm text-gray-700">Rating: ${tournament.winner.rating}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <div class="tournament-info mb-6">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div class="bg-blue-100 p-4 border-thick">
                                <h3 class="text-xl font-bold">Status</h3>
                                <p class="text-lg">${tournament.status.toUpperCase()}</p>
                            </div>
                            <div class="bg-green-100 p-4 border-thick">
                                <h3 class="text-xl font-bold">Players</h3>
                                <p class="text-lg">${tournament.players.length}/${tournament.maxPlayers}</p>
                            </div>
                            <div class="bg-yellow-100 p-4 border-thick">
                                <h3 class="text-xl font-bold">Round</h3>
                                <p class="text-lg">${tournament.currentRound}</p>
                            </div>
                        </div>

                        ${!appState.isSpectatorMode && isHost && tournament.status === 'waiting' ? `
                            <div class="text-center mb-4">
                                <button id="start-tournament-btn" 
                                        class="bg-green-500 text-white py-3 px-8 text-xl border-thick shadow-sharp hover-anarchy"
                                        ${tournament.players.length < 4 ? 'disabled' : ''}>
                                    START TOURNAMENT
                                </button>
                                <button id="delete-tournament-btn" 
                                        class="bg-red-500 text-white py-3 px-8 text-xl border-thick shadow-sharp hover-anarchy ml-4">
                                    DELETE TOURNAMENT
                                </button>
                            </div>
                        ` : ''}

                        ${appState.isSpectatorMode && tournament.status === 'waiting' ? `
                            <div class="text-center mb-4 bg-purple-100 p-4 border-thick">
                                <p class="text-lg font-teko uppercase">Tournament hasn't started yet</p>
                                <p class="text-sm text-gray-600">You can join as a participant if there's still space</p>
                                ${tournament.players.length < tournament.maxPlayers ? `
                                    <button id="join-as-participant-btn" 
                                            class="bg-green-500 text-white py-2 px-6 text-lg border-thick shadow-sharp hover-anarchy mt-3">
                                        JOIN AS PARTICIPANT
                                    </button>
                                ` : ''}
                            </div>
                        ` : ''}
                    </div>

                    <div id="tournament-content">
                        ${tournament.status === 'waiting' ? renderPlayersView(tournament) : renderBracketView(tournament)}
                    </div>
                </div>
            </div>
        `;

        this.setupTournamentViewListeners(tournament);
        
        // Only connect WebSocket if not in spectator mode or if spectating an active tournament
        if (!appState.isSpectatorMode || tournament.status === 'active') {
            connectWebSocketTournament(tournament.id, (data) => {
                this.handleWebSocketMessage(data)
            });
        }
    }

    getCurrentTournamentId(): string | null {
        return this.currentTournament?.id || null;
    }

    
    /**
     * This function is aim to show active tournament lists in tournament page, not in main page
     */
    private async loadActiveTournamentsPage() {
        try {
            console.log('Calling loadActiveTournaments in tournament-ui class with private features');
            const response = await fetch('/api/tournament/active', {
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Failed to load tournaments');
            }

            const data = await response.json();
            this.displayActiveTournaments(data.tournaments || []);
        } catch (error) {
            console.error('Error loading tournaments:', error);
            document.getElementById('tournaments-container')!.innerHTML = 
                '<div class="text-center p-4 text-red-500">Failed to load tournaments</div>';
        }
    }

    private displayActiveTournaments(tournaments: Tournament[]) {
        const container = document.getElementById('tournaments-container')!;
        
        if (tournaments.length === 0) {
            container.innerHTML = '<div class="text-center p-4">No active tournaments</div>';
            return;
        }

        container.innerHTML = tournaments.map(tournament => {
            const isParticipant = tournament.players.some(p => p.id === this.currentUser?.id?.toString());
            
            return `
                <div class="tournament-card bg-gray-100 p-4 border-thick mb-4">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="text-xl font-bold">${tournament.name}</h3>
                            <p class="text-sm">Players: ${tournament.players.length}/${tournament.maxPlayers}</p>
                            <p class="text-sm">Status: ${tournament.status.toUpperCase()}</p>
                        </div>
                        <div>
                            ${isParticipant ? 
                                `<button class="open-tournament-btn bg-blue-500 text-white py-2 px-4 border-thick hover-anarchy" 
                                         data-tournament-id="${tournament.id}">OPEN</button>` :
                                `<button class="join-tournament-btn bg-green-500 text-white py-2 px-4 border-thick hover-anarchy" 
                                         data-tournament-id="${tournament.id}"
                                         ${tournament.players.length >= tournament.maxPlayers ? 'disabled' : ''}>
                                    ${tournament.players.length >= tournament.maxPlayers ? 'FULL' : 'JOIN'}
                                 </button>`
                            }
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        this.setupTournamentListListeners();
    }

    private setupTournamentHomeListeners() {
        document.getElementById('tournament-return-btn')?.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('navigate', { detail: 'hero' }));
        });

        document.getElementById('create-tournament-btn')?.addEventListener('click', () => {
            this.showCreateTournament();
        });

        // Rest of the existing listeners...
        document.getElementById('my-tournaments-btn')?.addEventListener('click', async () => {
            try {
                console.log('Loading my tournaments...');
                const response = await fetch('/api/tournament/my-tournaments', {
                    credentials: 'include'
                });
                
                if (response.ok) {
                    const data = await response.json();
                    showMyTournaments(data.tournaments);
                } else {
                    showNotification('Failed to load your tournaments', 'error');
                }
            } catch (error) {
                console.error('Error loading my tournaments:', error);
                showNotification('Failed to load your tournaments', 'error');
            }
        });

        document.getElementById('tournament-history-btn')?.addEventListener('click', async () => {
            try {
                console.log('Loading tournament history...');
                const response = await fetch('/api/tournament/history/user', {
                    credentials: 'include'
                });
                
                if (response.ok) {
                    const data = await response.json();
                    showTournamentHistory(data.history);
                } else {
                    showNotification('Failed to load tournament history', 'error');
                }
            } catch (error) {
                console.error('Error loading tournament history:', error);
                showNotification('Failed to load tournament history', 'error');
            }
        });
    }

    private setupCreateTournamentListeners() {
        document.getElementById('create-confirm-btn')?.addEventListener('click', async () => {
            const nameInput = document.getElementById('tournament-name-input') as HTMLInputElement;
            const maxPlayersSelect = document.getElementById('max-players-select') as HTMLSelectElement;
            
            const name = nameInput.value.trim();
            const maxPlayers = parseInt(maxPlayersSelect.value);

            if (!name) {
                alert('Please enter a tournament name');
                return;
            }

            try {
                const response = await fetch('/api/tournament/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ name, maxPlayers })
                });

                if (!response.ok) {
                    throw new Error('Failed to create tournament');
                }

                const data = await response.json();
                
                // Load the created tournament
                const tournamentResponse = await fetch(`/api/tournament/${data.tournamentId}`, {
                    credentials: 'include'
                });
                
                if (tournamentResponse.ok) {
                    const tournament = await tournamentResponse.json();
                    this.showTournamentView(tournament);
                } else {
                    this.showTournamentHome();
                }
            } catch (error) {
                console.error('Error creating tournament:', error);
                alert('Failed to create tournament');
            }
        });

        document.getElementById('create-cancel-btn')?.addEventListener('click', () => {
            this.showTournamentHome();
        });
    }

    private setupTournamentListListeners() {
        document.querySelectorAll('.join-tournament-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const tournamentId = (e.target as HTMLElement).dataset.tournamentId;
                await joinTournament(tournamentId!);
            });
        });

        document.querySelectorAll('.open-tournament-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const tournamentId = (e.target as HTMLElement).dataset.tournamentId;
                await openTournament(tournamentId!);
            });
        });
    }

    private setupTournamentViewListeners(tournament: Tournament) {
        document.getElementById('tournament-view-return-btn')?.addEventListener('click', () => {
            disconnectWebSocketTournament();
            appState.isSpectatorMode = false;
            this.showTournamentHome();
        });

        // Rest of existing listeners remain the same...
        if (!appState.isSpectatorMode) {
            document.getElementById('start-tournament-btn')?.addEventListener('click', () => {
                startTournament(tournament.id);
            });

            document.getElementById('delete-tournament-btn')?.addEventListener('click', () => {
                deleteTournament(tournament.id);
            });

            document.querySelectorAll('.confirm-match-btn').forEach(btn => {
                const newBtn = btn.cloneNode(true) as HTMLElement;
                btn.parentNode?.replaceChild(newBtn, btn);
                
                newBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const matchId = (e.target as HTMLElement).dataset.matchId;
                    if (matchId) {
                        console.log('Confirm button clicked for match:', matchId);
                        await confirmMatch(tournament.id, matchId);
                    } else {
                        console.error('No match ID found on confirm button');
                    }
                });
            });
        } else {
            document.getElementById('join-as-participant-btn')?.addEventListener('click', async () => {
                try {
                    await joinTournament(tournament.id);
                    appState.isSpectatorMode = false;
                    this.showTournamentView(tournament);
                } catch (error) {
                    showNotification('Failed to join tournament', 'error');
                }
            });
        }

        document.querySelectorAll('.join-game-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const gameId = (e.target as HTMLElement).dataset.gameId;
                if (gameId && this.currentTournament) {
                    startTournamentGame(gameId, this.currentUser?.id?.toString(), this.currentTournament.id);
                }
            });
        });

        document.querySelectorAll('.spectate-game-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const gameId = (e.target as HTMLElement).dataset.gameId;
                window.dispatchEvent(new CustomEvent('navigate', { 
                    detail: { 
                        sectionId: 'game',
                        gameId: gameId,
                        mode: 'spectator'
                    }
                }));
            });
        });
    }
    
    public handleWebSocketMessage(data: any) {
        console.log('Tournament WebSocket message received:', data);
        
        switch (data.type) {
            case 'tournament_updated':
                if (this.currentTournament && data.tournament.id === this.currentTournament.id) {
                    console.log('Updating tournament view with new data');
                    this.currentTournament = data.tournament;
                    this.showTournamentView(data.tournament);
                }
                break;
                
            case 'tournament_deleted':
                // Handle tournament deletion - FRONTEND ONLY
                if (this.currentTournament && data.tournamentId === this.currentTournament.id) {
                    console.log('Tournament was deleted, redirecting user');
                    this.handleTournamentDeleted(data.tournamentName || 'Unknown Tournament');
                }
                break;
                
            case 'player_joined':
                if (this.currentTournament) {
                    this.currentTournament.players = data.players;
                    this.refreshTournamentView();
                }
                break;
                
            case 'match_ready':
                showNotification('Your match is ready! Please confirm to start playing.', 'info');
                if (this.currentTournament) {
                    this.refreshTournamentView();
                }
                break;
                
            case 'match_confirmed':
                showNotification('Match confirmation received!', 'success');
                if (this.currentTournament) {
                    this.refreshTournamentView();
                }
                break;
                
            case 'game_ready':
                if (data.gameId && this.isPlayerInMatch(data.match)) {
                    showNotification('Game starting! Redirecting...', 'success');
                    setTimeout(() => {
                        if (this.currentTournament) {
                            startTournamentGame(data.gameId, this.currentUser?.id?.toString(), this.currentTournament.id);
                        }
                    }, 1500);
                }
                break;
                
            default:
                console.log('Unknown WebSocket message:', data);
        }
    }

    private handleTournamentDeleted(tournamentName: string) {
        // Show notification
        showNotification(`Tournament "${tournamentName}" has been deleted by the host`, 'error');
        
        // Disconnect from WebSocket
        disconnectWebSocketTournament();
        
        // Clear current tournament
        this.currentTournament = null;
        
        // Redirect to tournament home after a brief delay
        setTimeout(() => {
            this.showTournamentHome();
        }, 2000);
    }

    private isPlayerInMatch(match: any): boolean {
        if (!this.currentUser || !match) return false;
        return match.player1?.id === this.currentUser.id?.toString() || 
               match.player2?.id === this.currentUser.id?.toString();
    }

    private async refreshTournamentView() {
        if (!this.currentTournament) return;
        
        try {
            const response = await fetch(`/api/tournament/${this.currentTournament.id}`, {
                credentials: 'include'
            });
            
            if (response.ok) {
                const updatedTournament = await response.json();
                this.currentTournament = updatedTournament;
                this.showTournamentView(updatedTournament);
            }
        } catch (error) {
            console.error('Error refreshing tournament view:', error);
        }
    }

    public cleanup() {
        disconnectWebSocketTournament();
        appState.isSpectatorMode = false;
        this.currentTournament = null;
    }

    // Legacy method compatibility (for old main.ts code)
    setCurrentUserId(userId: string) {
        // Find user info or create minimal user object
        this.currentUser = { id: userId };
    }

    showTournamentLobby() {
        this.showTournamentHome();
    }

    setTournamentId(tournamentId: string) {
        // Load and show specific tournament
        openTournament(tournamentId);
    }

    showBracket(tournament: Tournament) {
        this.showTournamentView(tournament);
    }
}