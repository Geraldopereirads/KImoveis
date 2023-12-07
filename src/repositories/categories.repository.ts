import { AppDataSource } from "../data-source";
import { Category } from "../entities";

export const categoryRepo = AppDataSource.getRepository(Category);
