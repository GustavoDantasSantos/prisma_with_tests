import { IUser } from "../../entities/interface/IUser";
import { faker } from "@faker-js/faker";

export class UserFakeRepository {
  public listAll(): IUser[] {
    const users: IUser[] = [];
    for (let i = 0; i < 1; i++) {
      users.push({
        name: faker.name.firstName(),
        email: faker.internet.email(),
      });
    }
    return users;
  }

  public create(): IUser {
    const user: IUser = { name: faker.name.firstName(), email: faker.internet.email() };
    return user;
  }
}
