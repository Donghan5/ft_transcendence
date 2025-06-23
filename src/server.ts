// src/server.ts - 3D Pong 게임 서버
import fastify from 'fastify'
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
  player1: { position: Vector3D, score: number, paddleZ: number }
  player2: { position: Vector3D, score: number, paddleZ: number }
  ball: { position: Vector3D, velocity: Vector3D }
  gameId: string
  status: 'waiting' | 'playing' | 'finished'
}

class Pong3DGameEngine {
  private games = new Map<string, GameState3D>()
  private prometheus: any
  private gameLoops = new Map<string, NodeJS.Timeout>()

  constructor(prometheus: any) {
    this.prometheus = prometheus
  }

  async createGame(player1Id: string, player2Id: string): Promise<string> {
    const gameId = `game_${Date.now()}_${Math.random()}`
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
        velocity: { x: 5, y: 0, z: 3 }
      },
      gameId,
      status: 'playing'
    }

    this.games.set(gameId, gameState)
    this.prometheus.gamesActive.inc()

    this.startGameLoop(gameId)

    await this.saveGameToDatabase(gameId, player1Id, player2Id)

    return gameId
  }

  private startGameLoop(gameId: string): void {
    const gameLoop = () => {
      const game = this.games.get(gameId)
      if (!game || game.status !== 'playing') {
        this.gameLoops.delete(gameId)
        return
      }

      const startTime = performance.now()

      this.updatePhysics(game)
      this.checkCollisions(game)
      this.checkScoring(game)

      if (game.player1.score >= 11 || game.player2.score >= 11) {
        game.status = 'finished'
        this.endGame(gameId)
        return
      }

      const elapsed = performance.now() - startTime
      const nextFrameDelay = Math.max(0, 16 - elapsed)

      const timeoutId = setTimeout(gameLoop, nextFrameDelay)
      this.gameLoops.set(gameId, timeoutId)
    }

    gameLoop()
  }

  private updatePhysics(game: GameState3D): void {
    game.ball.position.x += game.ball.velocity.x
    game.ball.position.z += game.ball.velocity.z

    if (Math.abs(game.ball.position.z) > 150) {
      game.ball.velocity.z = -game.ball.velocity.z
      this.createImpactEffect(game.ball.position)
    }
  }

  private checkCollisions(game: GameState3D): void {
    const ballX = game.ball.position.x
    const ballZ = game.ball.position.z

    // Player 1 패들 충돌
    if (ballX <= -150 && ballX >= -170) {
      const paddleTop = game.player1.paddleZ + 30
      const paddleBottom = game.player1.paddleZ - 30

      if (ballZ <= paddleTop && ballZ >= paddleBottom) {
        game.ball.velocity.x = Math.abs(game.ball.velocity.x)

        const relativeIntersectZ = game.player1.paddleZ - ballZ
        const normalizedRelativeIntersection = relativeIntersectZ / 30
        game.ball.velocity.z = -normalizedRelativeIntersection * 5

        game.ball.velocity.x *= 1.05
      }
    }

    if (ballX >= 150 && ballX <= 170) {
      const paddleTop = game.player2.paddleZ + 30
      const paddleBottom = game.player2.paddleZ - 30

      if (ballZ <= paddleTop && ballZ >= paddleBottom) {
        game.ball.velocity.x = -Math.abs(game.ball.velocity.x)

        const relativeIntersectZ = game.player2.paddleZ - ballZ
        const normalizedRelativeIntersection = relativeIntersectZ / 30
        game.ball.velocity.z = -normalizedRelativeIntersection * 5

        game.ball.velocity.x *= 1.05
      }
    }
  }

  private checkScoring(game: GameState3D): void {
    if (game.ball.position.x < -200) {
      game.player2.score++
      this.resetBall(game)
      this.prometheus.scoreEvents.inc({ player: 'player2' })
    } else if (game.ball.position.x > 200) {
      game.player1.score++
      this.resetBall(game)
      this.prometheus.scoreEvents.inc({ player: 'player1' })
    }
  }

  private resetBall(game: GameState3D): void {
    game.ball.position = { x: 0, y: 20, z: 0 }
    game.ball.velocity = {
      x: (Math.random() > 0.5 ? 1 : -1) * 5,
      y: 0,
      z: (Math.random() - 0.5) * 4
    }
  }

  private createImpactEffect(position: Vector3D): void {

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
  }

  private async endGame(gameId: string): Promise<void> {
    const game = this.games.get(gameId)
    if (!game) return

    const timeoutId = this.gameLoops.get(gameId)
    if (timeoutId) {
      clearTimeout(timeoutId)
      this.gameLoops.delete(gameId)
    }

    const winner = game.player1.score > game.player2.score ? 'player1' : 'player2'

    await this.awardBlockchainReward(gameId, winner)

    this.prometheus.gamesCompleted.inc()
    this.prometheus.gamesActive.dec()

    setTimeout(() => {
      this.games.delete(gameId)
    }, 30000)
  }

  private async saveGameToDatabase(gameId: string, player1: string, player2: string): Promise<void> {
    const db = new sqlite3.Database('./data/games.db')
    const run = promisify(db.run.bind(db))

    await run(`
      INSERT INTO games (game_id, player1_id, player2_id, started_at, status)
      VALUES (?, ?, ?, datetime('now'), 'playing')
    `, [gameId, player1, player2])

    db.close()
  }

  private async awardBlockchainReward(gameId: string, winner: string): Promise<void> {
    console.log(`Awarding blockchain reward for game ${gameId} to ${winner}`)
  }

  getGameState(gameId: string): GameState3D | undefined {
    return this.games.get(gameId)
  }
}

const server = fastify({ logger: true })

server.register(require('@fastify/cors'), {
  origin: true
})

server.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/'
})

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

const gameEngine = new Pong3DGameEngine(prometheus)

server.register(require('@fastify/websocket'))

server.register(async function (fastify) {
  fastify.get('/game/:gameId', { websocket: true }, (connection, req) => {
    const gameId = req.params.gameId as string
    const playerId = req.query.playerId as string

    // 게임 상태 전송 루프
    let stateTimeoutId: NodeJS.Timeout
    const sendGameState = () => {
      const gameState = gameEngine.getGameState(gameId)
      if (gameState && connection.socket.readyState === WebSocket.OPEN) {
        connection.socket.send(JSON.stringify({
          type: 'gameState',
          ...gameState
        }))
        stateTimeoutId = setTimeout(sendGameState, 33)
      }
    }
    sendGameState()

    connection.socket.on('message', (message) => {
      const data = JSON.parse(message.toString())

      if (data.type === 'paddleUpdate') {
        gameEngine.updatePaddlePosition(gameId, data.playerId, data.paddleZ)
      }
    })

    connection.socket.on('close', () => {
      clearTimeout(stateTimeoutId)
    })
  })
})

server.post('/api/games/create', async (request, reply) => {
  const { player1Id, player2Id } = request.body as any
  const gameId = await gameEngine.createGame(player1Id, player2Id)

  return { gameId, websocketUrl: `/game/${gameId}` }
})

server.get('/metrics', async (request, reply) => {
  reply.type('text/plain')
  return promClient.register.metrics()
})

export default server
