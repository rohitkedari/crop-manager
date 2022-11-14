const PropertyService = require('../services/propertyService');

module.exports.getProperty = function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  PropertyService.getProperty(id)
    .then((property) => res.json(property))
    .catch((error) => next(error));
};

module.exports.createProperty = function (req, res, next) {
  // TODO validate request body
  PropertyService.createProperty(req.body)
    .then((property) => res.status(201).json(property))
    .catch((error) => next(error));
};

module.exports.getAllProperty = function (req, res, next) {
  PropertyService.getAllProperty()
    .then((propertyList) => res.json(propertyList))
    .catch((error) => next(error));
};
