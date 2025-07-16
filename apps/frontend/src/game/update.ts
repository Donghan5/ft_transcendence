interface GameUpdate {
	type: string
	state?: {
		ball?: { x: number, y: number, z: number }
		player1?: { y: number, score: number }
		player2?: { y: number, score: number }
	}
	playerId?: string
}
