const CropCycleService = require('../services/cropCycleService');

module.exports.getCropCycle = function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  CropCycleService.getCropCycle(id)
    .then((cropCycle) => res.json(cropCycle))
    .catch((error) => next(error));
};

module.exports.createCropCycle = function (req, res, next) {
  // TODO validate request body
  CropCycleService.createCropCycle(req.body)
    .then((cropCycle) => res.status(201).json(cropCycle))
    .catch((error) => next(error));
};

module.exports.getAllCropCycle = function (req, res, next) {
  CropCycleService.getAllCropCycle()
    .then((cropCycleList) => res.json(cropCycleList))
    .catch((error) => next(error));
};
