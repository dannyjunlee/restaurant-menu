const router = require('express').Router();
const { User, Dish } = require('../../models');
const bcrypt = require('bcrypt');

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

// create new user (aka signup)
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            req.session.cart = []

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
});

// delete user

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

// login

router.post('/login', async (req, res) => {
    
    let dbUserData;
    
    try {
        dbUserData = await User.findOne({
            where: { email: req.body.email }
        });

        if (!dbUserData) {
            res.status(404).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        };

        const validPassword = await bcrypt.compare(
            req.body.password,
            dbUserData.password
        );

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        };

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;
            req.session.cart = [];
            

            res
                .status(200)
                .json({ user: dbUserData, message: 'You have successfully logged in.' });
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


// add favorite dish
router.put('/favorite/:dish_id', async (req, res) => {
    try {
        const user = await User.findByPk(req.session.user_id);
        const dish = await Dish.findByPk(req.params.dish_id);

        await user.addDish(dish, {through: UserDish});

       

        if (!req.session.loggedIn) {
            res.status(404).json({ message: 'You must be logged in to add a dish to your favorites' });
            return
        }
        res.status(200).json({message: `${user.username} has successfully added ${dish.dish_name} to their favorites`});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;