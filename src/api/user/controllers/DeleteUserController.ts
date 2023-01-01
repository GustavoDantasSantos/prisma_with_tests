import { Request, Response } from "express";
import { UserRepository } from "../repositories/implements/UserRepository";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController {
  public async handle(req: Request, res: Response) {
    const id = req.params.id;
    const userRepository = new UserRepository();
    const deleteUserService = new DeleteUserService(userRepository);
    const user = await deleteUserService.execute(id);
    user
      ? res.status(200).json({ message: "user deleted" })
      : res.status(500).json({ message: "some thing happen with this method please connect the support" });
  }
}
