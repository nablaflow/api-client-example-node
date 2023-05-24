import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.nablaflow.io/archiwind/schema.graphql",
  documents: [
    "src/nablaflow/archiwind/queries/*.graphql",
    "src/nablaflow/archiwind/mutations/*.graphql",
  ],
  generates: {
    "src/nablaflow/archiwind/api.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        immutableTypes: true
      },
    },
    "./archiwind-graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
