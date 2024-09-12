import { NextFunction, Request, Response } from "express";
import { IUserController } from "../../interfaces/driving/user/IUserController";
import { IUserCreationUseCase } from "../../../domain/interfaces/user/IUserCreationUseCase";
import { IUser } from "../../../domain/interfaces/user/IUser";
import { HttpStatusCode } from "../../http/HttpStatusCode";
import { MessageConstants } from "../../messages/MessageConstants";

export class UserController implements IUserController {
  constructor(private readonly userCreationUseCase: IUserCreationUseCase) {}

  async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user: IUser = req.body;
      await this.userCreationUseCase.execute(user);
      res.status(HttpStatusCode.CREATED).json({ message: MessageConstants.USER_CREATED_SUCCESSFULLY });
    } catch (error) {
      next(error);
    }
  }
}
