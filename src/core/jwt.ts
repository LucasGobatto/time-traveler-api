import * as jwt from "jsonwebtoken";
import { TokenData } from "../model";

const secret = process.env.JWT_SECRET;

export const createToken = (data: TokenData): string => {
  const token = jwt.sign(JSON.stringify(data), secret);

  return token;
};

export const verifyToken = (token: string): TokenData => {
  try {
    const verified = jwt.verify(token, secret) as TokenData;

    return verified;
  } catch {
    throw new Error("Usuário sem credenciais válidas");
  }
};
