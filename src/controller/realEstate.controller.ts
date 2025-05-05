import { Request, Response } from "express";
import { RealEstate } from "../entities";
import {
  createRealEstateService,
  readRealEstateService,
} from "../service/realEstate.service";
import { TRealStateReturn } from "../interfaces/realStates.interface";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: RealEstate = await createRealEstateService(req.body);

  return res.status(201).json(realEstate);
};

export const readRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: TRealStateReturn = await readRealEstateService();

  return res.status(200).json(realEstate);
};
