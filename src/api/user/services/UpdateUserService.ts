import { IUser } from "../entities/interface/IUser";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

export class UpdateUserService {
  private repository: IUserRepository;

  constructor(iUserRepository: IUserRepository) {
    this.repository = iUserRepository;
  }

  public async execute(id: string, data: IUser): Promise<IUser> {
    const userUpdated = await this.repository.update(id, data);
    if (!userUpdated) {
      throw new Error("Some error in update user proccess");
    }
    return userUpdated;
  }
}
