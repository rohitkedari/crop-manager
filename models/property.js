const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Property.hasMany(models.Region, {
        onDelete: 'CASCADE',
        foreignKey: 'propertyId',
        as: 'regions',
      });
      Property.belongsTo(models.Organization, {
        foreignKey: 'id',
        as: 'org',
      });
    }
  }
  Property.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      orgId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Property',
    }
  );
  return Property;
};
