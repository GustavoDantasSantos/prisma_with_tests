import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { ListUserController } from "../controllers/ListUserController";

const userRoutes = Router();

// instance class
const listUserController = new ListUserController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();

// routes
userRoutes.get("/", listUserController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.delete("/:id", deleteUserController.handle);

export { userRoutes };
