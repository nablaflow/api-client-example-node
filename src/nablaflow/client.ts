import { GraphQLClient } from 'graphql-request';
import { getSdk } from './api'; // THIS FILE IS THE GENERATED FILE

export function getClient() {
  let endpoint = process.env.GRAPHQL_ENDPOINT;
  let access_token = process.env.ACCESS_TOKEN;

  if (access_token === undefined) {
    throw new Error("must provide an access token");
  }

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${access_token}`,
    },
  });

  return getSdk(client);
}
