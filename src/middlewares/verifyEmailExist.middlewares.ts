import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { usersRepo } from "../repositories/user.repository";

export const verifyEmailExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  const user = await usersRepo.findOneBy({
    email: email,
  });

  if (!email) return next();

  if (user) throw new AppError("Email already exists", 409);

  return next();
};
