const bcrypt = require('bcrypt-nodejs');
const createError = require('http-errors');
const OAuthTokensModel = require('../models').OAuthTokens;
const OAuthClientsModel = require('../models').OAuthClients;
const OAuthUsersModel = require('../models').OAuthUsers;

module.exports.getAccessToken = function (bearerToken) {
  return OAuthTokensModel.findOne({
    where: {
      accessToken: bearerToken,
    },
    include: [
      {
        model: OAuthClientsModel,
        as: 'client',
      },
      {
        model: OAuthUsersModel,
        as: 'user',
      },
    ],
  })
    .then((token) => {
      if (!token) {
        throw createError(403, 'Invalid auth token');
      }
      const data = {};
      Object.keys(token.get()).forEach((key) => {
        data[key] = token[key];
      });
      data.client = data.client.get();
      data.user = data.user.get();
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.getClient = function (clientId, clientSecret) {
  return OAuthClientsModel.findOne({
    where: { clientId, clientSecret },
    raw: true,
  });
};

module.exports.getRefreshToken = function (refreshToken) {
  return OAuthTokensModel.findOne({
    where: {
      refreshToken,
    },
    include: [
      {
        model: OAuthClientsModel,
        as: 'client',
      },
      {
        model: OAuthUsersModel,
        as: 'user',
      },
    ],
  })
    .then((token) => {
      const data = {};
      Object.keys(token.get()).forEach((key) => {
        data[key] = token[key];
      });
      data.client = data.client.get();
      data.user = data.user.get();
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.getUser = function (username, password) {
  return OAuthUsersModel.findOne({ where: { username } }).then((user) => {
    const isMatch = bcrypt.compareSync(password, user.get().password);
    if (isMatch) {
      return user.get();
    }
    throw createError(400, 'Invalid input', {
      password: 'Incorrect password',
    });
  });
};

module.exports.saveToken = function (token, client, user) {
  return OAuthTokensModel.create({
    accessToken: token.accessToken,
    accessTokenExpiresAt: token.accessTokenExpiresAt,
    clientId: client.id,
    refreshToken: token.refreshToken,
    refreshTokenExpiresAt: token.refreshTokenExpiresAt,
    userId: user.id,
  })
    .then((tokenEntity) => {
      const data = {};
      Object.keys(tokenEntity.get()).forEach((key) => {
        data[key] = tokenEntity[key];
      });
      data.client = data.clientId;
      data.user = data.userId;

      return data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.revokeToken = function (token) {
  return OAuthTokensModel.findOne({
    where: { refreshToken: token.refreshToken },
  })
    .then((refreshToken) =>
      refreshToken
        .destroy()
        .then(() => !!refreshToken)
        .catch((error) => {
          throw error;
        })
    )
    .catch((error) => {
      throw error;
    });
};

module.exports.setClient = function (client) {
  return OAuthClientsModel.create({
    clientId: client.clientId,
    clientSecret: client.clientSecret,
    redirectUris: client.redirectUris,
    grants: client.grants,
  })
    .then((clientEntity) => {
      const clientJson =
        clientEntity && typeof clientEntity === 'object'
          ? clientEntity.toJSON()
          : clientEntity;
      const data = {};
      Object.keys(clientJson).forEach((key) => {
        data[key] = clientJson[key];
      });
      data.client = data.clientId;

      return data;
    })
    .catch((error) => {
      throw error;
    });
};
