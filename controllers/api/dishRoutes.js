const router = require('express').Router();
const { Dish, Review } = require('../../models');


// get all dishes

router.get('/', async (req, res) => {
    const dishData = await Dish.findAll({
        include: [
            {
                model: Review
            },
        ]
    }).catch((err) => {
        res.json(err);
    });
    res.json(dishData);
});

// get dishes by category

router.get('/:dish_type', async (req, res) => {
    try {
        const dishData = await Menu.findAll({
            where: {
                dish_type: req.params.dish_type
            },
            include: [
                {
                    model: Review
                },
            ]
        });
        if (!dishData) {
            res.status(404).json({ message: 'Not a valid dish category' })
        }
        res.status(200).json(dishData);
    } catch (err) {
        res.status(500).json(err);
    }
})