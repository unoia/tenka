// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
    vanillaExtractPlugin({ identifiers: 'short' }),
  ],
})
