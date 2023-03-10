import { IUser } from "../entities/interface/IUser";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

export class ListUserService {
  private repository: IUserRepository;
  constructor(iUserRepository: IUserRepository) {
    this.repository = iUserRepository;
  }

  public async execute(): Promise<IUser[] | undefined> {
    const users = await this.repository.listAll();
    if (!users) {
      throw new Error("Some error for get all users");
    }
    return users;
  }
}
