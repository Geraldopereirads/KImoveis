import { Router } from "express";
import {
  createRealEstateController,
  readRealEstateController,
} from "../controller/realEstate.controller";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { realEstatesCreateSchema } from "../schemas/realStates.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { verifyAddressExist } from "../middlewares/verifyAddressExist.middleware";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  verifyToken,
  isAdmin,
  validateBody(realEstatesCreateSchema),
  createRealEstateController
);
realEstateRouter.get("", readRealEstateController);
