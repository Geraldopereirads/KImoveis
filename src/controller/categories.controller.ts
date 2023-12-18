import "express-async-errors";
import { Request, Response } from "express";
import { createCategoryService } from "../service/categories.service";
import { Category } from "../entities";
import { TCategoryReturn } from "../interfaces/categories.interface";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name } = req.body;

  const category: TCategoryReturn = await createCategoryService(name);

  return res.status(201).json(category);
};
