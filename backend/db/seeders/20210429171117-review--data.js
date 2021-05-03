'use strict';

const faker = require('faker');

module.exports = {


  up: (queryInterface, Sequelize) => {
    const reviews = [
      { userId: 1, treehouseId: 1, rating: 4, body: faker.lorem.paragraph()},
    ]


    for (let i = 0; i < 180; i++) {
      const randUser = Math.floor((Math.random() * 200) + 1);
      const randTree = Math.floor((Math.random() * 25) + 1);
      const randRate = Math.floor((Math.random() * 5) + 1);
      const randBody = faker.lorem.paragraph();
      const rating = {
        userId: randUser,
        treehouseId: randTree,
        rating: randRate,
        body: randBody
      }
      reviews.push(rating);
    }

      return queryInterface.bulkInsert('Reviews', reviews, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
