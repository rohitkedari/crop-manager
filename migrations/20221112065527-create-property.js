/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orgId: {
        allowNull: false,
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
    queryInterface.addConstraint('Properties', {
      type: 'foreign key',
      fields: ['orgId'],
      name: 'fk_oauth_property_org',
      // Required field
      references: {
        table: 'Organizations',
        field: 'id',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Properties');
  },
};
