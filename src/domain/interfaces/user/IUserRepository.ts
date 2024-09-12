import { IUser } from "./IUser";

export interface IUserRepository {
  save(user: IUser): Promise<void>;
}
