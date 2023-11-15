import { Request, Response } from 'express';

class UserController {
  async signup(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'SignUp' });
  }

  async login(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Login' });
  }

  async logout(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Logout' });
  }

  async refresh(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Refresh' });
  }

  async get(req: Request, res: Response): Promise<void> {
    res.send(`Get User With ID ${req.params.id}`);
  }
}

export default new UserController();
