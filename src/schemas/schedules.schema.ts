import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
});

export const scheduleRequestSchema = scheduleSchema.omit({ id: true }).extend({
  realEstateId: z.number().positive(),
  userId: z.number().positive(),
});
