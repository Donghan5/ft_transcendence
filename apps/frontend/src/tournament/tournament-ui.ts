import { Tournament, BracketMatch, TournamentPlayer } from '../../../../packages/common-types/src/tournament';
import { appState } from '../state/state';
import { renderActiveTournamentsList, showMyTournaments, showTournamentHistory } from './tournament-render';
import { setCurrentTournament, startTournamentGame } from './tournament-services';
import { showNotification } from '../services/ui';
import { spectateGame } from './tournament-services';
import { showPublicProfileScreen } from '../services/user';

export class TournamentUI {
    private container: HTMLElement;
    private currentTournament: Tournament | null = null;
    private currentUser: any | null = null;
    private ws: WebSocket | null = null;
    private isSpectatorMode: boolean = false;
    private activeListWs: WebSocket | null = null;

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

    async viewTournamentAsSpectator(tournamentId: string) {
        try {
            const response = await fetch(`/api/tournament/${tournamentId}`, {
                credentials: 'include'
            });

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Tournament not found. It may have been deleted.');
                }
                throw new Error(`Failed to load tournament (${response.status})`);
            }

            const tournament = await response.json();
            this.isSpectatorMode = true;
            this.showTournamentView(tournament);
        } catch (error) {
            console.error('Error viewing tournament as spectator:', error);
            const message = error instanceof Error ? error.message : 'Failed to load tournament';
            showNotification(message, 'error');
            
            setTimeout(() => {
                this.showTournamentHome();
            }, 2000);
        }
    }

    showTournamentHome() {
        this.container.innerHTML = `
            <div class="tournament-home animate-pop">
                <button id="tournament-return-btn" class="mb-4 bg-black text-white px-6 py-2 text-lg uppercase border-thick shadow-sharp hover-anarchy">&lt; Back</button>
                <div class="bg-yellow-300 border-thick shadow-sharp p-8 mb-6">
                    <h1 class="text-4xl text-white text-outline-lg-black text-center mb-6">TOURNAMENTS</h1>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <button id="create-tournament-btn" 
                                class="bg-pink-500 text-white py-3 px-8 text-xl font-bold border-thick shadow-sharp hover-anarchy">
                            CREATE TOURNAMENT
                        </button>
                        <button id="my-tournaments-btn" 
                                class="bg-cyan-400 text-white py-3 px-8 text-xl font-bold border-thick shadow-sharp hover-anarchy">
                            MY TOURNAMENTS
                        </button>
                        <button id="tournament-history-btn" 
                                class="bg-purple-500 text-white py-3 px-8 text-xl font-bold border-thick shadow-sharp hover-anarchy">
                            TOURNAMENT HISTORY
                        </button>
                    </div>
                </div>
                
                <div class="bg-yellow-300 border-thick shadow-sharp p-8">
                    <h2 class="text-3xl text-white text-outline-md-black mb-6">ACTIVE TOURNAMENTS</h2>
                    <div id="tournaments-container"></div>
                </div>
            </div>
        `;

        this.setupTournamentHomeListeners();
        this.loadActiveTournaments();
    }

    private setupTournamentHomeListeners() {
        document.getElementById('tournament-return-btn')?.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('navigate', { detail: 'hero' }));
        });
        
        document.getElementById('create-tournament-btn')?.addEventListener('click', () => {
            this.showCreateTournament();
        });

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
        const confirmBtn = document.getElementById('create-confirm-btn');
        const cancelBtn = document.getElementById('create-cancel-btn');
        const nameInput = document.getElementById('tournament-name-input') as HTMLInputElement;
        const errorDiv = document.getElementById('create-error-message');

        if (!confirmBtn || !cancelBtn || !nameInput) {
            console.error('Tournament create form elements not found');
            return;
        }

        const showError = (message: string) => {
            if (errorDiv) {
                errorDiv.textContent = message;
                errorDiv.classList.remove('hidden');
            }
            showNotification(message, 'error');
        };

        const hideError = () => {
            if (errorDiv) {
                errorDiv.classList.add('hidden');
            }
        };

        nameInput.addEventListener('input', hideError);

        confirmBtn.addEventListener('click', async () => {
            hideError();
            
            const name = nameInput.value.trim();
            const maxPlayers = 4;

            if (!name || name.length === 0) {
                showError('Please enter a tournament name');
                nameInput.focus();
                return;
            }

            if (name.length < 3) {
                showError('Tournament name must be at least 3 characters');
                nameInput.focus();
                return;
            }

            if (name.length > 50) {
                showError('Tournament name must be less than 50 characters');
                nameInput.focus();
                return;
            }

            confirmBtn.setAttribute('disabled', 'true');
            (confirmBtn as HTMLButtonElement).textContent = 'CREATING...';

            await this.createTournament(name, maxPlayers);

            confirmBtn.removeAttribute('disabled');
            (confirmBtn as HTMLButtonElement).textContent = 'CREATE';
        });

        cancelBtn.addEventListener('click', () => {
            this.showTournamentHome();
        });

        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                confirmBtn.click();
            }
        });
    }

    showCreateTournament() {
        this.container.innerHTML = `
            <div class="create-tournament bg-yellow-300 border-thick shadow-sharp p-8 animate-pop">
                <h1 class="text-4xl text-white text-outline-lg-black text-center mb-8">CREATE TOURNAMENT</h1>
                
                <div class="max-w-md mx-auto">
                    <div class="mb-6">
                        <label class="block text-xl mb-2 font-bold text-white text-outline-md-black">Tournament Name:</label>
                        <input type="text" 
                            id="tournament-name-input" 
                            class="w-full p-3 text-xl border-thick" 
                            placeholder="Enter tournament name"
                            maxlength="50"
                            required>
                        <p class="text-sm text-gray-600 mt-1">3-50 characters</p>
                    </div>
                    
                    <div class="mb-6 bg-blue-100 border-thick p-4">
                        <p class="text-lg font-bold text-center">This tournament is for 4 PLAYERS</p>
                        <p class="text-sm text-gray-700 text-center mt-1">Semi-finals + Final</p>
                    </div>
                    
                    <div id="create-error-message" class="hidden mb-4 p-3 bg-red-100 border-thick text-red-700"></div>
                    
                    <div class="flex gap-4 justify-center">
                        <button id="create-confirm-btn" 
                                class="bg-pink-500 text-white py-3 px-8 text-xl border-thick shadow-sharp hover-anarchy">
                            CREATE
                        </button>
                        <button id="create-cancel-btn" 
                                class="bg-gray-500 text-white py-3 px-8 text-xl border-thick shadow-sharp hover-anarchy">
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.setupCreateTournamentListeners();
    }

    showTournamentView(tournament: Tournament) {
        this.currentTournament = tournament;
        setCurrentTournament(tournament);
        
        const isHost = !this.isSpectatorMode && this.currentUser?.id?.toString() === tournament.hostId;
        const isParticipant = !this.isSpectatorMode && tournament.players.some(p => p.id === this.currentUser?.id?.toString());

        this.container.innerHTML = `
            <div class="tournament-view animate-pop">
                <div class="bg-yellow-300 border-thick shadow-sharp p-8 mb-6">
                    <button id="tournament-view-return-btn" class="mb-4 bg-black text-white px-6 py-2 text-lg uppercase border-thick shadow-sharp hover-anarchy">&lt; Back</button>
                    
                    <h1 class="text-4xl text-white text-outline-lg-black text-center mb-4">${tournament.name}</h1>
                    <div class="text-center text-xl mb-4">
                        <span class="font-bold text-white text-outline-md-black">Status:</span> 
                        <span class="uppercase ${tournament.status === 'waiting' ? 'text-yellow-600' : tournament.status === 'active' ? 'text-green-600' : 'text-gray-600'}">
                            ${tournament.status}
                        </span>
                        ${this.isSpectatorMode ? '<span class="ml-4 text-purple-600 font-bold text-outline-md-black">(SPECTATOR MODE)</span>' : ''}
                    </div>
                    <div class="text-center text-lg mb-4">
                        <span class="font-bold text-white text-outline-md-black">Players:</span> ${tournament.players.length}/4
                    </div>

                    <div class="actions text-center">
                        ${isHost && tournament.status === 'waiting' ? `
                            <div class="mb-4">
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

                        ${this.isSpectatorMode && tournament.status === 'waiting' ? `
                            <div class="text-center mb-4 bg-purple-100 p-4 border-thick">
                                <p class="text-lg font-teko uppercase">Tournament hasn't started yet</p>
                                <p class="text-sm text-gray-600">You can join as a participant if there's still space</p>
                                ${tournament.players.length < 4 ? `
                                    <button id="join-as-participant-btn" 
                                            class="bg-green-500 text-white py-2 px-6 text-lg border-thick shadow-sharp hover-anarchy mt-3">
                                        JOIN AS PARTICIPANT
                                    </button>
                                ` : ''}
                            </div>
                        ` : ''}
                    </div>

                    <div id="tournament-content">
                        ${tournament.status === 'waiting' ? this.renderPlayersView(tournament) : this.renderBracketView(tournament)}
                    </div>
                </div>
            </div>
        `;

        this.setupTournamentViewListeners(tournament);

        this.setupPlayerNameClickHandlers();
        
        if (!this.isSpectatorMode || tournament.status === 'active') {
            this.connectWebSocket(tournament.id);
        }
    }

    getCurrentTournamentId(): string | null {
        return this.currentTournament?.id || null;
    }

    async refreshCurrentTournament(): Promise<void> {
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
            console.error('Error refreshing current tournament:', error);
        }
    }

    private setupPlayerNameClickHandlers() {
        document.querySelectorAll('.player-name-link').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const nickname = (e.currentTarget as HTMLElement).dataset.playerNickname;
                if (nickname) {
                    showPublicProfileScreen(nickname);
                }
            });
        });

        document.querySelectorAll('.player-card[data-player-nickname]').forEach(element => {
            element.addEventListener('click', (e) => {
                const nickname = (e.currentTarget as HTMLElement).dataset.playerNickname;
                if (nickname) {
                    showPublicProfileScreen(nickname);
                }
            });
        });

        document.querySelectorAll('.winner-name-link').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const nickname = (e.currentTarget as HTMLElement).dataset.playerNickname;
                if (nickname) {
                    showPublicProfileScreen(nickname);
                }
            });
        });
    }

    private renderPlayersView(tournament: Tournament): string {
        return `
            <div class="players-view">
                <h2 class="text-3xl mb-4 text-white text-outline-md-black">PLAYERS</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${tournament.players.map(player => `
                        <div class="player-card bg-white p-4 border-thick shadow-sharp hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all cursor-pointer" 
                            data-player-nickname="${player.nickname}">
                            <div class="flex items-center gap-3 mb-2">
                                <img src="${player.avatarUrl || '/default-avatar.png'}" 
                                    alt="${player.nickname}" 
                                    class="w-12 h-12 rounded-full border-2 border-black">
                                <h3 class="font-black text-2xl text-black player-name-link" 
                                    data-player-nickname="${player.nickname}">
                                    ${player.nickname}
                                </h3>
                            </div>
                            <p class="text-lg font-bold">Rating: ${player.rating}</p>
                        </div>
                    `).join('')}
                    ${Array.from({length: 4 - tournament.players.length}, (_, i) => `
                        <div class="player-card bg-gray-300 p-4 border-thick border-dashed">
                            <h3 class="text-xl text-gray-500">Waiting for player...</h3>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    private renderBracketView(tournament: Tournament): string {
        if (!tournament.bracket.length) {
            return `
                <div class="text-center p-8">
                    <h3 class="text-2xl font-bold mb-2 text-white text-outline-md-black">Tournament Bracket Coming Soon</h3>
                    <p class="text-gray-600">The bracket will be generated once enough players join</p>
                </div>
            `;
        }

        const rounds: { [round: number]: BracketMatch[] } = {};
        tournament.bracket.forEach(match => {
            if (!rounds[match.round]) rounds[match.round] = [];
            rounds[match.round].push(match);
        });

        const roundNumbers = Object.keys(rounds).map(r => parseInt(r)).sort((a, b) => a - b);
        const finalMatch = rounds[roundNumbers[roundNumbers.length - 1]][0];
        const tournamentWinner = tournament.status === 'finished' ? finalMatch?.winner : null;

        return `
            <div class="bracket-view relative">
                <h2 class="text-4xl font-black text-center mb-8 text-white text-outline-lg-black">TOURNAMENT BRACKET</h2>
                
                ${tournamentWinner ? this.renderWinnerDisplay(tournamentWinner) : ''}
                
                <div class="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-4 lg:gap-8 w-full min-h-[450px]">
                    
                    <!-- Semi-finals Column -->
                    <div class="flex-1 max-w-sm w-full flex flex-col justify-around">
                        <h3 class="text-2xl font-black text-center mb-6 bg-black text-yellow-300 p-3 border-thick shadow-sharp">SEMI-FINALS</h3>
                        ${rounds[1]?.map(match => this.renderMatch(match)).join('<div class="h-8"></div>')}
                    </div>
                    
                    <!-- Connectors -->
                    <div class="relative w-20 flex-shrink-0 h-auto hidden md:block">
                        <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <defs>
                                <marker id="arrowhead" markerWidth="8" markerHeight="6" 
                                        refX="7" refY="3" orient="auto"
                                        markerUnits="strokeWidth">
                                    <polygon points="0 0, 8 3, 0 6" fill="black" />
                                </marker>
                            </defs>
                            <path d="M0 25 H 50 V 40 H 93" stroke="black" stroke-width="5" fill="none" vector-effect="non-scaling-stroke" marker-end="url(#arrowhead)"/>
                            <path d="M0 75 H 50 V 60 H 93" stroke="black" stroke-width="5" fill="none" vector-effect="non-scaling-stroke" marker-end="url(#arrowhead)"/>
                        </svg>
                    </div>
                    
                    <!-- Final Column -->
                    <div class="flex-1 max-w-sm w-full flex flex-col justify-center">
                        <h3 class="text-2xl font-black text-center mb-6 bg-black text-yellow-300 p-3 border-thick shadow-sharp">FINAL</h3>
                        ${rounds[2]?.map(match => this.renderMatch(match)).join('')}
                    </div>

                </div>
            </div>
        `;
    }

    private renderWinnerDisplay(winner: TournamentPlayer): string {
        return `
            <div class="winner-display mb-8 border-8 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative overflow-hidden bg-champion-gradient">
                
                <div class="absolute inset-0 opacity-15 bg-polka-dots"></div>
                
                <div class="relative z-10 p-8">
                    <div class="text-center mb-6">
                        <div class="inline-block bg-black border-4 border-white shadow-[6px_6px_0_0_rgba(255,0,255,1)] px-8 py-2 transform -rotate-1">
                            <h2 class="text-4xl font-black uppercase text-champion-header">
                                CHAMPION
                            </h2>
                        </div>
                    </div>

                    <div class="flex items-center justify-center gap-6 mb-6">
                        <div class="relative">
                            <div class="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                            <img src="${winner.avatarUrl || '/default-avatar.png'}" 
                                alt="${winner.nickname}"
                                class="relative w-24 h-24 rounded-full border-6 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                        </div>
                        <div>
                            <div class="winner-name-link cursor-pointer transform hover:scale-105 transition-transform" 
                                data-player-nickname="${winner.nickname}">
                                <span class="text-5xl font-black uppercase block leading-none text-champion-name">
                                    ${winner.nickname}
                                </span>
                            </div>
                            <div class="mt-2 bg-black border-3 border-white inline-block px-4 py-1">
                                <p class="text-xl font-black text-yellow-300">RATING: ${winner.rating}</p>
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="inline-block bg-black text-yellow-300 px-8 py-2 border-3 border-white shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                            <span class="text-3xl font-black uppercase">VICTORY</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    private renderMatch(match: BracketMatch): string {
        const isCurrentUserMatch = !this.isSpectatorMode && 
                                  (match.player1?.id === this.currentUser?.id?.toString() || 
                                   match.player2?.id === this.currentUser?.id?.toString());
        const needsConfirmation = match.status === 'confirming' && isCurrentUserMatch && 
                                !match.confirmations.includes(this.currentUser?.id?.toString());
    
        // BUG FIX: Only determine a winner if the match status is 'finished'
        const isMatchFinished = match.status === 'finished';
        const isPlayer1Winner = isMatchFinished && match.winner?.id === match.player1?.id;
        const isPlayer2Winner = isMatchFinished && match.winner?.id === match.player2?.id;
    
        const player1SlotClass = isPlayer1Winner
            ? 'bg-yellow-300'
            : 'bg-gray-100';
    
        const player2SlotClass = isPlayer2Winner
            ? 'bg-yellow-300'
            : 'bg-gray-100';
    
        const winnerBadge = `
            <div class="absolute top-1/2 -right-4 transform -translate-y-1/2 rotate-12 z-10">
                <div class="bg-pink-500 text-white font-black uppercase text-center px-4 py-1 shadow-sharp border-2 border-black text-sm">
                    WIN
                </div>
            </div>
        `;
    
        return `
            <div class="bg-white border-thick shadow-sharp p-4 ${match.status === 'playing' ? 'bg-cyan-50' : ''}">
                <div class="match-players space-y-2">
                    <div class="player-slot relative flex items-center gap-4 p-3 ${player1SlotClass} border-thick">
                        ${isPlayer1Winner ? winnerBadge : ''}
                        ${match.player1 ? `
                            <img src="${match.player1.avatarUrl || '/default-avatar.png'}" 
                                 alt="${match.player1.nickname}" 
                                 class="w-12 h-12 rounded-full border-3 border-black shadow-sharp flex-shrink-0">
                            <span class="font-black text-2xl text-black flex-1 player-name-link cursor-pointer transition-transform duration-200 hover:scale-110 origin-left" data-player-nickname="${match.player1.nickname}">${match.player1.nickname}</span>
                        ` : `
                            <div class="w-12 h-12 rounded-full bg-gray-300 border-3 border-black flex-shrink-0"></div>
                            <span class="text-gray-500 flex-1 font-bold text-xl">TBD</span>
                        `}
                    </div>
                    
                    <div class="text-center text-xl font-black text-white text-outline-md-black">VS</div>
                    
                    <div class="player-slot relative flex items-center gap-4 p-3 ${player2SlotClass} border-thick">
                        ${isPlayer2Winner ? winnerBadge : ''}
                        ${match.player2 ? `
                            <img src="${match.player2.avatarUrl || '/default-avatar.png'}" 
                                 alt="${match.player2.nickname}" 
                                 class="w-12 h-12 rounded-full border-3 border-black shadow-sharp flex-shrink-0">
                            <span class="font-black text-2xl text-black flex-1 player-name-link cursor-pointer transition-transform duration-200 hover:scale-110 origin-left" data-player-nickname="${match.player2.nickname}">${match.player2.nickname}</span>
                        ` : `
                            <div class="w-12 h-12 rounded-full bg-gray-300 border-3 border-black flex-shrink-0"></div>
                            <span class="text-gray-500 flex-1 font-bold text-xl">TBD</span>
                        `}
                    </div>
                </div>
                
                <div class="match-status mt-4 text-center">
                    <span class="text-md font-black uppercase px-4 py-2 border-thick ${this.getStatusColor(match.status)}">${this.getStatusText(match.status)}</span>
                </div>

                ${needsConfirmation ? `
                    <div class="text-center mt-4">
                        <button class="confirm-match-btn bg-green-500 text-white py-3 px-8 text-lg font-bold border-thick shadow-sharp hover-anarchy uppercase" 
                                data-match-id="${match.id}">
                            Confirm Ready
                        </button>
                    </div>
                ` : ''}

                ${match.status === 'playing' && match.gameId ? `
                    <div class="text-center mt-4">
                        ${isCurrentUserMatch ? `
                            <button class="join-game-btn bg-blue-500 text-white py-3 px-8 text-lg font-bold border-thick shadow-sharp hover-anarchy uppercase w-full" 
                                    data-game-id="${match.gameId}">
                                Join Game
                            </button>
                        ` : `
                            <button class="spectate-game-btn bg-purple-500 text-white py-3 px-8 text-lg font-bold border-thick shadow-sharp hover-anarchy uppercase w-full" data-game-id="${match.gameId}">
                                View Game
                            </button>
                        `}
                    </div>
                ` : ''}
            </div>
        `;
    }

    private async loadActiveTournaments() {
        try {
            const response = await fetch('/api/tournament/active', {
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Failed to load tournaments');
            }

            const data = await response.json();
            renderActiveTournamentsList('tournaments-container', true);
        } catch (error) {
            console.error('Error loading tournaments for UI:', error);
            const container = document.getElementById('tournaments-container');
            if (container) {
                container.innerHTML = '<div class="text-center p-4 text-red-500">Failed to load tournaments</div>';
            }
        }
    }

    async openTournament(tournamentId: string) {
        try {
            const response = await fetch(`/api/tournament/${tournamentId}`, {
                credentials: 'include'
            });

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Tournament not found. It may have been deleted.');
                }
                throw new Error(`Failed to load tournament (${response.status})`);
            }

            const tournament = await response.json();
            this.showTournamentView(tournament);
        } catch (error) {
            console.error('Error opening tournament:', error);
            const message = error instanceof Error ? error.message : 'Failed to load tournament';
            showNotification(message, 'error');
            
            setTimeout(() => {
                this.showTournamentHome();
            }, 2000);
        }
    }

    private async startTournament(tournamentId: string) {
        try {
            const response = await fetch('/api/tournament/start', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ tournamentId })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to start tournament');
            }

            showNotification('Tournament started!', 'success');
            await this.openTournament(tournamentId);
        } catch (error) {
            console.error('Error starting tournament:', error);
            showNotification(error instanceof Error ? error.message : 'Failed to start tournament', 'error');
        }
    }

    async joinTournament(tournamentId: string): Promise<void> {
        try {
            const response = await fetch('/api/tournament/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ tournamentId })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to join tournament');
            }

            this.isSpectatorMode = false;
            showNotification('Successfully joined tournament!', 'success');
            await this.openTournament(tournamentId);
        } catch (error) {
            console.error('Error joining tournament:', error);
            showNotification('Failed to join tournament: ' + (error instanceof Error ? error.message : 'Unknown error'), 'error');
        }
    }

    async createTournament(name: string, maxPlayers: number): Promise<void> {
        try {
            const response = await fetch('/api/tournament/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ name, maxPlayers })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to create tournament');
            }

            const data = await response.json();
            
            showNotification('Tournament created successfully!', 'success');
            
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
            showNotification(error instanceof Error ? error.message : 'Failed to create tournament', 'error');
        }
    }

    private async confirmMatch(tournamentId: string, matchId: string) {
        try {
            console.log(`Confirming match ${matchId} in tournament ${tournamentId}`);
            
            const confirmButton = document.querySelector(`[data-match-id="${matchId}"]`) as HTMLButtonElement;
            if (confirmButton) {
                confirmButton.disabled = true;
                confirmButton.textContent = 'CONFIRMING...';
                confirmButton.classList.add('bg-gray-500');
                confirmButton.classList.remove('bg-green-500');
            }

            const response = await fetch('/api/tournament/confirm-match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ tournamentId, matchId })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to confirm match');
            }

            console.log('Match confirmed successfully:', result);
            showNotification('Match confirmed successfully!', 'success');

            setTimeout(() => {
                this.refreshCurrentTournament();
            }, 500);

        } catch (error) {
            console.error('Error confirming match:', error);
            showNotification(error instanceof Error ? error.message : 'Failed to confirm match', 'error');
            
            const confirmButton = document.querySelector(`[data-match-id="${matchId}"]`) as HTMLButtonElement;
            if (confirmButton) {
                confirmButton.disabled = false;
                confirmButton.textContent = 'CONFIRM READY';
                confirmButton.classList.remove('bg-gray-500');
                confirmButton.classList.add('bg-green-500');
            }
        }
    }

    private setupTournamentViewListeners(tournament: Tournament) {
        document.getElementById('tournament-view-return-btn')?.addEventListener('click', () => {
            this.disconnectWebSocket();
            this.isSpectatorMode = false;
            this.showTournamentHome();
        });

        if (!this.isSpectatorMode) {
            document.getElementById('start-tournament-btn')?.addEventListener('click', () => {
                this.startTournament(tournament.id);
            });

            document.getElementById('delete-tournament-btn')?.addEventListener('click', () => {
                this.deleteTournament(tournament.id);
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
                        await this.confirmMatch(tournament.id, matchId);
                    } else {
                        console.error('No match ID found on confirm button');
                    }
                });
            });
        } else {
            document.getElementById('join-as-participant-btn')?.addEventListener('click', async () => {
                try {
                    await this.joinTournament(tournament.id);
                    this.isSpectatorMode = false;
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
                if (gameId) {
                    spectateGame(gameId);
                }
            });
        });
    }

    private connectWebSocket(tournamentId: string) {
        this.disconnectWebSocket();

        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${protocol}//${window.location.host}/api/tournament/ws/${tournamentId}`;

        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
            console.log('Connected to tournament WebSocket');
        };

        this.ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                this.handleWebSocketMessage(data);
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };

        this.ws.onerror = (error) => {
            console.error('Tournament WebSocket error:', error);
        };

        this.ws.onclose = () => {
            console.log('Tournament WebSocket closed');
        };
    }

    private disconnectWebSocket() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }

    private handleWebSocketMessage(data: any) {
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
                    showNotification('Game starting! Click "Join Game" to play.', 'success');
                    if (this.currentTournament) {
                        this.refreshTournamentView();
                    }
                }
                break;
                
            case 'game_finished':
                showNotification(`Match finished! Winner: ${data.winnerNickname}`, 'info');
                if (this.currentTournament) {
                    this.refreshTournamentView();
                }
                break;
        }
    }

    private handleTournamentDeleted(tournamentName: string) {
        this.disconnectWebSocket();
        showNotification(`Tournament "${tournamentName}" has been deleted by the host`, 'info');
        this.showTournamentHome();
    }

    private async deleteTournament(tournamentId: string) {
        const confirmDelete = () => {
            return new Promise<boolean>((resolve) => {
                const notification = document.createElement('div');
                notification.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
                notification.innerHTML = `
                    <div class="bg-yellow-300 border-thick shadow-sharp p-8 max-w-md animate-pop">
                        <h2 class="text-2xl font-bold mb-4 text-white text-outline-md-black">DELETE TOURNAMENT?</h2>
                        <p class="mb-6 text-lg">This action cannot be undone. All players will be removed.</p>
                        <div class="flex gap-4">
                            <button id="confirm-delete-yes" class="flex-1 bg-red-500 text-white py-3 px-6 text-lg font-bold border-thick shadow-sharp hover-anarchy">
                                DELETE
                            </button>
                            <button id="confirm-delete-no" class="flex-1 bg-gray-500 text-white py-3 px-6 text-lg font-bold border-thick shadow-sharp hover-anarchy">
                                CANCEL
                            </button>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(notification);
                
                document.getElementById('confirm-delete-yes')?.addEventListener('click', () => {
                    notification.remove();
                    resolve(true);
                });
                
                document.getElementById('confirm-delete-no')?.addEventListener('click', () => {
                    notification.remove();
                    resolve(false);
                });
            });
        };

        const confirmed = await confirmDelete();
        
        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch('/api/tournament/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ tournamentId })
            });

            if (!response.ok) {
                throw new Error('Failed to delete tournament');
            }

            showNotification('Tournament deleted successfully', 'success');
            this.showTournamentHome();
        } catch (error) {
            console.error('Error deleting tournament:', error);
            showNotification('Failed to delete tournament', 'error');
        }
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

    private getRoundName(roundNum: number, totalRounds: number): string {
        const roundsFromEnd = totalRounds - roundNum + 1;
        switch (roundsFromEnd) {
            case 1: return 'FINAL';
            case 2: return 'SEMI-FINALS';
            default: return `ROUND ${roundNum}`;
        }
    }

    private getStatusColor(status: string): string {
        switch (status) {
            case 'waiting': return 'bg-gray-300 text-black';
            case 'confirming': return 'bg-yellow-400 text-black';
            case 'playing': return 'bg-cyan-400 text-black';
            case 'finished': return 'bg-purple-500 text-white';
            default: return 'bg-gray-300 text-black';
        }
    }

    private getStatusText(status: string): string {
        switch (status) {
            case 'waiting': return 'WAITING';
            case 'confirming': return 'CONFIRMING';
            case 'playing': return 'PLAYING';
            case 'finished': return 'FINISHED';
            default: return status.toUpperCase();
        }
    }

    cleanup() {
        this.disconnectWebSocket();
        this.isSpectatorMode = false;
        this.currentTournament = null;
    }

    setCurrentUserId(userId: string) {
        this.currentUser = { id: userId };
    }

    showTournamentLobby() {
        this.showTournamentHome();
    }

    setTournamentId(tournamentId: string) {
        this.openTournament(tournamentId);
    }

    showBracket(tournament: Tournament) {
        this.showTournamentView(tournament);
    }
}