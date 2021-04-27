'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Treehouses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      rate: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image3: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image4: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image5: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      latitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      electricity: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      wifi: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      tv: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      heating: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      ac: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      plumbing: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      kitchen: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Treehouses');
  }
};
