import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { usersRepo } from "../repositories/user.repository";

export const verifyEmailExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;

  if (!email) return next();

  const userEmail: boolean = await usersRepo.exist({ where: { email } });

  if (userEmail) throw new AppError("Email already exists", 409);
};
