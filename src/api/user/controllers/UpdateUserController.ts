import { Request, Response } from "express";
import { IUser } from "../entities/interface/IUser";
import { UserRepository } from "../repositories/implements/UserRepository";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserController {
  public async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name, email } = req.body;
    const data: IUser = { name, email };

    const userRepository = new UserRepository();
    const updateUserService = new UpdateUserService(userRepository);
    const user = await updateUserService.execute(id, data);

    return user
      ? res.status(200).json({ message: "user deleted" })
      : res.status(500).json({ message: "some thing happen with this method please connect the support" });
  }
}
