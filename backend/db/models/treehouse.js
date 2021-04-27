'use strict';
module.exports = (sequelize, DataTypes) => {
  const Treehouse = sequelize.define('Treehouse', {
    title: {
      type: DataTypes.STRING(50),
      allowNull:false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image1: {
      type: DataTypes.STRING(100),
      allowNull:false,
    },
    image2: {
      type: DataTypes.STRING(100),
      allowNull:false,
    },
    image3: {
      type: DataTypes.STRING(100),
      allowNull:false,
    },
    image4: {
      type: DataTypes.STRING(100),
      allowNull:false,
    },
    image5: {
      type: DataTypes.STRING(100),
      allowNull:false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull:false,
    },
    state: {
      type: DataTypes.STRING(80),
      allowNull:false,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: false
    },
    longitude:{
      type: DataTypes.DECIMAL(10, 6),
      allowNull: false
    },
    electricity: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    wifi: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    tv: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    heating: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    ac: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    plumbing: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    kitchen: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {});
  Treehouse.associate = function(models) {

    Treehouse.belongsToMany(models.Reservation, {
      through: 'Reservation',
      otherKey: 'userId',
      foreignKey: 'treehouseId'
    });

    Treehouse.belongsToMany(models.Review, {
      through: 'Review',
      otherKey: 'userId',
      foreignKey: 'treehouseId'
    });

  };
  return Treehouse;
};
