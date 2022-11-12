const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CropCycleField extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  CropCycleField.init(
    {
      cropCycleId: DataTypes.INTEGER,
      regionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CropCycleField',
    }
  );
  return CropCycleField;
};
