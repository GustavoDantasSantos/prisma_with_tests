import { IUser } from "../../entities/interface/IUser";
import { UserFakeRepository } from "../../repositories/fakes/UserFakeRepository";

describe("Tests about all user services", () => {
  it("Should be able list all users", () => {
    const fakeRepository = new UserFakeRepository();
    const users: IUser[] = fakeRepository.listAll();
    expect(users).toHaveLength(1);
  });
  it("Shoud be able create a new user", () => {
    const fakeRepository = new UserFakeRepository();
    const user: IUser = fakeRepository.create();
    expect(user).toHaveProperty("name");
  });
});
