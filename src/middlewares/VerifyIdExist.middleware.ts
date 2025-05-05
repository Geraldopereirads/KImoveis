import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { AppError } from "../errors/App.error";
import { usersRepo } from "../repositories/user.repository";

export const userVerifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);
  const user: User | null = await usersRepo.findOneBy({ id: id });

  if (!user) throw new AppError("User not found", 404);

  res.locals = { ...res.locals, user, id };

  return next();
};
