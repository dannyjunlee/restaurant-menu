const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
      },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    creditcard: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isCreditCard: true,
        },
    },
    favorites: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'dish',
          key: 'id',
        },
    },
  },
  {
    hooks: {
        async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        async beforeUpdate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;