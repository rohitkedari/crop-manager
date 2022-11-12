/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OAuthTokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      accessToken: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      accessTokenExpiresAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      refreshToken: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      refreshTokenExpiresAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      clientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
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
    queryInterface.addConstraint('OAuthTokens', {
      type: 'foreign key',
      fields: ['clientId'],
      name: 'fk_oauth_token_client',
      // Required field
      references: {
        table: 'OAuthClients',
        field: 'id',
      },
    });
    queryInterface.addConstraint('OAuthTokens', {
      type: 'foreign key',
      fields: ['userId'],
      name: 'fk_oauth_token_user',
      // Required field
      references: {
        table: 'OAuthUsers',
        field: 'id',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('OAuthTokens');
  },
};
