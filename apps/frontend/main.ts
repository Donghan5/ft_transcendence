import { PongGame3D } from './src/game/render'
import { initializeGame } from './src/game/init'
import { redirectGoogleLogin } from './auth/login/google'
import { AuthService } from './auth/services/auth-service';
import { PasswordChangeForm } from './components/password-change-form';
import { StatusManager } from './src/status/status-manager';
import { UserStats } from './src/status/status-manager';
import { StatsManager } from './src/stats/stats-manager';
import { TournamentUI } from './src/tournament/tournament-ui';
import StateManager from './src/utils/state-manager';

let currentGame: PongGame3D | null = null;
let currentGameId: string | null = null;
let currentUser: any | null = null;
let matchmakingWs: WebSocket | null = null;
let statusManager: StatusManager | null = null;
let statsManager: StatsManager | null = null;
let tournamentUI: TournamentUI | null = null;
let currentSection: string | null = null;
let isSpectatorMode = false; // Track if current game is in spectator mode
let currentGameMode: string = ''; // Track current game mode
let currentTournament: any = null;
let activeTournamentsData: any[] = [];
let tournamentRefreshInterval: ReturnType<typeof setInterval> | null = null;
let activeTournamentsWs: WebSocket | null = null;
let friendsRefreshInterval: ReturnType<typeof setInterval> | null = null;
let renderFriendLists: () => Promise<void> = async () => {};

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
	currentSection = initialSection;

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

function setupPongLogoRedirect(): void {
	const pongLogo = document.getElementById('pongLogo');
	if (pongLogo) {
		pongLogo.addEventListener('click', () => {
			console.log('Pong logo clicked, returning to main menu');
			showSection('hero');
		});
	}
}

/**
 * @description handler setting up local authentication handlers
 */
function setupLocalAuthHandlers(): void {
    // Initialize auth tabs
    initializeAuthTabs();
    
    // Setup all auth event listeners
    setupAuthEventListeners();
}

/**
 * @description Show the specified authentication tab with proper styling
 * @param tabName - The name of the tab to show ('login' or 'register')
 */
function showAuthTab(tabName: 'login' | 'register'): void {
    console.log('Switching to tab:', tabName);
    
    // Get form elements
    const loginForm = document.getElementById('login-form') as HTMLElement;
    const registerForm = document.getElementById('register-form') as HTMLElement;
    
    // Get tab button elements
    const loginTab = document.querySelector('[data-tab="login"]') as HTMLElement;
    const registerTab = document.querySelector('[data-tab="register"]') as HTMLElement;

    if (!loginForm || !registerForm || !loginTab || !registerTab) {
        console.error('Auth tab elements not found');
        return;
    }

    // Hide both forms
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');

    // Reset both tabs to inactive state using direct style manipulation to override Tailwind
    const inactiveStyles = {
        backgroundColor: 'rgb(229, 231, 235)', // gray-200
        color: 'rgb(75, 85, 99)' // gray-600
    };

    const activeStyles = {
        backgroundColor: 'rgb(253, 224, 71)', // yellow-300
        color: 'rgb(0, 0, 0)' // black
    };

    // Apply inactive styles to both tabs first
    Object.assign(loginTab.style, inactiveStyles);
    Object.assign(registerTab.style, inactiveStyles);

    // Show selected form and activate corresponding tab
    if (tabName === 'login') {
        loginForm.classList.remove('hidden');
        Object.assign(loginTab.style, activeStyles);
        console.log('Login tab activated');
    } else if (tabName === 'register') {
        registerForm.classList.remove('hidden');
        Object.assign(registerTab.style, activeStyles);
        console.log('Register tab activated');
    }

    // Clear any error/success messages
    clearAuthMessages();
}

/**
 * @description Clear all authentication error and success messages
 */
function clearAuthMessages(): void {
    const messageElements = document.querySelectorAll('#loginError, #registerError, #loginSuccess, #registerSuccess');
    messageElements.forEach(el => {
        el.classList.add('hidden');
        el.textContent = '';
    });
}

/**
 * @description Initialize auth tabs when DOM is loaded
 */
function initializeAuthTabs(): void {
    // Make function globally available for onclick handlers
    (window as any).showAuthTab = showAuthTab;
    
    // Set login as default active tab
    showAuthTab('login');
    
    console.log('Auth tabs initialized');
}

/**
 * @description Setup authentication event listeners
 */
function setupAuthEventListeners(): void {
    // Add event listeners for tab buttons (alternative to onclick)
    const loginTab = document.querySelector('[data-tab="login"]') as HTMLElement;
    const registerTab = document.querySelector('[data-tab="register"]') as HTMLElement;
    
    if (loginTab) {
        loginTab.addEventListener('click', () => showAuthTab('login'));
    }
    
    if (registerTab) {
        registerTab.addEventListener('click', () => showAuthTab('register'));
    }

    // Form submission handlers
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    const registerForm = document.getElementById('registerForm') as HTMLFormElement;

    if (loginForm) {
        loginForm.addEventListener('submit', handleLocalLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleLocalRegister);
    }

    console.log('Auth event listeners setup complete');
}

/**
 * @description Shows an error message
 * @param elementId
 * @param message
 */
function showAuthError(elementId: string, message: string) {
	const errorEl = document.getElementById(elementId);
	if (errorEl) {
		errorEl.textContent = message;
		errorEl.classList.remove('hidden');
	}
}

/**
 * @description Shows a success message
 * @param elementId
 * @param message
 */
function showAuthSuccess(elementId: string, message: string) {
	const successEl = document.getElementById(elementId);
	if (successEl) {
		successEl.textContent = message;
		successEl.classList.remove('hidden');
	}
}

/**
 * @description Handles user registration
 * @param e - The submit event
 */
async function handleLocalLogin(e: Event) {
	e.preventDefault();
	clearAuthMessages();

	const formData = new FormData(e.target as HTMLFormElement);
	const loginData = {
		loginInput: formData.get('loginInput') as string,
		password: formData.get('password') as string
	};

    const validationError = AuthService.validateLoginInput(loginData);
    if (validationError) {
        showAuthError('loginError', validationError);
        return;
    }

	const result = await AuthService.localLogin(loginData);

	if (result.success) {
		showAuthSuccess('loginSuccess', result.message);

		try {
			const userResponse = await fetch('/api/auth/me', { credentials: 'include' });
			if (userResponse.ok) {
				const userData = await userResponse.json();
				console.log('User data after login:', userData);
				currentUser = userData;
				
				if (!userData.profileComplete) {
					showNicknameSetupScreen();
				} else {
					showAppScreen(userData);
				}
			} else {
				throw new Error('Failed to fetch user data');
			}
		} catch (error) {
			console.error('Error fetching user data:', error);
			showAuthError('loginError', 'Failed to load user profile');
		}
	} else {
		showAuthError('loginError', result.error || 'Login failed.');
	}
}

/**
 * @description Handles local user registration
 * @param e - The submit event
 */
async function handleLocalRegister(e: Event) {
	e.preventDefault();
	clearAuthMessages();

	const formData = new FormData(e.target as HTMLFormElement);
	const registerData = {
		nickname: formData.get('nickname') as string,
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		confirmPassword: formData.get('confirmPassword') as string
	};

    const validationError = AuthService.validateRegisterInput(registerData);
    if (validationError) {
        showAuthError('registerError', validationError);
        return;
    }

	const result = await AuthService.localRegister(registerData);

	if (result.success) {
		showAuthSuccess('registerSuccess', result.message);

		(e.target as HTMLFormElement).reset(); // Reset the form

		setTimeout(() => {
			showAuthTab('login'); // Switch to login tab after successful registration
			showAuthSuccess('registerSuccess', 'Please login to continue.');
		}, 1000);
	} else {
		showAuthError('registerError', result.error || 'Registration failed.');
	}
}

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

	document.getElementById('profileReturnBtn')?.addEventListener('click', returnToMainMenu);
	document.getElementById('friendsReturnBtn')?.addEventListener('click', returnToMainMenu);

	document.getElementById('publicProfileReturnBtn')?.addEventListener('click', showFriendsScreen);

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
				
				startGame(detail.gameId, String(currentUser.id), gameMode);
			} else if (detail.sectionId) {
				showSection(detail.sectionId);
			}
		}
	});

	setupPongLogoRedirect();
}

/**
 * Mapping URL and Section ID
 * @param sectionId 
 * @returns 
 */
function getUrlForSection(sectionId: string): string {
	switch (sectionId) {
		case 'hero': return '/';
		case 'game': return '/game';
		case 'profile': return '/profile';
		case 'login': return '/login';
		case 'nicknameSetup': return '/nickname-setup';
		case 'friends': return '/friends';
		case 'publicProfile': return '/public-profile';
		case 'waiting': return '/waiting';
		case 'tournament': return '/tournament';
		default: return '/';
	}
}

