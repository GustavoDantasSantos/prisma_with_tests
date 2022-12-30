import { IUser } from "../entities/interface/IUser";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

export class CreateUserService {
  private repository: IUserRepository;

  constructor(iUserRepository: IUserRepository) {
    this.repository = iUserRepository;
  }

  public async execute({ name, email }: IUser): Promise<IUser> {
    if (email == " " || email == undefined || name == " " || name == undefined) {
      throw new Error("Email or name is invalid");
    }
    const user = await this.repository.create({ name, email });
    if (!user) {
      throw new Error("Some error create a new user");
    }
    return user;
  }
}
