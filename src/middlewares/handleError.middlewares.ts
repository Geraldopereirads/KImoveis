import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { ZodError } from "zod";

export const handleError = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    const message = error.flatten().fieldErrors;
    return res.status(400).json({ message });
  }

  console.error(error);
  return res.status(500).json({ error: "Internal server error" });
};
