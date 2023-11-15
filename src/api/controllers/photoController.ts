import { NextFunction, Request, Response } from 'express';

class PhotoController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.status(200).json({ message: 'Get photos' });
    } catch (error) {
      next(error);
    }
  }
}

export default new PhotoController();
