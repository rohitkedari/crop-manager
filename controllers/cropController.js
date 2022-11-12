const CropService = require('../services/cropService');

module.exports.getCrop = function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  CropService.getCrop(id)
    .then((crop) => res.json(crop))
    .catch((error) => next(error));
};

module.exports.createCrop = function (req, res, next) {
  // TODO validate request body
  CropService.createCrop(req.body)
    .then((crop) => res.json(crop))
    .catch((error) => next(error));
};

module.exports.getAllCrop = function (req, res, next) {
  CropService.getAllCrop()
    .then((cropList) => res.json(cropList))
    .catch((error) => next(error));
};
