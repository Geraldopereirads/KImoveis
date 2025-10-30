import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = res.locals.user.admin;

  if (!user) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};
