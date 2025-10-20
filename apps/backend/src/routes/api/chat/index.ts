import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { dbGet, dbAll, dbRun } from '../../../database/helpers';
import jwt from 'jsonwebtoken';

const chatConnections = new Map<number, any>();

async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = (request.cookies as any).auth_token;
    if (!token) {
      return reply.code(401).send({ error: 'Unauthorized' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
    request.user = decoded;
  } catch (err) {
    return reply.code(401).send({ error: 'Unauthorized' });
  }
}

export default async function chatRoutes(fastify: FastifyInstance) {
  
  fastify.get('/token', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const token = (request.cookies as any).auth_token;
      if (!token) {
        return reply.code(401).send({ error: 'No token found' });
      }
      return reply.send({ success: true, token });
    } catch (error) {
      fastify.log.error('Error fetching token:', error);
      return reply.code(500).send({ error: 'Failed to fetch token' });
    }
  });
  
  fastify.get('/ws', { websocket: true }, (connection, req) => {
    
    fastify.log.info('🟢 WebSocket connection attempt');
    fastify.log.info('📋 Cookies:', req.cookies);
    fastify.log.info('📋 Query params:', req.query);
    
    const tokenFromCookie = (req.cookies as any).auth_token;
    const tokenFromQuery = (req.query as any).token;
    const token = tokenFromCookie || tokenFromQuery;
    
    fastify.log.info('🎫 Token found:', token ? 'YES' : 'NO');
    
    if (!token) {
      fastify.log.error('❌ Chat WebSocket: No auth token');
      connection.close(1008, 'No auth token');
      return;
    }

    let userId: number;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
      userId = decoded.userId;
      
      if (!userId) {
        fastify.log.error('❌ Chat WebSocket: Invalid token payload');
        connection.close(1008, 'Invalid token');
        return;
      }
      
      fastify.log.info(`✅ User ${userId} authenticated via WebSocket`);
      
    } catch (error) {
      fastify.log.error('❌ Chat WebSocket: JWT verification failed', error);
      connection.close(1008, 'Invalid token');
      return;
    }
    
    chatConnections.set(userId, connection);
    fastify.log.info(`📌 User ${userId} connected to chat WebSocket`);
    
    const onlineUsers = Array.from(chatConnections.keys());
    connection.send(JSON.stringify({
      type: 'online_users',
      users: onlineUsers
    }));
    
    broadcastToOthers({
      type: 'user_online',
      userId: userId
    }, userId);
    
    connection.on('message', async (data: Buffer) => {
      try {
        const message = JSON.parse(data.toString());
        
        fastify.log.info(`Message from user ${userId}:`, message);
        
        switch(message.type) {
          case 'send_message':
            await handleSendMessage(userId, message, fastify);
            break;
            
          case 'typing':
            await handleTyping(userId, message);
            break;
            
          case 'stop_typing':
            await handleStopTyping(userId, message);
            break;
            
          case 'game_invite':
            await handleGameInvite(userId, message, fastify);
            break;
            
          case 'ping':
            connection.send(JSON.stringify({ type: 'pong' }));
            break;
          
          case 'game_invite_accepted':
            await handleGameInviteAccepted(userId, message, fastify);
            break;

          case 'game_invite_declined':
            await handleGameInviteDeclined(userId, message, fastify);
            break;
            
          default:
            fastify.log.warn(`Unknown message type: ${message.type}`);
        }
      } catch (error) {
        fastify.log.error('WebSocket message error:', error);
        connection.send(JSON.stringify({
          type: 'error',
          message: 'Failed to process message'
        }));
      }
    });
    
    connection.on('close', () => {
      chatConnections.delete(userId);
      fastify.log.info(`User ${userId} disconnected from chat`);
      
      broadcastToOthers({
        type: 'user_offline',
        userId: userId
      }, userId);
    });
  });
  
  fastify.get('/messages/:userId', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
    const { userId: targetUserId } = request.params as { userId: string };
    const currentUserId = (request as any).user.userId;
    
    try {
      const messages = await dbAll(`
        SELECT 
          m.id,
          m.message,
          m.sender_id,
          m.receiver_id,
          m.created_at,
          m.is_read,
          s.nickname as sender_nickname,
          s.avatar_url as sender_avatar
        FROM chat_messages m
        JOIN users s ON m.sender_id = s.id
        WHERE (m.sender_id = ? AND m.receiver_id = ?) 
           OR (m.sender_id = ? AND m.receiver_id = ?)
        ORDER BY m.created_at ASC
        LIMIT 100
      `, [currentUserId, targetUserId, targetUserId, currentUserId]);
      
      await dbRun(
        'UPDATE chat_messages SET is_read = 1 WHERE sender_id = ? AND receiver_id = ? AND is_read = 0',
        [parseInt(targetUserId), currentUserId]
      );
      
      reply.send({ 
        success: true, 
        messages: messages 
      });
      
    } catch (error) {
      fastify.log.error('Error fetching messages:', error);
      reply.code(500).send({ 
        success: false, 
        error: 'Failed to fetch messages' 
      });
    }
  });
  
  fastify.get('/conversations', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
    const currentUserId = (request as any).user.userId;
    
    try {
      const conversations = await dbAll(`
        WITH LastMessages AS (
          SELECT 
            CASE 
              WHEN sender_id = ? THEN receiver_id
              ELSE sender_id
            END as other_user_id,
            MAX(created_at) as last_msg_time
          FROM chat_messages
          WHERE sender_id = ? OR receiver_id = ?
          GROUP BY other_user_id
        )
        SELECT 
          u.id as user_id,
          u.nickname,
          u.avatar_url,
          (SELECT message FROM chat_messages 
           WHERE ((sender_id = ? AND receiver_id = u.id) 
              OR (sender_id = u.id AND receiver_id = ?))
           ORDER BY created_at DESC LIMIT 1) as last_message,
          lm.last_msg_time,
          (SELECT COUNT(*) FROM chat_messages 
           WHERE sender_id = u.id AND receiver_id = ? AND is_read = 0) as unread_count
        FROM LastMessages lm
        JOIN users u ON u.id = lm.other_user_id
        ORDER BY lm.last_msg_time DESC
      `, [currentUserId, currentUserId, currentUserId, currentUserId, currentUserId, currentUserId]);
      
      reply.send({ 
        success: true, 
        conversations: conversations 
      });
      
    } catch (error) {
      fastify.log.error('Error fetching conversations:', error);
      reply.code(500).send({ 
        success: false, 
        error: 'Failed to fetch conversations' 
      });
    }
  });
  
  fastify.get('/users', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
    const currentUserId = (request as any).user.userId;
    
    try {
      const users = await dbAll(`
        SELECT 
          u.id, 
          u.nickname, 
          u.avatar_url, 
          u.rating
        FROM users u
        INNER JOIN users_friends uf ON (
          (uf.user_id = ? AND uf.friend_id = u.id) 
          OR (uf.user_id = u.id AND uf.friend_id = ?)
        )
        WHERE u.id != ?
          AND u.profile_setup_complete = 1
          AND uf.status = 'accepted'
        GROUP BY u.id
        ORDER BY u.nickname
      `, [currentUserId, currentUserId, currentUserId]);
      
      const usersWithStatus = users.map(user => ({
        ...user,
        isOnline: chatConnections.has(user.id)
      }));
      
      reply.send({ 
        success: true, 
        users: usersWithStatus 
      });
      
    } catch (error) {
      fastify.log.error('Error fetching users:', error);
      reply.code(500).send({ 
        success: false, 
        error: 'Failed to fetch users' 
      });
    }
  });
  
  fastify.post('/block/:userId', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
    const { userId: targetUserId } = request.params as { userId: string };
    const currentUserId = (request as any).user.userId;
    
    try {
      const existing = await dbGet(
        'SELECT * FROM users_friends WHERE user_id = ? AND friend_id = ?',
        [currentUserId, parseInt(targetUserId)]
      );
      
      if (existing) {
        await dbRun(
          'UPDATE users_friends SET status = ? WHERE user_id = ? AND friend_id = ?',
          ['blocked', currentUserId, parseInt(targetUserId)]
        );
      } else {
        await dbRun(
          'INSERT INTO users_friends (user_id, friend_id, status) VALUES (?, ?, ?)',
          [currentUserId, parseInt(targetUserId), 'blocked']
        );
      }
      
      reply.send({ 
        success: true, 
        message: 'User blocked successfully' 
      });
      
    } catch (error) {
      fastify.log.error('Error blocking user:', error);
      reply.code(500).send({ 
        success: false, 
        error: 'Failed to block user' 
      });
    }
  });
  
  fastify.delete('/block/:userId', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
    const { userId: targetUserId } = request.params as { userId: string };
    const currentUserId = (request as any).user.userId;
    
    try {
      const result = await dbRun(
        'DELETE FROM users_friends WHERE user_id = ? AND friend_id = ? AND status = ?',
        [currentUserId, parseInt(targetUserId), 'blocked']
      );
      
      if (result.changes === 0) {
        return reply.code(404).send({ 
          success: false, 
          error: 'User was not blocked' 
        });
      }
      
      reply.send({ 
        success: true, 
        message: 'User unblocked successfully' 
      });
      
    } catch (error) {
      fastify.log.error('Error unblocking user:', error);
      reply.code(500).send({ 
        success: false, 
        error: 'Failed to unblock user' 
      });
    }
  });
  
  fastify.get('/blocked', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
    const currentUserId = (request as any).user.userId;
    
    try {
      const blockedUsers = await dbAll(`
        SELECT u.id, u.nickname, u.avatar_url
        FROM users_friends uf
        JOIN users u ON uf.friend_id = u.id
        WHERE uf.user_id = ? AND uf.status = 'blocked'
        ORDER BY uf.created_at DESC
      `, [currentUserId]);
      
      reply.send({ 
        success: true, 
        blockedUsers: blockedUsers 
      });
      
    } catch (error) {
      fastify.log.error('Error fetching blocked users:', error);
      reply.code(500).send({ 
        success: false, 
        error: 'Failed to fetch blocked users' 
      });
    }
  });

  //CHAT
  // ✅ NOUVELLE ROUTE : Notifications de tournoi
  fastify.post('/tournament/notify', { preHandler: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {
    const { userIds, message, tournamentId } = request.body as { 
      userIds: number[], 
      message: string,
      tournamentId?: number 
    };
    
    try {
      const notifications = {
        type: 'tournament_notification',
        message: message,
        tournamentId: tournamentId,
        timestamp: new Date().toISOString()
      };
      
      let notifiedCount = 0;
      userIds.forEach(userId => {
        const conn = chatConnections.get(userId);
        if (conn) {
          conn.send(JSON.stringify(notifications));
          notifiedCount++;
        }
      });
      
      reply.send({ 
        success: true, 
        notified: notifiedCount,
        total: userIds.length,
        message: 'Tournament notifications sent' 
      });
      
    } catch (error) {
      fastify.log.error('Error sending tournament notifications:', error);
      reply.code(500).send({ 
        success: false, 
        error: 'Failed to send notifications' 
      });
    }
  });
}

