import express from "express";
import cors from "cors";
import { ApolloConfig } from "./api";

export namespace Server {
  export async function run() {
    const app = express();

    app.use(cors());
    app.use(express.json());

    const port = process.env.PORT ?? 4004;
    const apolloServer = ApolloConfig();

    await apolloServer.start();

    apolloServer.applyMiddleware({ app, path: "/graphql" });

    app.listen({ port }, () => {
      console.log("listen at http://localhost:%d", port);
    });
  }
}