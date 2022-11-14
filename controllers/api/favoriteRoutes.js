const router = require('express').Router();
const { Favorite, Dish, User } = require('../../models');


// add new favorite

router.post('/:dish_id', async (req, res) => {
    try {
        const newFavorite = Favorite.create()
    }
})