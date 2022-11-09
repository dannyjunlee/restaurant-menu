const sequelize = require('../config/connection');
const seedDish = require('./dish')

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedDish();
    process.exit(0)
};

seedAll();