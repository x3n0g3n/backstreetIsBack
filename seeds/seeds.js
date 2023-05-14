const sequelize = require('../config/connection');
const { User } = require('../models');
const { Reviews} = require('../models');
const userData = require('./userData.json');
const ReveiwsData = require('./ReviewsData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })

  for (const Reviews of ReveiwsData) {
    await Reviews.create({
      ...Reviews,
      user_id: User[Math.floor(Math.random() * User.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();