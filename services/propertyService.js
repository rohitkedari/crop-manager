const PropertyModel = require('../models').Property;

module.exports.getProperty = function (propertyId) {
  return PropertyModel.findOne({
    where: { id: propertyId },
    include: ['org', 'regions'],
  });
};

module.exports.createProperty = function (property) {
  return PropertyModel.create({
    name: property.name,
    address: property.address,
    orgId: property.orgId,
  })
    .then((propertyEntity) => {
      const data = {};
      Object.keys(propertyEntity.get()).forEach((key) => {
        data[key] = propertyEntity[key];
      });
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.getAllProperty = function () {
  return PropertyModel.findAll();
};
