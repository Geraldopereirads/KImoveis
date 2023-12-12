import { Address, RealEstate } from "../entities";
import { TRealStateCreate } from "../interfaces/realStates.interface";
import { addressRepo } from "../repositories/address.repository";
import { realEstateRepo } from "../repositories/realState.repository";
import { realEstatesSchema } from "../schemas/realStates.schema";

export const createRealEstateService = async ({
  address,
  ...payload
}: TRealStateCreate): Promise<RealEstate> => {
  const realEstate: RealEstate = realEstateRepo.create(payload);
  await realEstateRepo.save(realEstate);
  if (address) {
    const addresses: Address = addressRepo.create(address);
    await addressRepo.save({ ...addresses, realEstate: realEstate });
  }

  return realEstatesSchema.parse(realEstate);
};
