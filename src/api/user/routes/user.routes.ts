import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserController } from "../controllers/ListUserController";

const userRoutes = Router();

// instance class
const listUserController = new ListUserController();
const createUserController = new CreateUserController();

// routes
userRoutes.get("/", listUserController.handle);
userRoutes.post("/", createUserController.handle);

export { userRoutes };
