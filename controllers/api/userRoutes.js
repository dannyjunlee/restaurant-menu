const router = require('express').Router();
const { User, Dish } = require('../../models');
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');

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

        const username = await User.findOne({
            where: { username: req.body.username }
        });

        const email = await User.findOne({
            where: { email: req.body.email }
        });

        if (!username && !email) {
            const userData = await User.create(req.body);

            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.loggedIn = true;
                req.session.cart = []

                res.status(200).json(userData);
            });
        } else {
            res.status(401).json({ message: 'User already exists with this id and/or email' });
        };
    } catch (err) {
        res.status(500).json(err);
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
    try {
        const dbUserData = await User.findOne({
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
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;