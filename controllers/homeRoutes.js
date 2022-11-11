const router = require('express').Router();
const { Dish, Review, User } = require('../models');


// GET route for homepage
router.get('/', async (req, res) => {
    try {
        const dishData = await Dish.findAll({
            include: [{ model: Review }]
        });

        const dishes = dishData.map((dish) =>
            dish.get({ plain: true })
        );

        const appetizers = dishes.filter(dish => dish.dish_type === 'Appetizer');

        const entrees = dishes.filter(dish => dish.dish_type === 'Entree');

        const desserts = dishes.filter(dish => dish.dish_type === 'Dessert');

        const drinks = dishes.filter(dish => dish.dish_type === 'Drink');

        res.render('homepage', {
            dishes,
            appetizers,
            entrees,
            drinks,
            desserts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// GET route for one category
router.get('/:dish_type', async (req, res) => {
    try {
        const dishData = await Dish.findAll({
            where: {
                dish_type: req.params.dish_type
            },
            include: [{ model: Review }]
        });

        const dishes = dishData.map((dish) =>
            dish.get({ plain: true })
        );

        res.render('homepage', {
            dishes,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    };
});


module.exports = router;