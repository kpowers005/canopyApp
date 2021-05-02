'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    treehouseId: DataTypes.INTEGER,
    rating: DataTypes.DECIMAL,
    body: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Treehouse, { foreignKey: 'treehouseId' })
  };
  return Review;
};
