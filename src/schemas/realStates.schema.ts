import { z } from "zod";
import { addressesCreateSchema, addressesSchema } from "./addresses.schema";
import { categoriesSchema } from "./categories.schema";

export const realEstatesSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressesSchema,
  category: categoriesSchema,
});

export const realEstatesCreateSchema = realEstatesSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    address: true,
    category: true,
  })
  .extend({
    address: addressesCreateSchema.optional(),
    categoryId: z.number().positive(),
  });
