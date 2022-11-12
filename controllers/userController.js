const OAuthUsersModel = require('../models').OAuthUsers;

module.exports.signupUser = function (user) {
  return OAuthUsersModel.create({
    username: user.username,
    password: user.password,
    name: user.name,
  })
    .then((userResult) => {
      const userResultJson =
        userResult && typeof userResult === 'object'
          ? userResult.toJSON()
          : userResult;
      const data = {};
      data.username = userResultJson.username;
      data.name = userResultJson.name;

      return data;
    })
    .catch((error) => {
      throw error;
    });
};
