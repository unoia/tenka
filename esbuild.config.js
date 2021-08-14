const esbuild = require("esbuild");
const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  });

  return result.css;
}

esbuild
  .build({
    entryPoints: ["src/index.js"],
    outfile: "lib/index.js",
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: "neutral",
    plugins: [vanillaExtractPlugin({ processCss })],
  })
  .catch(() => process.exit(1));
