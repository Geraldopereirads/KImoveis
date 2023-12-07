import { AppDataSource } from "../data-source";
import { RealEstate } from "../entities";

export const realEstateRepo = AppDataSource.getRepository(RealEstate);
