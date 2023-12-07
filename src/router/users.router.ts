import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/user.schema";
import { VerifyIdExists } from "../middlewares/VerifyIdExist.middleware";

export const usersRouter: Router = Router();

usersRouter.post("", validateBody(userSchemaRequest));
usersRouter.get("");

usersRouter.use("/:id", VerifyIdExists);

usersRouter.patch("/:id", validateBody(userSchemaUpdate));
usersRouter.delete("/:id");
