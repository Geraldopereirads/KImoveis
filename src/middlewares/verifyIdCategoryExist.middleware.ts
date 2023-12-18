import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { AppError } from "../errors/App.error";
import { categoryRepo } from "../repositories/categories.repository";

export const checkExistingId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const existingId: Category | null = await categoryRepo.findOneBy({
    id: Number(req.params.id),
  });

  if (!existingId) throw new AppError("Category not found", 404);

  res.locals = { ...res.locals, existingId };
  return next();
};
