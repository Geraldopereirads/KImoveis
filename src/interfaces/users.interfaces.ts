import { z } from "zod";
import {
  getUsersSchemaResponse,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/user.schema";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;

export type TgetUserResponse = z.infer<typeof getUsersSchemaResponse>;

export type TUserUpdate = DeepPartial<TUserRequest>;

export type UserRepository = Repository<User>;
