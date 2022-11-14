const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const User = require('./User');
const Dish = require('./Dish');

class Favorite extends Model { }

Favorite.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        dish_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'dish',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite',
    }
)

module.exports = Favorite