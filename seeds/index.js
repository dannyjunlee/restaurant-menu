const sequelize = require('../config/connection');
const seedMenu = require('./menu')

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedMenu();
    process.exit(0)
};

seedAll();