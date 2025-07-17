// apps/backend/src/core/game/logic.ts
import { WIN_SCORE, POINT_PER_GOAL } from "./constant";
import { GameState, PlayerState, BallState, initialBallVelocity, GameStatus } from "@trans/common-types"; // 👍 수정된 부분

function createInitialPlayerState(): PlayerState {
    return {
        position: { x: 0, y: 0, z: 0 },
        score: 0,
        paddleZ: 0,
    };
}

// 초기 공 상태를 생성하는 헬퍼 함수
function createInitialBallState(): BallState {
    return {
        position: { x: 0, y: 0, z: 0 },
        velocity: initialBallVelocity,
    };
}

export function initState(gameId: string): GameState {
    return {
        gameId,
        player1: createInitialPlayerState(),
        player2: createInitialPlayerState(),
		player1Id: '',
		player2Id: '',
        ball: createInitialBallState(),
        status: 'waiting',
        lastUpdate: Date.now(),
    };
}

export function addPoint(
    state: GameState,
    scorerId: string,
): GameState {
    if (state.status === 'finished') return state;

    const nextState: GameState = {
        ...state,
        player1: { ...state.player1 },
        player2: { ...state.player2 },
    };

    if (scorerId === state.player1Id) {
        nextState.player1.score += POINT_PER_GOAL;
    } else if (scorerId === state.player2Id) {
        nextState.player2.score += POINT_PER_GOAL;
    }

    if (nextState.player1.score >= WIN_SCORE || nextState.player2.score >= WIN_SCORE) {
        nextState.status = 'finished';
    }

    nextState.lastUpdate = Date.now();

    return nextState;
}

export function isGameOver(state: GameState): boolean {
    return state.status === 'finished';
}
