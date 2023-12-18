import "express-async-errors";
import { Request, Response } from "express";
import {
  createCategoryService,
  readCategoryService,
} from "../service/categories.service";
import { Category } from "../entities";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const category: Category = await createCategoryService(req.body);

  return res.status(201).json(category);
};

export const readCategoriesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const listCategories = await readCategoryService();
  return response.status(200).json(listCategories);
};
