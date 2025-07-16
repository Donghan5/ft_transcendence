import fastify from 'fastify'
import '@fastify/websocket'
import { promisify } from 'util'
import sqlite3 from 'sqlite3'
import { WebSocket } from 'ws'
import path from 'path'

interface Vector3D {
  x: number
  y: number
  z: number
}

interface GameState3D {
  player1: {
    position: Vector3D
    score: number
    paddleZ: number
  }
  player2: {
    position: Vector3D
    score: number
    paddleZ: number
  }
  ball: {
    position: Vector3D
    velocity: Vector3D
  }
  gameId: string
  status: 'waiting' | 'playing' | 'finished'
  lastUpdate: number
}

// Main game engine class and logic
class Enhanced3DPongEngine {
  private games = new Map<string, GameState3D>()
  private gameLoops = new Map<string, NodeJS.Timeout>()
  private connectedPlayers = new Map<string, WebSocket>()
  private prometheus: any

  constructor(prometheus: any) {
    this.prometheus = prometheus
    console.log('🎮 Enhanced 3D Pong Engine initialized!')
  }

  public listGames() {
	return Array.from(this.games.entries());
  }

  async createGame(player1Id: string, player2Id: string, gameMode: string): Promise<string> {
    const gameId = `game_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    console.log(`🎲 Create new game: ${gameId} (${player1Id} vs ${player2Id})`)

    const gameState: GameState3D = {
      player1: {
        position: { x: -160, y: 30, z: 0 },
        score: 0,
        paddleZ: 0
      },
      player2: {
        position: { x: 160, y: 30, z: 0 },
        score: 0,
        paddleZ: 0
      },
      ball: {
        position: { x: 0, y: 20, z: 0 },
        velocity: {
          x: Math.random() > 0.5 ? 5 : -5,
          y: 0,
          z: (Math.random() - 0.5) * 6
        }
      },
      gameId,
      status: 'playing',
      lastUpdate: Date.now()
    }


    this.games.set(gameId, gameState)
    this.prometheus.gamesActive.inc()
    this.startGameLoop(gameId)
    await this.saveGameToDatabase(gameId, player1Id, player2Id, gameMode)

    return gameId
  }

  private startGameLoop(gameId: string): void {
    const targetFPS = 60
    const frameTime = 1000 / targetFPS

    const gameLoop = () => {
      const startTime = performance.now()
      const game = this.games.get(gameId)

      if (!game || game.status !== 'playing') {
        console.log(`🛑 Game ${gameId} loop ended`)
        this.gameLoops.delete(gameId)
        return
      }

      this.updatePhysics(game)
      this.checkCollisions(game)
      this.checkScoring(game)

      game.lastUpdate = Date.now()

      if (game.player1.score >= 11 || game.player2.score >= 11) {
        game.status = 'finished'
        this.endGame(gameId)
        return
      }

      this.broadcastGameState(gameId, game)

      const elapsed = performance.now() - startTime
      const nextFrameDelay = Math.max(0, frameTime - elapsed)

      const timeoutId = setTimeout(gameLoop, nextFrameDelay)
      this.gameLoops.set(gameId, timeoutId)
    }

    console.log(`⚡ Game ${gameId} loop started!`)
    gameLoop()
  }

  private updatePhysics(game: GameState3D): void {
    game.ball.position.x += game.ball.velocity.x
    game.ball.position.z += game.ball.velocity.z

    if (Math.abs(game.ball.position.z) > 140) {
      game.ball.velocity.z = -game.ball.velocity.z
      this.createImpactEffect(game.ball.position)
      console.log(`💥 Wall collision! Position: ${game.ball.position.z}`)
    }

    game.ball.position.z = Math.max(-140, Math.min(140, game.ball.position.z))
  }

  private checkCollisions(game: GameState3D): void {
    const ballX = game.ball.position.x
    const ballZ = game.ball.position.z

    if (ballX <= -140 && ballX >= -170) {
      const paddleTop = game.player1.paddleZ + 40
      const paddleBottom = game.player1.paddleZ - 40

      if (ballZ <= paddleTop && ballZ >= paddleBottom) {
        console.log('🏓 Player1 hits paddle!')

        game.ball.velocity.x = Math.abs(game.ball.velocity.x)

        const relativeIntersectZ = game.player1.paddleZ - ballZ
        const normalizedIntersection = relativeIntersectZ / 40
        game.ball.velocity.z = -normalizedIntersection * 8

        game.ball.velocity.x *= 1.05

        this.createImpactEffect(game.ball.position)
      }
    }

    if (ballX >= 140 && ballX <= 170) {
      const paddleTop = game.player2.paddleZ + 40
      const paddleBottom = game.player2.paddleZ - 40

      if (ballZ <= paddleTop && ballZ >= paddleBottom) {
        console.log('🏓 Player2 hits paddle!')

        game.ball.velocity.x = -Math.abs(game.ball.velocity.x)

        const relativeIntersectZ = game.player2.paddleZ - ballZ
        const normalizedIntersection = relativeIntersectZ / 40
        game.ball.velocity.z = -normalizedIntersection * 8

        game.ball.velocity.x *= 1.05

        this.createImpactEffect(game.ball.position)
      }
    }
  }

  private checkScoring(game: GameState3D): void {
    if (game.ball.position.x < -200) {
      game.player2.score++
      console.log(`🎯 Player2 scores! ${game.player1.score} - ${game.player2.score}`)
      this.resetBall(game)
      this.prometheus.scoreEvents.inc({ player: 'player2' })
    }
    else if (game.ball.position.x > 200) {
      game.player1.score++
      console.log(`🎯 Player1 scores! ${game.player1.score} - ${game.player2.score}`)
      this.resetBall(game)
      this.prometheus.scoreEvents.inc({ player: 'player1' })
    }
  }

  private resetBall(game: GameState3D): void {
    game.ball.position = { x: 0, y: 20, z: 0 }
    game.ball.velocity = {
      x: (Math.random() > 0.5 ? 1 : -1) * 6,
      y: 0,
      z: (Math.random() - 0.5) * 4
    }
    console.log('🔄 Ball reset!')
  }

  private createImpactEffect(position: Vector3D): void {
    console.log(`💥 Collision at (${position.x}, ${position.y}, ${position.z})`)
  }

  private broadcastGameState(gameId: string, game: GameState3D): void {
    const message = JSON.stringify({
      type: 'gameState',
      gameId: gameId,
      player1: game.player1,
      player2: game.player2,
      ball: game.ball,
      status: game.status,
      timestamp: game.lastUpdate
    })

    this.connectedPlayers.forEach((ws, playerId) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(message)
      }
    })
  }

  updatePaddlePosition(gameId: string, playerId: string, paddleZ: number): void {
    const game = this.games.get(gameId)
    if (!game) return

    const constrainedZ = Math.max(-120, Math.min(120, paddleZ))

    if (playerId === 'player1') {
      game.player1.paddleZ = constrainedZ
    } else if (playerId === 'player2') {
      game.player2.paddleZ = constrainedZ
    }

    console.log(`🎮 ${playerId} paddle moved: ${constrainedZ}`)
  }

  private async endGame(gameId: string): Promise<void> {
    const game = this.games.get(gameId)
    if (!game) return

    console.log(`🏁 Game ${gameId} ended!`)

    const timeoutId = this.gameLoops.get(gameId)
    if (timeoutId) {
      clearTimeout(timeoutId)
      this.gameLoops.delete(gameId)
    }

    const winner = game.player1.score > game.player2.score ? 'player1' : 'player2'
    console.log(`🏆 Winner: ${winner}`)

    this.broadcastGameState(gameId, game)

    this.prometheus.gamesCompleted.inc()
    this.prometheus.gamesActive.dec()

    setTimeout(() => {
      this.games.delete(gameId)
      console.log(`🧹 Game ${gameId} data cleaned up`)
    }, 30000)
  }

  private async saveGameToDatabase(gameId: string, player1: string, player2: string, gameMode: string): Promise<void> {
    try {
      const db = new sqlite3.Database('./data/games.db')
      const run = promisify(db.run.bind(db)) as (sql: string, params: any[]) => Promise<void>


      await run(`
        INSERT INTO games (game_id, player1_id, player2_id, started_at, game_type, status)
        VALUES (?, ?, ?, datetime('now'), ?, 'playing')
      `, [gameId, player1, player2, gameMode] )

      console.log(`💾 Game ${gameId} database saved successfully`)
      db.close()
    } catch (error) {
      console.error('❌ Game database save failed:', error)
    }
  }

  getGameState(gameId: string): GameState3D | undefined {
    return this.games.get(gameId)
  }

  addPlayer(playerId: string, ws: WebSocket): void {
    this.connectedPlayers.set(playerId, ws)
    console.log(`👋 Player ${playerId} connected`)
  }

  removePlayer(playerId: string): void {
    this.connectedPlayers.delete(playerId)
    console.log(`👋 Player ${playerId} disconnected`)
  }
}

const server = fastify({
  logger: true,
  trustProxy: true
})

server.register(require('@fastify/cors'), {
  origin: true,
  credentials: true
})

server.register(require('@fastify/static'), {
  root: path.join(process.cwd(), 'frontend'),
  prefix: '/'
})

server.register(require('@fastify/websocket'))

const promClient = require('prom-client')
const prometheus = {
  gamesActive: new promClient.Gauge({
    name: 'pong3d_games_active',
    help: 'Number of active 3D Pong games'
  }),
  gamesCompleted: new promClient.Counter({
    name: 'pong3d_games_completed_total',
    help: 'Total number of completed 3D Pong games'
  }),
  scoreEvents: new promClient.Counter({
    name: 'pong3d_score_events_total',
    help: 'Total score events',
    labelNames: ['player']
  })
}

const gameEngine = new Enhanced3DPongEngine(prometheus)

server.register(async function (fastify) {
  fastify.get('/game/:gameId', { websocket: true }, (connection, req) => {
    const { gameId } = req.params as {gameId: string}
    const playerId =
    (req.query as Record<string, string>).playerId ?? `player_${Date.now()}`


    console.log(`🔌 Player ${playerId} connected to game ${gameId}`)

    gameEngine.addPlayer(playerId, connection.socket)
    let stateTimeoutId: NodeJS.Timeout
    const sendGameState = () => {
      const gameState = gameEngine.getGameState(gameId)
      if (gameState && connection.socket.readyState === WebSocket.OPEN) {
        const message = JSON.stringify({
          type: 'gameState',
          gameId: gameId,
          player1: gameState.player1,
          player2: gameState.player2,
          ball: gameState.ball,
          status: gameState.status,
          timestamp: gameState.lastUpdate
        })

        connection.socket.send(message)
        stateTimeoutId = setTimeout(sendGameState, 33) // 30fps
      }
    }

    sendGameState()

    connection.socket.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString())
        console.log(`📨 Message received:`, data)

        if (data.type === 'paddleUpdate') {
          gameEngine.updatePaddlePosition(gameId, data.playerId, data.paddleZ)
        }

        if (data.type === 'pauseGame') {
          console.log(`⏸️ Game ${gameId} pause request`)
        }

        if (data.type === 'chat') {
          console.log(`💬 Chat: ${data.playerId}: ${data.message}`)
        }

      } catch (error) {
        console.error('❌ Message parsing error:', error)
      }
    })

    connection.socket.on('close', () => {
      console.log(`👋 Player ${playerId} disconnected`)
      clearTimeout(stateTimeoutId)
      gameEngine.removePlayer(playerId)
    })

    connection.socket.on('error', (error) => {
      console.error(`❌ WebSocket error (${playerId}):`, error)
      clearTimeout(stateTimeoutId)
      gameEngine.removePlayer(playerId)
    })
  })
})

server.post('/api/games/create', async (request, reply) => {
  try {
    const { player1Id, player2Id, gameMode } = request.body as any

    console.log(`🎲 Game creation request: ${player1Id} vs ${player2Id} (${gameMode})`)

    if (!player1Id || !gameMode) {
      return reply.code(400).send({
        error: 'player1Id and gameMode are required!'
      })
    }

    const gameId = await gameEngine.createGame(player1Id, player2Id || 'AI', gameMode)

    const response = {
      success: true,
      gameId: gameId,
      websocketUrl: `/game/${gameId}`,
      players: {
        player1: player1Id,
        player2: player2Id || 'AI'
      },
      gameMode: gameMode,
      message: 'Game created successfully! 🎮'
    }

    console.log(`✅ Game created:`, response)
    return reply.send(response)

  } catch (error) {
	const message = error instanceof Error ? error.message : String(error)
    console.error('❌ Game creation error:', error)
    return reply.code(500).send({
      error: 'Game creation failed', message
    })
  }
})

server.get('/api/games/:gameId', async (request, reply) => {
  const { gameId } = request.params as {gameId: string}
  const gameState = gameEngine.getGameState(gameId)

  if (!gameState) {
    return reply.code(404).send({
      error: 'Game not found'
    })
  }

  return reply.send({
    success: true,
    gameId: gameId,
    gameState: gameState,
    message: 'Game state retrieved successfully! 📊'
  })
})

server.get('/api/games', async (request, reply) => {
  const activeGames = []

  for (const [gameId, gameState] of gameEngine.games) {
    activeGames.push({
      gameId: gameId,
      status: gameState.status,
      scores: {
        player1: gameState.player1.score,
        player2: gameState.player2.score
      },
      lastUpdate: gameState.lastUpdate
    })
  }

  return reply.send({
    success: true,
    activeGames: activeGames,
    totalGames: activeGames.length,
    message: 'Active games list retrieved successfully! 📋'
  })
})

server.get('/metrics', async (request, reply) => {
  reply.type('text/plain')
  return promClient.register.metrics()
})

server.get('/health', async (request, reply) => {
  return {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    activeGames: prometheus.gamesActive.get(),
    message: 'Server is running healthy! 🏥'
  }
})

// 🗂️ File upload API (avatar, etc)
server.post('/api/upload', async (request, reply) => {
  try {
    console.log('📁 File upload request')

    return reply.send({
      success: true,
      message: 'File uploaded successfully! 📁'
    })
  } catch (error) {
    console.error('❌ File upload failed:', error)
    return reply.code(500).send({
      error: 'File upload failed'
    })
  }
})

// have to enhance user register/login API with password
server.register(async function (fastify) {
  fastify.post('/api/users/register', async (request, reply) => {
    const { username, email, password } = request.body as any

    console.log(`👤 User registration request: ${username}`)

    return reply.send({
      success: true,
      message: `User ${username} registered successfully! 🎉`,
      userId: `user_${Date.now()}`
    })
  })

  fastify.post('/api/users/login', async (request, reply) => {
    const { username, password } = request.body as any

    console.log(`🔐 Login request: ${username}`)

    return reply.send({
      success: true,
      message: `${username} logged in successfully! 🔐`,
      token: `token_${Date.now()}`,
      userId: `user_${Date.now()}`
    })
  })
})

server.setErrorHandler(async (error, request, reply) => {
  console.error('❌ Server error:', error)

  reply.status(500).send({
    error: 'Server error',
    message: error.message,
    timestamp: new Date().toISOString()
  })
})

// 🌐 404 핸들러
server.setNotFoundHandler(async (request, reply) => {
  console.log(`🔍 404: ${request.method} ${request.url}`)

  reply.status(404).send({
    error: 'Page Not Found',
    path: request.url,
    method: request.method,
    message: 'The requested resource does not exist. 🔍'
  })
})

// 🚀 서버 시작 함수
async function startServer() {
  try {
    const port = process.env.PORT || 3000
    const host = process.env.HOST || '0.0.0.0'

    console.log('🚀 Server starting...')

    await server.listen({ port: Number(port), host })

    console.log(`
    🎮 ft_transcendence server started!

    📍 Address: http://${host}:${port}
    🎯 Game: http://${host}:${port}/game/[gameId]
    📊 Status: http://${host}:${port}/health
    📈 Metrics: http://${host}:${port}/metrics

    🎉 Enjoy the game!
    `)

  } catch (error) {
    console.error('❌ Server start failed:', error)
    process.exit(1)
  }
}

process.on('SIGINT', async () => {
  console.log('🛑 Server shutdown signal received...')

  try {
    await server.close()
    console.log('✅ Server closed safely.')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error occuered while closing server:', error)
    process.exit(1)
  }
})

if (require.main === module) {
  startServer()
}

export default server
