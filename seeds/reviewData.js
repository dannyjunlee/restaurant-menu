const { Review } = require('../models');

const reviewdata = [
    {
        comment: 'Delicious but portion too small',
        score: '8',
        dish_id: 1,
        user_id: 1
    },
    {
        comment: 'Amazing',
        score: '9.5',
        dish_id: 2,
        user_id: 1
    },
    {
        comment: 'Good food! Could use a bit more seasoning',
        score: '8',
        dish_id: 3,
        user_id: 1
    },
    {
        comment: 'Delicious! Dessert is sweet',
        score: '10',
        dish_id: 4,
        user_id: 1
    },
];

const seedReview = () => Review.bulkCreate(reviewdata);

module.exports = seedReview;