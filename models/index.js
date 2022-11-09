const User = require('./users');
const Dish = require('./dishes');
const Review = require('./reviews');

User.hasMany(Dish, {
  foreignKey: 'User_id',
    onDelete: "CASCADE"
});

Dish.hasMany(Review, {
    foreignKey: 'dish_id',
      onDelete: "CASCADE"
});

Review.belongsTo(Dish, {
    foreignKey: 'dish_id',
    onDelete: "CASCADE"
});

module.exports = { User, Dish, Review };