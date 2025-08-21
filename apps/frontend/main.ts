import { PongGame3D } from './src/game/render'
import { initializeGame } from './src/game/init'
import { redirectGoogleLogin } from './auth/login/google'
import { AuthService } from './auth/services/auth-service';
import { PasswordChangeForm } from './components/password-change-form';
import { StatusManager } from './src/status/status-manager';
import { UserStats } from './src/status/status-manager';
import { StatsManager } from './src/stats/stats-manager';

let currentGame: PongGame3D | null = null;
let currentGameId: string | null = null;
let currentUser: any | null = null;
let matchmakingWs: WebSocket | null = null;
let statusManager: StatusManager;
let statsManager: StatsManager;

document.addEventListener('DOMContentLoaded', () => {
	setupLocalAuthHandlers();
	updateLoginStatus();

    console.log('Start beautiful PONG game!');
	setupEventListeners();
})

/**
 * @description checking auth status
 */
async function checkAuthStatus() {
	console.log('Checking authentication status...');
    const authStatus = await AuthService.checkAuthStatus();
	console.log('Auth status:', authStatus);

    if (authStatus.isAuthenticated && authStatus.user) {
        console.log('User is authenticated:', authStatus.user);
        if (!authStatus.profileComplete) {
            console.log('Profile setup required');
            showSection('nicknameSetup');  // same flow as google-login ==> have to check it (always true)
        } else {
            showAppScreen(authStatus.user);
        }
    } else {
        console.log('User not authenticated, showing login');
        showLoginScreen();
    }
}

/**
 * @description handler setting up local authentication handlers
 */
function setupLocalAuthHandlers() {
	(window as any).showAuthTab = showAuthTab;

	const loginForm = document.getElementById('loginForm');
	if (loginForm) {
		loginForm.addEventListener('submit', handleLocalLogin);
	}

	const registerForm = document.getElementById('registerForm');
	if (registerForm) {
		registerForm.addEventListener('submit', handleLocalRegister);
	}
}

/**
 * @description Show the specified authentication tab
 * @param tabName - The name of the tab to show ('login' or 'register')
 */
function showAuthTab(tabName: 'login' | 'register') {
	const loginForm = document.getElementById('login-form');
	const registerForm = document.getElementById('register-form');
	const tabButtons = document.querySelectorAll('.tab-button');

	tabButtons.forEach(btn => btn.classList.remove('active'));

	if (tabName === 'login') {
		loginForm?.classList.remove('hidden');
		registerForm?.classList.add('hidden');
		tabButtons[0]?.classList.add('active');
	} else {
		loginForm?.classList.add('hidden');
		registerForm?.classList.remove('hidden');
		tabButtons[1]?.classList.add('active');
	}

	clearAuthMessages();
}

/**
 * @description initializes auth messages
 */
function clearAuthMessages() {
	const errorElements = document.querySelectorAll('#loginError, #registerError');
	const successElements = document.querySelectorAll('#loginSuccess, #registerSuccess');

	[...errorElements, ...successElements].forEach(el => {
		el.classList.add('hidden');
		el.textContent = '';
	});
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
		}, 2000);
		try {
			const userResponse = await fetch('/api/auth/me', { credentials: 'include' });
			if (userResponse.ok) {
				const userData = await userResponse.json();
				console.log('User data after register:', userData);
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
			showAuthError('registerError', 'Failed to load user profile');
		}
	} else {
		showAuthError('registerError', result.error || 'Registration failed.');
	}
}

