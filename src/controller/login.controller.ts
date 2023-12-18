import { Request, Response } from "express";
import { TLogin } from "../interfaces/login.interface";
import { loginService } from "../service/login.service";

export const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: TLogin = req.body;

  const token = await loginService(loginData);

  return res.json({ token });
};
