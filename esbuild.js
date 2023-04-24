const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: [
      'examples/get_archiwind_v1_simulation.ts',
    ],
    outdir: 'dist',
    format: 'esm',
    bundle: true,
    platform: 'node',
    target: ['node18'],
    plugins: []
  })
  .catch(() => process.exit(1));