import { PongGame3D } from './src/game/render'
import { initializeGame } from './src/game/init'
import { redirectGoogleLogin } from './auth/login/google'

let currentGame: PongGame3D | null = null;
let currentGameId: string | null = null;
let currentUser: any | null = null;

document.addEventListener('DOMContentLoaded', () => {
	updateLoginStatus();

    console.log('Start beautiful PONG game!');
	setupEventListeners();
})


function setupEventListeners() {
	const quickPlayButton = document.getElementById('quickPlayBtn')
	if (quickPlayButton) {
		quickPlayButton.addEventListener('click', () => {
			console.log("Quickly play!")
			handleGameStart('quick')
		})
	}

	const tournamentButton = document.getElementById('tournamentBtn')
	if (tournamentButton) {
		tournamentButton.addEventListener('click', () => {
			console.log("Tournament play!")
			handleGameStart('tournament')
		})
	}

	// AI play have to think implement
	const aiPlayButton = document.getElementById('aiPlayBtn')
	if (aiPlayButton) {
		aiPlayButton.addEventListener('click', () => {
			console.log("AI play!")
			handleGameStart('ai')
		})
	}

	const profileButton = document.getElementById('profileBtn');
    if (profileButton) {
        profileButton.addEventListener('click', showProfileScreen);
    }

	const returnToMenuButton = document.getElementById('profileReturnBtn')
	if (returnToMenuButton) {
		returnToMenuButton.addEventListener('click', returnToMainMenu);
	}

	const logoutButton = document.getElementById('logoutBtn')
	if (logoutButton) {
		logoutButton.addEventListener('click', () => {
			window.location.href = '/api/auth/logout'
			console.log('Logout action needed')
		})
	}

}

/**
 * @param sectionId - The ID of the section to show
 * @description Show a specific section by ID and hide others
 */
