import supertest from "supertest";
import { app } from "./app";

describe("Server is runnig", () => {
  it("Shoud be able server run on port 3001", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toBe(200);
  });
});
