const User = require('./user');
const Reviews = require('./Reviews');

Reviews.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Reviews, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Reviews };