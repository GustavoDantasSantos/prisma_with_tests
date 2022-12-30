import request from "supertest";
import { app } from "../../../../app";
import { faker } from "@faker-js/faker";

describe("All tests controllers users", () => {
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/user").send({
      name: faker.name.firstName(),
      email: faker.internet.email(),
    });
    expect(response.status).toBe(201);
  });
  it("Should be able list all users", async () => {
    const response = await request(app).get("/user");
    expect(response.status).toBe(200);
  });
});
