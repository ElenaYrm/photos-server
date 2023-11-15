import express from 'express';
import { authRouter } from './authRouter';
import { photoRouter } from './photoRouter';
import { commentsRouter } from './commentsRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/photos', photoRouter);
router.use('/comments', commentsRouter);

export { router };
