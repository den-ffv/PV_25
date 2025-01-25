import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import prisma from '../utils/prisma';
import { User } from '@prisma/client';

class AuthController {
  public async register(req: Request, res: Response): Promise<User | void> {
    console.log('[REGISTER]');
    try {
      console.log(req.body);
      const { email, password, name } = req.body;

      const passwordSalt = await bcrypt.genSalt(3);
      const hashedPassword = await bcrypt.hash(password, passwordSalt);
      console.log(hashedPassword);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });
      console.log(user);

      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error: any) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  }

  public login(req: Request, res: Response, next: NextFunction) {
    console.log('[LOGIN]');
    passport.authenticate('local', (err: any, user: User, info: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Authentication error', error: err });
      }
      if (!user) {
        return res.status(401).json({ message: info?.message || 'Invalid credentials' });
      }
  
      req.logIn(user, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Login failed', error: err });
        }
        return res.status(200).json({ message: 'Login successful', user });
      });
    })(req, res, next);
  }
  

  public async logout(req: Request, res: Response) {
    console.log('[LOGOUT]');
      req.logout((err: any) => {
        if (err) {
          return res.status(500).json({ message: 'Error logging out', error: err });
        }
        res.status(200).json({ message: 'Logged out' });
      });
  }

  public success(req: Request, res: Response) {    
    res.status(200).json({ message: 'Login successful', user: req.user });
  }

  public failure(req: Request, res: Response) {
    res.status(401).json({ message: 'Login failed' });
  }
}

export default new AuthController();
