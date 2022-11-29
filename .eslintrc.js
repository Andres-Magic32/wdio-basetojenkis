module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    webextensions: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  globals: {
    $: false,
    describe: false,
    it: false,
    expect: false,
    before: false,
    after: false,
  },
  ignorePatterns: ['wdio.conf.js', 'conf', 'allure-report', 'allure-results'],
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called',
      },
    ],
    'no-await-in-loop': 'off',
    'max-len': ['error', { code: 150 }],
  },
};
