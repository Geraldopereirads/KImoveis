import { compare } from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { User } from "../entities";
import { AppError } from "../errors/App.error";
import { TLogin } from "../interfaces/login.interface";
import { usersRepo } from "../repositories/user.repository";

export const loginService = async (loginData: TLogin): Promise<string> => {
  const user: User | null = await usersRepo.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) throw new AppError("Wrong email/password", 401);

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) throw new AppError("Wrong email/password", 401);

  const token = jwt.sign({}, String(process.env.SECRET_KEY), {
    expiresIn: "24h",
    subject: String(user.id),
  });

  return token;
};
