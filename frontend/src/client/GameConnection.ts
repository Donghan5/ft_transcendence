export interface GameConnectionEvents {
	'gameState': (gameState: any) => void
	'playerJoined': (playerId: string) => void
	'playerLeft': (playerId: string) => void
	'updateScore': (scores: { player1: number, player2: number }) => void
	'gameEnd': (winner: string) => void
	'connectionLost': () => void
	'connectionRestored': () => void
	'error': (error: string) => void
}

export class GameConnection {
	private ws: WebSocket | null = null
	private gameId: string
	private playerId: string
	private reconnectAttempts: number = 0
	private maxReconnectAttempts: number = 5
	private reconnectDelay: number = 1000
	private isConnected = false
	private heartbeatInterval: NodeJS.Timeout | null = null

	constructor(gameId: string, playerId: string) {
		this.gameId = gameId
		this.playerId = playerId

		console.log(`🔌 Player ${this.playerId} connected to game ${this.gameId}`)
	}

	async connect(): Promise<void> {
		try {
			const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
			const wsUrl = `${protocol}//${window.location.host}/game/${this.gameId}?playerId=${this.playerId}`

			console.log(`🔌 Connecting to WebSocket server at ${wsUrl}`)

			this.ws = new WebSocket(wsUrl)

			return new Promise<void>((resolve, reject) => {
				if (!this.ws) {
					reject(new Error('WebSocket connection failed'))
					return
				}

				this.ws.onopen = () => {
					console.log(`🔌 WebSocket connection opened for player ${this.playerId}`)
					this.isConnected = true
					this.reconnectAttempts = 0
					this.startHeartbeat()
					this.emit('connectionRestored')
					resolve()
				}

				this.ws.onmessage = (event) => {
					try {
						const data = JSON.parse(event.data.toString())
						this.handleMessage(data)
					} catch (error) {
						console.error('❌ Message parsing error:', error)
					}
				}

				this.ws.onclose = () => {
					console.log(`🔌 WebSocket connection closed for player ${this.playerId}`)
					this.isConnected = false
					this.stopHeartbeat()

					if (!event.wasClean) {
						this.emit('connectionLost')
						this.attemptReconnect()
					}
				}

				this.ws.onerror = (error) => {
					console.error(`❌ WebSocket error for player ${this.playerId}:`, error)
					this.emit('error', error)
					reject(new Error('WebSocket connection failed'))
				}
			})
		} catch (error) {
			console.error('❌ WebSocket connection failed:', error)
			throw error
		}
	}
}

private startHeartbeat(): void {
	this.heartbeatInterval = setInterval(() => {
		if (this.isConnected && this.ws.readyState === WebSocket.OPEN) {
			this.send(JSON.stringify({ type: 'ping', timestamp: Date.now() }))
		}
	}, 3000)
}

private stopHeartbeat(): void {
}
