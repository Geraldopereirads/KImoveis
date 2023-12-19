import { RealEstate, Schedule, User } from "../entities";
import { AppError } from "../errors/App.error";
import {
  TScheduleRequest,
  TScheduleReturn,
} from "../interfaces/schedule.interface";
import { realEstateRepo } from "../repositories/realState.repository";
import { scheduleRepo } from "../repositories/schendule.repository";
import { usersRepo } from "../repositories/user.repository";
import { scheduleSchema } from "../schemas/schedules.schema";

export const createScheduleService = async (
  { realEstateId, ...payload }: TScheduleRequest,
  userId: number
): Promise<TScheduleReturn> => {
  const realEstate: RealEstate = (await realEstateRepo.findOneBy({
    id: realEstateId,
  }))!;

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const dateTime = new Date(payload.date + " " + payload.hour);

  const dayOfTheWeek = dateTime.getDay();
  const businessHours = dateTime.getHours();

  if (dayOfTheWeek < 1 || dayOfTheWeek > 5) {
    throw new AppError("Invalid date, work days are monday to friday");
  }

  if (businessHours < 8 || businessHours > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM");
  }

  const user: User = (await usersRepo.findOneBy({ id: userId }))!;

  const schedule: Schedule = scheduleRepo.create({
    ...payload,
    realEstate: realEstate,
    user: { id: userId },
  });

  await scheduleRepo.save(schedule);

  return scheduleSchema.parse(schedule);
};