function getTitleForSection(sectionId: string): string {
	switch (sectionId) {
		case 'hero': return 'PONG - Main Menu';
		case 'game': return 'PONG - Game';
		case 'profile': return 'PONG - Profile';
		case 'login': return 'PONG - Login';
		case 'nicknameSetup': return 'PONG - Setup Nickname';
		case 'friends': return 'PONG - Friends';
		case 'publicProfile': return 'PONG - Public Profile';
		case 'waiting': return 'PONG - Waiting';
		case 'tournament': return 'PONG - Tournaments';
		default: return 'PONG';
	}
}


/**
 * @param sectionId - The ID of the section to show
 * @description Show a specific section by ID and hide others
 */
function showSection(sectionId: 'hero' | 'game' | 'profile' | 'login' | 'nicknameSetup' | 'friends' | 'publicProfile' | 'waiting' | 'tournament', pushToHistory: boolean = true) {
    const sections = ['heroSection', 'gameSection', 'profileSection', 'loginSection', 'appSection', 'nicknameSetupSection', 'friendsSection', 'publicProfileSection', 'waitingSection', 'tournamentSection'];
    
    console.log(`SHOW SECTION with ${sectionId}, ${pushToHistory}`);

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if ('loginSection' === id || 'nicknameSetupSection' === id) {
                el.style.display = 'none';
            } else {
                el.classList.add('hidden');
            }
        }
    });

    const targetSection = document.getElementById(`${sectionId}Section`);
    if (targetSection) {
        if (sectionId === 'login' || sectionId === 'nicknameSetup') {
            targetSection.style.display = 'flex';
        } else {
            targetSection.classList.remove('hidden');
        }
    }

    const appContainer = document.getElementById('appSection');
    if (appContainer) {
        if (sectionId === 'login') {
            appContainer.classList.add('hidden');
        } else {
            appContainer.classList.remove('hidden');
        }
    }

    // Initialize tournament UI when showing tournament section
    if (sectionId === 'tournament') {
        if (tournamentUI) {
            tournamentUI.cleanup();
        }
        tournamentUI = new TournamentUI('tournamentSection');
        
        if (currentUser) {
            tournamentUI.setCurrentUser(currentUser);
        }
        
        // Show the main tournament home screen
        tournamentUI.showTournamentHome();
    }

    // Start/stop tournament polling based on section
    if (sectionId === 'hero') {
        // Load tournaments immediately when showing hero
        if (currentUser) {
            loadHomeTournaments();
            // startTournamentPolling();
        }
    } else {
        // Stop polling when leaving hero section to save resources
        // stopTournamentPolling();
    }

    // Rest of the showSection logic...
    if (currentSection === sectionId && pushToHistory) {
        console.log(`Already in section ${sectionId}, skipping history push`);
        return;
    }

    if (pushToHistory && currentSection !== sectionId) {
        const url = getUrlForSection(sectionId);
        const title = getTitleForSection(sectionId);
        const cleanUrl = url.replace(/#.*$/, '');
        const state = { sectionId };
        history.pushState(state, title, cleanUrl);
        document.title = title;
    }

    if (currentSection === 'friends' && sectionId !== 'friends' && statusManager) {
        statusManager.offFriendUpdate(renderFriendLists); // renderFriendLists를 참조할 수 있도록 해야 함
    }

    currentSection = sectionId;
}



/**
 * @description popstate event listener for browser navigation
 */
window.addEventListener('popstate', (event) => {
    console.log('Browser navigation detected:', {
        state: event.state,
        url: window.location.href,
        hash: window.location.hash
    });

    if (event.state && event.state.sectionId) {
        console.log('event.state.sectionId:', event.state.sectionId);
        showSection(event.state.sectionId, false);
    } else {
        const path = window.location.pathname;
        let sectionId: any = 'hero';
        
        if (path === '/game') sectionId = 'game';
        else if (path === '/profile') sectionId = 'profile';
        else if (path === '/login') sectionId = 'login';
        else if (path === '/nickname-setup') sectionId = 'nicknameSetup';
        else if (path === '/friends') sectionId = 'friends';
        else if (path === '/public-profile') sectionId = 'publicProfile';
        else if (path === '/waiting') sectionId = 'waiting';
        else if (path === '/tournament') sectionId = 'tournament';
        
        console.log('sectionId:', sectionId);
        showSection(sectionId, false);
    }
});

function cleanupTournamentUI() {
	if (tournamentUI) {
		tournamentUI.cleanup();
		tournamentUI = null;
	}
}

/**
 * showing login screen
 */
function showLoginScreen(){
	console.log('Showing login screen');
	
	if (window.location.pathname !== '/login') {
        history.replaceState({ sectionId: 'login' }, 'PONG - Login', '/login');
    }

	showSection('login');
	
	document.getElementById('loginSection')?.classList.remove('hidden');
	document.getElementById('appSection')?.classList.add('hidden');

	const loginButton = document.getElementById('loginBtn');
	if (loginButton) {
		loginButton.addEventListener('click', () => {
			console.log('Login button clicked');
			redirectGoogleLogin();
		});
	}
}

/**
 * showing app screen
 * @param user - User object containing user information
 */
async function showAppScreen(user: any) {
	currentUser = user;

	showSection('hero');
	
	const widgetAvatar = document.getElementById('widgetAvatar') as HTMLImageElement;
	const widgetNickname = document.getElementById('widgetNickname') as HTMLSpanElement;
	if (widgetAvatar) widgetAvatar.src = user.avatarUrl || '/default-avatar.png';
	if (widgetNickname) widgetNickname.textContent = user.nickname || user.name;

	// Load tournaments initially
	await loadHomeTournaments();

    connectActiveTournamentsSocket();
	
}

function showTournamentView(tournament: any) {
    showSection('tournament');
    
    if (!tournamentUI) {
        tournamentUI = new TournamentUI('tournamentSection');
    }

    if (currentUser && tournamentUI) {
        tournamentUI.setCurrentUser(currentUser);
    }

    // Show the specific tournament view (this is the "lobby" for a specific tournament)
    tournamentUI.showTournamentView(tournament);
}

async function showPublicProfileScreen(nickname: string) {
    showSection('publicProfile');
    const publicProfileContent = document.getElementById('publicProfileContent');
    if (!publicProfileContent) return;

    publicProfileContent.innerHTML = '<p>Loading profile...</p>';

    try {
        const response = await fetch(`/api/user/profile/${nickname}`);

        if (!response.ok) throw new Error('Failed to fetch profile');

        const data = await response.json();

        publicProfileContent.innerHTML = `
            <div class="flex items-center gap-x-4 mb-6">
                <img src="${data.user.avatar_url || '/default-avatar.png'}" class="w-16 h-16 rounded-full border-thick">
                <h2 class="text-4xl uppercase">${data.user.nickname}</h2>
            </div>
            
            ${data.stats ? `
                <div class="bg-white p-6 border-thick shadow-sharp mb-6">
                    <h3 class="text-2xl font-bold mb-4">Player Stats</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span>Rank:</span>
                                <span class="font-bold">${data.stats.rank} (${data.stats.rankPoints} RP)</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Total Games:</span>
                                <span>${data.stats.totalGames}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Win Rate:</span>
                                <span>${data.stats.winRate}%</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span>Wins/Losses:</span>
                                <span>${data.stats.wins}/${data.stats.losses}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Current Streak:</span>
                                <span>${data.stats.currentStreak}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Max Streak:</span>
                                <span>${data.stats.maxStreak}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ` : '<div class="bg-white p-4 border-thick mb-6"><p>No stats available</p></div>'}
            
            <h3 class="text-3xl uppercase mt-6 mb-3 border-t-4 border-black pt-4">Game History</h3>
            <ul class="space-y-2 font-teko text-2xl">
                ${data.gameHistory.map((game: any) => `
                    <li class="bg-white p-3 border-thick flex justify-between items-center text-black">
                        <span>vs ${game.opponent_nickname} (${game.game_type})</span>
                        <span class="font-bold ${game.result === 'Win' ? 'text-green-600' : 'text-red-600'}">${game.result}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    } catch (error) {
        publicProfileContent.innerHTML = `
            <p class="text-red-500">Failed to load profile. Please try again later.</p>`;
        console.error('Error loading public profile:', error);
    }
}

/**
 * @description Show the profile screen
 */
