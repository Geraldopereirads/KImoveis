import { AppDataSource } from "../data-source";
import { User } from "../entities";

export const usersRepo = AppDataSource.getRepository(User);
