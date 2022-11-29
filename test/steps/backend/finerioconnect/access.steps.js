const { assert } = require('chai');
const AccessAPI = require('../../../services/finerioconnect/access.api');

class AccessSteps {
  async getNewAccessToken() {
    const response = await AccessAPI.postAccess();
    assert.strictEqual(response.status, 200, 'The status code is not the expected one');
    assert.isNotNull((response.body).access_token, 'Access token not have to be null');
    assert.isNotNull((response.body).refresh_token, 'Refresh token not have to be null');
    return {
      accessToken: (response.body).access_token,
      refreshToken: (response.body).refresh_token,
    };
  }

  async refreshAccessToken(refreshToken) {
    assert.isNotNull(refreshToken, 'The refresh token parameter of the method must not be null');
    const response = await AccessAPI.postAccess('refresh_token', refreshToken);
    assert.strictEqual(response.status, 200, 'The status code is not the expected one');
    assert.isNotNull((response.body).access_token, 'Access token not have to be null');
    assert.isNotNull((response.body).refresh_token, 'Refresh token not have to be null');
    return {
      accessToken: (response.body).access_token,
      refreshToken: (response.body).refresh_token,
    };
  }
}

module.exports = new AccessSteps();
