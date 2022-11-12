const CropCycleModel = require('../models').CropCycle;

module.exports.getCropCycle = function (cropCycleId) {
  return CropCycleModel.findOne({ where: { id: cropCycleId } });
};

module.exports.createCropCycle = function (cropCycle) {
  return CropCycleModel.create({
    name: cropCycle.name,
    startDate: new Date(cropCycle.startDay),
    endDate: new Date(cropCycle.endDay),
    cropId: cropCycle.cropId,
  })
    .then((cropCycleEntity) => {
      const data = {};
      Object.keys(cropCycleEntity.get()).forEach((key) => {
        data[key] = cropCycleEntity[key];
      });
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.getAllCropCycle = function () {
  return CropCycleModel.findAll();
};
