'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('userFavorite', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'user', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      favoriteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'favorite', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }    
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userFavorite');
  }
};
