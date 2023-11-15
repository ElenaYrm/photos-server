import express from 'express';

const authRouter = express.Router();

authRouter.post('/signup', (req, res) => {
  res.status(200).json({ message: 'SignUp' });
});
authRouter.post('/login', (req, res) => {
  res.status(200).json({ message: 'Login' });
});
authRouter.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logout' });
});
authRouter.get('/refresh', (req, res) => {
  res.status(200).json({ message: 'Refresh' });
});

export { authRouter };