async function handleSendMessage(senderId: number, message: any, fastify: FastifyInstance) {
  const { receiverId, text } = message;
  
  const blockedByReceiver = await dbGet(
    `SELECT 1 FROM users_friends 
     WHERE user_id = ? AND friend_id = ? AND status = 'blocked'`,
    [receiverId, senderId]
  );
  
  const blockedBySender = await dbGet(
    `SELECT 1 FROM users_friends 
     WHERE user_id = ? AND friend_id = ? AND status = 'blocked'`,
    [senderId, receiverId]
  );
  
  const senderConn = chatConnections.get(senderId);
  
  if (blockedByReceiver) {
    senderConn?.send(JSON.stringify({
      type: 'error',
      message: 'You are blocked by this user'
    }));
    return;
  }
  
  if (blockedBySender) {
    senderConn?.send(JSON.stringify({
      type: 'error',
      message: 'You have blocked this user'
    }));
    return;
  }
  
  const result = await dbRun(
    'INSERT INTO chat_messages (sender_id, receiver_id, message) VALUES (?, ?, ?)',
    [senderId, receiverId, text]
  );
  
  const senderInfo = await dbGet(
    'SELECT nickname, avatar_url FROM users WHERE id = ?',
    [senderId]
  );
  
  const messageData = {
    id: result.lastID,
    sender_id: senderId,
    receiver_id: receiverId,
    sender_nickname: senderInfo.nickname,
    sender_avatar: senderInfo.avatar_url,
    message: text,
    created_at: new Date().toISOString()
  };
  
  fastify.log.info(`Message saved: ${senderId} -> ${receiverId}`);
  
  const receiverConn = chatConnections.get(receiverId);
  if (receiverConn) {
    receiverConn.send(JSON.stringify({
      type: 'new_message',
      message: messageData
    }));
    fastify.log.info(`Message sent to receiver ${receiverId}`);
  } else {
    fastify.log.info(`Receiver ${receiverId} is offline`);
  }
  
  senderConn?.send(JSON.stringify({
    type: 'message_sent',
    message: messageData
  }));
}

