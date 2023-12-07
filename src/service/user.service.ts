import { User } from "../entities";
import { TUserRequest } from "../interfaces/users.interfaces";
import { usersRepo } from "../repositories/user.repository";

export const userCreateService = async (
  payload: TUserRequest
): Promise<User> => {
  const user: User = await usersRepo.save(payload);

  return user;
};
