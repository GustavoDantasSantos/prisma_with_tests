import { PrismaClient, User } from "@prisma/client";
import { IUser } from "../../entities/interface/IUser";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = new PrismaClient();
  }

  public async listAll(): Promise<IUser[] | undefined> {
    try {
      const users = await this.repository.user.findMany();
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  public async create(data: Omit<User, "id">): Promise<IUser | undefined> {
    try {
      const user = await this.repository.user.create({
        data: data,
      });
      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
