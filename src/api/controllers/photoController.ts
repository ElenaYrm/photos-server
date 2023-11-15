import { NextFunction, Request, Response } from 'express';
import PhotoService from '../services/photoService';

class PhotoController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const photos = await PhotoService.getAll();

      res.status(200).json({ photos });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const photo = await PhotoService.create(req.body);

      res.status(200).json({ photo });
    } catch (error) {
      next(error);
    }
  }
}

export default new PhotoController();
