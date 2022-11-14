const { User } = require('../models');

const userdata = [
    {
        username: 'User1',
        email: 'user1@gmail.com',
        password: 'password1',
    },
    {
        username: 'User2',
        email: 'user2@gmail.com',
        password: 'password2',
    },
    {
        username: 'User3',
        email: 'user3@gmail.com',
        password: 'password3',

    },
    {
        username: 'User4',
        email: 'user4@gmail.com',
        password: 'password4',
    },
    {
        username: 'User5',
        email: 'user5@gmail.com',
        password: 'password5'
    }
];

const seedUsers = async () => await User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true
});

module.exports = seedUsers;