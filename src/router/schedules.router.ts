import { Router } from "express";
import {
  createScheduleController,
  readSchedulesController,
} from "../controller/schedules.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { scheduleRequestSchema } from "../schemas/schedules.schema";
import { checkRealEstateScheduleAlreadyExists } from "../middlewares/checkRealEstateScheduleReadyExist.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { validScheduleMiddlewares } from "../middlewares/validSchedule.middleware";

export const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  verifyToken,
  isAdmin,
  validateBody(scheduleRequestSchema),
  validScheduleMiddlewares,
  checkRealEstateScheduleAlreadyExists,
  createScheduleController
);
schedulesRouter.get(
  "/realEstate/:id",
  verifyToken,
  isAdmin,
  readSchedulesController
);
