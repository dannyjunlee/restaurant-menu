const router = require('express').Router();
const dishRoutes = require('./dishRoutes');
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const favoriteRoutes = require('./favoriteRoutes');


router.use('/dishes', dishRoutes);
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;