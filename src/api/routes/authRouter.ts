import express from 'express';
import { UserController } from '../controllers';
import { body } from 'express-validator';

const authRouter = express.Router();

authRouter.post(
  '/signup',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  body('user_name').notEmpty(),
  UserController.signup,
);
authRouter.post('/login', body('email').isEmail(), body('password').isLength({ min: 8 }), UserController.login);
authRouter.post('/logout', UserController.logout);
authRouter.get('/refresh', UserController.refresh);

export { authRouter };
