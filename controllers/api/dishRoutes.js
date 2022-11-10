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
        const dishData = await Dish.findAll({
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
});

// update dish
router.put('/:id', async (req, res) => {
    try {
        const updatedDish = await Dish.update(
            {
                dish_type: req.body.dish_type,
                dish_name: req.body.dish_name,
                dish_description: req.body.dish_description,
                dish_price: req.body.dish_price,
            },
            {
                where: {
                    id: req.params.id,
                },
            });

        if (!updatedDish) {
            res.status(404).json({ message: 'No dish found with this id' });
        }
        res.status(200).json(updatedDish);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;