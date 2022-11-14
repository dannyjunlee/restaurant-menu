const router = require('express').Router();
const { Favorite, Dish, User } = require('../../models');


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

module.exports = router;