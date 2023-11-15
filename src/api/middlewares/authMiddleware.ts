import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../error';
import tokenService from '../services/tokenService';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return next(ApiError.UnauthorizedError());

    const accessToken = authHeader.split(' ')[1];
    if (!accessToken) return next(ApiError.UnauthorizedError());

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) return next(ApiError.UnauthorizedError());

    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
};
