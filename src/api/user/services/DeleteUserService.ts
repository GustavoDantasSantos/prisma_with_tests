import { IUser } from "../entities/interface/IUser";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

export class DeleteUserService {
  private repository: IUserRepository;

  constructor(iUserRepository: IUserRepository) {
    this.repository = iUserRepository;
  }

  public async execute(id: string): Promise<IUser> {
    const userDeleted = await this.repository.delete(id);
    if (!userDeleted) {
      throw new Error("User not delete");
    }
    return userDeleted;
  }
}
