import { IUser } from "../../entities/interface/IUser";
import { faker } from "@faker-js/faker";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserFakeRepository implements IUserRepository {
  private usersArrayFake: IUser[] = [];

  public generateArrayFake() {
    for (let i = 0; i < 1; i++) {
      this.usersArrayFake.push({
        id: faker.random.numeric(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
      });
    }
  }

  public listAll(): Promise<IUser[]> {
    const users = new Promise<IUser[]>((resolve) => {
      return resolve(this.usersArrayFake);
    });
    console.log(users);
    return users;
  }

  public create(): Promise<IUser> {
    const user = new Promise<IUser>((resolve) => {
      const user = { id: faker.random.numeric(), name: faker.name.firstName(), email: faker.internet.email() };
      this.usersArrayFake.push(user);
      return resolve(user);
    });
    return user;
  }

  public delete(id: string): Promise<IUser> {
    const userDeleted = new Promise<IUser>((resolve, reject) => {
      const findUser = this.usersArrayFake.find((user) => user.id == id);
      findUser ? resolve(findUser) : reject;
    });
    return userDeleted;
  }

  update(id: string, data: IUser): Promise<IUser | undefined> {
    const userUpdate = new Promise<IUser>((resolve) => {
      const newArray: IUser[] = [];
      for (const item of this.usersArrayFake) {
        if (item.id !== id) {
          newArray.push(item);
        }
      }
      const newUser = data;
      newArray.push(newUser);
      this.usersArrayFake = newArray;
      return resolve(newUser);
    });
    return userUpdate;
  }
}
