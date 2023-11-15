import express from 'express';
import { CommentsController } from '../controllers';

const commentsRouter = express.Router();

commentsRouter.post('/', CommentsController.create);
commentsRouter.route('/:id').put(CommentsController.update).delete(CommentsController.delete);

export { commentsRouter };
