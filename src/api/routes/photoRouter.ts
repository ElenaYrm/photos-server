import express from 'express';
import { PhotoController } from '../controllers';

const photoRouter = express.Router();

photoRouter.get('/', PhotoController.getAll);
photoRouter.post('/', PhotoController.create);

export { photoRouter };
