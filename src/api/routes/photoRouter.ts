import express from 'express';

const photoRouter = express.Router();

photoRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Get photos' });
});

export { photoRouter };
