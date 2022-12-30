import { Request, Response, Router } from "express";
import { userRoutes } from "./api/user/routes/user.routes";

const appRoutes = Router();

appRoutes.get("/", (_: Request, res: Response) => {
  res.status(200).send({ message: "hello dev!" });
});

appRoutes.use("/user", userRoutes);

export { appRoutes };
