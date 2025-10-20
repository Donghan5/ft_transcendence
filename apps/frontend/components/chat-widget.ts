interface User {
  id: number;
  nickname: string;
  avatar_url?: string;
  isOnline?: boolean;
  rating?: number;
}

interface Message {
  id: number;
  sender_id: number;
  receiver_id: number;
  sender_nickname: string;
  message: string;
  created_at: string;
}

interface Conversation {
  user_id: number;
  nickname: string;
  avatar_url?: string;
  last_message: string | null;
  last_msg_time: string | null;
  unread_count: number;
  isOnline?: boolean;
}

export class ChatWidget {
  private container: HTMLElement | null = null;
  private isOpen: boolean = false;
  private ws: WebSocket | null = null;
  private currentChatUserId: number | null = null;
  private currentChatUserNickname: string = '';
  private currentView: 'conversations' | 'chat' | 'blocked' = 'conversations';
  private typingTimeout: number | null = null;
  private isCurrentUserBlocked: boolean = false;

  constructor() {
    this.init();
  }

  private init(): void {
    this.createWidget();
    this.attachEventListeners();
    this.connectWebSocket();
  }

  private async connectWebSocket(): Promise<void> {
    try {
      console.log('Fetching auth token from API...');
      
      const response = await fetch('/api/chat/token', { credentials: 'include' });
      
      console.log('Token API response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to fetch auth token:', response.status, errorText);
        setTimeout(() => this.connectWebSocket(), 3000);
        return;
      }
      
      const data = await response.json();
      console.log('Token API response:', data);
      
      const token = data.token;
      
      if (!token) {
        console.error('No token in API response');
        setTimeout(() => this.connectWebSocket(), 3000);
        return;
      }

      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/api/chat/ws?token=${token}`;
      
      console.log('Connecting to Chat WebSocket...');
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        console.log('Chat WebSocket connected');
      };

      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log('Message received:', data);
          this.handleWebSocketMessage(data);
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      this.ws.onclose = (event) => {
        console.log('WebSocket closed:', event.code, event.reason);
        setTimeout(() => this.connectWebSocket(), 3000);
      };
    } catch (error) {
      console.error('Exception in connectWebSocket:', error);
      setTimeout(() => this.connectWebSocket(), 3000);
    }
  }

  private handleWebSocketMessage(data: any): void {
    switch (data.type) {
      case 'online_users':
        this.updateOnlineUsers(data.users);
        break;
      case 'user_online':
        this.markUserOnline(data.userId);
        break;
      case 'user_offline':
        this.markUserOffline(data.userId);
        break;
      case 'new_message':
        this.handleNewMessage(data.message);
        break;
      case 'message_sent':
        this.handleMessageSent(data.message);
        break;
      case 'user_typing':
        this.showTypingIndicator(data.userId);
        break;
      case 'user_stop_typing':
        this.hideTypingIndicator(data.userId);
        break;
      case 'game_invitation':
        this.handleGameInvitation(data);
        break;
      case 'game_invite_sent':
        this.addSystemMsg(`Game invitation sent to ${data.receiverNickname}`);
        break;
      case 'game_invite_accepted_notification':
        this.handleGameInviteAcceptedNotification(data);
        break;
      case 'game_invite_declined_notification':
        alert(data.message);
        break;
      case 'tournament_notification':
        this.handleTournamentNotification(data);
        break;
      case 'error':
        alert(data.message);
        break;
    }
  }

  private handleGameInviteAcceptedNotification(data: any): void {
    console.log('Game invite accepted by opponent - starting matchmaking');
    
    // Afficher une notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white rounded-2xl shadow-2xl p-6 z-[9999] text-center';
    notification.innerHTML = `
      <div class="text-4xl mb-2">✅</div>
      <div class="font-bold text-xl">Invitation Accepted!</div>
      <div class="text-sm mt-2">Starting matchmaking...</div>
    `;
    document.body.appendChild(notification);
    
    // Fermer le chat
    this.close();
    
    // Lancer le matchmaking après 1 seconde
    setTimeout(() => {
      notification.remove();
      if (typeof (window as any).handleGameStart === 'function') {
        (window as any).handleGameStart('pvp');
      }
    }, 1500);
  }

  private createWidget(): void {
    const widget = document.createElement('div');
    widget.id = 'chat-widget';
    widget.className = 'fixed bottom-0 right-0 z-[1000]';
    widget.innerHTML = `
      <button id="chat-toggle-btn" class="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg shadow-yellow-400/40 text-white text-2xl transition-all duration-300 hover:scale-110 z-[1001]">
        <svg class="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span id="unread-badge" class="hidden absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px]">0</span>
      </button>

