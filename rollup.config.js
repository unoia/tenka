import { defineConfig } from 'rollup'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin'
import clearDir from 'rollup-plugin-delete'

export default defineConfig([
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      clearDir({ target: 'dist/*' }),
      vanillaExtractPlugin({ identifiers: 'short' }),
      resolve(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      }),
      commonjs(),
      external(),
      terser(),
    ],
  },
])
