import express from 'express';
import { CommentsController } from '../controllers';

const commentsRouter = express.Router();

commentsRouter.get('/', CommentsController.getByPhoto);
commentsRouter.post('/', CommentsController.create);
commentsRouter.delete('/:id', CommentsController.delete);

export { commentsRouter };
