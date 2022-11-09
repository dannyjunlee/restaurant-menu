const User = require('./users');
const Dish = require('./dishes');
const Review = require('./reviews');

User.hasMany(Dish, {
  foreignKey: 'user_id',
});

Dish.hasMany(Review, {
    foreignKey: 'dish_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
});

Review.belongsTo(Dish, {
    foreignKey: 'dish_id',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

Dish.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Dish, Review };