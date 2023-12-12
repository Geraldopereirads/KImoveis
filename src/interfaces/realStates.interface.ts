import { z } from "zod";
import { realEstatesCreateSchema } from "../schemas/realStates.schema";
import { RealEstate } from "../entities";
import { Repository } from "typeorm";

export type TRealStateCreate = z.infer<typeof realEstatesCreateSchema>;
export type TRealStateReturn = Array<RealEstate>;
export type TRealStateRepository = Repository<RealEstate>;
