import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/App.error";

export const verifyUserPermissionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const idUser: number = parseInt(req.params.id);
  const { admin, id } = res.locals.user;

  if (!admin) {
    if (idUser !== id) {
      throw new AppError("Insufficient permission", 403);
    }
    const { admin, ...payload } = req.body;

    req.body = {
      ...payload,
    };
  }
  return next();
};
