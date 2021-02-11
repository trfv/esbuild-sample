const { build } = require('esbuild')

build({
  entryPoints: ['./src/index.tsx'],
  outfile: './dist/bundle.js',
  minify: true,
  bundle: true,
  define: {'process.env.NODE_ENV': "'production'"}
}).catch(() => process.exit(1))