function setupEventListeners() {
	const quickPlayButton = document.getElementById('quickPlayBtn')
	if (quickPlayButton) {
		quickPlayButton.addEventListener('click', () => {
			console.log("Quickly play!")
			handleGameStart('quick')
		});
	}

	const pvpPlayButton = document.getElementById('pvpPlayBtn')
	if (pvpPlayButton) {
		pvpPlayButton.addEventListener('click', () => {
			console.log("PVP play!")
			handleGameStart('pvp')
		});
	}

	// AI play have to think implement
	const aiPlayButton = document.getElementById('aiPlayBtn')
	if (aiPlayButton) {
		aiPlayButton.addEventListener('click', () => {
			console.log("AI play!")
			handleGameStart('ai')
		});
	}

	const tournamentPlayButton = document.getElementById('tournamentPlayBtn');
	if (tournamentPlayButton) {
		tournamentPlayButton.addEventListener('click', () => {
			console.log("Tournament play!");
			handleGameStart('tournament');
		});
	}

	const logoutButton = document.getElementById('logoutBtn')
	if (logoutButton) {
		logoutButton.addEventListener('click', () => {
			window.location.href = '/api/auth/logout'
			console.log('Logout action needed')
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

    document.getElementById('dropdownFriendsBtn')?.addEventListener('click', () => {
        showFriendsScreen();
        profileDropdown?.classList.add('hidden');
    });

    document.getElementById('dropdownLogoutBtn')?.addEventListener('click', () => {
        profileDropdown?.classList.add('hidden');
        window.location.href = '/api/auth/logout';
    });

	document.getElementById('profileReturnBtn')?.addEventListener('click', returnToMainMenu);
	document.getElementById('friendsReturnBtn')?.addEventListener('click', returnToMainMenu);

	document.getElementById('publicProfileReturnBtn')?.addEventListener('click', showFriendsScreen);
}

/**
 * @param sectionId - The ID of the section to show
 * @description Show a specific section by ID and hide others
 */
function showSection(sectionId: 'hero' | 'game' | 'profile' | 'login' | 'nicknameSetup' | 'friends' | 'publicProfile' | 'waiting') {
    const sections = ['heroSection', 'gameSection', 'profileSection', 'loginSection', 'appSection', 'nicknameSetupSection', 'friendsSection', 'publicProfileSection', 'waitingSection'];
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
}

/**
 * showing login screen
 */
function showLoginScreen(){
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
function showAppScreen(user: any) {
	currentUser = user;
	showSection('hero');

	const widgetAvatar = document.getElementById('widgetAvatar') as HTMLImageElement;
	const widgetNickname = document.getElementById('widgetNickname') as HTMLSpanElement;
	if (widgetAvatar) widgetAvatar.src = user.avatarUrl || '/default-avatar.png';
	if (widgetNickname) widgetNickname.textContent = user.nickname || user.name;
}

/**
 * @description Show friends screen
 */
async function showFriendsScreen() {
    showSection('friends');

    const friendsListEl = document.getElementById('friendsList');
    const receivedRequestsListEl = document.getElementById('receivedRequestsList');
    const sentRequestsListEl = document.getElementById('sentRequestsList');
    const addFriendForm = document.getElementById('addFriendForm');
    const friendNicknameInput = document.getElementById('friendNicknameInput') as HTMLInputElement;
    const addFriendStatus = document.getElementById('addFriendStatus');

    if (!friendsListEl || !receivedRequestsListEl || !sentRequestsListEl || !addFriendForm || !addFriendStatus) return;

    // Function to render all lists
    const renderFriendLists = async () => {
        try {
            const response = await fetch('/api/user/friends/all', { credentials: 'include' });
            if (!response.ok) throw new Error('Failed to fetch friends data');

            const data = await response.json();

			const friendStatuses = statusManager.getFriends();
			console.log('Friend statuses:', friendStatuses);

            // Render Friends List
            friendsListEl.innerHTML = data.friends.map((friend: any) => {
            // Find matching status from friendStatuses
            const statusInfo = friendStatuses.find(f => f.userId === friend.id);
            const status = statusInfo ? statusInfo.status : 'offline'; // Default to offline if not found
            const statusColor = getStatusColor(status); // Reuse existing getStatusColor function

            return `
					<li class="bg-white p-3 border-thick flex justify-between items-center text-black">
						<div class="flex items-center gap-x-3">
							<div class="w-3 h-3 rounded-full ${statusColor}" title="${status.charAt(0).toUpperCase() + status.slice(1)}"></div>
							<img src="${friend.avatar_url || '/default-avatar.png'}" alt="${friend.nickname}" class="w-10 h-10 rounded-full">
							<span class="text-black font-bold">${friend.nickname}</span>
						</div>
						<div class="flex items-center gap-x-2">
							<button data-friend-id="${friend.id}" class="friend-item bg-pink-500 text-white px-3 py-1 text-lg border-thick hover-anarchy" data-nickname="${friend.nickname}">VIEW PROFILE</button>
							<button data-friend-id="${friend.id}" class="remove-friend-btn bg-red-600 text-white px-3 py-1 text-lg border-thick hover-anarchy">REMOVE</button>
							<button onclick="viewProfile(${friend.id})" class="bg-blue-500 text-white px-3 py-1 text-lg border-thick hover-anarchy">
								View Stats
							</button>
						</div>
					</li>
				`;
			}).join('') || '<li class="bg-white p-3 border-thick text-black">No friends yet.</li>';
            // Render Received Requests
            receivedRequestsListEl.innerHTML = data.receivedRequests.map((req: any) => `
                <li class="bg-white p-3 border-thick flex justify-between items-center text-black">
					<img src="${req.avatarUrl || '/default-avatar.png'}" alt="${req.nickname}" class="w-10 h-10 rounded-full mr-3">
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

			const headers: HeadersInit = { };
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

            // Re-render lists to show changes
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
            await renderFriendLists(); // Refresh lists
        } catch (error) {
            addFriendStatus.textContent = `Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`;
        }
    };

    // Initial render
    await renderFriendLists();
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
            <div class="flex items-center gap-x-4 mb-4">
                <img src="${data.user.avatar_url || '/default-avatar.png'}" class="w-16 h-16 rounded-full border-thick">
                <h2 class="text-4xl uppercase">${data.user.nickname}</h2>
            </div>
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
			<p class="text-red-500">Failed to load profile. Please try it later</p>`;
		console.error('Error loading public profile:', error);
	}
}

/**
 * @description Show the profile screen
 */
async function showProfileScreen() {
	showSection('profile');

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
                                ${game.result}
                                <span class="ml-2 text-black font-mono">(${game.player1_score} - ${game.player2_score})</span>
                            </div>
                        </li>
                    `).join('') || '<li class="bg-white p-3 border-thick shadow-sharp text-black">No games played yet.</li>'}
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
				requestBody = {
					player1Id: currentUser.id,
					player1Nickname: currentUser.nickname,
					gameMode: 'TOURNAMENT'
				};
				break;
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

function showGameScreen() {
	showSection('game');
	console.log('Game screen is shown');
}

function startGame(gameId: string, playerId: string, gameMode: string) {
	console.log('Starting initialize game...')

	if (currentGame) {
		currentGame.dispose()
	}

	currentGame = initializeGame('gameContainer', gameId, playerId, gameMode, currentUser.nickname);

	if (currentGame) {
		console.log('Game initialized successfully')
		const canvas = document.getElementById('game-canvas');
		if (canvas) canvas.focus();
		updateConnectionStatus('connected')
	} else {
		console.error('Failed to initialize game')
		updateConnectionStatus('disconnected')
	}
	console.log(`Start game with game mode: ${gameMode}`);
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

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && currentGame) {
		if (confirm('Are you sure you want to exit the game? You are going to forfeit the current game.')) {
			cancelCurrentGame();
		}
		// console.log('ESC pressed, returning to menu');
		// returnToMainMenu();
	}

	if (event.key === 'F11') {
		event.preventDefault();
		toggleFullscreen();
	}
});

async function cancelCurrentGame() {
	if (!currentGame || !currentUser) return;

	try {
		const response = await fetch(`/api/games/forfeit`, {
			method: 'POST',
			headers : { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				gameId: currentGame.state?.gameId,
				playerId: currentUser.id
			}),
			credentials: 'include'
		});

		if (response.ok) {
			const result = await response.json();
			returnToMainMenu();
		}
	} catch (error) {
		console.error('Error canceling current game:', error);
		alert('Failed to cancel the game. Please try again later.');
	}

	cleanupCurrentGame();
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
	console.log('Returning to main menu...');
	
	showSection('hero');

	const gameOverModal = document.getElementById('gameOverModal');
	if (gameOverModal) {
		gameOverModal.classList.add('hidden');
	}

	cleanupCurrentGame();

	console.log('Returned to main menu');
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
	} else {
		console.log('No game to dispose');
	}
}

export { returnToMainMenu };

/**
 * Check login status and update UI accordingly
 * And handle user login
 */
async function updateLoginStatus() {
	try {
		const response = await fetch('/api/auth/me', { credentials: 'include' });
		console.log('Checking login status...');
		if (!response.ok) {
			throw new Error('Not logged in');
		}
		console.log('User is logged in');
		const user = await response.json();
		console.log('User data:', user);

		currentUser = user;

		if (!statusManager) {
            statusManager = StatusManager.getInstance();
            await statusManager.initializeStatusConnection('', user);
            
            statusManager.onStatusUpdate((friends) => {
                updateFriendsDisplay(friends);
            });
        }
        
        if (!statsManager) {
            statsManager = StatsManager.getInstance();
        }

		await statusManager.initializeStatusConnection('', user);

		statusManager.onStatusUpdate((friends) => {
			updateFriendsDisplay(friends);
		});
		
		console.log('Profile complete status from /api/auth/me:', user.profileComplete);
		
		if (!user.profileComplete) {
			showNicknameSetupScreen();
		} else {
			showAppScreen(user);
		}
	} catch (error) {
		console.error('Not logged in or session expired');
		showLoginScreen();
	}
}

(window as any).viewProfile = viewProfile;
(window as any).inviteToGame = inviteToGame;

function updateFriendsDisplay(friends: any[]): void {
	console.log('Updating friends display with data:', friends); 
    const friendsList = document.getElementById('friendsList');
    if (!friendsList) return;

   friendsList.innerHTML = friends.map(friend => {
        const status = friend.status || 'offline';
        const statusColor = getStatusColor(status);

        return `
            <li class="bg-white p-3 border-thick flex justify-between items-center text-black">
                <div class="flex items-center gap-x-3">
                    <div class="w-3 h-3 rounded-full ${statusColor}" title="${status.charAt(0).toUpperCase() + status.slice(1)}"></div>
                    <img src="${friend.avatar_url || '/default-avatar.png'}" alt="${friend.nickname}" class="w-10 h-10 rounded-full">
                    <span class="text-black font-bold">${friend.nickname}</span>
                </div>
                <div class="flex items-center gap-x-2">
                    <button data-friend-id="${friend.id}" class="friend-item bg-pink-500 text-white px-3 py-1 text-lg border-thick hover-anarchy" data-nickname="${friend.nickname}">VIEW PROFILE</button>
                    <button data-friend-id="${friend.id}" class="remove-friend-btn bg-red-600 text-white px-3 py-1 text-lg border-thick hover-anarchy">REMOVE</button>
                    <button onclick="viewProfile(${friend.userId})" class="bg-blue-500 text-white px-3 py-1 text-lg border-thick hover-anarchy">
                        View Stats
                    </button>
                </div>
            </li>
        `;
    }).join('') || '<li class="bg-white p-3 border-thick text-black">No friends yet.</li>';


	friendsList.querySelectorAll('.view-profile-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const userId = parseInt((e.target as HTMLElement).dataset.userId!);
            viewProfile(userId);
        });
    });

	friendsList.querySelectorAll('.friend-item').forEach(item => {
        item.addEventListener('click', async (e) => {
            const nickname = (e.currentTarget as HTMLElement).dataset.nickname;
            if (nickname) {
                await showPublicProfileScreen(nickname);
            }
        });
    });

    // friendsList.querySelectorAll('.invite-game-btn').forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //         const userId = parseInt((e.target as HTMLElement).dataset.userId!);
    //         inviteToGame(userId);
    //     });
    // });
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
		returnToMainMenu();
	}
}

/**
 * @description Show nickname setup screen if user profile is not complete
 */
function showNicknameSetupScreen() {
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
function inviteToGame(userId: number): void {
	console.log(`Inviting user ${userId} to game...`);
	// call invite API or open a modal to confirm invitation
}

window.addEventListener('beforeunload', () => {
	console.log('Page unloading, cleaning up game');
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
