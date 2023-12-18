import { Category } from "../entities";
import {
  TCategories,
  TCategoryRequest,
} from "../interfaces/categories.interface";
import { categoryRepo } from "../repositories/categories.repository";
import { categoriesSchema } from "../schemas/categories.schema";

export const createCategoryService = async (
  payload: TCategoryRequest
): Promise<Category> => {
  const category: Category = categoryRepo.create(payload);

  await categoryRepo.save(category);

  return category;
};

export const readCategoryService = async (): Promise<TCategories> => {
  return await categoryRepo.find();
};
