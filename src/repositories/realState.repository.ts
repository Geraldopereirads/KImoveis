import { AppDataSource } from "../data-source";
import { RealEstate } from "../entities";
import { TRealStateRepository } from "../interfaces/realStates.interface";

export const realEstateRepo: TRealStateRepository =
  AppDataSource.getRepository(RealEstate);
