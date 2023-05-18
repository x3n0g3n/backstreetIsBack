const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "bucket_db",
    "root",
<<<<<<< HEAD
    "Thumper1",
=======
    "havefun",
>>>>>>> 251b4dd96d3243a4f736b92e8df4f5ca869037ec


    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;