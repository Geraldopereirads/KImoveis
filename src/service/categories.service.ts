import { Category } from "../entities";
import { AppError } from "../errors/App.error";
import {
  TCategories,
  TCategoryRequest,
} from "../interfaces/categories.interface";
import { categoryRepo } from "../repositories/categories.repository";

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

export const readRealEstatesByCategoryIdService = async (
  categoryId: number
): Promise<Category | null> => {
  const category: Category | null = await categoryRepo.findOne({
    where: {
      id: categoryId,
    },
    relations: ["realEstate"],
  });

  return category;
};
