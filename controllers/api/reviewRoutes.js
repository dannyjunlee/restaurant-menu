const router = require('express').Router();
const {Review} = require('../../models');


// new review


// get all reviews for one dish

router.get('/:dish_id', async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            where: {
                dish_id: req.params.dish_id
            },
        });
        if (reviewData === []) {
            res.status(404).json({ message: 'No reviews for this dish' })
        }
        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// get all reviews by one user''

module.exports = router;