
import {Router} from 'express';
import AuthRoute from './authRoute';
import UserRoute from './userRoute';

class MainRoute {
  public router: Router = Router();

  constructor(){
    this.initializeRoutes();
  }

  private initializeRoutes(){
    this.router.use('/auth', AuthRoute);
    this.router.get('/user', UserRoute);
  }
  
}

export default new MainRoute().router;