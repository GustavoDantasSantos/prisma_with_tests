import { IUser } from "../../entities/interface/IUser";
import { faker } from "@faker-js/faker";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserFakeRepository implements IUserRepository {
  public listAll(): Promise<IUser[]> {
    const users = new Promise<IUser[]>((resolve, _) => {
      const userArray: IUser[] = [];
      for (let i = 0; i < 1; i++) {
        userArray.push({
          name: faker.name.firstName(),
          email: faker.internet.email(),
        });
      }
      return resolve(userArray);
    });
    return users;
  }

  public create(): Promise<IUser> {
    const user = new Promise<IUser>((resolve, _) => {
      const user = { name: faker.name.firstName(), email: faker.internet.email() };
      return resolve(user);
    });
    return user;
  }
}
