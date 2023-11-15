import { Request, Response } from 'express';

class PhotoController {
  async getAll(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Get photos' });
  }
}

export default new PhotoController();
