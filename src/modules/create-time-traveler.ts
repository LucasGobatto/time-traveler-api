import { TimeTravelerInputModel, TimeTravelerModel } from "../model";

export function createTimeTraveler(input: TimeTravelerInputModel): TimeTravelerModel {
  const timeTraveler = {
    id: "1",
    name: input.name,
    birthDate: new Date(input.birthDate),
    passport: input.passport,
  };

  return timeTraveler;
}
