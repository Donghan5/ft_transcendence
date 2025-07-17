import fastify from 'fastify'
import cors from '@fastify/cors'
import '@fastify/websocket'
import { promisify } from 'util'
import sqlite3 from 'sqlite3'
import { WebSocket } from 'ws'
import path from 'path'
import { gameEngine } from './core/game/game-engine'

const server = fastify({ logger: true, trustProxy: true })

server.register(cors, { origin: true, credentials: true })
server.register(staticPlugin, {
	root: path.join(process.cwd(), '../frontend/dist'),
	prefix: '/', // optional: default '/'
});

server.register(websocket);


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

server.register(async function (fastify) {
  fastify.get('/game/:gameId', { websocket: true }, (connection, req) => {
    const { gameId } = req.params as {gameId: string}
    const playerId =
    (req.query as Record<string, string>).playerId ?? `player_${Date.now()}`


    console.log(`🔌 Player ${playerId} connected to game ${gameId}`)

    gameEngine.addPlayer(playerId, connection.socket, fastify)
    let stateTimeoutId: NodeJS.Timeout
    const sendGameState = () => {
      const gameState = gameEngine.broadcastGameState(gameId)
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

server.setNotFoundHandler(async (request, reply) => {
  console.log(`🔍 404: ${request.method} ${request.url}`)

  reply.status(404).send({
    error: 'Page Not Found',
    path: request.url,
    method: request.method,
    message: 'The requested resource does not exist. 🔍'
  })
})

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
