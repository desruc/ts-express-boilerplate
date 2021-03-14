import { ErrorRequestHandler } from 'express';
import { pick } from 'lodash';

import logger from './logger';

import CustomError from './customError';

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  logger.error(JSON.stringify(error));

  const isErrorSafeForClient = error instanceof CustomError;

  const clientError = isErrorSafeForClient
    ? pick(error, ['message', 'code', 'status', 'data', 'errors'])
    : {
        message: 'Something went wrong, please contact our support.',
        code: 'INTERNAL_ERROR',
        status: 500,
        data: {}
      };

  res.status(clientError.status).send({ error: clientError });
};

export default errorHandler;
