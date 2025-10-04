// apps/frontend/src/tournament/tournament-services.ts

import { appState } from "../state/state";
import { showSection, showNotification } from '../services/ui';
import { TournamentUI } from "../tournament/tournament-ui";
import { startGame } from '../game/game-manager';
import { renderActiveTournamentsList } from "./tournament-render";


export function cleanupTournamentUI() {
    if (appState.tournamentUI) {
        appState.tournamentUI.cleanup();
        appState.tournamentUI = null;
    }
}
    

export function startTournamentGame(gameId: string, playerId: string, tournamentId: string) {
    console.log(`Starting tournament game: ${gameId} for tournament: ${tournamentId}`);
    startGame(gameId, playerId, 'tournament', tournamentId);
}


export function setCurrentTournament(tournament: any) {
    appState.currentTournament = tournament;
}

/**
 * @description Loading active tournaments.
 */
export async function loadActiveTournaments(): Promise<any[]> {
    try {
        console.log('Loading active tournaments...');
        const response = await fetch('/api/tournament/active', {
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Active tournaments loaded:', data.tournaments?.length || 0);
            appState.activeTournamentsData = data.tournaments || [];
            return appState.activeTournamentsData;
        } else {
            console.error('Failed to load active tournaments:', response.status);
            appState.activeTournamentsData = [];
            return [];
        }
    } catch (error) {
        console.error('Error loading active tournaments:', error);
        appState.activeTournamentsData = [];
        return [];
    }
}

/**
 * @description Render the home tournaments list.
 */
export async function loadHomeTournaments(): Promise<void> {
    await loadActiveTournaments();
    renderActiveTournamentsList('homeTournamentsList', false);
}

/**
 * @description Open a tournament from the home screen.
 * @param tournamentId - ID of the tournament to open
 * @param mode - 'join'(join), 'participant'(view as participant), 'spectator'(view as spectator)
 */
export async function openTournamentFromHome(tournamentId: string, mode: 'join' | 'participant' | 'spectator' = 'participant') {
    try {
        console.log(`Opening tournament ${tournamentId} in ${mode} mode`);

        if (appState.tournamentUI) {
            appState.tournamentUI.cleanup();
        }
        appState.tournamentUI = new TournamentUI('tournamentSection');

        if (appState.currentUser) {
            appState.tournamentUI.setCurrentUser(appState.currentUser);
        }
        
        showSection('tournament');

        switch (mode) {
            case 'join':
                await appState.tournamentUI.joinTournament(tournamentId);
                break;
            
            case 'participant':
                await appState.tournamentUI.openTournament(tournamentId);
                break;
            
            case 'spectator':
                await appState.tournamentUI.viewTournamentAsSpectator(tournamentId);
                break;
            
            default:
                await appState.tournamentUI.openTournament(tournamentId);
        }

    } catch (error) {
        console.error('Error opening tournament:', error);
        showNotification('Failed to open tournament. Please try again.', 'error');
    }
};

/**
 * @description Join as spectator
 * @param gameId - ID of the game to spectate
 */
export function spectateGame(gameId: string) {
    console.log(`Spectating game: ${gameId}`);
    showNotification('Joining game as spectator...', 'info');
    
    window.dispatchEvent(new CustomEvent('navigate', { 
        detail: { 
            sectionId: 'game',
            gameId: gameId,
            mode: 'spectator'
        }
    }));
};