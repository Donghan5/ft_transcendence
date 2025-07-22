// here is initialize game
import { PongGame3D } from './render'
import { Vector3 } from '@babylonjs/core'
import { initialBallVelocity } from '@trans/common-types'

export function initializeGame(
	containerId: string,
	gameId: string,
	playerId: string = 'player1'
): PongGame3D | null {
	const container = document.getElementById(containerId)
	if (!container) return null

	container.innerHTML = `
		<div class="game-container">
			<canvas id="game-canvas"></canvas>
			<div id="score-display" class="score-display">0 - 0</div>
			<div class="controls">
				<p>Move Paddle with W/S keys</p>
			</div>
		</div>
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			html, body {
				width: 100%;
				height: 100%;
				overflow: hidden;
			}

			.game-container {
				position: fixed;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background-color: #000;
				overflow: hidden;
				z-index: 1000;
			}

			#game-canvas {
				display: block;
				width: 100%;
				height: 100%;
				touch-action: none;
			}

			.score-display {
				position: absolute;
				top: 30px;
				left: 50%;
				transform: translateX(-50%);
				font-size: clamp(2rem, 5vw, 4rem);
				font-weight: bold;
				color: white;
				text-shadow: 0 0 20px cyan, 0 0 40px cyan;
				font-family: 'Orbitron', 'Courier New', monospace;
				z-index: 1001;
			}

			.controls {
				position: absolute;
				bottom: 30px;
				left: 50%;
				transform: translateX(-50%);
				color: white;
				text-align: center;
				font-family: 'Orbitron', 'Courier New', monospace;
				text-shadow: 0 0 10px cyan;
				font-size: clamp(0.8rem, 2vw, 1.2rem);
				z-index: 1001;
			}

			@media (max-width: 768px) {
				.score-display {
					top: 20px;
					font-size: 2.5rem;
				}

				.controls {
					bottom: 20px;
					font-size: 0.9rem;
				}
			}
		</style>
	`

	const canvasElement = document.getElementById('game-canvas');
	if (!(canvasElement instanceof HTMLCanvasElement)) {
		console.error('Canvas element not found or is not an HTMLCanvasElement');
		return null;
	}
	const canvas: HTMLCanvasElement = canvasElement;
	return new PongGame3D(canvas, gameId, playerId);
}
