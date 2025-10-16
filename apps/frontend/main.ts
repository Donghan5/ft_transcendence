import { appState } from './src/state/state';
import { showSection, setupPongLogoRedirect, showFriendsScreen, showNicknameSetupScreen, showAppScreen } from './src/services/ui';
import { handleGameStart, cancelMatchmaking, cleanupCurrentGame, forfeitCurrentGame, showGameScreen, startGame, triggerGameEnd } from './src/game/game-manager';
import { returnToMainMenu, toggleFullscreen, addEscKeyReminder, removeEscKeyReminder } from './src/utils/tools';
import { showProfileScreen } from './src/services/user';
import { setupLocalAuthHandlers, updateLoginStatus, showLoginScreen } from './src/services/auth';
import { cleanupTournamentUI } from './src/tournament/tournament-services';
import { StatusManager } from './src/status/status-manager';
import { showNotification } from './src/services/ui';
import { navigateBack } from './src/utils/navigation';

document.addEventListener('DOMContentLoaded', () => {
	const path = window.location.pathname;
	let initialSection: any = 'hero';

	if (path === '/game') initialSection = 'game';
	else if (path === '/profile') initialSection = 'profile';
	else if (path === '/login') initialSection = 'login';
	else if (path === '/nickname-setup') initialSection = 'nicknameSetup';
	else if (path === '/friends') initialSection = 'friends';
	else if (path === '/public-profile') initialSection = 'publicProfile';
	else if (path === '/waiting') initialSection = 'waiting';
	else if (path === '/tournament-lobby') initialSection = 'tournamentLobby';
	const state = { sectionId: initialSection };
	history.replaceState(state, document.title, path);
	appState.currentSection = initialSection;

	// checking to hash
	window.addEventListener('hashchange', (e) => {
		console.log('Hash changed:', {
			oldURL: e.oldURL,
			newURL: e.newURL,
			hash: window.location.hash
		});
		console.trace(); // check
	});

	setupLocalAuthHandlers();
	updateLoginStatus();
	console.log('Start beautiful PONG game!');
	setupEventListeners();
})

document.addEventListener('requestReturnToMainMenu', () => {
	returnToMainMenu();
});

