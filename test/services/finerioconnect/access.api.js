require('dotenv').config();
const supertest = require('supertest');

const { config: baseConfig } = require('../services.conf.api');

const request = supertest(baseConfig.urlFinerioConnect());
exports.config = { ...baseConfig, ...request };

class AccessAPI {
  async postAccess(grantType = 'password', refreshToken = '') {
    const path = '/oauth/token';
    const response = await request
      .post(path)
      .auth(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
      .field('username', process.env.USERNAAME)
      .field('password', process.env.PASSWORD)
      .field('grant_type', grantType)
      .field('refresh_token', refreshToken)
      .set({
        'Content-Type': 'application/x-www-form-urlencoded',
      });
    return response;
  }
}

module.exports = new AccessAPI();
