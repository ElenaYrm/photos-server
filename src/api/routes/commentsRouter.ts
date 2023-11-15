import express from 'express';

const commentsRouter = express.Router();

commentsRouter.post('/', (req, res) => {
  res.status(200).json({ message: 'Create new comment' });
});
commentsRouter
  .route('/:id')
  .put((req, res) => {
    res.status(200).json({ message: 'Update comment by id' });
  })
  .delete((req, res) => {
    res.status(200).json({ message: 'Delete comment by id' });
  });

export { commentsRouter };
