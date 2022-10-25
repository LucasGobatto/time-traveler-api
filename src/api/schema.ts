import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar Date

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
    createTimeTraveler(input: TimeTravelerInput!): TimeTraveler!
  }
`;