      <div id="chat-panel" class="fixed top-0 right-0 w-[400px] h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col z-[1002]">
        
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 flex items-center gap-3 text-white flex-shrink-0">
          <button id="chat-back-btn" class="hidden p-2 rounded-full hover:bg-white/20 transition text-lg">←</button>
          <h3 id="chat-title" class="flex-1 text-lg font-semibold truncate">Messages</h3>
          <div class="flex gap-2">
            <button id="blocked-btn" class="p-2 rounded-full hover:bg-white/20 transition" title="Blocked users">🚫</button>
            <button id="chat-close-btn" class="p-2 rounded-full hover:bg-white/20 transition text-xl">×</button>
          </div>
        </div>

        <div id="conversations-view" class="flex-1 flex flex-col overflow-hidden">
          <div class="p-3 bg-white border-b-2 border-yellow-100 flex-shrink-0">
            <input type="text" id="conv-search" placeholder="Search conversations..." 
              class="w-full px-4 py-2 border-2 border-yellow-200 rounded-full outline-none bg-yellow-50 focus:border-yellow-400 focus:bg-white transition" />
          </div>
          <div id="conversations-list" class="flex-1 overflow-y-auto p-2"></div>
        </div>

        <div id="blocked-view" class="hidden flex-1 flex flex-col overflow-hidden">
          <div id="blocked-list" class="flex-1 overflow-y-auto p-2"></div>
        </div>

