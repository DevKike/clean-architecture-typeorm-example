import { IUser } from "../../interfaces/user/IUser";
import { IUserRepository } from "../../interfaces/user/IUserRepository";
import { IUserService } from "../../interfaces/user/IUserService";

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(user: IUser): Promise<void> {
    await this.userRepository.save(user);
  }
}
