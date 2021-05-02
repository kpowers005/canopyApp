'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    total: DataTypes.INTEGER,
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    treehouseId: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, { foreignKey: 'userId' })
    Reservation.belongsTo(models.Treehouse, { foreignKey: 'treehouseId' })
  };
  return Reservation;
};
