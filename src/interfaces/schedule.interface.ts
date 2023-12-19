import { z } from "zod";
import {
  scheduleRequestSchema,
  scheduleSchema,
} from "../schemas/schedules.schema";

export type TScheduleRequest = z.infer<typeof scheduleRequestSchema>;

export type TScheduleReturn = z.infer<typeof scheduleSchema>;
