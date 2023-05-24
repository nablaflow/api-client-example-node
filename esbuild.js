const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: [
      'examples/archiwind/get_simulation_v1.ts',
      'examples/archiwind/submit_simulation_v1.ts',
    ],
    outdir: 'dist/archiwind',
    format: 'cjs',
    bundle: true,
    platform: 'node',
    target: ['node18'],
    plugins: []
  })
  .catch(() => process.exit(1));
