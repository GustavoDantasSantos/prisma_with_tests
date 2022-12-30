import { IUser } from "../../entities/interface/IUser";

export interface IUserRepository {
  listAll(): Promise<IUser[] | undefined>;
}
