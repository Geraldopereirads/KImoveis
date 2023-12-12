import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { realEstatesCreateSchema } from "../schemas/realStates.schema";
import { createRealEstateController } from "../controller/realEstate.controller";
import { verifyAddressExist } from "../middlewares/verifyAddressExist.middleware";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  validateBody(realEstatesCreateSchema),
  verifyAddressExist,
  createRealEstateController
);
realEstateRouter.get("");
