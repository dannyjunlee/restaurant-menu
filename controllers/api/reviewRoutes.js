const router = require('express').Router();
const {Review} = require('../../models');


// new review
router.post('/:dish_id', async (req, res) => {
    try {
        const newReview = await Review.create({
            comment: req.body.comment,
            score: req.body.score,
            dish_id: req.params.dish_id,
            user_id: req.session.user_id
        });

        res.status(200).json(newReview)
    } catch (err) {
        res.status(400).json(err);
    }
});

// get all reviews for one dish

router.get('/:dish_id', async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            where: {
                dish_id: req.params.dish_id
            },
        });
        if (reviewData.length === 0) {
            res.status(404).json({ message: 'No reviews for this dish' })
            return
        }
        res.status(200).json(reviewData);
        console.log(reviewData)
    } catch (err) {
        res.status(500).json(err);
    }
});


// get all your own reviews

router.get('/myreviews', async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            where: {
                user_id: req.session.user_id
            },
        });
        if (reviewData.length === 0) {
            res.status(404).json({ message: "You haven't posted any reviews yet!" })
            return
        }
        res.status(200).json(reviewData);
        console.log(reviewData)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;