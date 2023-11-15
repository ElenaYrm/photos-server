import { NextFunction, Request, Response } from 'express';
import CommentsService from '../services/commentsService';

class CommentsController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const commentData = req.body;
      const newComment = await CommentsService.create(commentData);

      res.status(201).json(newComment);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id;
      const deletedComment = await CommentsService.delete(+id);

      res.status(200).json({ message: `Comment with id ${deletedComment} was successfully deleted` });
    } catch (error) {
      next(error);
    }
  }
}

export default new CommentsController();
