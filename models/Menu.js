const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dish_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    dish_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu',
  }
);

module.exports = Menu;