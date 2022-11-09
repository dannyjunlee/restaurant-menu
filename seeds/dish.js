const { Dish } = require('../models');

const dishdata = [
  {
    dish_type: 'Appetizer',
    dish_name: 'Pumpkaboo Porridge',
    dish_description: 'Sweet and savory pumpkin porridge with a dash of cinnamon and nutmeg - so good you will be Gulpin it down',
    dish_price: 5.00
  },
  {
    dish_type: 'Appetizer',
    dish_name: 'Chesnaught Hummus',
    dish_description: 'Chestnut hummus served with herbed crackers - (gluten-free crackers!)',
    dish_price: 5.00
  },
  {
    dish_type: 'Appetizer',
    dish_name: 'Stuffed Mushrooms',
    dish_description: 'A very Shroomish dish when you need a Foongus fix',
    dish_price: 5.00
  },
  {
    dish_type: 'Appetizer',
    dish_name: 'Garden Salad',
    dish_description: 'Fresh garden vegetables and Bellsprouts on a bed of spinach and iceberg lettuce Leafeons',
    dish_price: 5.00
  },
  {
    dish_type: 'Appetizer',
    dish_name: 'Arti-Machoke Hearts',
    dish_description: 'Caramelized maple syrup gives these artichoke hearts a Blastoise of flavor',
    dish_price: 5.00
  },
  {
    dish_type: 'Appetizer',
    dish_name: 'Snap Peas w/Dipping Sauce',
    dish_description: 'Farm-fresh snap peas in their Metapods and a Sunflora seed butter-based creamy sauce',
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
    dish_name: 'Vanilla Ice Cream Cup',
    dish_description: 'Comes in 3 sizes - Vanillite (S), Vanillish (M), and Vanilluxe(L)',
    dish_price: 10.00
  },
  {
    dish_type: 'Dessert',
    dish_name: 'Jiggly-Cream-Puffs',
    dish_description: 'Sweet cream puffs filled with strawberry Jellicent',
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
    dish_description: 'Sweet and crisp apple slices are added for a fresh Applin flavor',
    dish_price: 2.00
  },
];

const seedDish = () => Dish.bulkCreate(dishdata);

module.exports = seedDish;