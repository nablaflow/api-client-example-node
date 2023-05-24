import { GraphQLClient } from 'graphql-request';
import { getSdk } from './api'; // THIS FILE IS THE GENERATED FILE

export function getClient() {
  let endpoint = process.env.ARCHIWIND_GRAPHQL_ENDPOINT;
  let access_token = process.env.ACCESS_TOKEN;

  if (endpoint === undefined) {
    throw new Error("must provide an endpoint");
  }

  if (access_token === undefined) {
    throw new Error("must provide an access token");
  }

  const client = new GraphQLClient(endpoint, {
    // NOTE: see https://docs.nablaflow.io/developers/api/auth/
    headers: {
      authorization: `Bearer ${access_token}`,
      // "x-nablaflow-token": "${pat}",
    },
  });

  return getSdk(client);
}
