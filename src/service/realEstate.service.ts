import { RealEstate, Address, Category } from "../entities";
import { AppError } from "../errors/App.error";
import {
  TRealStateCreate,
  TRealStateReturn,
} from "../interfaces/realStates.interface";
import { addressRepo } from "../repositories/address.repository";
import { categoryRepo } from "../repositories/categories.repository";
import { realEstateRepo } from "../repositories/realState.repository";

export const createRealEstateService = async (
  payload: TRealStateCreate
): Promise<RealEstate> => {
  const { address, categoryId, ...body } = payload;

  const newAddres: Address = addressRepo.create({ ...address });
  await addressRepo.save(newAddres);

  const idCategory: Category | null = await categoryRepo.findOneBy({
    id: categoryId,
  });

  if (!idCategory) {
    throw new AppError("Category not found");
  }

  const newRealEstate: RealEstate = realEstateRepo.create({
    category: idCategory,
    address: newAddres,
    ...body,
  });

  await realEstateRepo.save(newRealEstate);

  return newRealEstate;
};

export const readRealEstateService = async (): Promise<TRealStateReturn> => {
  const realEstates: TRealStateReturn = await realEstateRepo.find({
    relations: ["address"],
  });

  return realEstates;
};
