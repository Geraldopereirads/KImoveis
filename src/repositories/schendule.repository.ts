import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";

export const scheduleRepo = AppDataSource.getRepository(Schedule);
