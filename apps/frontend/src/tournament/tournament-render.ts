import { appState } from '../state/state';
import { showSection, showNotification } from '../services/ui'
import { TournamentUI } from './tournament-ui';
import { returnToMainMenu } from '../utils/tools';
import { openTournamentFromHome, openTournament } from './tournament-services';
import { Tournament, BracketMatch, TournamentPlayer } from '../../../../packages/common-types/src/tournament';

export function showTournamentView(tournament: any) {
    showSection('tournament');
    
    if (!appState.tournamentUI) {
        appState.tournamentUI = new TournamentUI('tournamentSection');
    }

    if (appState.currentUser && appState.tournamentUI) {
        appState.tournamentUI.setCurrentUser(appState.currentUser);
    }

    // Show the specific tournament view (this is the "lobby" for a specific tournament)
    appState.tournamentUI!.showTournamentView(tournament);
}

export function returnToTournamentLobby() {
    try {
        console.log('Returning to tournament lobby...');
        
        // Check if tournament UI is available and we have a current tournament
        if (appState.tournamentUI && appState.currentTournament) {
            showSection('tournament');
            
            // Refresh the tournament view to get latest state
            openTournament(appState.currentTournament.id);
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

    container.innerHTML = `
        <div class="tournament-view animate-pop">
            <button id="my-tournaments-return-btn" class="mb-4 bg-black text-white px-6 py-2 text-lg uppercase border-thick shadow-sharp hover-anarchy">&lt; Back</button>
            
            <div class="bg-white border-thick shadow-sharp p-8">
                <h1 class="text-4xl text-white text-outline-black mb-8">MY HOSTED TOURNAMENTS</h1>

                <div class="space-y-4">
                    ${tournaments.length === 0 ? 
                        `<div class="text-center py-12">
                            <h2 class="text-2xl text-gray-600 mb-4">No Hosted Tournaments Yet</h2>
                            <p class="text-lg text-gray-500 mb-6">You haven't created any tournaments yet.</p>
                            <button id="create-tournament-from-empty" 
                                    class="bg-green-500 text-white py-3 px-8 text-xl border-thick shadow-sharp hover-anarchy">
                                CREATE YOUR FIRST TOURNAMENT
                            </button>
                        </div>` :
                        tournaments.map(tournament => `
                            <div class="bg-gray-100 border-thick p-4">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h3 class="text-xl font-bold">${tournament.name}</h3>
                                        <p class="text-sm">Status: ${tournament.status.toUpperCase()}</p>
                                        <p class="text-sm">Players: ${tournament.players?.length || 0}/${tournament.maxPlayers || 8}</p>
                                        <p class="text-sm">Created: ${new Date(tournament.createdAt).toLocaleDateString()}</p>
                                        ${tournament.finishedAt ? 
                                            `<p class="text-sm">Finished: ${new Date(tournament.finishedAt).toLocaleDateString()}</p>` : 
                                            ''
                                        }
                                        ${tournament.winner ? 
                                            `<p class="text-sm text-green-600">Winner: ${tournament.winner.nickname}</p>` : 
                                            ''
                                        }
                                    </div>
                                    <button onclick="openTournamentFromHome('${tournament.id}', 'host')" 
                                            class="bg-blue-500 text-white px-4 py-2 border-thick hover-anarchy">
                                        ${tournament.status === 'waiting' ? 'MANAGE' : 'VIEW'}
                                    </button>
                                </div>
                            </div>
                        `).join('')
                    }
                </div>
            </div>
        </div>
    `;

    document.getElementById('my-tournaments-return-btn')?.addEventListener('click', () => {
        if (appState.tournamentUI) {
            appState.tournamentUI.showTournamentHome();
        }
    });

    if (tournaments.length === 0) {
        document.getElementById('create-tournament-from-empty')?.addEventListener('click', () => {
            if (appState.tournamentUI) {
                appState.tournamentUI.showCreateTournament();
            }
        });
    }
}

export function showTournamentHistory(history: any[]) {
    if (!appState.tournamentUI) return;
    
    const container = document.getElementById('tournamentSection');
    if (!container) return;

    container.innerHTML = `
        <div class="tournament-view animate-pop">
            <button id="tournament-history-return-btn" class="mb-4 bg-black text-white px-6 py-2 text-lg uppercase border-thick shadow-sharp hover-anarchy">&lt; Back</button>
            
            <div class="bg-white border-thick shadow-sharp p-8">
                <h1 class="text-4xl text-white text-outline-black mb-8">TOURNAMENT HISTORY</h1>

                <div class="space-y-4">
                    ${history.length === 0 ? 
                        `<div class="text-center py-12">
                            <h2 class="text-2xl text-gray-600 mb-4">No Tournament History</h2>
                            <p class="text-lg text-gray-500 mb-6">You haven't participated in any completed tournaments yet.</p>
                            <p class="text-md text-gray-400">Join or create tournaments to build your competitive history!</p>
                            <button id="join-tournament-from-empty" 
                                    class="bg-green-500 text-white py-3 px-8 text-xl border-thick shadow-sharp hover-anarchy mt-6">
                                FIND TOURNAMENTS TO JOIN
                            </button>
                        </div>` :
                        history.map(item => {
                            const tournament = item.tournament;
                            const myMatchesCount = item.myMatches.length;
                            
                            const wonMatches = item.myMatches.filter((match: any) => 
                                match.winner && match.winner.id === appState.currentUser?.id?.toString()
                            ).length;
                            
                            return `
                                <div class="bg-gray-100 border-thick p-4">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <h3 class="text-xl font-bold">${tournament.name}</h3>
                                            <p class="text-sm">Finished: ${new Date(tournament.finishedAt).toLocaleDateString()}</p>
                                            <p class="text-sm">Winner: ${tournament.winner?.nickname || 'Unknown'}</p>
                                            <p class="text-sm">Your Performance: ${wonMatches}/${myMatchesCount} matches won</p>
                                            ${tournament.winner?.id === appState.currentUser?.id?.toString() ? 
                                                '<p class="text-sm text-green-600 font-bold">🏆 TOURNAMENT CHAMPION!</p>' : 
                                                ''
                                            }
                                        </div>
                                        <button onclick="openTournamentFromHome('${tournament.id}', 'spectator')" 
                                                class="bg-purple-500 text-white px-4 py-2 border-thick hover-anarchy">
                                            VIEW BRACKET
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')
                    }
                </div>
            </div>
        </div>
    `;

    document.getElementById('tournament-history-return-btn')?.addEventListener('click', () => {
        if (appState.tournamentUI) {
            appState.tournamentUI.showTournamentHome();
        }
    });

    if (history.length === 0) {
        document.getElementById('join-tournament-from-empty')?.addEventListener('click', () => {
            if (appState.tournamentUI) {
                appState.tournamentUI.showTournamentHome();
            }
        });
    }
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
                <p class="text-gray-600 mb-4">No active tournaments at the moment</p>
                ${showCreateButton ? `
                    <button id="create-tournament-from-empty-${containerId}"
                            class="bg-green-500 text-white py-3 px-8 text-xl border-thick shadow-sharp hover-anarchy">
                        CREATE TOURNAMENT
                    </button>
                ` : `
                    <p class="text-black font-teko text-lg">Create your own tournament and invite friends!</p>
                `}
            </div>
        `;

        if (showCreateButton) {
            document.getElementById(`create-tournament-from-empty-${containerId}`)?.addEventListener('click', () => {
                if (appState.tournamentUI) {
                    appState.tournamentUI.showCreateTournament();
                }
            });
        }
        return;
    }

    container.innerHTML = appState.activeTournamentsData.map(tournament => {
        const isParticipant = appState.currentUser && tournament.players &&
                              tournament.players.some((p: any) => p.id === appState.currentUser.id?.toString());

        let buttonText = '';
        let buttonClass = '';
        let action: 'join' | 'participant' | 'spectator' | '' = '';
        let isDisabled = false;

        if (tournament.status === 'waiting') {
            if (isParticipant) {
                buttonText = 'OPEN';
                buttonClass = 'bg-blue-500';
                action = 'participant';
            } else if ((tournament.players?.length || 0) >= (tournament.maxPlayers || 8)) {
                buttonText = 'FULL';
                buttonClass = 'bg-gray-500';
                isDisabled = true;
            } else {
                buttonText = 'JOIN';
                buttonClass = 'bg-green-500';
                action = 'join';
            }
        } else if (tournament.status === 'active' || tournament.status === 'finished') {
            if (isParticipant) {
                buttonText = 'OPEN';
                buttonClass = 'bg-blue-500';
                action = 'participant';
            } else {
                buttonText = 'VIEW';
                buttonClass = 'bg-purple-500';
                action = 'spectator';
            }
        }

        return `
            <div class="bg-gray-50 border-thick p-4 mb-4">
                <div class="flex justify-between items-center">
                    <div class="text-left">
                        <h4 class="font-bold text-xl text-black font-teko uppercase">${tournament.name}</h4>
                        <p class="text-sm text-gray-600 font-teko">
                            Players: ${tournament.players?.length || 0}/${tournament.maxPlayers || 8} | Status: ${tournament.status.toUpperCase()}
                        </p>
                        ${tournament.status === 'active' && !isParticipant ?
                            '<p class="text-xs text-purple-600 font-teko">You can spectate this tournament</p>' : ''}
                    </div>
                    <div class="flex gap-2">
                         <button
                            class="tournament-action-btn ${buttonClass} text-white px-4 py-2 border-thick hover-anarchy font-teko uppercase"
                            data-tournament-id="${tournament.id}"
                            data-action="${action}"
                            ${isDisabled ? 'disabled' : ''}>
                            ${buttonText}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.tournament-action-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLButtonElement;
            if (target.disabled) return;

            const tournamentId = target.dataset.tournamentId;
            const action = target.dataset.action as 'join' | 'participant' | 'spectator';

            if (tournamentId && action) {
                openTournamentFromHome(tournamentId, action);
            }
        });
    });
}

export function renderPlayersView(tournament: Tournament): string {
    return `
        <div class="players-view">
            <h2 class="text-3xl mb-4 text-outline-white">PLAYERS</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${tournament.players.map(player => `
                    <div class="player-card bg-gray-100 p-4 border-thick">
                        <h3 class="text-xl font-bold">${player.nickname}</h3>
                        <p class="text-lg">Rating: ${player.rating}</p>
                    </div>
                `).join('')}
                ${Array.from({length: tournament.maxPlayers - tournament.players.length}, (_, i) => `
                    <div class="player-card bg-gray-300 p-4 border-thick border-dashed">
                        <h3 class="text-xl text-gray-500">Waiting for player...</h3>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

export function renderBracketView(tournament: Tournament): string {
    if (!tournament.bracket.length) {
        return '<div class="text-center p-8">No bracket available</div>';
    }

    // Group matches by round
    const rounds: { [round: number]: BracketMatch[] } = {};
    tournament.bracket.forEach(match => {
        if (!rounds[match.round]) rounds[match.round] = [];
        rounds[match.round].push(match);
    });

    const roundNumbers = Object.keys(rounds).map(r => parseInt(r)).sort((a, b) => a - b);

    return `
        <div class="bracket-view">
            <h2 class="text-3xl mb-4 text-outline-white">TOURNAMENT BRACKET</h2>
            <div class="bracket-container overflow-x-auto">
                <div class="flex gap-8 min-w-max">
                    ${roundNumbers.map(roundNum => `
                        <div class="round-column min-w-64">
                            <h3 class="text-xl font-bold text-center mb-4">
                                ${getRoundName(roundNum, roundNumbers.length)}
                            </h3>
                            <div class="space-y-4">
                                ${rounds[roundNum].map(match => renderMatch(match)).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

export function renderMatch(match: BracketMatch): string {
    const isCurrentUserMatch = !appState.isSpectatorMode && 
                                (match.player1?.id === appState.currentUser?.id?.toString() || 
                                match.player2?.id === appState.currentUser?.id?.toString());
    const needsConfirmation = match.status === 'confirming' && isCurrentUserMatch && 
                            !match.confirmations.includes(appState.currentUser?.id?.toString());

    return `
        <div class="match-card bg-white border-thick p-4 ${match.status === 'playing' ? 'bg-yellow-100' : ''}">
            <div class="match-players">
                <div class="player ${match.winner?.id === match.player1?.id ? 'winner' : ''}">
                    <span class="font-bold">${match.player1?.nickname || 'TBD'}</span>
                </div>
                <div class="text-center text-sm">VS</div>
                <div class="player ${match.winner?.id === match.player2?.id ? 'winner' : ''}">
                    <span class="font-bold">${match.player2?.nickname || 'TBD'}</span>
                </div>
            </div>
            
            <div class="match-status mt-2 text-center">
                <span class="text-sm ${getStatusColor(match.status)}">${getStatusText(match.status)}</span>
            </div>

            ${needsConfirmation ? `
                <div class="text-center mt-2">
                    <button class="confirm-match-btn bg-green-500 text-white py-1 px-3 text-sm border-thick hover-anarchy" 
                            data-match-id="${match.id}">
                        CONFIRM
                    </button>
                </div>
            ` : ''}

            ${match.status === 'playing' && match.gameId ? `
                <div class="text-center mt-2">
                    ${isCurrentUserMatch ? `
                        <button class="join-game-btn bg-blue-500 text-white py-1 px-3 text-sm border-thick hover-anarchy" 
                                data-game-id="${match.gameId}">
                            JOIN GAME
                        </button>
                    ` : appState.isSpectatorMode ? `
                        <button class="spectate-game-btn bg-purple-500 text-white py-1 px-3 text-sm border-thick hover-anarchy" 
                                data-game-id="${match.gameId}">
                            SPECTATE
                        </button>
                    ` : ''}
                </div>
            ` : ''}
        </div>
    `;
}


function getRoundName(roundNum: number, totalRounds: number): string {
    const roundsFromEnd = totalRounds - roundNum + 1;
    switch (roundsFromEnd) {
        case 1: return 'FINAL';
        case 2: return 'SEMI-FINAL';
        case 3: return 'QUARTER-FINAL';
        default: return `ROUND ${roundNum}`;
    }
}

function getStatusColor(status: string): string {
    switch (status) {
        case 'waiting': return 'text-gray-500';
        case 'confirming': return 'text-yellow-600';
        case 'playing': return 'text-blue-600';
        case 'finished': return 'text-green-600';
        default: return 'text-gray-500';
    }
}

function getStatusText(status: string): string {
    switch (status) {
        case 'waiting': return 'Waiting';
        case 'confirming': return 'Confirming';
        case 'playing': return 'Playing';
        case 'finished': return 'Finished';
        default: return status;
    }
}