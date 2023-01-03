import { IUser } from "../../entities/interface/IUser";

export interface IUserRepository {
  listAll(): Promise<IUser[] | undefined>;
  create(data: IUser): Promise<IUser | undefined>;
  delete(id: string): Promise<IUser | undefined>;
  update(id: string, data: IUser): Promise<IUser | undefined>;
}
