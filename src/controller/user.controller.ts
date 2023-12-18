import { Request, Response } from "express";
import {
  userCreateService,
  userDeleteService,
  userReadService,
} from "../service/user.service";
import {
  TUserResponse,
  TgetUserResponse,
} from "../interfaces/users.interfaces";

export const userCreateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserResponse = await userCreateService(req.body);
  return res.status(201).json(user);
};
export const userReadController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TgetUserResponse = await userReadService();
  return res.status(200).json(users);
};
export const userDeleteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await userDeleteService(res.locals.user);
  return res.status(204).json();
};
