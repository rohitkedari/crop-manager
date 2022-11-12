const { Model } = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  class OAuthUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OAuthUsers.hasOne(models.OAuthTokens, {
        foreignKey: 'userId',
        as: 'token',
      });
    }
  }

  OAuthUsers.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'OAuthUsers',
    }
  );

  OAuthUsers.beforeSave((user) => {
    if (user.changed('password')) {
      // eslint-disable-next-line no-param-reassign
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
      );
    }
  });

  return OAuthUsers;
};
