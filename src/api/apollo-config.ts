import { ApolloServer } from "apollo-server-express";
import { formatError } from "./format-error";
import { resolvers, typeDefs } from "./schema";

export function ApolloConfig() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    formatError,
  });
}
