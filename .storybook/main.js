module.exports = {
  "stories": [
    "../projects/**/*.stories.ts",
    "../projects/**/*.stories.mdx",
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-mdx-gfm"
  ],

  "framework": {
    name: "@storybook/angular",
    options: {}
  },

  docs: {
    autodocs: true
  }
};