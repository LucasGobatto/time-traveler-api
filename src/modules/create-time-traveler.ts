import { dbDatasource } from "../data";
import { TimeTravelerEntity } from "../entities/time-traveler.entity";
import { Handler, TimeTravelerInputModel, TimeTravelerModel } from "../model";

export const createTimeTraveler: Handler = (_parent: any, args: { input: TimeTravelerInputModel }): Promise<TimeTravelerModel> => {
  const { input } = args;
  const repository = dbDatasource.getRepository(TimeTravelerEntity);

  const timeTraveler = {
    name: input?.name,
    birthDate: new Date(input?.birthDate),
    passport: input?.passport,
  };

  if (!(timeTraveler.birthDate < new Date()) || !timeTraveler.name || !timeTraveler.passport) {
    throw new Error("Invalid input. Input badly formatted");
  }

  return repository.save(timeTraveler);
};