async function showProfileScreen() {
	showSection('profile', true);

	const profileContent = document.getElementById('profileContent');
	if (!profileContent) return;

	profileContent.innerHTML = '<p>Loading profile...</p>';

	try {
		const response = await fetch('/api/user/profile', {
			credentials: 'include'
		});
		if (!response.ok) {
			throw new Error('Failed to fetch profile');
		}

		const data = await response.json();

		 profileContent.innerHTML = `
            <div class="flex flex-col md:flex-row items-center gap-x-6 mb-6">
                <img id="profileAvatar" src="${data.user.avatar_url || '/default-avatar.png'}" alt="User Avatar" class="w-24 h-24 rounded-full border-thick shadow-sharp mb-4 md:mb-0">
                <div class="text-center md:text-left">
                    <h2 class="text-5xl uppercase">${data.user.nickname}</h2>
                    <p class="font-teko text-2xl text-black/80">${data.user.name} (${data.user.email})</p>
                </div>
            </div>

            <div class="bg-white p-4 border-thick shadow-sharp mb-6">
                 <h3 class="text-2xl uppercase mb-2">Upload Avatar</h3>
                 <form id="avatarForm" class="flex items-center gap-2">
                    <input type="file" id="avatarUpload" accept="image/*" class="w-full p-2 text-lg border-thick bg-white">
                    <button type="submit" class="bg-pink-500 text-white px-6 py-2 text-lg uppercase border-thick shadow-sharp hover-anarchy">
                        Save
                    </button>
                </form>
            </div>
            
            ${data.stats ? `
                <div class="bg-white p-6 border-thick shadow-sharp mb-6">
                    <h3 class="text-3xl uppercase mb-4 text-center">YOUR STATS</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div class="bg-pink-500 text-white p-4 border-thick">
                            <div class="text-2xl font-bold">${data.stats.rank}</div>
                            <div class="text-sm uppercase">Rank</div>
                            <div class="text-xs">${data.stats.rankPoints} RP</div>
                        </div>
                        <div class="bg-yellow-400 text-black p-4 border-thick">
                            <div class="text-2xl font-bold">${data.stats.totalGames}</div>
                            <div class="text-sm uppercase">Total Games</div>
                        </div>
                        <div class="bg-green-500 text-white p-4 border-thick">
                            <div class="text-2xl font-bold">${data.stats.winRate}%</div>
                            <div class="text-sm uppercase">Win Rate</div>
                            <div class="text-xs">${data.stats.wins}W / ${data.stats.losses}L</div>
                        </div>
                        <div class="bg-red-500 text-white p-4 border-thick">
                            <div class="text-2xl font-bold">${data.stats.currentStreak}</div>
                            <div class="text-sm uppercase">Current Streak</div>
                            <div class="text-xs">Max: ${data.stats.maxStreak}</div>
                        </div>
                    </div>
                    
                    <div class="mt-4 grid grid-cols-2 gap-4 text-center">
                        <div class="bg-blue-500 text-white p-3 border-thick">
                            <div class="text-xl font-bold">${data.stats.averageScore.toFixed(1)}</div>
                            <div class="text-xs uppercase">Average Score</div>
                        </div>
                        <div class="bg-purple-500 text-white p-3 border-thick">
                            <div class="text-xl font-bold">${data.stats.maxScore}</div>
                            <div class="text-xs uppercase">Max Score</div>
                        </div>
                    </div>
                </div>
            ` : `
                <div class="bg-white p-6 border-thick shadow-sharp mb-6">
                    <h3 class="text-3xl uppercase text-center">YOUR STATS</h3>
                    <p class="text-center text-gray-500 mt-4">No games played yet. Start playing to see your stats!</p>
                </div>
            `}
            
            <div>
                <h3 class="text-4xl text-outline-white text-center mb-4">Game History</h3>
                <ul class="space-y-2 font-teko text-2xl uppercase">
                    ${data.gameHistory.map((game: any) => `
                        <li class="bg-white p-3 border-thick shadow-sharp flex justify-between items-center text-black">
                            <div>
                                vs ${game.opponent_nickname}
                                <span class="text-lg text-black/70">(${game.game_type})</span>
                            </div>
                            <div class="text-right ${game.result === 'Win' ? 'text-green-600' : 'text-red-600'}">
                                <span class="text-3xl font-bold">${game.result}</span>
                                <div class="text-sm">${game.player1_score} - ${game.player2_score}</div>
                            </div>
                        </li>
                    `).join('') || '<li class="bg-white p-3 border-thick text-center text-black">No games played yet.</li>'}
                </ul>
            </div>
        `;

		if (data.user.auth_provider === 'local') {
            const passwordChangeContainer = document.getElementById('password-change-container');
            if (passwordChangeContainer) {
				passwordChangeContainer.innerHTML = '';
                new PasswordChangeForm(passwordChangeContainer);
            }
        }

		attachAvatarFormListener();

	} catch (error) {
		profileContent.innerHTML = `
			<p class="text-red-500">Failed to load profile. Please try it later</p>`;
		console.error('Error loading profile:', error);
	}
}

/**
 * @description Attach Avatar images
 */
function attachAvatarFormListener() {
	const avatarForm = document.getElementById('avatarForm');
		if (avatarForm) {
			avatarForm.addEventListener('submit', async (event) => {
			event.preventDefault();
			const avatarInput = document.getElementById('avatarUpload') as HTMLInputElement;
			const avatarFiles = avatarInput.files;
			if (!avatarFiles || avatarFiles.length === 0) {
				// using default avatar
				console.error('No avatar file selected. Showing default avatar.');
				return;
			}

			const formData = new FormData();
			formData.append('avatar', avatarFiles[0]);

			try {
				const uploadResponse = await fetch('/api/user/avatar', {
					method: 'POST',
					body: formData,
					credentials: 'include'
				});
				const result = await uploadResponse.json();

				if (uploadResponse.ok) {
                console.log('Avatar uploaded successfully:', result);
                
                const widgetAvatar = document.getElementById('widgetAvatar') as HTMLImageElement;
                if (widgetAvatar) {
                    widgetAvatar.src = result.avatarUrl + '?t=' + new Date().getTime();
                }
                
                const profileAvatar = document.getElementById('profileAvatar') as HTMLImageElement;
                if (profileAvatar) {
                    profileAvatar.src = result.avatarUrl + '?t=' + new Date().getTime();
                }
            } else {
					throw new Error(result.error || 'Failed to upload avatar');
				}
			} catch (error) {
				console.error('Error uploading avatar:', error);
			}
			});
		}
}
/**
 * @param gameMode - The game mode to start
 * @description Handles the game start logic based on the selected game mode
 * @throws Error if the user is not logged in or game mode is invalid
 * @returns
 */
async function handleGameStart(gameMode: string) {
    if (!currentUser || !currentUser.name) {
        alert('Please login to play.');
        return;
    }

    console.log(`Player ${currentUser.name} is starting a ${gameMode} game.`);

    try {
        if (gameMode === 'tournament') {
            showSection('tournament');
            return;
        }
        await createNewGame(gameMode);
    } catch (error) {
        console.error('Failed to create game:', error);
        alert('Failed to create game. Please try again later.');
    }
}

/**
 * @description Showing a select UI
 * @returns {Promise<string | null>} - The selected AI level or null if cancelled
 */
function showAiLevelSelectionUI(): Promise<string | null> {
	return new Promise((resolve) => {
		const modal = document.getElementById('aiLevelModal');
		const cancelBtn = document.getElementById('cancelAiSelect');

		if (!modal || !cancelBtn) {
			console.error('AI Level Modal not found');
			resolve(null);
			return;
		}
		modal.classList.remove('hidden');

		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (target.matches('.ai-level-btn')) {
				cleanup();
				resolve(target.getAttribute('data-level'));
			} else if (target === cancelBtn) {
				cleanup();
			}
		}

		const cleanup = () => {
			modal.classList.add('hidden');
			modal.removeEventListener('click', handleClick);
		};

		modal.addEventListener('click', handleClick);
	});
}

/**
 * @description selecting AI level for the game, came from UI
 * @returns {Promise<string | null>} - The selected AI level or null if cancelled
 * @throws Error if the AI level selection fails
 */
async function selectingAiLevel(): Promise<string | null> {
	const aiLevel = await showAiLevelSelectionUI();
	if (!aiLevel) {
		throw new Error('AI level selection failed');
	}

	return aiLevel;
}


/**
 *
 * @param gameMode: string - The game mode to create (e.g., 'quick', 'ai', 'tournament')
 * @param playerName: string - The name of the player starting the game
 * @description Creates a new game by sending a request to the server and initializes the game
 */
