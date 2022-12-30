import { PrismaClient } from "@prisma/client";
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
}
