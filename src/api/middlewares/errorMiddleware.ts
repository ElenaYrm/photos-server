import { ApiError } from '../../error';
import { Response, Request, NextFunction } from 'express';

export const errorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): Response<unknown, Record<string, unknown>> => {
  if (error instanceof ApiError) {
    return res.status(error.status).json({ message: error.message, errors: error.errors });
  }
  return res.status(500).json({ message: 'Unknown error' });
};
