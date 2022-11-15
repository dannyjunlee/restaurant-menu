const sequelize = require('../config/connection');
const seedDish = require('./dish');
const seedReview = require('./reviewData');
const seedUsers = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await sequelize.literal('SET FOREIGN_KEY_CHECKS = 0; DROP TABLE dish IF EXISTS; DROP TABLE user IF EXISTS; DROP TABLE review IF EXISTS; SET FOREIGN_KEY_CHECKS = 1;');
    await seedDish();
    await seedUsers();
    await seedReview();
    process.exit(0)
};

seedAll();