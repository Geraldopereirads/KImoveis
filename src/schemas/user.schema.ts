import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  deletedAt: z.date().nullish(),
});

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const userSchemaUpdate = userSchemaRequest
  .partial()
  .omit({ admin: true });

export const userSchemaResponse = userSchema.omit({ password: true });

export const getUsersSchemaResponse = z.array(userSchemaResponse);
