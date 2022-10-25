import { ResolverModel } from "../model";

export const HelloResolver: ResolverModel = {
  Query: {
    hello: () => {
      return "Hello World";
    },
  },
};
