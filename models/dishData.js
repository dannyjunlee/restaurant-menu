const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dish extends Model {}

Dish.init(
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
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'dish',
  }
);

module.exports = Dish;