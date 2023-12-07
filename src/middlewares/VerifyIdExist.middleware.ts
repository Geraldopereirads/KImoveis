import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { usersRepo } from "../repositories/user.repository";
import { AppError } from "../errors/App.error";

export const VerifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.body.id);
  const user: User | null = await usersRepo.findOneBy({ id });

  if (req.path === "/users" && !user) throw new AppError("User not found", 404);

  res.locals = { ...res.locals, user };
  return next();
};
