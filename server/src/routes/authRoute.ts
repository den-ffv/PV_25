import { Router } from 'express';
import AuthController from '../controllers/authController';

class AuthRoute {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/register', AuthController.register);
    this.router.post('/login', AuthController.login);
    this.router.post('/logout', AuthController.logout);
    this.router.get('/success', AuthController.success);
    this.router.get('/failure', AuthController.failure);

  }
}

export default new AuthRoute().router;
