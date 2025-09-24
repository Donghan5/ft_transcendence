// init.ts
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
            <div id="score-display" class="score-wrapper">
                <div class="score-player">
                    <span id="player1-name" class="player-name font-teko">Player 1</span>
                    <span id="player1-score" class="score font-anton">0</span>
                </div>
                <div class="score-separator font-anton">VS</div>
                <div class="score-player">
                    <span id="player2-name" class="player-name font-teko">Player 2</span>
                    <span id="player2-score" class="score font-anton">0</span>
                </div>
            </div>
            <div class="controls-display font-teko">W/S Keys | Arrow Keys</div>
        </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Anton&family=Teko:wght@700&display=swap');
            .font-anton { font-family: 'Anton', sans-serif; }
            .font-teko { font-family: 'Teko', sans-serif; }
            .game-container { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: linear-gradient(180deg, #1a1a3d 0%, #4b0082 100%); }
            #game-canvas { display: block; width: 100%; height: 100%; touch-action: none; }
            .score-wrapper {
                position: absolute;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                align-items: center;
                gap: 2.5rem;
                z-index: 1001;
                user-select: none;
                color: white;
                 text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
            }
            .score-player {
                display: flex;
                flex-direction: column;
                align-items: center;
                min-width: 150px;
            }
            .player-name {
                font-size: 2rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #fef3c7;
                line-height: 1;
            }
            .score {
                font-size: 5rem;
                line-height: 1;
            }
            .score-separator {
                font-size: 2.5rem;
                color: #facc15;
            }
            .controls-display {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                color: white;
                background-color: rgba(0,0,0,0.7);
                padding: 6px 18px;
                border-top: 3px solid #facc15;
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
                text-shadow: -5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000, 5px 5px 0 #000;
                z-index: 1002;
                display: none;
                user-select: none;
            }
        </style>
    `;
    const canvasElement = document.getElementById('game-canvas');
    if (!(canvasElement instanceof HTMLCanvasElement)) {
        console.error('Canvas element not found');
        return null;
    }
    return new PongGame3D(canvasElement, gameId, playerId, gameMode, nickname);
}
