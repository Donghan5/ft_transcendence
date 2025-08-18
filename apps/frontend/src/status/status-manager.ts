
export interface FriendStatus {
    userId: number;
    nickname: string;
    status: 'online' | 'in_game' | 'away' | 'offline';
    lastSeen: string;
    gameId?: string;
}

export interface UserStats {
    userId: number;
    nickname: string;
    totalGames: number;
    wins: number;
    losses: number;
    winRate: number;
    rank: string;
    rankPoints: number;
    currentStreak: number;
    maxStreak: number;
    recentGames: Array<{
        id: number;
        gameType: string;
        opponentNickname: string;
        result: 'win' | 'loss';
        finishedAt: string;
    }>;
}

export class StatusManager {
    private static instance: StatusManager;
    private statusWs: WebSocket | null = null;
    private friends: Map<number, FriendStatus> = new Map();
    private statusUpdateCallbacks: Set<(friends: FriendStatus[]) => void> = new Set();
    private currentUser: any = null;

    private constructor() {}

    public static getInstance(): StatusManager {
        if (!StatusManager.instance) {
            StatusManager.instance = new StatusManager();
        }
        return StatusManager.instance;
    }

    public async initializeStatusConnection(token: string, user: any): Promise<void> {
        this.currentUser = user;
        
        try {
            const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
            const wsUrl = `${protocol}//${window.location.host}/api/user/status/ws?token=${token}`;
            
            this.statusWs = new WebSocket(wsUrl);
            
            this.statusWs.onopen = () => {
                console.log('Status WebSocket connected');
                this.loadFriendsStatus();
            };
            
            this.statusWs.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    this.handleStatusMessage(data);
                } catch (error) {
                    console.error('Error parsing status message:', error);
                }
            };
            
            this.statusWs.onclose = () => {
                console.log('Status WebSocket disconnected');
                setTimeout(() => this.reconnectStatus(), 5000);
            };
            
            this.statusWs.onerror = (error) => {
                console.error('Status WebSocket error:', error);
            };
            
        } catch (error) {
            console.error('Failed to initialize status connection:', error);
        }
    }

    private handleStatusMessage(data: any): void {
        switch (data.type) {
            case 'friendStatusUpdate':
                this.updateFriendStatus(data.payload);
                break;
            case 'pong':
                // response heartbeat
                break;
            default:
                console.log('Unknown status message type:', data.type);
        }
    }

    private updateFriendStatus(friendData: FriendStatus): void {
        this.friends.set(friendData.userId, friendData);
        this.notifyStatusUpdate();
    }


    private async loadFriendsStatus(): Promise<void> {
        try {
            const response = await fetch('/api/user/status/friends', {
                credentials: 'include'
            });
            
            if (response.ok) {
                const data = await response.json();
                this.friends.clear();
                
                for (const friend of data.friends) {
                    this.friends.set(friend.userId, friend);
                }
                
                this.notifyStatusUpdate();
            }
        } catch (error) {
            console.error('Error loading friends status:', error);
        }
    }

  
    private notifyStatusUpdate(): void {
        const friendsList = Array.from(this.friends.values());
        this.statusUpdateCallbacks.forEach(callback => callback(friendsList));
    }

 
    public onStatusUpdate(callback: (friends: FriendStatus[]) => void): void {
        this.statusUpdateCallbacks.add(callback);
    }

 
    private sendHeartbeat(): void {
        if (this.statusWs && this.statusWs.readyState === WebSocket.OPEN) {
            this.statusWs.send(JSON.stringify({ type: 'ping', timestamp: Date.now() }));
        }
    }

    private async reconnectStatus(): Promise<void> {
        if (this.currentUser) {
            try {
                const response = await fetch('/api/auth/me', { credentials: 'include' });
                if (response.ok) {
                    const userData = await response.json();
                    this.initializeStatusConnection('', userData);
                }
            } catch (error) {
                console.error('Failed to reconnect status:', error);
            }
        }
    }

    public getFriends(): FriendStatus[] {
        return Array.from(this.friends.values());
    }

    public disconnect(): void {
        if (this.statusWs) {
            this.statusWs.close();
            this.statusWs = null;
        }
        this.friends.clear();
        this.statusUpdateCallbacks.clear();
    }
}
