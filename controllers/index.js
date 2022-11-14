const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const cartRoute = require('./cartRoute');
// other routes

router.use('/api', apiRoutes);
// router.use('/cart', cartRoute);
router.use('/', homeRoutes);

module.exports = router;