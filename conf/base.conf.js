const chai = require("chai");
require("dotenv").config();

if (
  !process.env.ENVIRONMENT ||
  !["dev", "qa", "performance", "prod", "sandbox"].includes(process.env.ENVIRONMENT)
) {
  const e = new Error(
    'Please use the following format when running the test script: ENVIRONMENT = << "dev", "qa", "performance", "prod", "sandbox" >>'
  );
  throw e;
}

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",

  updateJob: false,
  specs: ["./test/specs/**/*.js"],
  suite: {
    //define specific suites
    /**
     * login: [
            './test/specs/login.success.spec.js',
            './test/specs/login.failure.spec.js'
        ],
        otherFeature: [
            // ...
        ]
    */
  },
  exclude: [],
  logLevel: "warn",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  hostname: "hub.browserstack.com",
  services: [["browserstack"]],
  before() {
    browser.maximizeWindow();
    global.assert = chai.assert;
    chai.Should();
  },
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 200000,
    bail: true,
  },
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],
};