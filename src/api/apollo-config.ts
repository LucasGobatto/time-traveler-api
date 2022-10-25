import { ApolloServer } from "apollo-server-express";
import { formatError } from "./format-error";
import { rootValue, schema } from "./schema";

export function ApolloConfig() {
  return new ApolloServer({
    schema,
    rootValue,
    formatError,
  });
}
