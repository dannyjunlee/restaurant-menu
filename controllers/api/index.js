const router = require('express').Router();
const dishRoutes = require('./dishRoutes');
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const cartRoutes = require('./cartRoutes');

router.use('/dishes', dishRoutes);
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/cart', cartRoutes);

module.exports = router;