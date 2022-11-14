const User = require('./User');
const Dish = require('./Dish');
const Review = require('./Review');
const Cart = require('./Cart');
const Favorite = require('./Favorite');

Dish.hasMany(Review, {
    foreignKey: 'dish_id',
    onDelete: 'CASCADE',
});
  
User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(Dish, {
    foreignKey: 'dish_id',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

Cart.belongsTo(User, {
    foreignKey: 'user_id',
});

Dish.belongsToMany(User, { through: Favorite, uniqueKey: 'dish_id' });
User.belongsToMany(Dish, { through: Favorite, uniqueKey: 'user_id' });

module.exports = { User, Dish, Review , Cart, Favorite };