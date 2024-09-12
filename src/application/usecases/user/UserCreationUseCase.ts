import { IUser } from "../../../domain/interfaces/user/IUser";
import { IUserService } from "../../../domain/interfaces/user/IUserService";
import { IUserCreationUseCase } from "../../../domain/interfaces/user/IUserCreationUseCase";

export class UserCreationUseCase implements IUserCreationUseCase {
  constructor(private readonly userService: IUserService) {}

  async execute(user: IUser): Promise<void> {
    await this.userService.createUser(user);
  }
}
