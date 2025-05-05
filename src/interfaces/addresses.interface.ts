import { z } from "zod";
import { addressesCreateSchema } from "../schemas/addresses.schema";
import { Address } from "../entities";
import { Repository } from "typeorm";

export type TAddressesCreate = z.infer<typeof addressesCreateSchema>;
export type AddressRepository = Repository<Address>;
export type TAddressesReturn = Array<Address>;
