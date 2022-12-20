import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar Date

  input TimeTravelerInput {
    name: String!
    birthDate: String!
    passport: String!
  }

  input LoginInput {
    passport: String!
    password: String!
  }

  type TimeTraveler {
    id: String!
    name: String!
    birthDate: Date!
    passport: String!
  }

  type Login {
    token: String!
    timeTraveler: TimeTraveler!
  }

  type Query {
    hello: String
  }

  type Mutation {
    createTimeTraveler(input: TimeTravelerInput!): TimeTraveler!
    login(input: LoginInput!): Login!
  }
`;
