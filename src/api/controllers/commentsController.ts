import { NextFunction, Request, Response } from 'express';

class CommentsController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.status(200).json({ message: 'Create new comment' });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.status(200).json({ message: `Update comment by id: ${req.params.id}` });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.status(200).json({ message: `Delete comment by id: ${req.params.id}` });
    } catch (error) {
      next(error);
    }
  }
}

export default new CommentsController();
