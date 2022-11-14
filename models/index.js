const User = require('./User');
const Dish = require('./Dish');
const Review = require('./Review');
const Cart = require('./Cart');
const Favorite = require( './Favorite');

User.hasMany(Dish, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
  
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

Dish.belongsTo(User, {
    foreignKey: 'user_id',
});

Cart.belongsTo(User, {
    foreignKey: 'user_id',
});

Dish.belongsToMany(User, {through: Favorite});
User.belongsToMany(Dish, {through: Favorite});

module.exports = { User, Dish, Review , Cart, Favorite };