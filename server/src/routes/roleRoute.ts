import { Router } from "express";
import RoleController from "../controllers/roleController";

class RoleRoute {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', RoleController.getList);
    this.router.get('/:id', RoleController.getById);
    this.router.post('/', RoleController.create);
    this.router.put('/:id', RoleController.update);
    this.router.delete('/:id', RoleController.delete);
  }

}

export default new RoleRoute().router;