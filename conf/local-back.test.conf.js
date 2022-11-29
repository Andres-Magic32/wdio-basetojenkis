const { config: baseConfig } = require('./base.conf');

const localConfig = {
    services: ['chromedriver'],
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ["--headless", "user-agent=...", "--disable-gpu"]
        }
    }],
    specs: [
        './test/specs/backend/**/*.js',
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
};

exports.config = { ...baseConfig, ...localConfig };