import { Request, Response } from "express";
import { createScheduleService } from "../service/schedules.service";

export const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.id;
  await createScheduleService(userId, req.body);

  return res.status(201).json({ message: "Schedule created" });
};
