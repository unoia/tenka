import * as path from 'path';
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import dts from "vite-plugin-dts"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "tenka",
      formats: ["es", "umd"],
      fileName: (format) => `tenka.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
    vanillaExtractPlugin({ identifiers: "short" }),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/styles/reset.css",
          dest: "styles",
        },
        {
          src: "src/styles/tenka.css",
          dest: "styles",
        },
        {
          src: "src/assets/fonts",
          dest: "assets",
        },
      ],
    }),
  ],
})
