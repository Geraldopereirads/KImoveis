import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { usersRouter } from "./router/users.router";
import { loginRouter } from "./router/login.router";
import { categoriesRouter } from "./router/categories.router";
import { realEstateRouter } from "./router/realEstate.router";
import { schedulesRouter } from "./router/schedules.router";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", schedulesRouter);

export default app;
