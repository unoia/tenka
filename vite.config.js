import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'tenka',
      fileName: (format) => `tenka.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
    vanillaExtractPlugin({ identifiers: 'short' }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/reset.css',
          dest: 'styles',
        },
        {
          src: 'src/styles/tenka.css',
          dest: 'styles',
        },
        {
          src: 'src/assets/fonts',
          dest: 'assets',
        },
      ],
    }),
  ],
})
