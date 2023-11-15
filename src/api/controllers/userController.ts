import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import UserService from '../services/userService';
import { refreshCookie, refreshExpire } from '../../constants';
import { ApiError } from '../../error';

class UserController {
  async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const newUser = await UserService.signup(req.body);

      res.cookie(refreshCookie, newUser.refreshToken, { maxAge: refreshExpire, httpOnly: true });
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const { email, password } = req.body;
      const user = await UserService.login(email, password);

      res.cookie(refreshCookie, user.refreshToken, { maxAge: refreshExpire, httpOnly: true });
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.clearCookie(refreshCookie);
      res.status(200).json('User is logout');
    } catch (error) {
      next(error);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { refreshToken } = req.cookies;
      const user = await UserService.refresh(refreshToken);

      res.cookie(refreshCookie, user.refreshToken, { maxAge: refreshExpire, httpOnly: true });
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.send(`Get User With ID ${req.params.id}`);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
