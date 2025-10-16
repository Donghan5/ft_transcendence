import { appState } from '../state/state';
import { showSection, showNotification } from '../services/ui'
import { TournamentUI } from './tournament-ui';
import { returnToMainMenu } from '../utils/tools';
import { openTournamentFromHome } from './tournament-services';
import { navigateBack, pushToNavigationHistory } from '../utils/navigation';

// Expose openTournamentFromHome globally so onclick handlers work
(window as any).openTournamentFromHome = openTournamentFromHome;

export function showTournamentView(tournament: any) {
    showSection('tournament');
    
    if (!appState.tournamentUI) {
        appState.tournamentUI = new TournamentUI('tournamentSection');
    }

    if (appState.currentUser && appState.tournamentUI) {
        appState.tournamentUI.setCurrentUser(appState.currentUser);
    }

    appState.tournamentUI!.showTournamentView(tournament);
}

export function returnToTournamentLobby() {
    try {
        console.log('Returning to tournament lobby...');
        
        if (appState.tournamentUI && appState.currentTournament) {
            showSection('tournament');
            appState.tournamentUI.openTournament(appState.currentTournament.id);
            showNotification('Returned to tournament lobby', 'info');
        } else {
            console.log('No tournament context available, returning to main menu');
            returnToMainMenu();
        }
    } catch (error) {
        console.error('Error returning to tournament lobby:', error);
        returnToMainMenu();
    }
}

export function showMyTournaments(tournaments: any[]) {
    if (!appState.tournamentUI) return;
    
    const container = document.getElementById('tournamentSection');
    if (!container) return;

    pushToNavigationHistory('tournament', undefined, 'my-tournaments');

    container.innerHTML = `
        <div class="tournament-view animate-pop">
            <button id="my-tournaments-return-btn" class="mb-4 bg-black text-white px-6 py-2 text-lg uppercase border-thick shadow-sharp hover-anarchy">&lt; Back</button>
            
            <div class="bg-yellow-300 border-thick shadow-sharp p-8">
                <h1 class="text-4xl text-white text-outline-lg-black mb-8">MY TOURNAMENTS</h1>
                
                <div class="space-y-4">
                    ${tournaments.length === 0 ?
                        `
                        <div class="text-center p-8 bg-gray-100 border-thick">
                            <p class="text-xl text-gray-600 mb-4">No tournaments created yet</p>
                            <button id="create-from-my-tournaments" class="bg-pink-500 text-white py-2 px-6 text-lg border-thick shadow-sharp hover-anarchy font-bold">
                                CREATE TOURNAMENT
                            </button>
                        </div>
                        ` : tournaments.map(t => `
                        <div class="bg-gray-50 border-thick p-6">
                            <div class="flex justify-between items-center">
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold mb-2">${t.name}</h3>
                                    <div class="grid grid-cols-2 gap-2 text-sm">
                                        <span class="font-bold">Status: <span class="uppercase ${
                                            t.status === 'waiting' ? 'text-yellow-600' :
                                            t.status === 'active' ? 'text-cyan-600' :
                                            'text-gray-600'
                                        }">${t.status}</span></span>
                                        <span class="font-bold">Players: ${t.players?.length || 0}/${t.maxPlayers}</span>
                                    </div>
                                </div>
                                <button data-tournament-id="${t.id}" class="open-my-tournament-btn bg-blue-500 text-white px-6 py-3 text-lg border-thick shadow-sharp hover-anarchy font-bold">
                                    OPEN
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('my-tournaments-return-btn')?.addEventListener('click', () => {
        console.log('My tournaments back button clicked');
        navigateBack();
    });

    document.getElementById('create-from-my-tournaments')?.addEventListener('click', () => {
        if (appState.tournamentUI) {
            appState.tournamentUI.showCreateTournament();
        }
    });
    
    document.querySelectorAll('.open-my-tournament-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tournamentId = (e.currentTarget as HTMLElement).dataset.tournamentId;
            if (tournamentId) {
                openTournamentFromHome(tournamentId, 'participant');
            }
        });
    });
}

