import { z } from "zod";
import { addressesCreateSchema, addressesSchema } from "./addresses.schema";

export const realEstatesSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number()),
  size: z.number().positive(),
  createdAt: z.date(),
  updatedAt: z.date(),
  address: addressesSchema,
});

export const realEstatesCreateSchema = realEstatesSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
    address: true,
  })
  .extend({
    address: addressesCreateSchema,
    categoryId: z.number().positive(),
  });

export const realEstateReturnSchema = realEstatesSchema.array();
