import { Request, Response } from "express";
import {
  userCreateService,
  userDeleteService,
  userReadService,
  userUpdateService,
} from "../service/user.service";
import {
  TUserResponse,
  TUserUpdate,
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

export const userUpdateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserUpdate = req.body;
  const idParam = parseInt(req.params.id);

  const updatedUser = await userUpdateService(userData, idParam);

  return res.status(200).json(updatedUser);
};

export const userDeleteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await userDeleteService(res.locals.user);
  return res.status(204).json();
};
