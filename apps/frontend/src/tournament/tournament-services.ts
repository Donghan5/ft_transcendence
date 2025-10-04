import { appState } from "../state/state";
import { showSection, showNotification } from '../services/ui';
import { TournamentUI } from "../tournament/tournament-ui";
import { returnToMainMenu } from "../utils/tools";
import { startGame } from '../game/game-manager';
import { renderActiveTournamentsList } from "./tournament-render";

export function cleanupTournamentUI() {
    if (appState.tournamentUI) {
        appState.tournamentUI.cleanup();
        appState.tournamentUI = null;
    }
}
    
/**
 * @description Update tournament UI calls to pass tournament ID when starting games
 * Add this to your tournament UI when starting tournament games
 */
export function startTournamentGame(gameId: string, playerId: string, tournamentId: string) {
    console.log(`Starting tournament game: ${gameId} for tournament: ${tournamentId}`);
    
    // Call startGame with tournament ID
    startGame(gameId, playerId, 'tournament', tournamentId);
}

export function setCurrentTournament(tournament: any) {
    appState.currentTournament = tournament;
}

/**
 * @description Find user's current match from tournament data
 * @param tournament - Tournament object from API
 * @param userId - User ID to find match for
 * @returns Match object if found, null otherwise
 */
export function findMyCurrentMatchFromTournament(tournament: any, userId: string): any {
    try {
        if (!tournament.matches || !userId) {
            return null;
        }
        
        const userIdStr = userId.toString();
        
        // Find current round matches where user is a participant
        const currentRoundMatches = tournament.matches.filter((match: any) => 
            match.round === (tournament.current_round || 1) &&
            (match.player1?.id === userIdStr || match.player2?.id === userIdStr) &&
            match.status === 'active'
        );
        
        return currentRoundMatches.length > 0 ? currentRoundMatches[0] : null;
        
    } catch (error) {
        console.error('Error finding current match:', error);
        return null;
    }
}

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


export async function loadHomeTournaments(): Promise<void> {
    await loadActiveTournaments();
    renderActiveTournamentsList('homeTournamentsList', false);
}

export function joinExistingTournament(tournamentId: string): void {
    if (!appState.tournamentUI) {
        appState.tournamentUI = new TournamentUI('tournamentSection');
    }

    if (appState.currentUser) {
        appState.tournamentUI.setCurrentUser(appState.currentUser);
    }

    appState.tournamentUI.joinTournament(tournamentId);
    showSection('tournament');
}

// Expose joinExistingTournament to global scope for button onclick
(window as any).joinExistingTournament = joinExistingTournament;

/**
 * @description To join a tournament from home screen
 */
(window as any).joinHomeTournament = async function(tournamentId: string) {
    try {
        console.log('Joining tournament from home:', tournamentId);

        if (!appState.tournamentUI) {
            appState.tournamentUI = new TournamentUI('tournamentSection');
        }

        if (appState.currentUser) {
            appState.tournamentUI.setCurrentUser(appState.currentUser);
        }

        await appState.tournamentUI.joinTournament(tournamentId);
        showSection('tournament');
        loadHomeTournaments();
    } catch (error) {
        console.error('Error joining tournament:', error);
        alert('An error occurred while trying to join the tournament.');
    }
};



(window as any).joinExistingTournament = async function(tournamentId: string) {
    if (appState.tournamentUI) {
        await appState.tournamentUI.joinTournament(tournamentId);
        loadActiveTournaments(); 
    }
};

/**
 * @description Open tournament from home screen with different modes
 * @param tournamentId - Tournament ID to open
 * @param mode - How to open: 'join', 'participant', 'spectator'
 */
(window as any).openTournamentFromHome = async function(tournamentId: string, mode: 'join' | 'participant' | 'spectator' = 'participant') {
    try {
        console.log(`Opening tournament ${tournamentId} in ${mode} mode`);

        // Always create fresh tournament UI to avoid state issues
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
 * @description Join game as spectator
 * @param gameId - Game ID to spectate
 */
(window as any).spectateGame = function(gameId: string) {
    console.log(`Spectating game: ${gameId}`);
    
    // Show notification that spectator mode is starting
    showNotification('Joining game as spectator...', 'info');
    
    // Navigate to game with spectator mode
    window.dispatchEvent(new CustomEvent('navigate', { 
        detail: { 
            sectionId: 'game',
            gameId: gameId,
            mode: 'spectator'
        }
    }));
};

(window as any).loadActiveTournaments = loadActiveTournaments;