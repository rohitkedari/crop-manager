const CropModel = require('../models').Crop;

module.exports.getCrop = function (cropId) {
  return CropModel.findOne({ where: { id: cropId }, raw: true });
};

module.exports.createCrop = function (crop) {
  return CropModel.create({ name: crop.name })
    .then((cropEntity) => {
      const data = {};
      Object.keys(cropEntity.get()).forEach((key) => {
        data[key] = cropEntity[key];
      });
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.getAllCrop = function () {
  return CropModel.findAll();
};