        <div id="chat-view" class="hidden flex-1 flex flex-col overflow-hidden">
          <div class="flex gap-2 p-3 bg-white border-b border-yellow-100 flex-shrink-0">
            <button id="view-profile-btn" class="flex-1 px-3 py-2 border-2 border-yellow-300 rounded-lg text-sm font-semibold text-yellow-600 hover:bg-yellow-50 transition">👤 View Profile</button>
            <button id="block-btn" class="flex-1 px-3 py-2 border-2 border-red-300 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition">🚫 Block</button>
          </div>
          <div id="chat-messages" class="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-yellow-50"></div>
          <div id="typing-indicator" class="hidden flex items-center gap-1 px-4 py-2">
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
          <div class="p-4 bg-white border-t-2 border-yellow-100 flex gap-2 items-center flex-shrink-0">
            <button id="game-btn" class="p-2 text-lg hover:bg-yellow-50 rounded-full transition" title="Invite to play">🎮</button>
            <input type="text" id="chat-input" placeholder="Type a message..." 
              class="flex-1 px-4 py-3 border-2 border-yellow-200 rounded-full outline-none bg-yellow-50 focus:border-yellow-400 focus:bg-white transition" />
            <button id="chat-send-btn" class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full text-white text-xl hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40 transition flex-shrink-0">📤</button>
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(widget);
    this.container = widget;
  }

  private attachEventListeners(): void {
    document.getElementById('chat-toggle-btn')?.addEventListener('click', () => this.toggle());
    document.getElementById('chat-close-btn')?.addEventListener('click', () => this.close());
    document.getElementById('chat-back-btn')?.addEventListener('click', () => this.goBack());
    document.getElementById('blocked-btn')?.addEventListener('click', () => this.toggleBlockedView());
    document.getElementById('chat-send-btn')?.addEventListener('click', () => this.sendMessage());
    document.getElementById('game-btn')?.addEventListener('click', () => this.sendGameInvite());
    document.getElementById('block-btn')?.addEventListener('click', () => this.blockUser());
    document.getElementById('view-profile-btn')?.addEventListener('click', () => this.viewProfile());
    
    const input = document.getElementById('chat-input') as HTMLInputElement;
    input?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
    input?.addEventListener('input', () => this.handleTyping());

    document.getElementById('conv-search')?.addEventListener('input', (e) => 
      this.filterConversations((e.target as HTMLInputElement).value)
    );
  }

  private viewProfile(): void {
    if (!this.currentChatUserId) return;
    
    this.close();
    
    const event = new CustomEvent('viewUserProfile', {
      detail: { userId: this.currentChatUserId }
    });
    window.dispatchEvent(event);
  }

  private handleTournamentNotification(data: any): void {
    console.log('Tournament notification:', data);
    
    if (this.isOpen && this.currentView === 'conversations') {
      this.addNotificationToList(data.message);
    }
    
    const badge = document.getElementById('unread-badge');
    if (badge && badge.classList.contains('hidden')) {
      badge.classList.remove('hidden');
      badge.textContent = '!';
    }
    
    if (Notification.permission === 'granted') {
      new Notification('Tournament Update', {
        body: data.message,
        icon: '/favicon.ico'
      });
    }
  }

  private addNotificationToList(message: string): void {
    const list = document.getElementById('conversations-list')!;
    const notif = document.createElement('div');
    notif.className = 'p-3 mb-2 bg-blue-100 border-l-4 border-blue-500 rounded text-sm';
    notif.innerHTML = `
      <div class="font-semibold text-blue-900">🏆 Tournament</div>
      <div class="text-blue-700">${this.esc(message)}</div>
    `;
    list.prepend(notif);
  }

  private showConversationsView(): void {
    this.currentView = 'conversations';
    this.hideAllViews();
    document.getElementById('conversations-view')!.classList.remove('hidden');
    document.getElementById('conversations-view')!.classList.add('flex');
    document.getElementById('chat-back-btn')!.classList.add('hidden');
    document.getElementById('chat-title')!.textContent = 'Messages';
    
    const blockedBtn = document.getElementById('blocked-btn')!;
    blockedBtn.innerHTML = '🚫';
    blockedBtn.title = 'Blocked users';
    
    this.loadConversations();
  }

  private showBlockedView(): void {
    this.currentView = 'blocked';
    this.hideAllViews();
    document.getElementById('blocked-view')!.classList.remove('hidden');
    document.getElementById('blocked-view')!.classList.add('flex');
    document.getElementById('chat-back-btn')!.classList.remove('hidden');
    document.getElementById('chat-title')!.textContent = 'Blocked Users';
    
    const blockedBtn = document.getElementById('blocked-btn')!;
    blockedBtn.innerHTML = '↩️';
    blockedBtn.title = 'Back to messages';
    
    this.loadBlockedUsers();
  }

  private toggleBlockedView(): void {
    if (this.currentView === 'blocked') {
      this.showConversationsView();
    } else {
      this.showBlockedView();
    }
  }

  private async showChatView(userId: number, nickname: string): Promise<void> {
    this.currentView = 'chat';
    this.currentChatUserId = userId;
    this.currentChatUserNickname = nickname;
    
    await this.checkIfBlocked(userId);
    
    this.hideAllViews();
    document.getElementById('chat-view')!.classList.remove('hidden');
    document.getElementById('chat-view')!.classList.add('flex');
    document.getElementById('chat-back-btn')!.classList.remove('hidden');
    document.getElementById('chat-title')!.textContent = nickname;
    
    this.updateBlockButton();
    
    this.loadMessageHistory(userId);
  }

  private async checkIfBlocked(userId: number): Promise<void> {
    try {
      const response = await fetch('/api/chat/blocked', { credentials: 'include' });
      const data = await response.json();
      const blockedUsers = data.blockedUsers || [];
      this.isCurrentUserBlocked = blockedUsers.some((u: User) => u.id === userId);
    } catch (error) {
      console.error('Error checking if blocked:', error);
      this.isCurrentUserBlocked = false;
    }
  }

  private updateBlockButton(): void {
    const blockBtn = document.getElementById('block-btn')!;
    if (this.isCurrentUserBlocked) {
      blockBtn.textContent = '✅ Unblock';
      blockBtn.className = 'flex-1 px-3 py-2 border-2 border-green-300 rounded-lg text-sm font-semibold text-green-600 hover:bg-green-50 transition';
    } else {
      blockBtn.textContent = '🚫 Block';
      blockBtn.className = 'flex-1 px-3 py-2 border-2 border-red-300 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition';
    }
  }

  private hideAllViews(): void {
    document.querySelectorAll('#conversations-view, #blocked-view, #chat-view').forEach(v => {
      v.classList.add('hidden');
      v.classList.remove('flex');
    });
  }

  private goBack(): void {
    this.showConversationsView();
  }

  private toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  private open(): void {
    const panel = document.getElementById('chat-panel');
    const btn = document.getElementById('chat-toggle-btn');
    panel?.classList.remove('translate-x-full');
    btn?.classList.add('opacity-0', 'pointer-events-none');
    this.isOpen = true;
    this.showConversationsView();
  }

  private close(): void {
    const panel = document.getElementById('chat-panel');
    const btn = document.getElementById('chat-toggle-btn');
    panel?.classList.add('translate-x-full');
    btn?.classList.remove('opacity-0', 'pointer-events-none');
    this.isOpen = false;
  }

  private async loadConversations(): Promise<void> {
    if (this.currentView !== 'conversations') return;
    await this.loadFriendsForChat();
  }

  private async loadFriendsForChat(): Promise<void> {
    try {
      const res = await fetch('/api/user/friends/all', { credentials: 'include' });
      if (!res.ok) throw new Error('Failed to load friends');
      
      const data = await res.json();
      const friends = data.friends || [];
      
      const convRes = await fetch('/api/chat/conversations', { credentials: 'include' });
      const convData = await convRes.json();
      const conversations = convData.conversations || [];
      
      const existingConvIds = new Set(conversations.map((c: any) => c.user_id));
      
      const allChats = [
        ...conversations,
        ...friends
          .filter((f: any) => !existingConvIds.has(f.id))
          .map((f: any) => ({
            user_id: f.id,
            nickname: f.nickname,
            avatar_url: f.avatar_url,
            last_message: null,
            unread_count: 0,
            last_msg_time: null,
            isOnline: false
          }))
      ];
      
      allChats.sort((a, b) => {
        if (!a.last_msg_time) return 1;
        if (!b.last_msg_time) return -1;
        return new Date(b.last_msg_time).getTime() - new Date(a.last_msg_time).getTime();
      });
      
      this.renderConversations(allChats);
      
    } catch (err) {
      console.error('Error loading friends for chat:', err);
    }
  }

  private async loadBlockedUsers(): Promise<void> {
    try {
      const response = await fetch('/api/chat/blocked', { credentials: 'include' });
      const data = await response.json();
      this.renderBlockedUsers(data.blockedUsers);
    } catch (error) {
      console.error('Error loading blocked users:', error);
    }
  }

  private async loadMessageHistory(userId: number): Promise<void> {
    try {
      const response = await fetch(`/api/chat/messages/${userId}`, { credentials: 'include' });
      const data = await response.json();
      
      const container = document.getElementById('chat-messages')!;
      container.innerHTML = '';
      
      if (data.messages.length === 0) {
        container.innerHTML = '<div class="text-center py-16 text-gray-500">No messages yet. Say hi! 👋</div>';
        return;
      }

      data.messages.forEach((msg: Message) => {
        this.addMessageToUI(
          msg.sender_nickname,
          msg.message,
          msg.sender_id !== this.getCurrentUserId(),
          msg.created_at
        );
      });
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  }

  private renderConversations(convs: Conversation[]): void {
    const list = document.getElementById('conversations-list')!;
    
    if (convs.length === 0) {
      list.innerHTML = `
        <div class="text-center py-16 px-5 text-gray-500">
          No friends yet<br>
          <span class="text-sm">Add friends to start chatting!</span>
        </div>`;
      return;
    }

    list.innerHTML = convs.map(c => `
      <div class="flex items-center gap-3 p-3 bg-white rounded-xl mb-1 cursor-pointer hover:bg-yellow-100 hover:-translate-x-1 transition" 
           onclick="chatWidget.openChat(${c.user_id}, '${this.esc(c.nickname)}')">
        <div class="relative flex-shrink-0">
          ${this.getAvatar(c)}
          <span class="absolute bottom-0.5 right-0.5 w-3 h-3 ${c.isOnline ? 'bg-green-500' : 'bg-gray-400'} border-2 border-white rounded-full"></span>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-gray-800 truncate">${this.esc(c.nickname)}</div>
          <div class="text-sm text-gray-500 truncate">${c.last_message ? this.esc(c.last_message) : '<em>Start conversation</em>'}</div>
        </div>
        ${c.unread_count > 0 ? `<span class="flex-shrink-0 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">${c.unread_count}</span>` : ''}
      </div>
    `).join('');
  }

  private renderBlockedUsers(users: User[]): void {
    const list = document.getElementById('blocked-list')!;
    
    if (users.length === 0) {
      list.innerHTML = '<div class="text-center py-16 text-gray-500">No blocked users</div>';
      return;
    }

    list.innerHTML = users.map(u => `
      <div class="flex items-center gap-3 p-3 bg-white rounded-xl mb-1">
        <div class="flex-shrink-0">${this.getAvatar(u)}</div>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-gray-800 truncate">${this.esc(u.nickname)}</div>
          <div class="text-sm text-gray-500">🚫 Blocked</div>
        </div>
        <button onclick="chatWidget.unblock(${u.id}, '${this.esc(u.nickname)}')" 
                class="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-lg hover:-translate-y-0.5 transition">
          Unblock
        </button>
      </div>
    `).join('');
  }

  private sendMessage(): void {
    const input = document.getElementById('chat-input') as HTMLInputElement;
    const text = input.value.trim();

    if (!text) {
      console.warn('Empty message');
      return;
    }

    if (!this.currentChatUserId) {
      console.error('No recipient');
      return;
    }

    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error('WebSocket not connected!', this.ws?.readyState);
      alert('Connection lost, reconnecting...');
      this.connectWebSocket();
      return;
    }

    console.log('Sending message to:', this.currentChatUserId, text);

    this.ws.send(JSON.stringify({
      type: 'send_message',
      receiverId: this.currentChatUserId,
      text
    }));

    input.value = '';
  }

  private handleNewMessage(msg: Message): void {
    if (msg.sender_id === this.currentChatUserId || msg.receiver_id === this.currentChatUserId) {
      this.addMessageToUI(msg.sender_nickname, msg.message, msg.sender_id !== this.getCurrentUserId(), msg.created_at);
    }
    if (this.currentView === 'conversations') this.loadConversations();
  }

  private handleMessageSent(msg: Message): void {
    this.addMessageToUI('You', msg.message, false, msg.created_at);
  }

  private addMessageToUI(sender: string, text: string, isOwn: boolean, timestamp?: string): void {
    const container = document.getElementById('chat-messages')!;
    const noMsg = container.querySelector('.text-center');
    if (noMsg) noMsg.remove();

    const time = timestamp ? new Date(timestamp).toLocaleTimeString('fr-FR', {hour:'2-digit',minute:'2-digit'}) : '';
    
    const div = document.createElement('div');
    div.className = `flex flex-col gap-1 transition-all duration-300 ${isOwn ? '' : 'items-end'}`;
    div.innerHTML = `
      <div class="max-w-[80%] px-4 py-3 rounded-2xl shadow ${
        isOwn 
          ? 'bg-white text-gray-800 rounded-bl-sm' 
          : 'bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-br-sm'
      }">
        <div class="text-xs font-semibold opacity-80 mb-1">${this.esc(sender)}</div>
        <div class="text-sm leading-relaxed break-words">${this.esc(text)}</div>
      </div>
      <div class="text-xs text-gray-500 px-2">${time}</div>
    `;
    
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  private addSystemMsg(text: string): void {
    const container = document.getElementById('chat-messages')!;
    const div = document.createElement('div');
    div.className = 'text-center text-sm text-gray-500 py-2';
    div.textContent = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  private sendGameInvite(): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      alert('Connection lost!');
      return;
    }
    
    if (!this.currentChatUserId) return;
    
    console.log('Sending game invite to:', this.currentChatUserId);
    
    this.ws.send(JSON.stringify({
      type: 'game_invite',
      receiverId: this.currentChatUserId
    }));
  }

  private handleGameInvitation(data: any): void {
    console.log('Game invitation received:', data);
    
    const container = document.createElement('div');
    container.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 z-[9999] max-w-md';
    container.innerHTML = `
      <div class="text-center">
        <div class="text-6xl mb-4">🎮</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">Game Invitation!</h3>
        <p class="text-gray-600 mb-6">
          <span class="font-semibold text-yellow-600">${this.esc(data.senderNickname)}</span> 
          invites you to play Pong!
        </p>
        <div class="flex gap-3">
          <button id="decline-invite" class="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">
            Decline
          </button>
          <button id="accept-invite" class="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
            Accept & Play!
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(container);
    
    document.getElementById('decline-invite')?.addEventListener('click', () => {
      container.remove();
      console.log('Game invite declined');
      
      // Notifier le sender que l'invitation a été refusée
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          type: 'game_invite_declined',
          senderId: data.senderId
        }));
      }
    });
    
    document.getElementById('accept-invite')?.addEventListener('click', () => {
      container.remove();
      console.log('Game invite accepted - starting matchmaking');
      
      // Notifier le backend que l'invitation est acceptée
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          type: 'game_invite_accepted',
          senderId: data.senderId
        }));
      }
      
      // Fermer le chat et lancer le jeu PvP
      this.close();
      
      // Lancer le matchmaking PvP
      if (typeof (window as any).handleGameStart === 'function') {
        (window as any).handleGameStart('pvp');
      } else {
        console.error('handleGameStart not found');
        window.location.href = '/game';
      }
    });
  }

  private handleTyping(): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    if (!this.currentChatUserId) return;
    
    this.ws.send(JSON.stringify({
      type: 'typing',
      receiverId: this.currentChatUserId
    }));

    if (this.typingTimeout) clearTimeout(this.typingTimeout);
    this.typingTimeout = window.setTimeout(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          type: 'stop_typing',
          receiverId: this.currentChatUserId
        }));
      }
    }, 1000);
  }

  public async blockUser(): Promise<void> {
    if (!this.currentChatUserId) return;
    
    if (this.isCurrentUserBlocked) {
      const ok = confirm(`Unblock ${this.currentChatUserNickname}?`);
      if (!ok) return;
      
      try {
        const res = await fetch(`/api/chat/block/${this.currentChatUserId}`, {
          method: 'DELETE',
          credentials: 'include'
        });
        if (!res.ok) throw new Error('Failed to unblock user');
        
        alert(`${this.currentChatUserNickname} has been unblocked`);
        this.isCurrentUserBlocked = false;
        this.updateBlockButton();
      } catch (err) {
        console.error('Error unblocking user:', err);
        alert('Failed to unblock user');
      }
    } else {
      const ok = confirm(`Block ${this.currentChatUserNickname}?`);
      if (!ok) return;

      try {
        const res = await fetch(`/api/chat/block/${this.currentChatUserId}`, {
          method: 'POST',
          credentials: 'include'
        });
        if (!res.ok) throw new Error('Failed to block user');
        
        alert(`${this.currentChatUserNickname} has been blocked`);
        this.showConversationsView();
      } catch (err) {
        console.error('Error blocking user:', err);
        alert('Failed to block user');
      }
    }
  }

  public async unblock(userId: number, nickname: string): Promise<void> {
    const ok = confirm(`Unblock ${nickname}?`);
    if (!ok) return;

    try {
      const res = await fetch(`/api/chat/block/${userId}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (!res.ok) throw new Error('Failed to unblock user');
      
      alert(`${nickname} has been unblocked`);
      this.loadBlockedUsers();
    } catch (err) {
      console.error('Error unblocking user:', err);
      alert('Failed to unblock user');
    }
  }

  private showTypingIndicator(userId: number): void {
    if (userId === this.currentChatUserId) {
      document.getElementById('typing-indicator')!.classList.remove('hidden');
      document.getElementById('typing-indicator')!.classList.add('flex');
    }
  }

  private hideTypingIndicator(userId: number): void {
    if (userId === this.currentChatUserId) {
      document.getElementById('typing-indicator')!.classList.add('hidden');
      document.getElementById('typing-indicator')!.classList.remove('flex');
    }
  }

  private updateOnlineUsers(users: number[]): void {
    users.forEach(id => this.markUserOnline(id));
  }

  private markUserOnline(userId: number): void {
    document.querySelectorAll(`[data-user-id="${userId}"] .online`).forEach(el => 
      el.classList.add('on')
    );
  }

  private markUserOffline(userId: number): void {
    document.querySelectorAll(`[data-user-id="${userId}"] .online`).forEach(el => 
      el.classList.remove('on')
    );
  }

  private filterConversations(query: string): void {
    const items = document.querySelectorAll('#conversations-list > div');
    items.forEach(item => {
      const name = item.querySelector('.font-semibold')?.textContent?.toLowerCase() || '';
      (item as HTMLElement).style.display = name.includes(query.toLowerCase()) ? '' : 'none';
    });
  }

  private getAvatar(user: User | Conversation): string {
    const avatarUrl = user.avatar_url;
    
    if (!avatarUrl) {
      return `<div class="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl border-2 border-yellow-200">${user.nickname.charAt(0).toUpperCase()}</div>`;
    }
    
    return `<img src="${avatarUrl}" class="w-12 h-12 rounded-full object-cover border-2 border-yellow-200" onerror="this.outerHTML='<div class=\\'w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl border-2 border-yellow-200\\'>${user.nickname.charAt(0).toUpperCase()}</div>'" />`;
  }

  private esc(str: string): string {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  private getCurrentUserId(): number {
    const userData = localStorage.getItem('userData');
    if (!userData) return 0;
    try {
      return JSON.parse(userData).id;
    } catch {
      return 0;
    }
  }

  public openChat(userId: number, nickname: string): void {
    this.showChatView(userId, nickname);
  }

  public destroy(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
    
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
      this.typingTimeout = null;
    }
  }
}

declare global {
  interface Window {
    chatWidget: ChatWidget;
  }
}