const sequelize = require('../config/connection');
const seedMenu = require('./menu');
const seedReview = require('./reviewData');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedMenu();
    await seedReview();
    process.exit(0)
};

seedAll();