import { Application } from "express";
import { IRouterManager } from "../interfaces/driving/IRouterManager";
import { UserRouter } from "./user/UserRouter";

export class RouterManager implements IRouterManager {
  private readonly app: Application;
  private readonly userRouter: UserRouter;

  constructor(app: Application, userRouter: UserRouter) {
    this.app = app;
    this.userRouter = userRouter;
  }

  manageRoutes(): void {
    this.app.use("/api/users", this.userRouter.getRouter());
  }
}
