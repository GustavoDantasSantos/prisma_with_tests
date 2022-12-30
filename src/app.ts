import Express from "express";
import { appRoutes } from "./route.routes";

const app = Express();

app.use(Express.json());
app.use(appRoutes);

export { app };
