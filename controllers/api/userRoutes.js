const router = require('express').Router();
const {User, Dish} = require('../../models');

// get all users
router.get('/', async (req, res) => {
    const userData = await User.findAll({
        include: [
            {
                model: Dish
            },
        ]
    }).catch((err) => {
        res.json(err);
    });
    res.json(userData);
});

// create new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        // TODO: figure out credit card validation
        // creditcard: req.body.creditcard,
      });
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;