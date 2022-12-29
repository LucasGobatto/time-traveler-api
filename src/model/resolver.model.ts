import { ServerContext } from "../api";

export interface Handler<T = any, R = any> {
  (
    parentes?: unknown,
    args?: { input: T },
    context?: ServerContext,
    info?: unknown
  ): R | Promise<R>;
}

export interface ResolverModel {
  Mutation?: Record<string, Handler>;
  Query?: Record<string, Handler>;
}
