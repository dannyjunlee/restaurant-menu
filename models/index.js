const User = require('./users');
const Dish = require('./dishes');
const Review = require('./reviews');

User.hasMany(Dish, {
  foreignKey: 'User_id',
});

Dish.hasMany(Review, {
    foreignKey: 'dish_id',
});

User.hasMany(Review, {
    foreignKey: 'User_id',
});

Review.belongsTo(Dish, {
    foreignKey: 'dish_id',
    onDelete: "CASCADE"
});

Review.belongsTo(User, {
    foreignKey: 'User_id',
    onDelete: "CASCADE"
});

Dish.belongsTo(User, {
    foreignKey: 'dish_id',
    onDelete: "CASCADE"
});

module.exports = { User, Dish, Review };