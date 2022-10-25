export interface Handler {
  (parentes?: any, args?: any, context?: any, info?: any): any;
}

export interface ResolverModel {
  Mutation?: Record<string, Handler>;
  Query?: Record<string, Handler>;
}
