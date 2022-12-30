import { Request, Response, Router } from "express";

export const appRoutes = Router();

appRoutes.get("/", (_: Request, res: Response) => {
  res.status(200).send({ message: "hello dev!" });
});
