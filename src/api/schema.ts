import { buildSchema } from "graphql";
import { createTimeTraveler } from "../modules";

export const schema = buildSchema(`
  input TimeTravelerInput {
    name: String!
    birthDate: String!
    passport: String!
  }

  type TimeTraveler {
    id: String!
    name: String!
    birthDate: Date!
    passport: String!
  }

  type Query {
    hello: String
  }

  type Mutation {
    createTimeTraveler(TimeTravelerInput!): TimeTraveler!
  }
`);

export const rootValue = {
  hello: () => {
    return "Hello world!";
  },
  createTimeTraveler,
};
