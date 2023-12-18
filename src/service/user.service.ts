import { User } from "../entities";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdate,
  TgetUserResponse,
} from "../interfaces/users.interfaces";
import { usersRepo } from "../repositories/user.repository";
import {
  getUsersSchemaResponse,
  userSchemaResponse,
} from "../schemas/user.schema";

export const userCreateService = async (
  payload: TUserRequest
): Promise<TUserResponse> => {
  const user: User = usersRepo.create(payload);
  await usersRepo.save(user);

  return userSchemaResponse.parse(user);
};
export const userReadService = async (): Promise<TgetUserResponse> => {
  return getUsersSchemaResponse.parse(await usersRepo.find());
};

// export const userUpdateService = async (
//   user: User,
//   userBody: TUserUpdate
// ): Promise<TUserResponse> => {
//   const { admin, }
//   return;
// };

export const userDeleteService = async (user: User): Promise<void> => {
  await usersRepo.softRemove(user);
};
