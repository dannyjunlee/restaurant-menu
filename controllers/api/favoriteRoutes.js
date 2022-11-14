const router = require('express').Router();
const { Favorite, Dish, User } = require('../../models');


// get favorites for current user

router.get('/', async (req, res) => {
    const favData = await Favorite.findAll({
        where: {
            user_id: req.session.user_id,
        },
    }).catch((err) => {
        res.json(err);
    });
    res.json(favData);
});


// add new favorite
router.post('/:dish_id', async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.status(404).json({ message: 'You must be logged in to add a dish to your favorites' });
            return
        }
        const newFavorite = await Favorite.create({
            user_id: req.session.user_id,
            dish_id: req.params.dish_id,
        });
        res.status(200).json(newFavorite);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete favorite

router.delete('/:dish_id', async (req, res) => {
    try {
        const favData =await Favorite.destroy({
            where: {
                user_id: req.session.user_id,
                dish_id: req.params.dish_id
            },
        });
        if (!req.session.loggedIn) {
            res.status(404).json({ message: 'You must be logged in'});
            return;
        }
        res.status(200).json(favData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;