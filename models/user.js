'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      //this.belongsToMany(models.Favorite, { foreignKey: 'userId', through: 'userFavorite', as: 'favorite' });
      
      this.belongsToMany(models.Favorite, {
        foreignKey: 'userId',
        constraints: true,
        through: {
          model: 'userFavorite'
        },
        as: 'favorite'
      })
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    adicionefreezeTableName: true,
    tableName: 'user',
  });
  return User;
};