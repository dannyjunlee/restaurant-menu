const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

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
            references: {
                model: 'user',
                key: 'id',
            },
        },
        dish_id: {
            type: DataTypes.INTEGER,
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
);

module.exports = Favorite;