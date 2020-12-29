'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {

    static associate(models) {
      //this.belongsToMany(models.User, { foreignKey: 'favoriteId', through: 'userFavorite', as: 'user' });

      this.belongsToMany(models.User, {
        foreignKey: 'favoriteId',
        constraints: true,
        as: 'favorite',
        through: {
          model: 'userFavorite'
        },
        as: 'user'
      })
    }
  };
  Favorite.init({
    idShow: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
    adicionefreezeTableName: true,
    tableName: 'favorite',
  });
  return Favorite;
};