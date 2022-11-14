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
                model: User,
                key: 'id',
            },
            onDelete: "CASCADE"
        },
        dish_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Dish,
                key: 'id',
            },
            onDelete: "CASCADE"
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Favorite',
    }
)

module.exports = Favorite