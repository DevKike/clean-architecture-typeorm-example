import { DataSource, Repository } from "typeorm";
import { IUser } from "../../../domain/interfaces/user/IUser";
import { IUserRepository } from "../../../domain/interfaces/user/IUserRepository";
import { User } from "../../database/entities/User";

export class UserRepository implements IUserRepository {
  private readonly userRepository: Repository<User>;

  constructor(private readonly dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async save(user: IUser): Promise<void> {
    try {
      await this.userRepository.insert(user);
    } catch (error) {
      throw error;
    }
  }
}
