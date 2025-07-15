import { FastifyInstance } from 'fastify'
import { WebSocket } from 'ws'
import '@fastify/websocket'

export default async function (app: FastifyInstance) {
  app.get('/game/:gameId', { websocket: true }, (conn, req) => {
    const { gameId } = req.params as { gameId: string }
    const playerId   = (req.query as any).playerId ?? `player_${Date.now()}`
    const ws         = conn.socket as unknown as WebSocket   // 캐스팅

    gameEngine.addPlayer(playerId, ws)

    ws.on('message', buf => {
      const msg = JSON.parse(buf.toString())
      if (msg.type === 'paddleUpdate')
        gameEngine.updatePaddlePosition(gameId, msg.playerId, msg.paddleZ)
    })

    ws.on('close', () => gameEngine.removePlayer(playerId))
  })
}
