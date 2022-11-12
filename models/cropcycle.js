const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CropCycle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  CropCycle.init(
    {
      name: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      cropId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CropCycle',
    }
  );
  return CropCycle;
};
