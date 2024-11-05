module.exports = {
  stories: [
    "../projects/**/*.stories.ts",
    "../projects/**/*.stories.mdx",
    "../projects/**/*.mdx",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
  ],

  framework: {
    name: "@storybook/angular",
    options: {},
  },

  docs: {
    autodocs: true,
    enabled: true,
  },
};
