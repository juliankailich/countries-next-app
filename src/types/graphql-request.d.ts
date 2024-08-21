declare module "graphql-request" {
  export class GraphQLClient {
    constructor(endpoint: string);
    request<T = any>(query: string, variables?: any): Promise<T>;
  }

  export const gql: (template: TemplateStringsArray) => string;
}
