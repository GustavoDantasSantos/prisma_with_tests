import { Request, Response } from "express";
import { UserRepository } from "../repositories/implements/UserRepository";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  public async handle(req: Request, res: Response) {
    const { name, email } = req.body;
    try {
      const userRepository = new UserRepository();
      const createUserService = new CreateUserService(userRepository);
      const user = await createUserService.execute({ name, email });
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
