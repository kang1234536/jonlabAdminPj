import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri : "https://tender-whippet-55.hasura.app/v1/graphql",
  headers: {
    'x-hasura-admin-secret' : 'LEFC1vqCLe0R5JxbvkrqOEWwwAjls9967PVkeg62WKT3zgpMyJZO9MWECqpQDA2I' 
  },
  cache: new InMemoryCache(),
});

export default client;