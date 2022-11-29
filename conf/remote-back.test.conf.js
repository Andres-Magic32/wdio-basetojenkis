const { config: baseConfig } = require('./base.conf');

const remoteConfig = {
    specs: [
        './test/specs/backend/**/*.js',
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    commonCapabilities: {
        'bstack:options': {
            buildName: 'browserstack-build-1',
        },
    },
    capabilities: [
        {
            browserName: 'chrome',
            browserVersion: 'latest',
            'bstack:options': {
                os: 'Windows',
                osVersion: '11',
            },
            //Ejecute background
            'goog:chromeOptions': {
                args: ["--headless", "user-agent=...", "--disable-gpu"]
            }
        }
    ],
};

exports.config = { ...baseConfig, ...remoteConfig };

// Code to support common capabilities
exports.config.capabilities.forEach((caps) => {
    for (const i in exports.config.commonCapabilities) {
        caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
    }
});