import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { addressRepo } from "../repositories/address.repository";
import { AppError } from "../errors/App.error";

export const verifyAddressExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;

  if (!address) return next();

  const addresses: Address | null = await addressRepo.findOneBy(address);

  if (addresses) throw new AppError("Address already exists", 409);
};
