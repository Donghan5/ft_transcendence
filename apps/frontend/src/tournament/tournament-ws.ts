import { appState } from '../state/state';
import { renderActiveTournamentsList } from './tournament-render';

export function connectActiveTournamentsSocket() {
    if (appState.activeTournamentsWs) {
        appState.activeTournamentsWs.onclose = null; 
        appState.activeTournamentsWs.close();
    }

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/api/tournament/ws/active`;

    appState.activeTournamentsWs = new WebSocket(wsUrl);

    appState.activeTournamentsWs.onopen = () => {
        console.log('✅ [Global] Connected to active tournaments feed.');
    };

    appState.activeTournamentsWs.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            if (data.type === 'activeTournaments') {
                console.log('[Global] Active tournaments list update received:', data.payload);

                appState.activeTournamentsData = data.payload || [];

                if (appState.currentSection === 'hero') {
                    const heroContainer = document.getElementById('homeTournamentsList');
                    if (heroContainer) {
                        renderActiveTournamentsList('homeTournamentsList', false);
                    }
                } else if (appState.currentSection === 'tournament') {
                    const tournamentHomeContainer = document.getElementById('tournaments-container');
                    if (tournamentHomeContainer) {
                        renderActiveTournamentsList('tournaments-container', true);
                    }
                }
            }
        } catch (error) {
            console.error('[Global] Active tournaments list update error:', error);
        }
    };

    appState.activeTournamentsWs.onclose = () => {
        console.log('[Global] Disconnected from active tournaments feed. Reconnecting in 5 seconds...');
        setTimeout(() => {
            if (appState.currentUser) {
                connectActiveTournamentsSocket();
            }
        }, 5000);
    };

    appState.activeTournamentsWs.onerror = (error) => {
        console.error('[Global] Active tournaments WebSocket error:', error);
    };
}