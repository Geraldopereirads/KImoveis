import { z } from "zod";
import { scheduleRequestSchema } from "../schemas/schedules.schema";

export type TScheduleRequest = z.infer<typeof scheduleRequestSchema>;
