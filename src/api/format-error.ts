import { GraphQLError } from "graphql";

export function formatError(error: GraphQLError) {
  console.error(error);

  return {
    name: error.name,
    message: error.message,
  };
}
