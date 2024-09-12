import express, { Application } from "express";
import { Environment } from "./infrastructure/environment/Environment";
import { AppDataSource } from "./infrastructure/database/config/typeorm";
import { ErrorHandler } from "./presentation/middlewares/ErrorHandler";
import { RouterManager } from "./presentation/driving/RouterManager";
import { UserRouter } from "./presentation/driving/user/UserRouter";
import { UserController } from "./presentation/driving/user/UserController";
import { UserCreationUseCase } from "./application/usecases/user/UserCreationUseCase";
import { UserService } from "./domain/services/user/UserService";
import { UserRepository } from "./infrastructure/repositories/user/UserRepository";

const app: Application = express();

app.use(express.json());

const appDataSource = AppDataSource;
const userRepository = new UserRepository(appDataSource);
const userService = new UserService(userRepository);
const userCreationUseCase = new UserCreationUseCase(userService);
const userController = new UserController(userCreationUseCase);
const userRouter = new UserRouter(userController);
const routerManager = new RouterManager(app, userRouter);

routerManager.manageRoutes();
app.use(ErrorHandler.handle);

app.listen(Environment.PORT, async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
    console.log(`Server running at http://localhost:${Environment.PORT}`);
  } catch (error) {
    throw error;
  }
});
