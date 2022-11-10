const router = require('express').Router();
const { User, Dish } = require('../../models');

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
            creditcard: req.body.creditcard,
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

// update user
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.update(
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                address: req.body.phone,
            },
            {
                where: {
                    id: req.params.id,
                },
            });

        if (!updatedUser) {
            res.status(404).json({ message: 'No user found with this id' });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
})

// delete route

router.delete('/:id', async (req, res) => {
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;