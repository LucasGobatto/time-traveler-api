import path from "path";
import glob from "glob";
import { ApolloServer } from "apollo-server-express";
import { formatError } from "./format-error";
import { typeDefs } from "./schema";
import { ResolverModel } from "../model";

export function ApolloConfig() {
  return new ApolloServer({
    typeDefs,
    resolvers: getResolvers(),
    context: ({ req }) => ({ token: req.headers.authorization }),
    formatError,
  });
}

function getResolvers() {
  const resolvers = { Mutation: {}, Query: {} };
  const resolversPaths = glob.sync("src/**/*.resolver.ts");
  const basePath = path.join(__dirname, "..", "..");

  resolversPaths.map((file) => {
    const [_, resolver] = Object.entries(
      require(path.join(basePath, file.replace(".ts", "")))
    )[0] as [string, ResolverModel];

    if (resolver.Query) {
      resolvers.Query = { ...resolvers.Query, ...resolver.Query };
    }

    if (resolver.Mutation) {
      resolvers.Mutation = { ...resolvers.Mutation, ...resolver.Mutation };
    }
  });

  if (!Object.keys(resolvers.Mutation).length) {
    delete resolvers.Mutation;
  }

  if (!Object.keys(resolvers.Query).length) {
    delete resolvers.Query;
  }

  return resolvers;
}
