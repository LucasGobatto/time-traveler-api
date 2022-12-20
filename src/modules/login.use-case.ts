import { createToken } from "../core";
import { dbDatasource } from "../data";
import { TimeTravelerEntity } from "../entities";
import { Handler, LoginInputModel, LoginModel } from "../model";

export const loginUseCase: Handler<LoginInputModel, LoginModel> = async (
  _parent,
  { input }
) => {
  const { passport, password } = input;

  const repository = dbDatasource.getRepository(TimeTravelerEntity);
  const timeTraveler = await repository.findOne({ where: { passport } });

  if (timeTraveler?.password !== password) {
    throw new Error("Usuário sem credenciais válidas");
  }

  const token = createToken({
    id: timeTraveler.id,
    passport: timeTraveler.passport,
  });

  delete timeTraveler.password;
  return { token, timeTraveler };
};
