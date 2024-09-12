import { Router } from "express";
import { IRouterModule } from "../../interfaces/driving/IRouterModule";
import { IUserController } from "../../interfaces/driving/user/IUserController";

export class UserRouter implements IRouterModule {
  private userRouter: Router;

  constructor(private readonly userController: IUserController) {
    this.userRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.userRouter.post("/", (req, res, next) => {
      this.userController.createUser(req, res, next);
    });
  }

  getRouter(): Router {
    return this.userRouter;
  }
}
