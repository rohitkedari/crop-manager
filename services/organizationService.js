const OrganizationModel = require('../models').Organization;

module.exports.getOrganization = function (orgId) {
  return OrganizationModel.findOne({
    where: { id: orgId },
    include: ['properties'],
  });
};

module.exports.createOrganization = function (org) {
  return OrganizationModel.create({ name: org.name })
    .then((orgEntity) => {
      const data = {};
      Object.keys(orgEntity.get()).forEach((key) => {
        data[key] = orgEntity[key];
      });
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.getAllOrganization = function () {
  return OrganizationModel.findAll();
};
