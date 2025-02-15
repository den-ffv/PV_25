import { Router } from "express";
import UserController from "../controllers/userController";

class UserRoute {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', UserController.getList);
    this.router.get('/:id', UserController.getById);
    this.router.post('/', UserController.create);
    this.router.put('/:id', UserController.update);
    this.router.delete('/:id', UserController.delete);
  }

}

export default new UserRoute().router;