async function createNewGame(gameMode: string) {
	try {
		console.log('Requesting new game from server...')

		// startGame(dummyResponse.gameId)
		const player2Id = gameMode === 'ai' ? 'AI' : 'Player2_tmp';
		let requestBody: any;

		// switching based on game mode
		switch (gameMode) {
			case 'quick':
				requestBody = {
					player1Id: currentUser.id,
					player1Nickname: currentUser.nickname,
					player2Id: 'Player2',
					player2Nickname: 'Player2',
					gameMode: 'LOCAL_PVP'
				};
				break;
			case 'ai':
				const selectedAiLevel = await selectingAiLevel(); // temp set

				if (!selectedAiLevel) {
					console.log('AI level selection cancelled');
					return;
				}

				requestBody = {
					player1Id: currentUser.id,
					player1Nickname: currentUser.nickname,
					player2Id: 'AI',
					gameMode: 'AI',
					aiLevel: selectedAiLevel
				};
				break;
			case 'pvp':
				requestBody = {
					player1Id: currentUser.id,
					gameMode: 'PVP',
				};

				connectingMatchmaking();
				break;
			case 'tournament':
                showSection('tournament');
				return;
			default:
				throw new Error('Invalid game mode selected');
		}

		const response = await fetch('/api/games', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody),
		})

		if (!response.ok) {
			throw new Error('Failed to create game')
		}

		const data = await response.json()

		if (data.message && data.message.includes('Waiting')) {
			showSection('waiting');
			// add cancel waiting
		} else if (data.gameId) {
			currentGameId = data.gameId
			console.log('Game created successfully:', data)
			showGameScreen()
			startGame(data.gameId, String(currentUser.id), gameMode)
		} else {
			throw new Error('Unexpected response format')
		}
	} catch (error) {
		console.error('Failed to create game:', error)
		throw error
	}
}

function connectingMatchmaking() {
	const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
 	const wsUrl = `${protocol}//${window.location.host}/api/games/matchmaking/ws?playerId=${currentUser.id}`;

	matchmakingWs = new WebSocket(wsUrl);

	matchmakingWs.onopen = () => {
		console.log('Connected to matchmaking server');
	}

	matchmakingWs.onmessage = (event) => {
		const data = JSON.parse(event.data);
		if (data.type === 'matchFound') {
			console.log('Match found! Game ID: ', data.gameId);
			currentGameId = data.gameId;

			if (matchmakingWs) {
				matchmakingWs.close();
				matchmakingWs = null;
			}

			showGameScreen();
			startGame(data.gameId, String(currentUser.id), 'pvp');
		}
	};

	matchmakingWs.onerror = (error) => {
		console.error('Matchmaking WebSocket error:', error);
		alert('Matchmaking connection failed');
		returnToMainMenu();
	}

	matchmakingWs.onclose = () => {
		console.log('Matchmaking WebSocket connection closed');
	}
}

/**
 * @description Enhanced startGame function to properly set tournament context
 */
export function startGame(gameId: string, playerId: string, gameMode: string, tournamentId?: string) {
    showGameScreen();
    console.log(`Starting initialize game... GameID: ${gameId}, PlayerID: ${playerId}, Mode: ${gameMode}`);

    // Track current game mode and spectator status
    currentGameMode = gameMode;
    isSpectatorMode = gameMode === 'spectator';

    // For tournament games, ensure we have tournament context
    if (gameMode === 'tournament' && tournamentId) {
        // Store tournament ID for later retrieval
        localStorage.setItem('currentTournamentId', tournamentId);
        console.log(`Tournament game started, stored tournament ID: ${tournamentId}`);
    }

    if (currentGame) {
        currentGame.dispose();
    }

    // Call initializeGame with correct parameter order: containerId, gameId, playerId, gameMode, nickname
    currentGame = initializeGame('gameContainer', gameId, playerId, gameMode, currentUser.nickname);

    if (currentGame) {
        console.log('Game initialized successfully');
        const canvas = document.getElementById('game-canvas');
        if (canvas) canvas.focus();
        updateConnectionStatus('connected');

        // For tournament games, make sure the game starts automatically
        if (gameMode === 'tournament') {
            console.log('Tournament game - starting automatically');
        }
    } else {
        console.error('Failed to initialize game');
        updateConnectionStatus('disconnected');
    }
    console.log(`Start game with game mode: ${gameMode}`);
}

function returnToTournamentLobby() {
    try {
        console.log('Returning to tournament lobby...');
        
        // Check if tournament UI is available and we have a current tournament
        if (tournamentUI && currentTournament) {
            showSection('tournament');
            
            // Refresh the tournament view to get latest state
            tournamentUI.openTournament(currentTournament.id);
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

function triggerGameEnd(gameResult?: any) {
    document.dispatchEvent(new CustomEvent('gameEnded', { 
        detail: { 
            gameResult,
            gameMode: currentGameMode,
            timestamp: Date.now()
        } 
    }));
}

function showMyTournaments(tournaments: any[]) {
    if (!tournamentUI) return;
    
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
        if (tournamentUI) {
            tournamentUI.showTournamentHome();
        }
    });

    if (tournaments.length === 0) {
        document.getElementById('create-tournament-from-empty')?.addEventListener('click', () => {
            if (tournamentUI) {
                tournamentUI.showCreateTournament();
            }
        });
    }
}

function showTournamentHistory(history: any[]) {
    if (!tournamentUI) return;
    
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
                                match.winner && match.winner.id === currentUser?.id?.toString()
                            ).length;
                            
                            return `
                                <div class="bg-gray-100 border-thick p-4">
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <h3 class="text-xl font-bold">${tournament.name}</h3>
                                            <p class="text-sm">Finished: ${new Date(tournament.finishedAt).toLocaleDateString()}</p>
                                            <p class="text-sm">Winner: ${tournament.winner?.nickname || 'Unknown'}</p>
                                            <p class="text-sm">Your Performance: ${wonMatches}/${myMatchesCount} matches won</p>
                                            ${tournament.winner?.id === currentUser?.id?.toString() ? 
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
        if (tournamentUI) {
            tournamentUI.showTournamentHome();
        }
    });

    if (history.length === 0) {
        document.getElementById('join-tournament-from-empty')?.addEventListener('click', () => {
            if (tournamentUI) {
                tournamentUI.showTournamentHome();
            }
        });
    }
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
            if (currentSection === 'game') {
                cleanupCurrentGame();
                
                // Then navigate (handles tournament redirection automatically)
                returnToMainMenu();
            }
        }
    });
});

function handleGameStateUpdate(gameState: any) {
    // IMPORTANT: Don't process game state updates if game has ended
    // The gameEnd WebSocket event handles the end game flow
    if (gameState.status === 'finished') {
        console.log('Game finished - ignoring state update (gameEnd event will handle this)');
        return;
    }
    
    // Show game over modal if needed (this should not be reached for 'finished' status)
    const gameOverModal = document.getElementById('gameOverModal');
    if (gameOverModal) {
        const winnerMessage = document.getElementById('winnerMessage');
        const gameOverTitle = document.getElementById('gameOverTitle');
        
        if (winnerMessage && gameOverTitle) {
            const winnerId = gameState.winnerId;
            const winnerNickname = gameState.winnerNickname || 'Unknown';
            
            if (winnerId === currentUser?.id?.toString()) {
                gameOverTitle.textContent = 'VICTORY!';
                winnerMessage.textContent = 'You won the match!';
            } else {
                gameOverTitle.textContent = 'DEFEAT!';
                winnerMessage.textContent = `${winnerNickname} won the match!`;
            }
            
            gameOverModal.classList.remove('hidden');
        }
    }
}

(window as any).triggerGameEnd = triggerGameEnd;
const reminderCSS = `
#esc-key-reminder {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.75rem 1rem;
    font-family: 'Teko', sans-serif;
    font-size: 0.875rem;
    text-transform: uppercase;
    border: 2px solid white;
    z-index: 9999;
    border-radius: 4px;
}
`;

// Add CSS if not already added
if (!document.getElementById('esc-reminder-css')) {
    const style = document.createElement('style');
    style.id = 'esc-reminder-css';
    style.textContent = reminderCSS;
    document.head.appendChild(style);
}

function showGameScreen() {
    showSection('game');
    console.log('Game screen is shown');
    
    addEscKeyReminder();
}

function addEscKeyReminder() {
    const existingReminder = document.getElementById('esc-key-reminder');
    if (existingReminder) {
        existingReminder.remove();
    }

    const reminder = document.createElement('div');
    reminder.id = 'esc-key-reminder';
    reminder.className = 'fixed bottom-4 right-4 bg-black/80 text-white px-3 py-2 text-sm font-teko uppercase border-2 border-white z-50';
    
    if (currentGameMode === 'spectator') {
        reminder.textContent = 'Press ESC to exit';
    } else {
        reminder.textContent = 'Press ESC to forfeit';
    }
    
    document.body.appendChild(reminder);
}

function removeEscKeyReminder() {
    const reminder = document.getElementById('esc-key-reminder');
    if (reminder) {
        reminder.remove();
    }
}

function updateConnectionStatus(status: 'connecting' | 'connected' | 'disconnected') {
	const indicator = document.getElementById('statusIndicator')
	const statusText = document.getElementById('statusText')

	if (indicator && statusText) {
		indicator.className = 'w-3 h-3 rounded-full animate-pulse'

		switch(status) {
			case 'connecting':
				indicator.classList.add('bg-yellow-500')
				break
			case 'connected':
				indicator.classList.add('bg-green-500')
				break
			case 'disconnected':
				indicator.classList.add('bg-red-500')
				break
		}

		statusText.textContent = status
	}
}

function showNotification(message: string, type: 'success' | 'error' | 'info' = 'info') {
	const notification = document.createElement('div');
	notification.className = `fixed top-4 right-4 z-50 p-4 border-thick shadow-sharp animate-pop max-w-sm ${
		type === 'success' ? 'bg-green-500 text-white' :
		type === 'error' ? 'bg-red-500 text-white' :
		'bg-blue-500 text-white'
	}`;
	notification.innerHTML = `
		<div class="flex justify-between items-center">
			<span class="font-teko text-lg uppercase">${message}</span>
			<button class="ml-4 text-white hover:text-gray-200 text-xl">&times;</button>
		</div>
	`;
	
	document.body.appendChild(notification);
	
	// Auto remove after 4 seconds
	setTimeout(() => {
		if (notification.parentNode) {
			notification.remove();
		}
	}, 4000);
	
	// Manual close
	notification.querySelector('button')?.addEventListener('click', () => {
		notification.remove();
	});
}

async function forfeitCurrentGame() {
    if (!currentGame || !currentUser) {
        console.log('No active game or user to forfeit');
        return;
    }

    console.log('Player forfeiting game...');

    try {
        const response = await fetch(`/api/games/forfeit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gameId: currentGame.state?.gameId || currentGameId,
                playerId: currentUser.id
            }),
            credentials: 'include'
        });

        if (response.ok) {
            console.log('Game forfeited successfully');
            showNotification('You forfeited the game', 'info');
            
            // The backend will send gameEnd WebSocket message to all players
            // The render.ts onGameEnd() will show the modal
            // User can then click "Return" button to leave
            
        } else {
            console.error('Failed to forfeit game:', response.status);
            showNotification('Failed to forfeit game', 'error');
            
            // If forfeit API failed, still clean up and return
            cleanupCurrentGame();
            returnToMainMenu();
        }
    } catch (error) {
        console.error('Error forfeiting game:', error);
        showNotification('Error forfeiting game', 'error');
        
        // If forfeit API failed, still clean up and return
        cleanupCurrentGame();
        returnToMainMenu();
    }
    
    // Let the gameEnd WebSocket event flow handle it naturally:
    // 1. Backend sends gameEnd event
    // 2. render.ts onGameEnd() shows modal
    // 3. User clicks "Return" button
    // 4. Button handler calls returnToMainMenu()
    // This ensures forfeiter sees the game end screen just like the winner
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && currentGame && currentSection === 'game') {
        event.preventDefault();
        
        if (currentGameMode === 'spectator') {
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

function exitSpectatorMode() {
    console.log('Exiting spectator mode...');
    cleanupCurrentGame();
    removeEscKeyReminder();
    
    // Return to tournament if we came from there
    if (currentGameMode === 'spectator' && tournamentUI && currentTournament) {
        showSection('tournament');
        tournamentUI.showTournamentView(currentTournament);
    } else {
        returnToMainMenu();
    }
}

function toggleFullscreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen()
		console.log("Enter fullscreen")
	} else {
		document.exitFullscreen()
		console.log("Window mode")
	}
}

