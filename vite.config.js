// import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // build: {
  //   outDir: "lib",
  //   lib: {
  //     entry: path.resolve(__dirname, "src/components/index.js"),
  //     name: "Tenka",
  //     fileName: (format) => `index.${format}.js`,
  //   },
  //   rollupOptions: {
  //     // make sure to externalize deps that shouldn't be bundled
  //     // into your library
  //     external: ["react", "react-dom"],
  //     output: {
  //       globals: {
  //         react: "React",
  //       },
  //     },
  //   },
  // },
})
