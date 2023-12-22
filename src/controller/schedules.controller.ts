import { Request, Response } from "express";
import {
  createScheduleService,
  readSchedulesService,
} from "../service/schedules.service";

export const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(res.locals.user.id);
  const scheduleRequest = await createScheduleService(req.body, userId);

  return res.status(201).json(scheduleRequest);
};

export const readSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const estateId: number = parseInt(req.params.id);
  const schedules = await readSchedulesService(estateId);
  return res.json(schedules);
};
