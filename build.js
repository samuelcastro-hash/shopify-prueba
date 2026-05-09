const esbuild = require('esbuild')
const isWatch = process.argv.includes('--watch')

const opts = {
  entryPoints: ['src/js/animations.js'],
  bundle:      true,
  minify:      true,
  treeShaking: true,
  outfile:     'assets/zingha-animations.js',
  format:      'iife',
  target:      ['es2018'],
  logLevel:    'info',
}

if (isWatch) {
  esbuild.context(opts).then(ctx => ctx.watch())
} else {
  esbuild.build(opts).catch(() => process.exit(1))
}
