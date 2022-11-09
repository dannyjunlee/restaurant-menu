const { User } = require('../models');

const userdata = [
    {
        username: 'User 1',
        email: 'user1@gmail.com',
        password: 'password1',
        favorite_dish: []
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;