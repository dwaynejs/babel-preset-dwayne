var npm = require('rollup-plugin-node-resolve');
var cjs = require('rollup-plugin-commonjs');
var json = require('rollup-plugin-json');

module.exports = {
  entry: './lib/index.js',
  dest: './build/preset.js',
  format: 'iife',
  moduleName: 'BabelPresetDwayne',
  sourceMap: true,
  plugins: [
    npm({
      browser: true,
      preferBuiltins: false
    }),
    cjs({
      include: '**/*.js'
    }),
    json({
      include: '**/*.json'
    })
  ]
};
