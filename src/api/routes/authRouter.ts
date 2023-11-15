import express from 'express';
import { UserController } from '../controllers';

const authRouter = express.Router();

authRouter.post('/signup', UserController.signup);
authRouter.post('/login', UserController.login);
authRouter.post('/logout', UserController.logout);
authRouter.get('/refresh', UserController.refresh);

export { authRouter };
