import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.nablaflow.io/schema.graphql",
  documents: [
    "src/nablaflow/queries/*.graphql",
    "src/nablaflow/mutations/*.graphql",
  ],
  generates: {
    "src/nablaflow/api.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        immutableTypes: true
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
