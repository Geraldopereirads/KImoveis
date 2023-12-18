import { Repository } from "typeorm";
import { z } from "zod";
import { Category } from "../entities";
import { categoriesResult } from "../schemas/categories.schema";

export type CategoriesRepository = Repository<Category>;
export type TCategoryReturn = z.infer<typeof categoriesResult>;
