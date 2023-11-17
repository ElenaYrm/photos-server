import { NextFunction, Request, Response } from 'express';
import CommentsService from '../services/commentsService';
import { ApiError } from '../../error';
import { CommentsDto } from '../dtos/commentsDto';

class CommentsController {
  async getByPhoto(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { photo } = req.query;
      if (!photo) throw ApiError.BadRequest('Incorrect photo id');

      const comments = await CommentsService.getByPhotoId(+photo);
      const response = comments.map((item) => new CommentsDto(item));

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

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
