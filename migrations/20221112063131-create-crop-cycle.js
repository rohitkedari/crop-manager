/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CropCycles', {
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
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cropId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    queryInterface.addConstraint('CropCycles', {
      type: 'foreign key',
      fields: ['cropId'],
      name: 'fk_oauth_crop_cycles_crop',
      // Required field
      references: {
        table: 'Crops',
        field: 'id',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('CropCycles');
  },
};
