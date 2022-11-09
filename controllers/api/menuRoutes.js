const router = require('express').Router();
const { Menu } = require('../../models');


// get all menu items

router.get('/', async (req, res) => {
    const menuData = await Menu.findAll({
        include: [
            {
                model: Comment,
            }
        ]
    }).catch((err) => {
        res.json(err);
    });
    res.json(menuData);
})