//init.ts
import { PongGame3D } from './render'
import { Vector3 } from '@babylonjs/core'
import { initialBallVelocity } from '@trans/common-types'

export function initializeGame(
	containerId: string,
	gameId: string,
	playerId: string = 'player1',
	gameMode: string, // default to player vs player
	nickname: string = 'Player'
): PongGame3D | null {
	const container = document.getElementById(containerId)
	if (!container) return null

	container.innerHTML = `
		<div class="game-container">
			<canvas id="game-canvas" tabindex="-1"></canvas>
			 <div id="countdown-display" class="countdown-display"></div>
			<div id="score-display-wrapper" class="score-wrapper">
                <!-- FIX: Added id="score-display" back to the span -->
                <span id="score-display" class="score-display font-anton text-extrude" data-text="0 - 0">0 - 0</span>
            </div>
			<div class="controls-display font-teko">W/S Keys   |   Arrow Keys</div>
		</div>
		<style>
            @import url('https://fonts.googleapis.com/css2?family=Anton&family=Teko:wght@700&display=swap');
            .font-anton { font-family: 'Anton', sans-serif; }
            .font-teko { font-family: 'Teko', sans-serif; }

			.game-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #000; }
			#game-canvas { display: block; width: 100%; height: 100%; touch-action: none; }

            .text-extrude {
                position: relative;
                color: white;
                text-shadow:
                    -1px -1px 0 #000, 1px -1px 0 #000,
                    -1px 1px 0 #000, 1px 1px 0 #000,
                    2px 2px 0 #000;
            }
            .text-extrude::before {
                content: attr(data-text);
                position: absolute;
                top: 4px;
                left: 0;
                z-index: -1;
                color: #ec4899;
                text-shadow: none;
            }

			.score-wrapper {
				position: absolute;
				top: 15px;
				left: 50%;
				transform: translateX(-50%);
				font-size: 5rem;
				line-height: 1;
				z-index: 1001;
                user-select: none;
			}

            .score-display {
                display: inline-block;
            }

			.controls-display {
				position: absolute;
				bottom: 10px;
				left: 50%;
				transform: translateX(-50%);
				color: white;
                background-color: rgba(0,0,0,0.7);
                padding: 6px 18px;
                border-top: 3px solid #ec4899;
				font-size: 1.25rem;
                text-transform: uppercase;
                letter-spacing: 2px;
				z-index: 1001;
			}

			 .countdown-display {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Anton', sans-serif;
                font-size: 15rem;
                color: white;
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
                z-index: 1002;
                display: none;
                user-select: none;
            }

		</style>
	`;

    // This selector now works fine, as the class is still present.
    const scoreElement = container.querySelector('.score-display');
    if (scoreElement) {
        const scoreObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.target instanceof Element && mutation.target.textContent) {
                    mutation.target.setAttribute('data-text', mutation.target.textContent);
                }
            });
        });
        scoreObserver.observe(scoreElement, { childList: true, characterData: true, subtree: true });
    }

	const canvasElement = document.getElementById('game-canvas');
	if (!(canvasElement instanceof HTMLCanvasElement)) {
		console.error('Canvas element not found');
		return null;
	}
    // Now, PongGame3D can successfully find the element using document.getElementById('score-display')
	return new PongGame3D(canvasElement, gameId, playerId, gameMode, nickname);
}