async function handleTyping(senderId: number, message: any) {
  const { receiverId } = message;
  
  const receiverConn = chatConnections.get(receiverId);
  if (receiverConn) {
    receiverConn.send(JSON.stringify({
      type: 'user_typing',
      userId: senderId
    }));
  }
}

async function handleStopTyping(senderId: number, message: any) {
  const { receiverId } = message;
  
  const receiverConn = chatConnections.get(receiverId);
  if (receiverConn) {
    receiverConn.send(JSON.stringify({
      type: 'user_stop_typing',
      userId: senderId
    }));
  }
}

//CHAT
// ✅ FIX : Envoyer confirmation au sender + gérer offline
async function handleGameInvite(senderId: number, message: any, fastify: FastifyInstance) {
  const { receiverId } = message;
  
  const senderInfo = await dbGet(
    'SELECT nickname FROM users WHERE id = ?',
    [senderId]
  );
  
  const receiverInfo = await dbGet(
    'SELECT nickname FROM users WHERE id = ?',
    [receiverId]
  );
  
  // Envoyer au receiver
  const receiverConn = chatConnections.get(receiverId);
  if (receiverConn) {
    receiverConn.send(JSON.stringify({
      type: 'game_invitation',
      senderId: senderId,
      senderNickname: senderInfo.nickname,
      message: `${senderInfo.nickname} invites you to play Pong!`
    }));
    fastify.log.info(`✅ Game invite sent: ${senderId} -> ${receiverId}`);
    
    //CHAT
    // ✅ NOUVEAU : Confirmer au sender que l'invitation est partie
    const senderConn = chatConnections.get(senderId);
    if (senderConn) {
      senderConn.send(JSON.stringify({
        type: 'game_invite_sent',
        receiverId: receiverId,
        receiverNickname: receiverInfo?.nickname || 'User',
        message: 'Game invitation sent'
      }));
    }
  } else {
    //CHAT
    // ✅ AMÉLIORATION : Notifier le sender que le receiver est offline
    const senderConn = chatConnections.get(senderId);
    if (senderConn) {
      senderConn.send(JSON.stringify({
        type: 'error',
        message: `${receiverInfo?.nickname || 'User'} is offline`
      }));
    }
    fastify.log.info(`❌ Receiver ${receiverId} is offline`);
  }
}

