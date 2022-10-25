import { TimeTravelerInputModel, TimeTravelerModel } from "../model";

export function createTimeTraveler(_parent: any, args: { input: TimeTravelerInputModel }): TimeTravelerModel {
  const { input } = args;

  const timeTraveler = {
    id: "1",
    name: input?.name,
    birthDate: new Date(input?.birthDate),
    passport: input?.passport,
  };

  return timeTraveler;
}
