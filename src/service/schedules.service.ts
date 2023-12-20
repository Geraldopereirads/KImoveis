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
  scheduleData: TScheduleRequest,
  userId: number
): Promise<object> => {
  const user: User | null = await usersRepo.findOneBy({ id: Number(userId) });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  let realEstateResult: RealEstate | null;

  if (scheduleData.realEstateId) {
    realEstateResult = await realEstateRepo.findOneBy({
      id: Number(scheduleData.realEstateId),
    });

    if (!realEstateResult) {
      throw new AppError("RealEstate not found", 404);
    }
  }

  const schedulesCreate: Schedule = scheduleRepo.create({
    ...scheduleData,
    realEstate: realEstateResult!,
    user: user!,
  });

  await scheduleRepo.save(schedulesCreate);

  return { message: "Schedule created" };
};
