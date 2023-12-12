import { z } from "zod";
import { addressesRequest } from "../schemas/addresses.schema";
import { Address } from "../entities";
import { Repository } from "typeorm";

export type TAddressesCreate = z.infer<typeof addressesRequest>;
export type AddressRepository = Repository<Address>;
