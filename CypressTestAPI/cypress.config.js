const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

async function setupNodeEvents(on, config) {
  on("file:preprocessor", cucumber());
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //the path of the test script will be stored as specpattern
    // specPattern: "cypress/UAT/features/*.{js,feature}",
    specPattern:
      // use this for normal
      "C:\\Users\\Administrator\\OneDrive\\Desktop\\Cypress_Automation\\cypress\\integration\\example\\*.{js,feature}",
  },
  //for multiple browser
  chromeWebSecurity: false,
});
