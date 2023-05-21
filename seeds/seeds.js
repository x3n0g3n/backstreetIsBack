const sequelize = require('../Config/connection');
const { User } = require('../models');
const { Reviews } = require('../models');
const userData = require('./userData.json');
const ReveiwsData = require('./ReviewsData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })

  await Reviews.bulkCreate(ReveiwsData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase();