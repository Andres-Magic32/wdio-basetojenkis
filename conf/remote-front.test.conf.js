const { config: baseConfig } = require('./base.conf');

const remoteConfig = {
    specs: [
        './test/specs/frontend/**/*.js',
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
        },
        {
            browserName: 'firefox',
            browserVersion: '103.0',
            'bstack:options': {
                os: 'Windows',
                osVersion: '11',
            },
        },
        {
            browserName: 'safari',
            browserVersion: '14.1',
            'bstack:options': {
                os: 'OS X',
                osVersion: 'Big Sur',
            },
        },
    ],
};

exports.config = { ...baseConfig, ...remoteConfig };

// Code to support common capabilities
exports.config.capabilities.forEach((caps) => {
    for (const i in exports.config.commonCapabilities) {
        caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
    }
});