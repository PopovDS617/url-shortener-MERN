import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
