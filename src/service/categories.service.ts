import { Category } from "../entities";
import { TCategoryReturn } from "../interfaces/categories.interface";
import { categoryRepo } from "../repositories/categories.repository";
import { categoriesSchema } from "../schemas/categories.schema";

export const createCategoryService = async ({ name }: TCategoryReturn) => {
  const newCategory: Category = categoryRepo.create({
    name: name,
  });

  const category: Category = await categoryRepo.save(newCategory);

  return category;
};

export const readCategoryService = async () => {
  const Categories = categoryRepo.find();

  return categoriesSchema.parse(Categories);
};
