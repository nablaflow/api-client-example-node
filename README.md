# NablaFlow API JS example client [![build](https://github.com/nablaflow/api-client-example-node/actions/workflows/build.yml/badge.svg)](https://github.com/nablaflow/api-client-example-node/actions/workflows/build.yml)

## Description

NablaFlow's API talks [GraphQL](https://graphql.org/).

## Authentication

Third-party clients can access the API on behalf of existing NablaFlow users. In short, a user must first register with us and then connect their account inside your application via [a typical OAuth2 authorization code flow](https://www.oauth.com/oauth2-servers/access-tokens/authorization-code-request/).

In order to integrate with NablaFlow's API you need to be in possess of a `CLIENT_ID` and a `CLIENT_SECRET`, used to perform the OAuth2 authentication code flow.  
_It's not possible to create a client and submit it for approval yet, so if you are interested, please [get in touch with us](https://nablaflow.io/en/contact). We're working to add this feature soon._

## Prerequisites

- `CLIENT_ID` and `CLIENT_SECRET`.
- A valid account at [https://account.nablaflow.io](https://account.nablaflow.io)
- [direnv](https://direnv.net/docs/installation.html)
- [oauth2c](https://github.com/cloudentity/oauth2c)
- [nodejs 18 or 20](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/)

## Test run

- `cp .env.example .env` and fill out `CLIENT_ID` and `CLIENT_SECRET`.
- Run `./get_access_token.sh` to perform the OAuth2 authentication code flow. Follow instructions.
- Copy the access token from oauth2c into `.env`, as `ACCESS_TOKEN=...`.
- `yarn install`
- `yarn run codegen`
- Edit `examples/get_archiwind_v1_simulation.ts` and fill in simulation id and token
- `node esbuild.js`
- `node dist/get_archiwind_v1_simulation.js`

There are many examples in the [`examples`](examples/) folder.