export function showTournamentHistory(history: any[]) {
    if (!appState.tournamentUI) return;
    
    const container = document.getElementById('tournamentSection');
    if (!container) return;

    pushToNavigationHistory('tournament', undefined, 'history');

    container.innerHTML = `
        <div class="tournament-view animate-pop">
            <button id="tournament-history-return-btn" class="mb-4 bg-black text-white px-6 py-2 text-lg uppercase border-thick shadow-sharp hover-anarchy">&lt; Back</button>
            
            <div class="bg-yellow-300 border-thick shadow-sharp p-8">
                <h1 class="text-4xl text-white text-outline-lg-black mb-8">TOURNAMENT HISTORY</h1>

                <div class="space-y-4">
                    ${history.length === 0 ? `
                        <div class="text-center p-8 bg-gray-100 border-thick">
                            <p class="text-xl text-gray-600 mb-4">You haven't participated in any tournaments yet</p>
                            <button id="join-tournament-from-empty" class="bg-pink-500 text-white py-2 px-6 text-lg border-thick shadow-sharp hover-anarchy font-bold">
                                JOIN A TOURNAMENT
                            </button>
                        </div>
                    ` : history.map(item => {
                        // The structure is { tournament, myMatches, finalBracket }
                        const tournament = item.tournament;
                        const myMatches = item.myMatches || [];
                        
                        const wonMatches = myMatches.filter((match: any) => 
                            match.winner && match.winner.id === appState.currentUser?.id?.toString()
                        ).length;
                        
                        const isWinner = tournament.winner?.id === appState.currentUser?.id?.toString();
                        
                        return `
                        <div class="tournament-history-item bg-gray-50 border-thick p-6">
                            <div class="flex justify-between items-start">
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold mb-2">${tournament.name}</h3>
                                    <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                                        <span class="font-bold">Status: <span class="uppercase text-gray-600">${tournament.status || 'finished'}</span></span>
                                        <span class="font-bold">Players: ${tournament.players?.length || 0}/${tournament.maxPlayers || 'N/A'}</span>
                                        <span class="font-bold">Date: ${tournament.finishedAt ? new Date(tournament.finishedAt).toLocaleDateString() : new Date(tournament.createdAt).toLocaleDateString()}</span>
                                        <span class="font-bold">Your Record: <span class="text-blue-600">${wonMatches}/${myMatches.length} wins</span></span>
                                    </div>
                                    ${isWinner ? 
                                        '<p class="text-sm text-pink-600 font-bold">TOURNAMENT CHAMPION!</p>' : 
                                        tournament.winner ? 
                                        `<p class="text-sm text-gray-600">Winner: ${tournament.winner.nickname}</p>` :
                                        ''
                                    }
                                </div>
                                <button data-tournament-id="${tournament.id}" class="view-history-tournament-btn bg-purple-500 text-white px-6 py-3 text-lg border-thick shadow-sharp hover-anarchy font-bold">
                                    VIEW BRACKET
                                </button>
                            </div>
                        </div>
                    `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('tournament-history-return-btn')?.addEventListener('click', () => {
        console.log('Tournament history back button clicked');
        navigateBack();
    });

    if (history.length === 0) {
        document.getElementById('join-tournament-from-empty')?.addEventListener('click', () => {
            if (appState.tournamentUI) {
                appState.tournamentUI.showTournamentHome();
            }
        });
    }
    
    // Attach listeners to view buttons
    document.querySelectorAll('.view-history-tournament-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tournamentId = (e.currentTarget as HTMLElement).dataset.tournamentId;
            if (tournamentId) {
                openTournamentFromHome(tournamentId, 'spectator');
            }
        });
    });
}

export function renderActiveTournamentsList(containerId: string, showCreateButton: boolean = false): void {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Tournament container ${containerId} not found`);
        return;
    }

    if (appState.activeTournamentsData.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8">
                <p class="text-gray-600 mb-4 text-lg">No active tournaments at the moment</p>
                ${showCreateButton ? `
                    <button id="create-first-tournament-btn" 
                            class="bg-pink-500 text-white py-2 px-6 text-lg border-thick shadow-sharp hover-anarchy font-bold">
                        CREATE THE FIRST TOURNAMENT
                    </button>
                ` : ''}
            </div>
        `;
        
        if (showCreateButton) {
            document.getElementById('create-first-tournament-btn')?.addEventListener('click', () => {
                if (appState.tournamentUI) {
                    appState.tournamentUI.showCreateTournament();
                }
            });
        }
        return;
    }

    container.innerHTML = `
        <div class="tournaments-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            ${appState.activeTournamentsData.map(tournament => {
                const isUserParticipant = appState.currentUser && 
                                        tournament.players.some((p: any) => p.id === appState.currentUser.id?.toString());
                const isFull = tournament.players.length >= tournament.maxPlayers;
                const isWaiting = tournament.status === 'waiting';
                const isActive = tournament.status === 'active';
                
                // Determine which button to show
                let buttonHtml = '';
                if (isUserParticipant) {
                    // User is a participant - show OPEN button
                    buttonHtml = `
                        <button onclick="openTournamentFromHome('${tournament.id}', 'participant')" 
                                class="flex-1 bg-blue-500 text-white py-3 px-4 font-black uppercase border-thick shadow-sharp hover-anarchy text-sm">
                            OPEN
                        </button>
                    `;
                } else if (isWaiting && !isFull) {
                    // Can join - show JOIN button
                    buttonHtml = `
                        <button onclick="openTournamentFromHome('${tournament.id}', 'join')" 
                                class="flex-1 bg-cyan-500 text-white py-3 px-4 font-black uppercase border-thick shadow-sharp hover-anarchy text-sm">
                            JOIN
                        </button>
                    `;
                }
                
                // Always show VIEW button for spectators (when full or started and user is not participant)
                if ((isFull || isActive) && !isUserParticipant) {
                    buttonHtml += `
                        <button onclick="openTournamentFromHome('${tournament.id}', 'spectator')" 
                                class="flex-1 bg-purple-500 text-white py-3 px-4 font-black uppercase border-thick shadow-sharp hover-anarchy text-sm">
                            VIEW
                        </button>
                    `;
                }

                return `
                    <div class="tournament-card bg-white border-thick shadow-sharp p-6">
                        <!-- Tournament Title -->
                        <div class="mb-4 pb-4 border-b-4 border-black">
                            <h3 class="text-2xl font-black mb-2 text-black truncate" title="${tournament.name}">
                                ${tournament.name}
                            </h3>
                        </div>
                        
                        <!-- Tournament Info Grid -->
                        <div class="space-y-3 mb-4">
                            <!-- Status Badge -->
                            <div class="flex items-center gap-2">
                                <span class="font-black text-sm text-gray-700 min-w-[60px]">STATUS:</span>
                                <span class="px-3 py-1.5 text-xs font-black uppercase border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] ${
                                    isWaiting ? 'bg-yellow-300 text-yellow-900' :
                                    isActive ? 'bg-cyan-300 text-cyan-900' :
                                    'bg-gray-300 text-gray-900'
                                }">
                                    ${isWaiting ? 'WAITING' : isActive ? 'IN PROGRESS' : tournament.status.toUpperCase()}
                                </span>
                            </div>
                            
                            <!-- Players Count -->
                            <div class="flex items-center gap-2">
                                <span class="font-black text-sm text-gray-700 min-w-[60px]">PLAYERS:</span>
                                <div class="flex items-center gap-2">
                                    <span class="text-xl font-black ${isFull ? 'text-red-600' : 'text-blue-600'}">
                                        ${tournament.players.length}/${tournament.maxPlayers}
                                    </span>
                                    ${isFull ? '<span class="text-xs font-bold text-red-600 uppercase">FULL</span>' : ''}
                                </div>
                            </div>
                            
                            <!-- Host Info -->
                            <div class="flex items-center gap-2">
                                <span class="font-black text-sm text-gray-700 min-w-[60px]">HOST:</span>
                                <span class="font-bold text-purple-700 truncate">${tournament.hostNickname || 'Unknown'}</span>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex gap-2 mt-6">
                            ${buttonHtml}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}
