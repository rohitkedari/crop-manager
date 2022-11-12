/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Regions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isField: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      lat: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      lon: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      area: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      parentId: {
        type: Sequelize.INTEGER,
      },
      propertyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cropCycleId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    queryInterface.addConstraint('Regions', {
      type: 'foreign key',
      fields: ['propertyId'],
      name: 'fk_oauth_region_property',
      // Required field
      references: {
        table: 'Properties',
        field: 'id',
      },
    });
    queryInterface.addConstraint('Regions', {
      type: 'foreign key',
      fields: ['parentId'],
      name: 'fk_oauth_region_region',
      // Required field
      references: {
        table: 'Regions',
        field: 'id',
      },
    });
    queryInterface.addConstraint('Regions', {
      type: 'foreign key',
      fields: ['cropCycleId'],
      name: 'fk_oauth_region_crop_cycles',
      // Required field
      references: {
        table: 'CropCycles',
        field: 'id',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Regions');
  },
};
