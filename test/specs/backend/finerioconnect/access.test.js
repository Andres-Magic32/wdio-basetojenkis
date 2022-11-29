const { assert } = require('chai');
const AccessSteps = require('../../../steps/backend/finerioconnect/access.steps');

let bearerToken;

describe('Access endpoint testing - Backend', () => {
  describe('Validation of successful response of the request --> HTTP Status Code = 200', () => {
    it('Get the access token of a registered user', async () => {
      bearerToken = await AccessSteps.getNewAccessToken();
    });
    it('Refresh the access token of a registered user', async () => {
      var newBearerToken = await AccessSteps.refreshAccessToken(bearerToken.refreshToken);
      assert.strictEqual(bearerToken.refreshToken, newBearerToken.refreshToken, 'The refreshToken not is equal to the first access');
      assert.notEqual((bearerToken.accessToken, newBearerToken.accessToken, 'The accessToken is equal to the first access'))
    });
  });
});
