const router = require('express').Router();
const { menuData } = require('../models');

router.get('/', async (req, res) => {
    try {
        const menu = await menuData.findAll();

        const menus = menu.map((menuItem) =>
            menuItem.get({ plain: true })
        );

        res.render('homepage', {
            menus,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/:id', async (req, res) => {

})