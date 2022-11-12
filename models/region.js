const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Region.hasMany(models.Region, {
        onDelete: 'CASCADE',
        foreignKey: 'parentId',
        as: 'children',
      });
      Region.belongsTo(models.Property, {
        as: 'property',
      });
      Region.belongsTo(models.CropCycle, {
        foreignKey: 'cropCycleId',
        as: 'cropCycle',
      });
    }
  }
  Region.init(
    {
      name: DataTypes.STRING,
      isField: DataTypes.BOOLEAN,
      lat: DataTypes.DECIMAL(10, 6),
      lon: DataTypes.DECIMAL(10, 6),
      area: DataTypes.DECIMAL(10, 2),
      parentId: DataTypes.INTEGER,
      propertyId: DataTypes.INTEGER,
      cropCycleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Region',
    }
  );
  return Region;
};
