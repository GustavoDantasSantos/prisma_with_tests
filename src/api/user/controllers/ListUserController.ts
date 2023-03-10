import { Request, Response } from "express";
import { UserRepository } from "../repositories/implements/UserRepository";
import { ListUserService } from "../services/ListUserService";

export class ListUserController {
  public async handle(_: Request, res: Response) {
    try {
      const userRepository = new UserRepository();
      const listUserService = new ListUserService(userRepository);
      const users = await listUserService.execute();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
