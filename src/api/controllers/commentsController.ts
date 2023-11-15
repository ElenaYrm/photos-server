import { Request, Response } from 'express';

class CommentsController {
  async create(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Create new comment' });
  }

  async update(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: `Update comment by id: ${req.params.id}` });
  }

  async delete(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: `Delete comment by id: ${req.params.id}` });
  }
}

export default new CommentsController();