function showSection(sectionId: 'hero' | 'game' | 'profile' | 'login' | 'nicknameSetup') {
    const sections = ['heroSection', 'gameSection', 'profileSection', 'loginSection', 'appSection', 'nicknameSetupSection'];
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
            targetSection.style.display = 'flex'; // flex로 보여주기
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
	// document.getElementById('loginSection')?.classList.add('hidden');
	// document.getElementById('appSection')?.classList.remove('hidden');

	// console.log('User logged in:', user);
	// 	setupEventListeners();

	// // ???
	// const logoutButton = document.getElementById('logoutBtn');
	// if (logoutButton) {
	// 	logoutButton.addEventListener('click', () => {
	// 		window.location.href = '/api/auth/logout';
	// 		console.log('Logout action needed');
	// 	});
	// }
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
        <h2 class="text-3xl font-bold text-neon-pink mb-4">${data.user.name} | ${data.user.nickname}</h2>
        <p class="text-gray-400 mb-6">${data.user.email}</p>

        <div id="avatarSection" class="flex items-center space-x-4 mb-6">
            <img id="profileAvatar" src="${data.user.avatarUrl || '/default-avatar.png'}" alt="User Avatar" class="w-24 h-24 rounded-full border-2 border-neon-cyan shadow-lg">
            <div>
                <h3 class="text-xl font-bold text-neon-cyan">Avatar</h3>
                <p class="text-gray-300">Upload a new avatar image.</p>
                <form id="avatarForm">
                    <input type="file" id="avatarUpload" accept="image/*" class="mt-2 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neon-cyan/20 file:text-neon-cyan hover:file:bg-neon-cyan/30">
                    <button type="submit" class="mt-2 bg-gradient-to-r from-neon-cyan to-neon-blue px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300">
                        Save Avatar
                    </button>
                </form>
            </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
            <div>
                <h3 class="text-xl font-semibold text-neon-cyan mb-3">Game History</h3>
                <ul class="space-y-2">
                    ${data.gameHistory.map((game: any) => `
                        <li class="bg-gray-800 p-2 rounded">
                            Game ${game.id}: ${game.player1_score} - ${game.player2_score}
                            <span class="font-bold ${game.winner_id === data.user.id ? 'text-green-400' : 'text-red-400'}">
                                ${game.winner_id === data.user.id ? 'Win' : 'Loss'}
                            </span>
                        </li>
                    `).join('') || '<li>No games played yet.</li>'}
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-semibold text-neon-cyan mb-3">Friends</h3>
                 <ul class="space-y-2">
                    ${data.friends.map((friend: any) => `
                        <li class="bg-gray-800 p-2 rounded">${friend.name}</li>
                    `).join('') || '<li>No friends yet.</li>'}
                </ul>
            </div>
        </div>
    	`;

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
					const profileAvatar = document.getElementById('avatarImage') as HTMLImageElement;
					if (profileAvatar) {
						profileAvatar.src = result.avatarUrl + '?t=' + new Date().getTime(); // Assuming the response contains the URL of the uploaded avatar
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
        await createNewGame(gameMode, currentUser.name);
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
				resolve(null);
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
async function createNewGame(gameMode: string, playerName: string) {
	try {
		console.log('Requesting new game from server...')

		// startGame(dummyResponse.gameId)
		const player2Id = gameMode === 'ai' ? 'AI' : 'Player2_tmp';
		let requestBody: any;

		// switching based on game mode
		switch (gameMode) {
			case 'quick':
				requestBody = {
					player1Id: playerName,
					player2Id: 'Player2',
					gameMode: 'LOCAL_PVP'
				};
				break;
			case 'ai':
				// TODO: SELECT AI LEVEL (INPUT OF SELECT UI)
				const selectedAiLevel = await selectingAiLevel(); // temp set

				if (!selectedAiLevel) {
					console.log('AI level selection cancelled');
					return;
				}

				requestBody = {
					player1Id: playerName,
					player2Id: 'AI',
					gameMode: 'AI',
					aiLevel: selectedAiLevel
				};
				break;
			case 'tournament':
				// TODO: After implementing login logic, use real player ID (in DB)
				requestBody = {
					player1Id: playerName,
					gameMode: 'PVP',
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
		currentGameId = data.gameId

		console.log('Game created successfully:', data)

		showGameScreen()
		startGame(data.gameId, playerName, gameMode)
	} catch (error) {
		console.error('Failed to create game:', error)
		throw error
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

	currentGame = initializeGame('gameContainer', gameId, playerId, gameMode)

	if (currentGame) {
		console.log('Game initialized successfully')
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
		console.log("ESC game")
	}

	if (event.key === 'F11') {   // toggle fullscreen function
		event.preventDefault()
		toggleFullscreen()
	}
})

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
	showSection('hero');

	const gameOverModal = document.getElementById('gameOverModal')
	if (gameOverModal) {
		gameOverModal.classList.add('hidden')
	}

	if (currentGame) {
		currentGame.dispose()
		currentGame = null
	}

	console.log('Returned to main menu')
}

/**
 * Check login status and update UI accordingly
 * And handle user login
 */
async function updateLoginStatus() {
	try {
		const response = await fetch('/api/auth/me', { credentials: 'include' });     // create /api/auth/me endpoint in backend
		console.log('Checking login status...');
		if (!response.ok) {
			throw new Error('Not logged in');
		}
		console.log('User is logged in');
		const user = await response.json();
		console.log('User data:', user);

		currentUser = user;
		if (!user.profileComplete) {
			showNicknameSetupScreen();
		}

		if (user.profileComplete) {
			showAppScreen(user);
		}
	} catch (error) {
		console.error('Not logged in or session expired2');
		showLoginScreen();
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
	nicknameForm.addEventListener('submit', async (event) => {
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
				throw new Error('Failed to set nickname');
			}

			const data = await response.json();
			console.log('Nickname set successfully:', data);

			window.location.reload();

			// updateLoginStatus();
		} catch (error) {
			console.error('Error setting nickname:', error);
			alert('Failed to set nickname. Please try again later.');
		}
	});
}

window.addEventListener('beforeunload', () => {
	if (currentGame) {
		currentGame.dispose()
		console.log("Game disposed")
	}
})

window.addEventListener('resize', () => {
	if (currentGame) {
		console.log("Resize game")
	}
})

console.log('Frontend main.ts loaded successfully')