function returnToMainMenu() {
    console.log('returnToMainMenu called - checking if should go to tournament...', { 
        currentGameMode, 
        isSpectatorMode,
        hasTournamentUI: !!tournamentUI,
        hasTournament: !!currentTournament 
    });
    
    // Check if this was a tournament game OR a spectator watching a tournament
    if (currentGameMode === 'tournament' || (currentGameMode === 'spectator' && currentTournament && tournamentUI)) {
        console.log('Redirecting to tournament instead of main menu');
        removeEscKeyReminder();
        
        // For spectators, use the currentTournament directly
        if (currentGameMode === 'spectator' && currentTournament && tournamentUI) {
            console.log(`Spectator returning to tournament: ${currentTournament.id}`);
            showSection('tournament');
            tournamentUI.showTournamentView(currentTournament);
            
            // Reset game mode
            currentGameMode = '';
            isSpectatorMode = false;
            return;
        }
        
        // For tournament players, get stored tournament ID
        const tournamentId = localStorage.getItem('currentTournamentId');
        
        if (tournamentId) {
            console.log(`Restoring tournament view for tournament: ${tournamentId}`);
            
            // Show tournament section
            showSection('tournament');
            
            // Initialize tournament UI if needed
            if (!tournamentUI) {
                tournamentUI = new TournamentUI('tournamentSection');
                if (currentUser) {
                    tournamentUI.setCurrentUser(currentUser);
                }
            }
            
            // Open the tournament
            tournamentUI.openTournament(tournamentId).then(() => {
                console.log('Successfully returned to tournament room');
                // Clean up stored tournament ID
                localStorage.removeItem('currentTournamentId');
            }).catch((error) => {
                console.error('Failed to restore tournament view:', error);
                // Fallback to main menu if tournament restoration fails
                proceedToMainMenu();
            });
            
        } else {
            console.warn('Tournament game ended but no tournament ID stored, going to main menu');
            proceedToMainMenu();
        }
        
        // Reset game mode
        currentGameMode = '';
        isSpectatorMode = false;
        return;
    }
    
    // Normal main menu return for non-tournament games
    proceedToMainMenu();
}

/**
 * @description Helper function for normal main menu return
 */
function proceedToMainMenu() {
    console.log('Returning to main menu...');
    
    if (currentSection === 'hero') {
        return;
    }

    if (currentSection === 'tournament') {
        cleanupTournamentUI();
    }

    removeEscKeyReminder();
    
    // Use showSection instead of history.back() to avoid navigation issues
    showSection('hero');

    const gameOverModal = document.getElementById('gameOverModal');
    if (gameOverModal) {
        gameOverModal.classList.add('hidden');
    }

    // Reset game mode
    currentGameMode = '';
    isSpectatorMode = false;
    
    console.log('Returned to main menu');
}

/**
 * @description Update tournament UI calls to pass tournament ID when starting games
 * Add this to your tournament UI when starting tournament games
 */
function startTournamentGame(gameId: string, playerId: string, tournamentId: string) {
    console.log(`Starting tournament game: ${gameId} for tournament: ${tournamentId}`);
    
    // Call startGame with tournament ID
    startGame(gameId, playerId, 'tournament', tournamentId);
}

function cleanupCurrentGame() {
    if (currentGame) {
        console.log('Disposing current game...');
        try {
            currentGame.dispose();
            console.log('Current game disposed successfully');
        } catch (error) {
            console.error('Error disposing current game:', error);
        } finally {
            currentGame = null;
            console.log('Current game reference cleared');
        }
    }
    
    // Remove ESC reminder
    const reminder = document.getElementById('esc-key-reminder');
    if (reminder) {
        reminder.remove();
    }
}

function setCurrentTournament(tournament: any) {
    currentTournament = tournament;
}

(window as any).setCurrentTournament = setCurrentTournament;

export { returnToMainMenu };

/**
 * @description Updated updateLoginStatus function
 */
async function updateLoginStatus() {
    try {
        const response = await fetch('/api/auth/me', { credentials: 'include' });
        
        if (!response.ok) {
            throw new Error('Not logged in');
        }
        
        const user = await response.json();
        currentUser = user;
        
        // Initialize StatusManager once (non-blocking, fire-and-forget)
        if (!statusManager) {
            statusManager = StatusManager.getInstance();
            statusManager.initializeStatusConnection('', user)
                .then(() => {
                    console.log('StatusManager initialized successfully');
                })
                .catch(error => {
                    console.error('StatusManager initialization failed (non-critical):', error);
                });
        }
        
        const currentPath = window.location.pathname;
        
        if (!user.profileComplete) {
            showNicknameSetupScreen();
            return;
        }
        
        // Handle normal navigation based on URL path
        if (currentPath === '/profile') {
            showAppScreen(user);
            showProfileScreen();
        } else if (currentPath === '/friends') {
            showAppScreen(user);
            await showFriendsScreen();
        } else if (currentPath === '/tournament') {
            showAppScreen(user);
            showSection('tournament');
        } else {
            showAppScreen(user);
        }
        
    } catch (error) {
        console.error('Not logged in or session expired');
        showLoginScreen();
    }
}

