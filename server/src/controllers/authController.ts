import { Request, Response } from 'express';

class AuthController {
  // login logic
  public login(req: Request, res: Response) {
    
    return res.status(200).json({ message: 'Login route works!' });
  }

  // register logic
  public register(req: Request, res: Response) {

    return res.status(200).json({ message: 'Register route works!' });
  }
}

export default new AuthController();