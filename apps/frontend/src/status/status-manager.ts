
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
    private tournamentInviteCallbacks: Set<(invite: any) => void> = new Set();
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
            case 'tournamentInvite':
                this.handleTournamentInvite(data.payload);
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

    private handleTournamentInvite(invite: {
        tournamentId: string;
        tournamentName: string;
        invitedBy: string;
        invitedById: number;
    }): void {
        console.log('Received tournament invite:', invite);

        this.showTournamentInviteNotification(invite);

        this.tournamentInviteCallbacks.forEach(callback => callback(invite));
    }

    private showTournamentInviteNotification(invite: any): void {
        const notificationDiv = document.createElement('div');
        notificationDiv.id = `tournament-invite-${invite.tournamentId}`;
        notificationDiv.className = 'fixed top-20 right-4 bg-white border-thick shadow-sharp p-6 max-w-md z-50';
        
        notificationDiv.innerHTML = `
            <h4 class="text-xl font-bold mb-2">Tournament Invitation!</h4>
            <p class="mb-4">
                <strong>${invite.invitedBy}</strong> invited you to join 
                <strong>"${invite.tournamentName}"</strong> tournament
            </p>
            <div class="flex gap-2">
                <button id="accept-btn-${invite.tournamentId}" 
                        class="flex-1 bg-green-500 text-white py-2 px-4 border-thick hover-anarchy">
                    Accept
                </button>
                <button id="decline-btn-${invite.tournamentId}" 
                        class="flex-1 bg-red-500 text-white py-2 px-4 border-thick hover-anarchy">
                    Decline
                </button>
            </div>
        `;
        
        document.body.appendChild(notificationDiv);
        
        const acceptBtn = document.getElementById(`accept-btn-${invite.tournamentId}`);
        const declineBtn = document.getElementById(`decline-btn-${invite.tournamentId}`);
        
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                this.acceptTournamentInvite(invite.tournamentId);
            });
        }
        
        if (declineBtn) {
            declineBtn.addEventListener('click', () => {
                this.declineTournamentInvite(invite.tournamentId);
            });
        }
        
        setTimeout(() => {
            const notification = document.getElementById(`tournament-invite-${invite.tournamentId}`);
            if (notification) {
                notification.remove();
            }
        }, 30000);
    }

     private async acceptTournamentInvite(tournamentId: string): Promise<void> {
        try {
            const notification = document.getElementById(`tournament-invite-${tournamentId}`);
            if (notification) {
                notification.innerHTML = '<p class="text-center">Joining tournament...</p>';
            }

            const response = await fetch('/api/tournament/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tournamentId }),
                credentials: 'include'
            });

            if (response.ok) {
                if (notification) {
                    notification.innerHTML = '<p class="text-green-600 font-bold">Successfully joined!</p>';
                    setTimeout(() => notification.remove(), 2000);
                }
                
                // 토너먼트 화면으로 이동
                const tournamentUI = (window as any).tournamentUI;
                if (tournamentUI) {
                    await tournamentUI.joinTournament(tournamentId);
                    tournamentUI.showTournamentLobby();
                }
            } else {
                const error = await response.json();
                if (notification) {
                    notification.innerHTML = `<p class="text-red-600">${error.error || 'Failed to join'}</p>`;
                    setTimeout(() => notification.remove(), 3000);
                }
            }
        } catch (error) {
            console.error('Error accepting tournament invite:', error);
            const notification = document.getElementById(`tournament-invite-${tournamentId}`);
            if (notification) {
                notification.innerHTML = '<p class="text-red-600">Network error</p>';
                setTimeout(() => notification.remove(), 3000);
            }
        }
    }

    private declineTournamentInvite(tournamentId: string): void {
        const notification = document.getElementById(`tournament-invite-${tournamentId}`);
        if (notification) {
            notification.remove();
        }
    }

    public onTournamentInvite(callback: (invite: any) => void): void {
        this.tournamentInviteCallbacks.add(callback);
    }

    public offTournamentInvite(callback: (invite: any) => void): void {
        this.tournamentInviteCallbacks.delete(callback);
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