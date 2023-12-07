import { z } from "zod";

export const categoriesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45, "String must contain at most 45 character(s)"),
});

export const categoriesSchemaRequest = categoriesSchema.omit({ id: true });
export const categoriesResult = categoriesSchemaRequest;
