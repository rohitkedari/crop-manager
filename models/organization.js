const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Organization.hasMany(models.Property, {
        onDelete: 'CASCADE',
        foreignKey: 'orgId',
        as: 'properties',
      });
    }
  }
  Organization.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Organization',
    }
  );
  return Organization;
};
