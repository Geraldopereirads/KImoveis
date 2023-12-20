import { NextFunction, Request, Response } from "express";
import { TScheduleRequest } from "../interfaces/schedule.interface";
import { Schedule } from "../entities";
import { scheduleRepo } from "../repositories/schendule.repository";
import { AppError } from "../errors/App.error";

export const validScheduleMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schedulesInfo: TScheduleRequest = req.body;
  const userId: string = res.locals.user.id;

  const schedulesBuilderHour: Schedule | null = await scheduleRepo
    .createQueryBuilder("schedules_appointment")
    .where("schedules_appointment.date = :date", {
      date: schedulesInfo.date,
    })
    .andWhere("schedules_appointment.realEstate = :estate", {
      estate: schedulesInfo.realEstateId,
    })
    .andWhere("schedules_appointment.hour = :hour", {
      hour: schedulesInfo.hour,
    })
    .getOne();

  if (schedulesBuilderHour) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const schedulesBuilderUser: Schedule | null = await scheduleRepo
    .createQueryBuilder("schedules_appointment")
    .where("schedules_appointment.date = :date", {
      date: schedulesInfo.date,
    })
    .andWhere("schedules_appointment.hour = :hour", {
      hour: schedulesInfo.hour,
    })
    .andWhere("schedules_appointment.userId = :id", { id: userId })
    .getOne();

  if (schedulesBuilderUser) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const schedulesBuilderUserRealEstate: Schedule | null = await scheduleRepo
    .createQueryBuilder("schedules_appointment")
    .where("schedules_appointment.userId = :id", {
      id: userId,
    })
    .andWhere("schedules_appointment.realEstate = :estate", {
      estate: schedulesInfo.realEstateId,
    })
    .getOne();

  if (schedulesBuilderUserRealEstate) {
    throw new AppError("User schedule to this real estate already exists", 409);
  }

  const [hourString] = schedulesInfo.hour.split(":");
  if (Number(hourString) < 8 || Number(hourString) > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const diaUtil: Date = new Date(schedulesInfo.date);
  const day: number = diaUtil.getDay();
  diaUtil.getHours();
  if (day === 0 || day === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  return next();
};
