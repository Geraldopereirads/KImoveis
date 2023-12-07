import { z } from "zod";
import { addressesRequest } from "../schemas/addresses.schema";

export type TAddressesRequest = z.infer<typeof addressesRequest>;
