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

// GET route for one dish
router.get('/:id', async (req, res) => {
    try {
        const dishData = await Dish.findByPk(req.params.id, {
            include: [{ model: Review }]
        });

        const dishes = dishData.get({ plain: true });

        res.render('dish', {
            dishes,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;