import { z } from "zod";
import { addressesRequest, addressesSchema } from "./addresses.schema";

export const realEstatesSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressesSchema,
});

export const realEstatesCreateSchema = realEstatesSchema
  .omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
  .extend({ categoryId: z.number(), address: addressesRequest });
