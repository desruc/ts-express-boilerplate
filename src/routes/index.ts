import { Application } from 'express';

import { checkStatus } from '~/controllers/v1/status';

export const attachRoutes = (app: Application): void => {
  app.get('/status', checkStatus);
};

export default attachRoutes;
