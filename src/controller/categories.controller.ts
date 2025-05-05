import "express-async-errors";
import { Request, Response } from "express";
import {
  createCategoryService,
  readCategoryService,
  readRealEstatesByCategoryIdService,
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
  req: Request,
  res: Response
): Promise<Response> => {
  const listCategories: Array<Category> = await readCategoryService();
  return res.status(200).json(listCategories);
};

export const searchCategoryByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryId = res.locals.id;

  const realEstates = await readRealEstatesByCategoryIdService(categoryId);
  return res.status(200).json(realEstates);
};
