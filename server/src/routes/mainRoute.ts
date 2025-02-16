
import {Router} from 'express';
import AuthRoute from './authRoute';
import UserRoute from './userRoute';
import RoleRoute from './roleRoute';
import UserRoleRoute from './userRoleRoute';

class MainRoute {
  public router: Router = Router();

  constructor(){
    this.initializeRoutes();
  }

  private initializeRoutes(){
    this.router.use('/auth', AuthRoute);
    this.router.use('/user', UserRoute);
    this.router.use('/role', RoleRoute);
    this.router.use('/user_role', UserRoleRoute);
  }
  
}

export default new MainRoute().router;