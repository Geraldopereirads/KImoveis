import { Repository } from "typeorm";
import { Category } from "../entities";

export type CategoriesRepository = Repository<Category>;
