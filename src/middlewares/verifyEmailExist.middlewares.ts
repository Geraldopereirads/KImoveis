import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { AppError } from "../errors/App.error";
import { usersRepo } from "../repositories/user.repository";

export const verifyEmailExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  const user: User | null = await usersRepo.findOneBy({ email });

  if (user) throw new AppError("Email already exists", 409);

  return next();
};
