import { PongGame3D } from './src/game/render'
import { initializeGame } from './src/game/init'
import { redirectGoogleLogin } from './auth/login/google'

let currentGame: PongGame3D | null = null
let currentGameId: string | null = null
let playerName: string = ''

document.addEventListener('DOMContentLoaded', () => {
	updateLoginStatus();

    console.log('Start beautiful PONG game!')
	setupEventListeners()
})

function setupEventListeners() {
	// HTML의 실제 ID와 맞춤
	const quickPlayButton = document.getElementById('quickPlayBtn')  // 수정: quickPlayButton → quickPlayBtn
	if (quickPlayButton) {
		quickPlayButton.addEventListener('click', () => {
			console.log("Quickly play!")
			showPlayerSetupModal('quick')
		})
	}

	const tournamentButton = document.getElementById('tournamentBtn')  // 수정: tournamentButton → tournamentBtn
	if (tournamentButton) {
		tournamentButton.addEventListener('click', () => {
			console.log("Tournament play!")
			showPlayerSetupModal('tournament')
		})
	}

	// AI play have to think implement
	const aiPlayButton = document.getElementById('aiPlayBtn')  // 수정: aiPlayButton → aiPlayBtn
	if (aiPlayButton) {
		aiPlayButton.addEventListener('click', () => {
			console.log("AI play!")
			showPlayerSetupModal('ai')
		})
	}

	const returnToMenuButton = document.getElementById('returnToMenuBtn')
	if (returnToMenuButton) {
		returnToMenuButton.addEventListener('click', returnToMainMenu);
	}

	// login button
	const loginButton = document.getElementById('loginBtn')  // 수정: loginButton → loginBtn
	if (loginButton) {
		loginButton.addEventListener('click', handleLogin)
	}

	const playerSetupForm = document.getElementById('playerSetupForm')
	if (playerSetupForm) {
		playerSetupForm.addEventListener('submit', handlePlayerSetup)
	}

	const cancelSetup = document.getElementById('cancelSetup')
	if (cancelSetup) {
		cancelSetup.addEventListener('click', hidePlayerSetupModal)
	}
}

function showPlayerSetupModal(gameMode: 'quick' | 'tournament' | 'ai') {
	const modal = document.getElementById('playerSetupModal')
	if (modal) {
		modal.classList.remove('hidden')
		modal.setAttribute('data-game-mode', gameMode)

		const nameInput = document.getElementById('playerName') as HTMLInputElement
		if (nameInput) {
			nameInput.focus()
		}
	}
}

function hidePlayerSetupModal() {
	const modal = document.getElementById('playerSetupModal')
	if (modal) {
		modal.classList.add('hidden')
	}
}

async function handlePlayerSetup(event: Event) {
	event.preventDefault()

	const form = event.target as HTMLFormElement
	const formData = new FormData(form)
	playerName = formData.get('playerName') as string

	if (!playerName.trim()) {
		alert('Please enter a player name')
		return
	}

	const modal = document.getElementById('playerSetupModal')
	const gameMode = modal?.getAttribute('data-game-mode')

	console.log(`Player ${playerName} is playing in ${gameMode} mode`)

	hidePlayerSetupModal()

	try {
		await createNewGame(gameMode as string)
	} catch (error) {
		console.error('Failed to create game:', error)
		alert('Failed to create game. Please try again later.')
	}
}

// 임시로 서버 API 대신 더미 데이터 사용
async function createNewGame(gameMode: string) {
	try {
		console.log('Requesting new game from server...')

		// // 임시로 더미 응답 생성 (서버 API가 없으니까)
		// const dummyResponse = {
		// 	gameId: 'game_' + Date.now(),
		// 	player1Id: playerName,
		// 	player2Id: gameMode === 'ai' ? 'AI' : 'Player2',
		// 	status: 'created'
		// }

		// currentGameId = dummyResponse.gameId
		// console.log('Game created successfully:', dummyResponse)

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
				const selectedAiLevel = 'MIDDLE'; // temp set
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

		// 실제 서버 API가 필요할 때는 아래 코드 사용
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
	const heroSection = document.getElementById('heroSection')
	if (heroSection) {
		heroSection.style.display = 'none'
	}

	const gameSection = document.getElementById('gameSection')
	if (gameSection) {
		gameSection.classList.remove('hidden')
	}

	console.log('Game screen is shown')
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

function handleLogin() {
    const loginButton = document.getElementById('loginBtn');
    if (loginButton && loginButton.textContent === 'Logout') {
        window.location.href = '/api/auth/logout';
        console.log('Logout action needed');
    } else {
        console.log('Login button clicked');
        redirectGoogleLogin();
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
	const heroSection = document.getElementById('heroSection')
	if (heroSection) {
		heroSection.style.display = 'block'
	}

	const gameSection = document.getElementById('gameSection')
	if (gameSection) {
		gameSection.classList.add('hidden')
	}

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
			console.error('Not logged in or session expired');
			throw new Error('Not logged in');
		}
		console.log('User is logged in');
		const user = await response.json();
		console.log('User data:', user);

		const loginButton = document.getElementById('loginBtn');
		console.log('User login status:', user);
		if (loginButton) loginButton.textContent = 'Logout';
	} catch (error) {
		window.location.replace('/login.html');
	}
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
