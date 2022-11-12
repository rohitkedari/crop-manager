const RegionService = require('../services/regionService');

module.exports.getRegion = function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  RegionService.getRegion(id)
    .then((region) => res.json(region))
    .catch((error) => next(error));
};

module.exports.createRegion = async function (req, res, next) {
  // TODO validate logged in user and organization
  RegionService.createRegion(req.body)
    .then((region) => res.json(region))
    .catch((error) => {
      next(error);
    });
};

module.exports.getAllRegion = function (req, res, next) {
  RegionService.getAllRegion()
    .then((regionList) => res.json(regionList))
    .catch((error) => next(error));
};
