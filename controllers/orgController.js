const OrganizationService = require('../services/organizationService');

module.exports.getOrganization = function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  OrganizationService.getOrganization(id)
    .then((org) => res.json(org))
    .catch((error) => next(error));
};

module.exports.createOrganization = function (req, res, next) {
  // TODO validate request body
  OrganizationService.createOrganization(req.body)
    .then((org) => res.status(201).json(org))
    .catch((error) => next(error));
};

module.exports.getAllOrganization = function (req, res, next) {
  OrganizationService.getAllOrganization()
    .then((orgList) => res.json(orgList))
    .catch((error) => next(error));
};
