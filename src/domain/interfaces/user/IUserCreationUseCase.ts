import { IUser } from "../../interfaces/user/IUser";

export interface IUserCreationUseCase {
  execute(user: IUser): Promise<void>;
}
