import express from 'express';
import { authRouter } from './authRouter';
import { photoRouter } from './photoRouter';
import { commentsRouter } from './commentsRouter';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/photos', authMiddleware, photoRouter);
router.use('/comments', authMiddleware, commentsRouter);

export { router };