/**
 * @description Show friends screen with real-time updates
 */
async function showFriendsScreen() {
    showSection('friends', true);

    const friendsListEl = document.getElementById('friendsList');
    const receivedRequestsListEl = document.getElementById('receivedRequestsList');
    const sentRequestsListEl = document.getElementById('sentRequestsList');
    const addFriendForm = document.getElementById('addFriendForm');
    const friendNicknameInput = document.getElementById('friendNicknameInput') as HTMLInputElement;
    const addFriendStatus = document.getElementById('addFriendStatus');

    if (!friendsListEl || !receivedRequestsListEl || !sentRequestsListEl || !addFriendForm || !addFriendStatus) {
        console.error('Required DOM elements not found');
        return;
    }

    // Function to render all lists
    renderFriendLists = async () => {
        try {
            const response = await fetch('/api/user/friends/all', { credentials: 'include' });
            if (!response.ok) throw new Error('Failed to fetch friends data');

            const data = await response.json();

            // Get friend statuses if StatusManager is available
            const friendStatuses = statusManager?.getFriends() || [];

            // Render Friends List
            friendsListEl.innerHTML = data.friends.map((friend: any) => {
                const statusInfo = friendStatuses.find(f => f.userId === friend.id);
                const status = statusInfo ? statusInfo.status : 'offline';
                const statusColor = getStatusColor(status);

                return `
                    <li class="bg-white p-3 border-thick flex justify-between items-center text-black">
                        <div class="flex items-center gap-x-3">
                            <div class="w-3 h-3 rounded-full ${statusColor}" title="${status.charAt(0).toUpperCase() + status.slice(1)}"></div>
                            <img src="${friend.avatar_url || '/default-avatar.png'}" alt="${friend.nickname}" class="w-10 h-10 rounded-full">
                            <span class="text-black font-bold">${friend.nickname}</span>
                        </div>
                        <div class="flex items-center gap-x-2">
                            <button data-friend-id="${friend.id}" class="friend-item bg-pink-500 text-white px-3 py-1 text-lg border-thick hover-anarchy" data-nickname="${friend.nickname}">VIEW PROFILE & STATS</button>
                            <button data-friend-id="${friend.id}" class="remove-friend-btn bg-red-600 text-white px-3 py-1 text-lg border-thick hover-anarchy">REMOVE</button>
                        </div>
                    </li>
                `;
            }).join('') || '<li class="bg-white p-3 border-thick text-black">No friends yet.</li>';

            // Render Received Requests
            receivedRequestsListEl.innerHTML = data.receivedRequests.map((req: any) => `
                <li class="bg-white p-3 border-thick flex justify-between items-center text-black">
                    <img src="${req.avatar_url || '/default-avatar.png'}" alt="${req.nickname}" class="w-10 h-10 rounded-full mr-3">
                    <span>${req.nickname}</span>
                    <div>
                        <button data-request-id="${req.id}" class="accept-friend-btn bg-green-500 text-white px-3 py-1 text-lg hover-anarchy mr-2">ACCEPT</button>
                        <button data-request-id="${req.id}" class="reject-friend-btn bg-gray-500 text-white px-3 py-1 text-lg hover-anarchy">REJECT</button>
                    </div>
                </li>
            `).join('') || '<li class="bg-white p-3 border-thick text-black">No new friend requests.</li>';

            // Render Sent Requests
            sentRequestsListEl.innerHTML = data.sentRequests.map((req: any) => `
                <li class="bg-white p-3 border-thick flex justify-between items-center text-black">
                    <span>${req.nickname}</span>
                    <span class="text-gray-500">Pending</span>
                </li>
            `).join('') || '<li class="bg-white p-3 border-thick text-black">No sent requests.</li>';

            attachFriendActionListeners();

        } catch (error) {
            console.error('Error loading friends screen:', error);
            friendsListEl.innerHTML = '<li class="text-red-400">Failed to load data.</li>';
        }
    };

    // Function to attach event listeners to buttons
    const attachFriendActionListeners = () => {
        document.querySelectorAll('.accept-friend-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const requestId = (e.target as HTMLElement).dataset.requestId;
                await handleFriendAction('/api/user/friends/accept', 'PUT', { requestId });
            });
        });
        
        document.querySelectorAll('.reject-friend-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const requestId = (e.target as HTMLElement).dataset.requestId;
                await handleFriendAction('/api/user/friends/reject', 'PUT', { requestId });
            });
        });
        
        document.querySelectorAll('.remove-friend-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const friendId = (e.target as HTMLElement).dataset.friendId;
                await handleFriendAction(`/api/user/friends/${friendId}`, 'DELETE');
            });
        });

        document.querySelectorAll('.friend-item').forEach(item => {
            item.addEventListener('click', async (e) => {
                const nickname = (e.currentTarget as HTMLElement).dataset.nickname;
                if (nickname) {
                    await showPublicProfileScreen(nickname);
                }
            });
        });
    };

    // Generic handler for friend actions
    const handleFriendAction = async (url: string, method: string, body?: object) => {
        try {
            const headers: HeadersInit = {};
            if (body) {
                headers['Content-Type'] = 'application/json';
            }
            const response = await fetch(url, {
                method,
                headers,
                body: body ? JSON.stringify(body) : undefined,
                credentials: 'include'
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Action failed');

            await renderFriendLists();

        } catch (error) {
            console.error(`Failed to ${method} ${url}:`, error);
            alert(`Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
        }
    };

    // Handler for submitting the "add friend" form
    addFriendForm.onsubmit = async (e) => {
        e.preventDefault();
        const friendNickname = friendNicknameInput.value.trim();
        if (!friendNickname) return;

        addFriendStatus.textContent = 'Sending...';
        try {
            const response = await fetch('/api/user/friends/request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ friendNickname }),
                credentials: 'include'
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Failed to send request');
            }
            addFriendStatus.textContent = 'Friend request sent!';
            friendNicknameInput.value = '';
            await renderFriendLists();
        } catch (error) {
            addFriendStatus.textContent = `Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`;
        }
    };

    if (statusManager) {
        statusManager.onFriendUpdate(renderFriendLists);
    }

    if (friendsRefreshInterval) {
        clearInterval(friendsRefreshInterval);
        friendsRefreshInterval = null;
    }
    
    // Initial render
    await renderFriendLists();
}

/**
 * @description Restore tournament state using existing APIs
 * @param user - Current user object
 * @returns Promise<boolean> - true if tournament state was restored, false otherwise
 */
async function checkAndRestoreTournamentState(user: any): Promise<boolean> {
    try {
        console.log('Checking for existing tournament state...');
        
        // Get all active tournaments (existing endpoint)
        const tournamentResponse = await fetch('/api/tournament/active', {
            credentials: 'include'
        });
        
        if (!tournamentResponse.ok) {
            console.log('Failed to fetch active tournaments');
            return false;
        }
        
        const tournamentData = await tournamentResponse.json();
        const activeTournaments = tournamentData.tournaments || [];
        
        if (activeTournaments.length === 0) {
            console.log('No active tournaments found');
            return false;
        }
        
        // Find tournament where current user is a participant
        const userTournament = activeTournaments.find((tournament: any) => {
            return tournament.players && tournament.players.some((player: any) => 
                player.id === user.id?.toString() || player.id === user.id
            );
        });
        
        if (!userTournament) {
            console.log('User not participating in any active tournament');
            return false;
        }
        
        console.log('Found user tournament:', userTournament);
        
        // Set up UI widgets first
        const widgetAvatar = document.getElementById('widgetAvatar') as HTMLImageElement;
        const widgetNickname = document.getElementById('widgetNickname') as HTMLSpanElement;
        if (widgetAvatar) widgetAvatar.src = user.avatarUrl || '/default-avatar.png';
        if (widgetNickname) widgetNickname.textContent = user.nickname || user.name;
        
        // Initialize tournament UI
        if (tournamentUI) {
            tournamentUI.cleanup();
        }
        tournamentUI = new TournamentUI('tournamentSection');
        
        if (currentUser && tournamentUI) {
            tournamentUI.setCurrentUser(currentUser);
        }
        
        // Set current tournament for later reference
        currentTournament = userTournament;
        
        // Show tournament section
        showSection('tournament', false);
        
        // Handle different tournament states
        if (userTournament.status === 'active') {
            // Check if user has an active game in this tournament
            const myMatch = findMyCurrentMatchFromTournament(userTournament, user.id);
            
            if (myMatch && myMatch.gameId && !isGameCurrentlyActive(myMatch.gameId)) {
                console.log('[Restore] Joining active tournament game:', myMatch.gameId);
                
                // Start the game directly
                startGame(myMatch.gameId, user.id.toString(), 'tournament');
                return true;
            } else {
                // Show tournament bracket view
                await tournamentUI.openTournament(userTournament.id);
                return true;
            }
        } else if (userTournament.status === 'waiting') {
            // Show tournament lobby
            await tournamentUI.openTournament(userTournament.id);
            return true;
        } else {
            // Default case - show tournament view
            await tournamentUI.openTournament(userTournament.id);
            return true;
        }
        
    } catch (error) {
        console.error('Error restoring tournament state:', error);
        return false;
    }
}

/**
 * @description Check if a game is currently active/running
 * @param gameId - Game ID to check
 * @returns boolean - true if game is active, false otherwise
 */
function isGameCurrentlyActive(gameId: string): boolean {
    // Check if we have an active game with this ID
    return currentGame !== null && 
           currentGameId === gameId && 
           currentSection === 'game';
}

/**
 * @description Find user's current match from tournament data
 * @param tournament - Tournament object from API
 * @param userId - User ID to find match for
 * @returns Match object if found, null otherwise
 */
function findMyCurrentMatchFromTournament(tournament: any, userId: string): any {
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


(window as any).viewProfile = viewProfile;
// (window as any).inviteToGame = inviteToGame;

function updateFriendsDisplay(friends: any[]): void {
    console.log('Updating friends display with data:', friends); 
    const friendsList = document.getElementById('friendsList');
    if (!friendsList) return;

    // Fetch the current friends list from the API to get avatar URLs
    fetch('/api/user/friends/all', { credentials: 'include' })
        .then(response => response.json())
        .then(data => {
            friendsList.innerHTML = data.friends.map((friend: any) => {
                const statusInfo = friends.find(f => f.userId === friend.id);
                const status = statusInfo ? statusInfo.status : 'offline';
                const statusColor = getStatusColor(status);

                return `
                    <li class="bg-white p-3 border-thick flex justify-between items-center text-black">
                        <div class="flex items-center gap-x-3">
                            <div class="w-3 h-3 rounded-full ${statusColor}" title="${status.charAt(0).toUpperCase() + status.slice(1)}"></div>
                            <img src="${friend.avatar_url || '/default-avatar.png'}" alt="${friend.nickname}" class="w-10 h-10 rounded-full">
                            <span class="text-black font-bold">${friend.nickname}</span>
                        </div>
                        <div class="flex items-center gap-x-2">
                            <button data-friend-id="${friend.id}" class="friend-item bg-pink-500 text-white px-3 py-1 text-lg border-thick hover-anarchy" data-nickname="${friend.nickname}">VIEW PROFILE & STATS</button>
                            <button data-friend-id="${friend.id}" class="remove-friend-btn bg-red-600 text-white px-3 py-1 text-lg border-thick hover-anarchy">REMOVE</button>
                        </div>
                    </li>
                `;
            }).join('') || '<li class="bg-white p-3 border-thick text-black">No friends yet.</li>';
            
            // Re-attach event listeners after updating HTML
            document.querySelectorAll('.friend-item').forEach(item => {
                item.addEventListener('click', async (e) => {
                    const nickname = (e.currentTarget as HTMLElement).dataset.nickname;
                    if (nickname) {
                        await showPublicProfileScreen(nickname);
                    }
                });
            });
        })
        .catch(error => console.error('Error updating friends display:', error));
}

function getStatusColor(status: string): string {
    switch (status) {
        case 'online': return 'bg-green-500';
        case 'in_game': return 'bg-yellow-500';
        case 'away': return 'bg-orange-500';
        case 'offline': return 'bg-gray-500';
        default: return 'bg-gray-500';
    }
}

function getStatusText(status: string): string {
    switch (status) {
        case 'online': return 'Online';
        case 'in_game': return 'In Game';
        case 'away': return 'Away';
        case 'offline': return 'Offline';
        default: return 'Unknown';
    }
}

async function viewProfile(userId: number): Promise<void> {
    try {
		if (!statsManager) return;

        const stats = await statsManager.getPublicStats(userId);
        if (stats) {
            showUserStatsModal(stats);
        }
    } catch (error) {
        console.error('Error viewing profile:', error);
    }
}

function showUserStatsModal(stats: UserStats): void {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white p-6 border-thick shadow-sharp max-w-md w-full mx-4">
            <h2 class="text-2xl font-bold mb-4">${stats.nickname}'s Stats</h2>
            <div class="space-y-2">
                <div class="flex justify-between">
                    <span>Rank:</span>
                    <span class="font-bold">${stats.rank} (${stats.rankPoints} RP)</span>
                </div>
                <div class="flex justify-between">
                    <span>Total Games:</span>
                    <span>${stats.totalGames}</span>
                </div>
                <div class="flex justify-between">
                    <span>Wins/Losses:</span>
                    <span>${stats.wins}/${stats.losses}</span>
                </div>
                <div class="flex justify-between">
                    <span>Win Rate:</span>
                    <span>${stats.winRate}%</span>
                </div>
                <div class="flex justify-between">
                    <span>Current Streak:</span>
                    <span>${stats.currentStreak}</span>
                </div>
                <div class="flex justify-between">
                    <span>Max Streak:</span>
                    <span>${stats.maxStreak}</span>
                </div>
            </div>
            
            <h3 class="text-lg font-bold mt-4 mb-2">Recent Games</h3>
            <div class="space-y-1 max-h-32 overflow-y-auto">
                ${stats.recentGames.map(game => `
                    <div class="text-sm flex justify-between ${game.result === 'win' ? 'text-green-600' : 'text-red-600'}">
                        <span>vs ${game.opponentNickname}</span>
                        <span>${game.result.toUpperCase()}</span>
                    </div>
                `).join('')}
            </div>
            
            <button onclick="this.parentElement.parentElement.remove()" 
                    class="w-full mt-4 bg-gray-500 text-white py-2 border-thick hover-anarchy">
                Close
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);

	modal.querySelector('.close-modal-btn')?.addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

async function cancelMatchmaking() {
	console.log('Cancelling matchmaking...');

	if (!currentUser || !currentUser.id) {
		console.error('Current user is not logged in. Cannot cancel matchmaking.');
		returnToMainMenu();
		return;
	}

	try {
		const response = await fetch('/api/games/cancel', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ playerId: currentUser.id }),
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error('Failed to cancel matchmaking');
		}

		const data = await response.json();
		console.log('Matchmaking cancelled:', data);
	} catch (error) {
		console.error('Error cancelling matchmaking:', error);
		alert('Failed to cancel matchmaking. Please try again later.');
	} finally {
		if (matchmakingWs) {
			try {
				matchmakingWs.close();
				console.log('Matchmaking WebSocket closed');
			} catch (error) {
				console.error('Error closing matchmaking WebSocket:', error);
			} finally {
				matchmakingWs = null;
			}
		}
		returnToMainMenu();
	}
}


/**
 * @description Show nickname setup screen if user profile is not complete
 */
function showNicknameSetupScreen() {
	console.log('Showing nickname setup screen');

	if (window.location.pathname !== '/nickname-setup') {
        history.replaceState({ sectionId: 'nicknameSetup' }, 'PONG - Set Up Nickname', '/nickname-setup');
    }
	
	showSection('nicknameSetup');
	const nicknameForm = document.getElementById('nicknameForm');
	if (!nicknameForm) {
		console.error('Nickname form not found');
		return;
	}
	
	const newForm = nicknameForm.cloneNode(true) as HTMLFormElement;
	nicknameForm.parentNode?.replaceChild(newForm, nicknameForm);
	
	newForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		const nicknameInput = document.getElementById('nicknameInput') as HTMLInputElement;
		const nickname = nicknameInput.value.trim();

		if (!nickname) {
			alert('Nickname cannot be empty');
			return;
		}

		try {
			const response = await fetch('/api/user/setup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ nickname }),
				credentials: 'include'
			});

			console.log(`response: ${response.status} ${response.statusText}`);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Failed to set nickname');
			}

			const data = await response.json();
			console.log('Nickname set successfully:', data);

			const userResponse = await fetch('/api/auth/me', { credentials: 'include' });
			if (userResponse.ok) {
				const userData = await userResponse.json();
				console.log('Updated user data after nickname setup:', userData);
				console.log('Profile complete status:', userData.profileComplete);
				
				currentUser = userData;
				
				if (userData.profileComplete) {
					showAppScreen(userData);
				} else {
					alert('Profile setup failed. Please try again.');
				}
			} else {
				throw new Error('Failed to fetch updated user data');
			}
			
		} catch (error) {
			console.error('Error setting nickname:', error);
			alert(`Failed to set nickname: ${error instanceof Error ? error.message : 'Unknown error'}`);
		}
	});
}

/**
 * @description Invite a user to a game to Tournament
 */
// function inviteToGame(userId: number): void {
// 	console.log(`Inviting user ${userId} to game...`);
// 	// call invite API or open a modal to confirm invitation
// }

window.addEventListener('beforeunload', () => {
	// stopTournamentPolling();
	cleanupTournamentUI();
	cleanupCurrentGame();
	
	if (matchmakingWs) {
		try {
			matchmakingWs.close();
		} catch (error) {
			console.error('Error closing matchmaking WebSocket on unload:', error);
		}
	}

	if (statusManager) {
		statusManager.disconnect();
	}
});

console.log('Frontend main.ts loaded successfully')


async function loadActiveTournaments(): Promise<any[]> {
    try {
        console.log('Loading active tournaments...');
        const response = await fetch('/api/tournament/active', {
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Active tournaments loaded:', data.tournaments?.length || 0);
            activeTournamentsData = data.tournaments || [];
            return activeTournamentsData;
        } else {
            console.error('Failed to load active tournaments:', response.status);
            activeTournamentsData = [];
            return [];
        }
    } catch (error) {
        console.error('Error loading active tournaments:', error);
        activeTournamentsData = [];
        return [];
    }
}

function renderActiveTournamentsList(containerId: string, showCreateButton: boolean = false): void {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Tournament container ${containerId} not found`);
        return;
    }

    if (activeTournamentsData.length === 0) {
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
                if (tournamentUI) {
                    tournamentUI.showCreateTournament();
                }
            });
        }
        return;
    }

    // Rest of the rendering logic remains the same...
    container.innerHTML = activeTournamentsData.map(tournament => {
        const isParticipant = currentUser && tournament.players && 
                              tournament.players.some((p: any) => p.id === currentUser.id?.toString());

        let buttonText = '';
        let buttonClass = '';
        let buttonAction = '';

        if (tournament.status === 'waiting') {
            if (isParticipant) {
                buttonText = 'OPEN';
                buttonClass = 'bg-blue-500';
                buttonAction = `openTournamentFromHome('${tournament.id}', 'participant')`;
            } else if ((tournament.players?.length || 0) >= (tournament.maxPlayers || 8)) {
                buttonText = 'FULL';
                buttonClass = 'bg-gray-500';
                buttonAction = '';
            } else {
                buttonText = 'JOIN';
                buttonClass = 'bg-green-500';
                buttonAction = `openTournamentFromHome('${tournament.id}', 'join')`;
            }
        } else if (tournament.status === 'active' || tournament.status === 'finished') {
            if (isParticipant) {
                buttonText = 'OPEN';
                buttonClass = 'bg-blue-500';
                buttonAction = `openTournamentFromHome('${tournament.id}', 'participant')`;
            } else {
                buttonText = 'VIEW';
                buttonClass = 'bg-purple-500';
                buttonAction = `openTournamentFromHome('${tournament.id}', 'spectator')`;
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
                        ${buttonAction ? `
                            <button onclick="${buttonAction}" 
                                    class="${buttonClass} text-white px-4 py-2 border-thick hover-anarchy font-teko uppercase"
                                    ${buttonText === 'FULL' ? 'disabled' : ''}>
                                ${buttonText}
                            </button>
                        ` : `
                            <button class="${buttonClass} text-white px-4 py-2 border-thick font-teko uppercase" disabled>
                                ${buttonText}
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

async function loadHomeTournaments(): Promise<void> {
    await loadActiveTournaments();
    renderActiveTournamentsList('homeTournamentsList', false);
}

function joinExistingTournament(tournamentId: string): void {
    if (!tournamentUI) {
        tournamentUI = new TournamentUI('tournamentSection');
    }

    if (currentUser) {
        tournamentUI.setCurrentUser(currentUser);
    }

    tournamentUI.joinTournament(tournamentId);
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

        if (!tournamentUI) {
            tournamentUI = new TournamentUI('tournamentSection');
        }

        if (currentUser) {
            tournamentUI.setCurrentUser(currentUser);
        }

        await tournamentUI.joinTournament(tournamentId);
        showSection('tournament');
        loadHomeTournaments();
    } catch (error) {
        console.error('Error joining tournament:', error);
        alert('An error occurred while trying to join the tournament.');
    }
};

function connectActiveTournamentsSocket() {
    if (activeTournamentsWs) {
        activeTournamentsWs.onclose = null; 
        activeTournamentsWs.close();
    }

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/api/tournament/ws/active`;

    activeTournamentsWs = new WebSocket(wsUrl);

    activeTournamentsWs.onopen = () => {
        console.log('✅ [Global] Connected to active tournaments feed.');
    };

    activeTournamentsWs.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            if (data.type === 'activeTournaments') {
                console.log('[Global] Active tournaments list update received:', data.payload);

                activeTournamentsData = data.payload || [];

                if (currentSection === 'hero') {
                    const heroContainer = document.getElementById('homeTournamentsList');
                    if (heroContainer) {
                        renderActiveTournamentsList('homeTournamentsList', false);
                    }
                } else if (currentSection === 'tournament') {
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

    activeTournamentsWs.onclose = () => {
        console.log('[Global] Disconnected from active tournaments feed. Reconnecting in 5 seconds...');
        setTimeout(() => {
            if (currentUser) { 
                connectActiveTournamentsSocket();
            }
        }, 5000);
    };

    activeTournamentsWs.onerror = (error) => {
        console.error('[Global] Active tournaments WebSocket error:', error);
    };
}

// Tournament polling system
// function startTournamentPolling() {
//     if (tournamentRefreshInterval) {
//         clearInterval(tournamentRefreshInterval);
//     }
    
//     tournamentRefreshInterval = setInterval(async () => {
//         if (currentSection === 'hero' || currentSection === 'tournament') {
//             console.log('Auto-refreshing tournaments...');
//             await loadActiveTournaments();
            
//             // Update hero section display
//             if (currentSection === 'hero') {
//                 renderActiveTournamentsList('homeTournamentsList', false);
//             }
            
//             // Update tournament section display
//             if (currentSection === 'tournament') {
//                 const homeContainer = document.getElementById('tournaments-container');
//                 if (homeContainer) {
//                     // Tournament home is showing
//                     renderActiveTournamentsList('tournaments-container', true);
//                 } else if (tournamentUI) {
//                     // Force refresh tournament UI if it exists
//                     const currentTournamentId = tournamentUI.getCurrentTournamentId();
//                     if (currentTournamentId) {
//                         // Refresh current tournament view
//                         tournamentUI.refreshCurrentTournament();
//                     }
//                 }
//             }
//         }
//     }, 10000);
    
//     console.log('Tournament polling started');
// }

// function stopTournamentPolling() {
//     if (tournamentRefreshInterval) {
//         clearInterval(tournamentRefreshInterval);
//         tournamentRefreshInterval = null;
//         console.log('Tournament polling stopped');
//     }
// }

(window as any).joinExistingTournament = async function(tournamentId: string) {
    if (tournamentUI) {
        await tournamentUI.joinTournament(tournamentId);
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
        if (tournamentUI) {
            tournamentUI.cleanup();
        }
        tournamentUI = new TournamentUI('tournamentSection');
        
        if (currentUser) {
            tournamentUI.setCurrentUser(currentUser);
        }
        
        showSection('tournament');

        switch (mode) {
            case 'join':
                await tournamentUI.joinTournament(tournamentId);
                break;
            
            case 'participant':
                await tournamentUI.openTournament(tournamentId);
                break;
            
            case 'spectator':
                await tournamentUI.viewTournamentAsSpectator(tournamentId);
                break;
            
            default:
                await tournamentUI.openTournament(tournamentId);
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

(window as any).startGame = startGame;

(window as any).showMyTournaments = showMyTournaments;
(window as any).showTournamentHistory = showTournamentHistory;

(window as any).loadActiveTournaments = loadActiveTournaments;
(window as any).renderActiveTournamentsList = renderActiveTournamentsList;

(window as any).startTournamentGame = startTournamentGame;

export { showAuthTab, initializeAuthTabs, setupAuthEventListeners, clearAuthMessages };