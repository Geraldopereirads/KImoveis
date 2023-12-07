import { z } from "zod";
import { userSchemaRequest, userSchemaResponse } from "../schemas/user.schema";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;

export type TgetUserResponse = Array<User>;

export type TUserUpdateRequest = DeepPartial<TUserRequest>;

export type UserRepository = Repository<User>;
