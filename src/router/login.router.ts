import { Router } from "express";
import { loginController } from "../controller/login.controller";

export const loginRouter: Router = Router();

loginRouter.post("", loginController);
