import { IUser } from "../../entities/interface/IUser";
import { UserFakeRepository } from "../../repositories/fakes/UserFakeRepository";

describe("Tests about all user services", () => {
  it("List all users", async () => {
    const fakeRepository = new UserFakeRepository();
    const users: IUser[] = fakeRepository.listAll();
    expect(users).toHaveLength(1);
  });
});
