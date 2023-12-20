import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/App.error";
import "dotenv/config";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let authorization: string | undefined = req.headers.authorization;

  if (!authorization) throw new AppError("Missing bearer token", 401);

  const token: string = authorization.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) throw new AppError(error.message, 401);

    res.locals.user = {
      id: parseInt(decoded.sub),
      admin: decoded.admin,
    };
    return next();
  });
};