function broadcastToOthers(message: any, exceptUserId: number) {
  const messageStr = JSON.stringify(message);
  
  chatConnections.forEach((connection, userId) => {
    if (userId !== exceptUserId) {
      try {
        connection.send(messageStr);
      } catch (error) {
        console.error(`Failed to broadcast to user ${userId}:`, error);
      }
    }
  });

  
}

async function handleGameInviteAccepted(receiverId: number, message: any, fastify: FastifyInstance) {
  const { senderId } = message;
  
  fastify.log.info(`Game invite accepted: ${receiverId} accepted invite from ${senderId}`);
  
  const senderConn = chatConnections.get(senderId);
  if (senderConn) {
    senderConn.send(JSON.stringify({
      type: 'game_invite_accepted_notification',
      message: 'Your game invitation was accepted! Starting matchmaking...'
    }));
  }
}

async function handleGameInviteDeclined(receiverId: number, message: any, fastify: FastifyInstance) {
  const { senderId } = message;
  
  fastify.log.info(`Game invite declined: ${receiverId} declined invite from ${senderId}`);
  
  const senderConn = chatConnections.get(senderId);
  if (senderConn) {
    senderConn.send(JSON.stringify({
      type: 'game_invite_declined_notification',
      message: 'Your game invitation was declined'
    }));
  }
}