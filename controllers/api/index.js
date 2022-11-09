const router = require('express').Router();
const dishRoutes = require('./dishRoutes');
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/dishes', dishRoutes);
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;