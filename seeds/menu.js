const { Menu } = require('../models');

const menudata = [
  {
    dish_type: 'Appetizer',
    dish_name: 'Sample Dish 1',
    dish_description: 'Sample Description 1',
    dish_price: 5.00
  },
  {
    dish_type: 'Appetizer',
    dish_name: 'Sample Dish 2',
    dish_description: 'Sample Description 2',
    dish_price: 5.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
  },
  {
    dish_type: 'Dessert',
    dish_name: 'Sample Dish 4',
    dish_description: 'Sample Description 4',
    dish_price: 10.00
  },
];

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;