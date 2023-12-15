import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import {
  realEstateReturnSchema,
  realEstatesCreateSchema,
} from "../schemas/realStates.schema";
import {
  createRealEstateController,
  readRealEstateController,
} from "../controller/realEstate.controller";
import { verifyAddressExist } from "../middlewares/verifyAddressExist.middleware";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  validateBody(realEstatesCreateSchema),
  verifyAddressExist,
  createRealEstateController
);
realEstateRouter.get("", readRealEstateController);
