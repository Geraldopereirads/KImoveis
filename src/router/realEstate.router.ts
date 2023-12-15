import { Router } from "express";
import {
  createRealEstateController,
  readRealEstateController,
} from "../controller/realEstate.controller";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { realEstatesCreateSchema } from "../schemas/realStates.schema";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  validateBody(realEstatesCreateSchema),
  createRealEstateController
);
realEstateRouter.get("", readRealEstateController);
