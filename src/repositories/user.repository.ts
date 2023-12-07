import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { UserRepository } from "../interfaces/users.interfaces";

export const usersRepo: UserRepository = AppDataSource.getRepository(User);
