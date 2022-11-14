const OAuthUsersModel = require('../models').OAuthUsers;
const OAuthTokensModel = require('../models').OAuthTokens;
const OAuthClientsModel = require('../models').OAuthClients;

module.exports.withLogin = async (
  req,
  client = {
    clientId: 'client_dev2',
    clientSecret: 'client_dev_secret2',
    redirectUris: 'http://localhost:3000/oauth/callback',
    grants: ['password', 'refresh_token'],
  },
  user = { username: 'test1@test.com', password: 'test@123', name: 'test1' },
  authToken = {
    accessToken: 'b82b7c1a773f49cd00fc0e115b81145bef3f91c9',
    refreshToken: '36087db307bdee1113233a5a7210f48eacd65a7d',
  }
) => {
  const [newClient] = await OAuthClientsModel.findOrCreate({
    where: { clientId: client.clientId },
    defaults: {
      clientSecret: client.clientSecret,
      redirectUris: client.redirectUris,
      grants: client.grants,
    },
  });
  const [newUser] = await OAuthUsersModel.findOrCreate({
    where: { username: user.username },
    defaults: { password: user.password, name: user.name },
  });
  const d1 = new Date();
  const d2 = new Date(d1);
  const [newAuthToken] = await OAuthTokensModel.findOrCreate({
    where: { clientId: newClient.id, userId: newUser.id },
    defaults: {
      accessToken: authToken.accessToken,
      accessTokenExpiresAt: d2.setHours(d1.getHours() + 6),
      clientId: newClient.id,
      refreshToken: authToken.refreshToken,
      refreshTokenExpiresAt: d2.setHours(d1.getHours() + 12),
      userId: newUser.id,
    },
  });
  return req.set('Authorization', `Bearer ${newAuthToken.token}`);
};
