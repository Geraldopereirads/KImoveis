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

export const userUpdateService = async (
  userData: TUserUpdate,
  idParam: number
): Promise<TUserResponse> => {
  const oldUser = await usersRepo.findOne({
    where: {
      id: idParam,
    },
  });

  const user = usersRepo.create({
    ...oldUser,
    ...userData,
  });

  await usersRepo.save(user);
  const updatedUser = userSchemaResponse.parse(user);

  return updatedUser;
};

export const userDeleteService = async (user: User): Promise<void> => {
  await usersRepo.softRemove(user);
};
