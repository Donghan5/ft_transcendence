import winston from 'winston';
import TransportStream from 'winston-transport';

// Custom transport to send logs to Logstash
class LogstashTransport extends TransportStream {
  constructor(opts: any) {
    super(opts);
  }

  log(info: any, callback: () => void) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    // In production, you would send this to Logstash TCP port
    if (process.env.NODE_ENV === 'production' && process.env.LOGSTASH_HOST) {
      // TCP connection to Logstash would go here
      // For simplicity, we'll use file logging that Logstash will pick up
    }

    callback();
  }
}

// Create the main logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'pong-backend' },
  transports: [
    // Console logging
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    
    // File logging (picked up by Logstash)
    new winston.transports.File({
      filename: '/var/log/pong/app.log',
      level: 'info'
    }),
    
    // Error file
    new winston.transports.File({
      filename: '/var/log/pong/error.log',
      level: 'error'
    }),

    // Custom Logstash transport
    new LogstashTransport({})
  ]
});

// Specific loggers for different components
export const gameLogger = logger.child({ component: 'game' });
export const apiLogger = logger.child({ component: 'api' });
export const userLogger = logger.child({ component: 'user' });

// Game-specific logging functions
export const logGameEvent = (gameId: string, eventType: string, data: any) => {
  const logEntry = {
    game_id: gameId,
    event_type: eventType,
    timestamp: new Date().toISOString(),
    ...data
  };

  // Log to file (for Logstash pickup)
  winston.createLogger({
    format: winston.format.json(),
    transports: [
      new winston.transports.File({
        filename: '/var/log/pong/game-events.log'
      })
    ]
  }).info(logEntry);

  // Also log to main logger
  gameLogger.info(`Game event: ${eventType}`, logEntry);
};

// User activity logging
export const logUserActivity = (userId: string, activity: string, metadata: any) => {
  const logEntry = {
    user_id: userId,
    activity,
    timestamp: new Date().toISOString(),
    ...metadata
  };

  winston.createLogger({
    format: winston.format.json(),
    transports: [
      new winston.transports.File({
        filename: '/var/log/pong/user-activity.log'
      })
    ]
  }).info(logEntry);

  userLogger.info(`User activity: ${activity}`, logEntry);
};

export default logger;
