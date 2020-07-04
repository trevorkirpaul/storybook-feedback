// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import rollupTypescript from 'rollup-plugin-typescript'
import minify from 'rollup-plugin-babel-minify'

export default {
  input: 'src/main.tsx',
  output: {
    file: 'index.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    rollupTypescript(), // for TS
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    minify({
      comments: false, // don't preserve comments
    }),
  ],
  external: [
    'react',
    '@storybook/addons',
    '@storybook/api',
    '@apollo/react-hooks',
    'graphql-tag',
    'realm',
    'styled-components',
    'firebase',
    'uuid',
    'lodash',
    'realm-web',
    'react-feather',
    'react-google-login',
    'apollo-boost',
    'apollo-link-context',
    'graphql',
  ],
}
