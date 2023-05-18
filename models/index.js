const User = require('./User');
const Reviews = require('./Reviews');
const { startCase } = require('lodash');

User.hasMany(Reviews, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Reviews.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Reviews };