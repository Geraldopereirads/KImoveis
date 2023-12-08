import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { CategoriesRepository } from "../interfaces/categories.interface";

export const categoryRepo: CategoriesRepository =
  AppDataSource.getRepository(Category);
