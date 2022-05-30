const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin')
const { mergeConfig } = require('vite')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin({ identifiers: 'short' })],
    })
  },
}
