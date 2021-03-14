import 'module-alias/register';
import 'dotenv/config';

import env from './core/env';
import logger from './core/logger';
import initializeServer from './core/app';

process.on('unhandledRejection', (e) => {
  logger.error('UNHANDLED_REJECTION: ', e);
});

process.on('uncaughtException', (e) => {
  logger.error('UNCAUGHT_EXCEPTION: ', e);
  logger.warning('NODE_WARN: ', {
    stack: 'Uncaught Exception detected. Restarting...'
  });
  process.exit(1);
});

const initializeApp = (): void => {
  const server = initializeServer();
  server.listen(env.EXPRESS_PORT || 3000);
};

initializeApp();
