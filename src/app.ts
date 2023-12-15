import "express-async-errors";
import express, { Application } from "express";
import "reflect-metadata";
import { handleError } from "./middlewares/handleError.middlewares";
import { categoriesRouter } from "./router/categories.router";
import { loginRouter } from "./router/login.router";
import { realEstateRouter } from "./router/realEstate.router";
import { schedulesRouter } from "./router/schedules.router";
import { usersRouter } from "./router/users.router";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", schedulesRouter);

app.use(handleError);

export default app;
