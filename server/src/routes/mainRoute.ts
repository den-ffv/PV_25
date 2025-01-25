
import {Router} from 'express';
import AuthRoute from './authRoute';

class MainRoute {
  public router: Router = Router();

  constructor(){
    this.initializeRoutes();
  }

  private initializeRoutes(){
    this.router.use('/auth', AuthRoute);
  }
  
}

export default new MainRoute().router;