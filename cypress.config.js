const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://next-realworld.vercel.app",
    baseUri: "https://api.realworld.io/api",
    chromeWebSecurity: false
  },
  "video": false
});
