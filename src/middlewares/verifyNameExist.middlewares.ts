import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { categoryRepo } from "../repositories/categories.repository";

export const verifyNameExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const name: string = req.body.name;

  if (!name) return next();

  const categories: boolean = await categoryRepo.exist({ where: { name } });

  if (categories) throw new AppError("Category already exists", 409);

  return next();
};
