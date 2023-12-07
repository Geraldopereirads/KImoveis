import { AppDataSource } from "../data-source";
import { Address } from "../entities";

export const addressRepo = AppDataSource.getRepository(Address);
