const createError = require('http-errors');
const RegionModel = require('../models').Region;
const PropertyService = require('./propertyService');

const validateParentRegion = (parentRegion) => {
  if (!parentRegion) {
    throw createError(400, 'Invalid input', {
      parentId: 'Region with given parentId not found',
    });
  }
  if (parentRegion.isField) {
    // Check parent is region (not field)
    throw createError(400, 'Invalid input', {
      parentId: 'Cannot create region/field under field',
    });
  }
};

const validateProperty = async (propertyId) => {
  if (!propertyId) {
    throw createError(400, 'Invalid input', {
      propertyId: 'Propertyid is required',
    });
  }
  const property = await PropertyService.getProperty(propertyId);
  if (!property) {
    // Check parent is region (not field)
    throw createError(400, 'Invalid input', {
      propertyId: 'Property with given propertyId not found',
    });
  }
};

module.exports.getRegion = function (regionId) {
  return RegionModel.findOne({
    where: { id: regionId },
    include: ['property', 'children', 'cropCycle'],
  });
};

module.exports.createRegion = async function (region) {
  let parent;
  if (region.parentId) {
    parent = await RegionModel.findOne({ where: { id: region.parentId } });
    validateParentRegion(parent);
  } else {
    await validateProperty(region.propertyId);
  }

  return RegionModel.create({
    name: region.name,
    isField: !!region.isField,
    lat: region.lat,
    lon: region.lon,
    area: region.area,
    propertyId: parent ? parent.propertyId : region.propertyId, // Set same as parent's property
    parentId: region.parentId,
    cropCycleId: region.cropCycleId,
  })
    .then((regionEntity) => {
      const data = {};
      Object.keys(regionEntity.get()).forEach((key) => {
        data[key] = regionEntity[key];
      });
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.getAllRegion = function () {
  return RegionModel.findAll();
};
