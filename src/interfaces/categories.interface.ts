import { Repository } from "typeorm";
import { z } from "zod";
import { Category } from "../entities";
import { categoriesSchemaRequest } from "../schemas/categories.schema";

export type CategoriesRepository = Repository<Category>;
export type TCategoryRequest = z.infer<typeof categoriesSchemaRequest>;
export type TCategories = Array<Category>;
