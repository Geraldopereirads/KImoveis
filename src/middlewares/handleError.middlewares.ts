import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";

export const handleError = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ error: error.message });
  }
  console.error(error);
  return res.status(500).json({ error: "Internal server error" });
};
