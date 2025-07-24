import { PongGame3D } from './src/game/render'
import { initializeGame } from './src/game/init'

let currentGame: PongGame3D | null = null
let currentGameId: string | null = null
let playerName: string = ''

document.addEventListener('DOMContentLoaded', () => {
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

		// 실제 서버 API가 필요할 때는 아래 코드 사용
		const response = await fetch('/api/games', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ player1Id: playerName,
				player2Id: gameMode === 'ai' ? 'AI' : 'Player2',
				gameMode: gameMode === 'ai' ? 'AI' : 'PVP' }),
		})

		if (!response.ok) {
			throw new Error('Failed to create game')
		}

		const data = await response.json()
		currentGameId = data.gameId

		console.log('Game created successfully:', data)

		showGameScreen()
		startGame(data.gameId, playerName)
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

function startGame(gameId: string, playerId: string) {
	console.log('Starting initialize game...')

	if (currentGame) {
		currentGame.dispose()
	}

	currentGame = initializeGame('gameContainer', gameId, playerId)

	if (currentGame) {
		console.log('Game initialized successfully')
		updateConnectionStatus('connected')
	} else {
		console.error('Failed to initialize game')
		updateConnectionStatus('disconnected')
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

function handleLogin() {
	console.log('Login button clicked')

	// simplified login process (have to enhance in project future)
	const username = prompt('Please enter your username:')

	if (username) {
		playerName = username
		alert(`Welcome, ${playerName}!`)

		const loginButton = document.getElementById('loginBtn')  // 수정: loginButton → loginBtn
		if (loginButton) {
			loginButton.textContent = username
		}
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

console.log('Main.ts loaded! Welcome to PONG game!')