function setupEventListeners() {
	const quickPlayButton = document.getElementById('quickPlayBtn');
	if (quickPlayButton) {
		quickPlayButton.addEventListener('click', () => {
			console.log("Quickly play!");
			handleGameStart('quick');
		});
	}

	const pvpPlayButton = document.getElementById('pvpPlayBtn');
	if (pvpPlayButton) {
		pvpPlayButton.addEventListener('click', () => {
			console.log("PVP play!");
			handleGameStart('pvp');
		});
	}

	const aiPlayButton = document.getElementById('aiPlayBtn');
	if (aiPlayButton) {
		aiPlayButton.addEventListener('click', () => {
			console.log("AI play!");
			handleGameStart('ai');
		});
	}

	const tournamentPlayButton = document.getElementById('tournamentPlayBtn');
	if (tournamentPlayButton) {
		tournamentPlayButton.addEventListener('click', () => {
			console.log("Tournament play!");
			handleGameStart('tournament');
		});
	}

	const logoutButton = document.getElementById('logoutBtn');
	if (logoutButton) {
		logoutButton.addEventListener('click', () => {
			window.location.href = '/api/auth/logout';
			console.log('Logout action needed');
		});
	}

	const cancelMatchmakingButton = document.getElementById('cancelMatchmakingBtn');
	if (cancelMatchmakingButton) {
		cancelMatchmakingButton.addEventListener('click', cancelMatchmaking);
	}

	const profileWidgetBtn = document.getElementById('profileWidgetBtn');
	const profileDropdown = document.getElementById('profileDropdown');
	profileWidgetBtn?.addEventListener('click', (event) => {
		// Stop the click from immediately being caught by our new document listener
		event.stopPropagation();
		profileDropdown?.classList.toggle('hidden');
	});

	document.addEventListener('click', (event) => {
		if (profileDropdown?.classList.contains('hidden')) {
			return;
		}

		const isClickInsideWidget = profileWidgetBtn?.contains(event.target as Node);
		const isClickInsideDropdown = profileDropdown?.contains(event.target as Node);

		if (!isClickInsideWidget && !isClickInsideDropdown) {
			profileDropdown?.classList.add('hidden');
		}
	});

	document.getElementById('dropdownProfileBtn')?.addEventListener('click', () => {
		showProfileScreen();
		profileDropdown?.classList.add('hidden');
	});

	document.getElementById('dropdownFriendsBtn')?.addEventListener('click', async () => {
		profileDropdown?.classList.add('hidden');
		await showFriendsScreen();
	});

	document.getElementById('dropdownLogoutBtn')?.addEventListener('click', () => {
		profileDropdown?.classList.add('hidden');
		window.location.href = '/api/auth/logout';
	});

	
    document.getElementById('profileReturnBtn')?.addEventListener('click', () => {
        console.log('Profile back button clicked');
        navigateBack();
    });

    document.getElementById('friendsReturnBtn')?.addEventListener('click', () => {
        console.log('Friends back button clicked');
        navigateBack();
    });

    document.getElementById('tournament-return-btn')?.addEventListener('click', () => {
        console.log('Tournament back button clicked');
        navigateBack();
    });

    document.getElementById('publicProfileReturnBtn')?.addEventListener('click', () => {
        console.log('Public profile back button clicked');
        navigateBack();
    });

	window.addEventListener('navigate', (event: any) => {
		const detail = event.detail;
		console.log('Custom navigate event:', detail);

		if (typeof detail === 'string') {
			showSection(detail as any);
		} else if (detail && typeof detail === 'object') {
			if (detail.sectionId === 'game' && detail.gameId) {
				console.log(`Navigating to game: ${detail.gameId} (mode: ${detail.mode || 'player'})`);
				showGameScreen();

				// Determine game mode based on context
				let gameMode = 'tournament';
				if (detail.mode === 'spectator') {
					gameMode = 'spectator';
					showNotification('Spectator mode - you can watch but not play', 'info');
				}

				startGame(detail.gameId, String(appState.currentUser.id), gameMode);
			} else if (detail.sectionId) {
				showSection(detail.sectionId);
			}
		}
	});

	setupPongLogoRedirect();
}



document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', (e) => {
		if ((e.target as HTMLElement)?.id === 'gameOverReturnBtn') {
			console.log('Game over return button clicked');

			const gameOverModal = document.getElementById('gameOverModal');
			if (gameOverModal) {
				gameOverModal.classList.add('hidden');
			}

			// Only process if we're still in game section
			if (appState.currentSection === 'game') {
				cleanupCurrentGame();

				// Then navigate (handles tournament redirection automatically)
				returnToMainMenu();
			}
		}
	});
});


(window as any).triggerGameEnd = triggerGameEnd;

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && appState.currentGame && appState.currentSection === 'game') {
		event.preventDefault();

		if (appState.currentGameMode === 'spectator') {
			// For spectators, just close without forfeit
			console.log('Spectator exiting game...');
			cleanupCurrentGame();
			returnToMainMenu(); // This will handle tournament redirect
		} else {
			// For players, forfeit the game
			forfeitCurrentGame();
		}
	}

	if (event.key === 'F11') {
		event.preventDefault();
		toggleFullscreen();
	}
});

window.addEventListener('beforeunload', () => {
	// stopTournamentPolling();
	cleanupTournamentUI();
	cleanupCurrentGame();

	if (appState.matchmakingWs) {
		try {
			appState.matchmakingWs.close();
		} catch (error) {
			console.error('Error closing matchmaking WebSocket on unload:', error);
		}
	}

	if (appState.statusManager) {
		appState.statusManager.disconnect();
	}
});

console.log('Frontend main.ts loaded successfully')