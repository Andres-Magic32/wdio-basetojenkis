const { config: baseConfig } = require('./base.conf');

const localConfig = {
    services: ['chromedriver'],
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
    }],
    specs: [
        './test/specs/frontend/**/*.js',
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
};

exports.config = { ...baseConfig, ...localConfig };