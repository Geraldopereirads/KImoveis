import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../repositories/categories.repository";
import { Category } from "../entities";
import { AppError } from "../errors/App.error";

export const verifyCategoryExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.body;

  const categoryId: Category | null = await categoryRepo.findOneBy({
    id: id,
  });

  if (categoryId) return next();

  if (!categoryId) {
    throw new AppError("Category already exists", 409);
  }

  res.locals = { ...res.locals, categoryId };

  return next();
};
