// init.ts
import { PongGame3D } from './render'
import { Vector3 } from '@babylonjs/core'
import { initialBallVelocity } from '@trans/common-types'

export function initializeGame(
    containerId: string,
    gameId: string,
    playerId: string = 'player1',
    gameMode: string,
    nickname: string = 'Player',
    player1Avatar?: string,
    player2Avatar?: string,
    player1Nickname?: string,
    player2Nickname?: string
): PongGame3D | null {
    const container = document.getElementById(containerId)
    if (!container) return null
    
    container.innerHTML = `
        <div class="fixed top-0 left-0 w-screen h-screen bg-gray-900 overflow-hidden">
            <canvas id="game-canvas" tabindex="-1" class="block w-full h-full absolute top-0 left-0 touch-action-none"></canvas>
            
            <!-- Countdown Display -->
            <div id="countdown-display" 
                 class="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        font-anton text-[10rem] text-yellow-400 
                        drop-shadow-[0_0_20px_rgba(250,204,21,0.5)] 
                        z-[1001] pointer-events-none">
            </div>
            
            <!-- PLAYER 1 - Tag style badge -->
            <div class="absolute top-6 left-6 z-[1000]">
                <div class="relative">
                    <!-- Player tag -->
                    <div class="bg-pink-500 border-4 border-black pl-4 pr-6 py-1 shadow-[4px_4px_0_rgba(0,0,0,1)] transform -rotate-2">
                        <div class="font-anton text-xs text-white uppercase tracking-widest [-webkit-text-stroke:1px_black]">
                            ${player1Nickname || 'PLAYER 1'}
                        </div>
                    </div>
                    <!-- Triangular pointer - properly aligned -->
                    <div class="absolute -bottom-3 left-3 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-black"></div>
                    <div class="absolute -bottom-2 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-pink-500"></div>
                    
                    <!-- Avatar circle with score -->
                    <div class="absolute top-10 left-2 flex items-center gap-3">
                        <div class="relative">
                            <div class="w-16 h-16 rounded-full border-4 border-black bg-yellow-300 flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,1)]">
                                <img id="player1-avatar" 
                                     src="${player1Avatar || '/default-avatar.png'}" 
                                     alt="${player1Nickname || 'Player 1'}"
                                     class="w-14 h-14 rounded-full object-cover">
                            </div>
                        </div>
                        <!-- Score bubble -->
                        <div class="relative">
                            <div class="bg-yellow-300 border-4 border-black px-4 py-2 shadow-[5px_5px_0_rgba(0,0,0,1)]">
                                <div id="player1-score" 
                                     class="font-anton text-5xl text-black leading-none">
                                    0
                                </div>
                            </div>
                            <!-- Speech bubble pointer - properly aligned -->
                            <div class="absolute top-1/2 -left-3 -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[14px] border-r-black"></div>
                            <div class="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-yellow-300"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- PLAYER 2 - Tag style badge (mirrored) -->
            <div class="absolute top-6 right-6 z-[1000]">
                <div class="relative">
                    <!-- Player tag -->
                    <div class="bg-cyan-400 border-4 border-black pl-6 pr-4 py-1 shadow-[4px_4px_0_rgba(0,0,0,1)] transform rotate-2">
                        <div class="font-anton text-xs text-white uppercase tracking-widest [-webkit-text-stroke:1px_black]">
                            ${player2Nickname || 'PLAYER 2'}
                        </div>
                    </div>
                    <!-- Triangular pointer - properly aligned -->
                    <div class="absolute -bottom-3 right-3 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-black"></div>
                    <div class="absolute -bottom-2 right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-cyan-400"></div>
                    
                    <!-- Avatar circle with score -->
                    <div class="absolute top-10 right-2 flex items-center gap-3">
                        <!-- Score bubble -->
                        <div class="relative">
                            <div class="bg-yellow-300 border-4 border-black px-4 py-2 shadow-[5px_5px_0_rgba(0,0,0,1)]">
                                <div id="player2-score" 
                                     class="font-anton text-5xl text-black leading-none">
                                    0
                                </div>
                            </div>
                            <!-- Speech bubble pointer - properly aligned -->
                            <div class="absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[14px] border-l-black"></div>
                            <div class="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-yellow-300"></div>
                        </div>
                        <div class="relative">
                            <div class="w-16 h-16 rounded-full border-4 border-black bg-yellow-300 flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,1)]">
                                <img id="player2-avatar" 
                                     src="${player2Avatar || '/default-avatar.png'}" 
                                     alt="${player2Nickname || 'Player 2'}"
                                     class="w-14 h-14 rounded-full object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- ESC - Simple corner badge -->
            <div class="absolute bottom-6 right-6 z-[1000]">
                <div class="bg-red-600 border-3 border-black px-4 py-2 shadow-[3px_3px_0_rgba(0,0,0,1)] transform rotate-2">
                    <div class="font-anton text-sm text-white uppercase tracking-wide">
                        ESC
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            #game-canvas {
                touch-action: none;
            }
            
            /* Responsive adjustments */
            @media (max-width: 768px) {
                .text-5xl { font-size: 2.5rem; }
                .text-3xl { font-size: 1.75rem; }
                .text-sm { font-size: 0.75rem; }
                .text-xs { font-size: 0.625rem; }
                .w-16.h-16 { width: 3rem; height: 3rem; }
                .w-14.h-14 { width: 2.5rem; height: 2.5rem; }
                .px-6 { padding-left: 1rem; padding-right: 1rem; }
                .px-4 { padding-left: 0.75rem; padding-right: 0.75rem; }
                .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
                .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
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
