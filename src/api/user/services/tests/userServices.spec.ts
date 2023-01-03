import { faker } from "@faker-js/faker";
import { UserFakeRepository } from "../../repositories/fakes/UserFakeRepository";
import { CreateUserService } from "../CreateUserService";
import { DeleteUserService } from "../DeleteUserService";
import { ListUserService } from "../ListUserService";

describe("Tests about all user services", () => {
  it("Should be able list all users", async () => {
    const fakeRepository = new UserFakeRepository();
    const listUserService = new ListUserService(fakeRepository);
    const users = await listUserService.execute();
    expect(users).toHaveLength(1);
  });
  it("Shoud be able create a new user", async () => {
    const fakeRepository = new UserFakeRepository();
    const createUserService = new CreateUserService(fakeRepository);
    const userGenerated = await createUserService.execute({
      name: faker.name.firstName(),
      email: faker.internet.email(),
    });
    expect(userGenerated).toHaveProperty("name");
  });
  it("Should be able delete a user", async () => {
    const fakeRepository = new UserFakeRepository();
    const createUserService = new CreateUserService(fakeRepository);
    const deleteUserService = new DeleteUserService(fakeRepository);
    const userGenerated = await createUserService.execute({
      name: faker.name.firstName(),
      email: faker.internet.email(),
    });
    const userDeleted = await deleteUserService.execute(userGenerated.id as string);
    expect(userDeleted).toHaveProperty("name");
  });

  it("Should be able update a user", async () => {
    const fakeRepository = new UserFakeRepository();
    const createUserService = new CreateUserService(fakeRepository);
    const userGenerated = await createUserService.execute({
      name: faker.name.firstName(),
      email: faker.internet.email(),
    });
    expect(userGenerated).toHaveProperty("password");
  });
});
