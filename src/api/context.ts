import { verifyToken } from "../core";
import { dbDatasource } from "../data";
import { TimeTravelerEntity } from "../entities";

export interface ServerContext {
  token: string;
}

export const authCheck = async (context: ServerContext) => {
  if (!context.token) {
    throw new Error("Usuário sem credenciais válidas");
  }

  const decodedToken = verifyToken(context.token);

  if (decodedToken) {
    const repository = dbDatasource.getRepository(TimeTravelerEntity);

    const timeTraveler = await repository.findOne({
      where: { id: decodedToken.id },
    });

    if (timeTraveler?.passport !== decodedToken.passport) {
      throw new Error("Usuário sem credenciais válidas");
    }
  }

  return true;
};
