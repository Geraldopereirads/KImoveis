import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/user.schema";
import { userVerifyIdExists } from "../middlewares/VerifyIdExist.middleware";
import {
  userCreateController,
  userReadController,
  userDeleteController,
} from "../controller/user.controller";
import { verifyEmailExist } from "../middlewares/verifyEmailExist.middlewares";

export const usersRouter: Router = Router();

usersRouter.post(
  "",
  validateBody(userSchemaRequest),
  verifyEmailExist,
  userCreateController
);
usersRouter.get("", userReadController);

usersRouter.use("/:id", userVerifyIdExists);

usersRouter.patch("/:id", validateBody(userSchemaUpdate));
usersRouter.delete("/:id", userDeleteController);
