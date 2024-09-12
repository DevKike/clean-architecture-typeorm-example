import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../../../domain/interfaces/user/IUser";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
