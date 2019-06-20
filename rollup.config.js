// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
const rollupTypescript = require('rollup-plugin-typescript')

export default {
  input: 'src/main.ts',
  output: {
    file: 'index.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    rollupTypescript(), // for TS
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
}
