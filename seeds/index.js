const sequelize = require('../config/connection');
const seedDish = require('./dish');
const seedReview = require('./reviewData');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedDish();
    await seedReview();
    process.exit(0)
};

seedAll();