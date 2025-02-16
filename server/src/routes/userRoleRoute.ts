import { Router } from "express";
import UserRoleController from "../controllers/userController";

class UserRoleRoute {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', UserRoleController.getList);
    this.router.get('/:id', UserRoleController.getById);
    this.router.post('/', UserRoleController.create);
    this.router.put('/:id', UserRoleController.update);
    this.router.delete('/:id', UserRoleController.delete);
  }

}

export default new UserRoleRoute().router;