import { IUser } from "./IUser";

export interface IUserService {
    createUser(user: IUser): Promise<void>;
}