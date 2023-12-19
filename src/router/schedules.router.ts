import { Router } from "express";
import { createScheduleController } from "../controller/schedules.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { scheduleRequestSchema } from "../schemas/schedules.schema";
import { checkRealEstateScheduleAlreadyExists } from "../middlewares/checkRealEstateScheduleReadyExist.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";

export const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  verifyToken,
  isAdmin,
  validateBody(scheduleRequestSchema),
  checkRealEstateScheduleAlreadyExists,
  createScheduleController
);
schedulesRouter.get("/realEstate/:id");
