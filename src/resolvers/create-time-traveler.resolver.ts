import { ResolverModel } from "../model";
import { createTimeTraveler } from "../modules";

export const TimeTravelerResolver: ResolverModel = {
  Mutation: {
    createTimeTraveler,
  },
};
