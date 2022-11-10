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

        res.render('homepage', {
            dishes,
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

        res.render('dish', {
            dishes,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;