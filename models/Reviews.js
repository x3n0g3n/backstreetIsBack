const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Reviews extends Model {}

Reviews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    activity: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'no review submitted',
    },
    rating: {
      type: DataTypes.ENUM('terrible', 'decent', 'good', 'wonderful', 'amazing'),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviews',
  }
);
module.exports = Reviews;