import { Request, Response, NextFunction } from "express";
import { scheduleRepo } from "../repositories/schendule.repository";
import { Schedule } from "../entities";
import { AppError } from "../errors/App.error";

export const checkRealEstateScheduleAlreadyExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId, date, hour } = request.body;

  const existingUserSchedule: Schedule | null = await scheduleRepo.findOne({
    where: { realEstate: { id: realEstateId }, date, hour },
  });

  if (existingUserSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};
