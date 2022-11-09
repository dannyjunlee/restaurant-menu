const { Dish } = require('../models');

const dishdata = [
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
    dish_type: 'Appetizer',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 5.00
  },
  {
    dish_type: 'Appetizer',
    dish_name: 'Sample Dish 4',
    dish_description: 'Sample Description 4',
    dish_price: 5.00
  },
  {
    dish_type: 'Appetizer',
    dish_name: 'Sample Dish 5',
    dish_description: 'Sample Description 5',
    dish_price: 5.00
  },
  {
    dish_type: 'Appetizer',
    dish_name: 'Sample Dish 6',
    dish_description: 'Sample Description 6',
    dish_price: 5.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
  },
  {
    dish_type: 'Entree',
    dish_name: 'Sample Dish 3',
    dish_description: 'Sample Description 3',
    dish_price: 15.00
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
  {
    dish_type: 'Dessert',
    dish_name: 'Sample Dish 4',
    dish_description: 'Sample Description 4',
    dish_price: 10.00
  },
  {
    dish_type: 'Dessert',
    dish_name: 'Sample Dish 4',
    dish_description: 'Sample Description 4',
    dish_price: 10.00
  },
  {
    dish_type: 'Dessert',
    dish_name: 'Sample Dish 4',
    dish_description: 'Sample Description 4',
    dish_price: 10.00
  },
  {
    dish_type: 'Drink',
    dish_name: 'Orange Bellossom Iced-Tea',
    dish_description: 'Refreshing citrus tea with a Squirtle of orange syrup',
    dish_price: 2.00
  },
  {
    dish_type: 'Drink',
    dish_name: 'Snorlax Tea',
    dish_description: 'This tea might make you Drowzee with its relaxing chamomile, lavender, and valerian',
    dish_price: 2.00
  },
  {
    dish_type: 'Drink',
    dish_name: 'Peppermint Sinistea',
    dish_description: 'Cooling and anti-inflammatory peppermint is great for when you are Koffing and Weezing',
    dish_price: 2.00
  },
  {
    dish_type: 'Drink',
    dish_name: 'Flapple Juice',
    dish_description: 'Sweet and crisp apple slices are added for a Blastoise of fresh Applin flavor',
    dish_price: 2.00
  },
];

const seedDish = () => Dish.bulkCreate(dishdata);

module.exports = seedDish;