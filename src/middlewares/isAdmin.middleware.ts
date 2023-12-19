import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id } = req.params;
  const { sub, admin } = res.locals.decoded;

  return next();
};
