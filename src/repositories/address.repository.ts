import { AppDataSource } from "../data-source";
import { Address } from "../entities";
import { AddressRepository } from "../interfaces/addresses.interface";

export const addressRepo: AddressRepository =
  AppDataSource.getRepository(Address);
