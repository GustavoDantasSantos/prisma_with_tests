import { Router } from "express";
import { ListUserController } from "../controllers/ListUserController";

const userRoutes = Router();

// instance class
const listUserController = new ListUserController();

// routes
userRoutes.get("/", listUserController.handle);

export { userRoutes };
