import { ResolverModel } from "../model";
import { createTimeTravelerUseCase, loginUseCase } from "../modules";

export const TimeTravelerResolver: ResolverModel = {
  Mutation: {
    createTimeTraveler: createTimeTravelerUseCase,
    login: loginUseCase,
  },
};
