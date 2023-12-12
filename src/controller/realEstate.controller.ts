import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { createRealEstateService } from "../service/realEstate.service";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: RealEstate = await createRealEstateService(req.body);

  return res.status(201).json(realEstate);
};
