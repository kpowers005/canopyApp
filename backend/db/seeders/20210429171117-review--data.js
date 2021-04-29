'use strict';

const faker = require('faker');

module.exports = {


  up: (queryInterface, Sequelize) => {
    let reviews = [
      { userId: 1, treehouseId: 1, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 2, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 3, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 4, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 1, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 2, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 3, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 4, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 1, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 2, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 3, rating: 4, body: faker.lorem.paragraph()},
      { userId: 1, treehouseId: 4, rating: 4, body: faker.lorem.paragraph()},
    ]

      return queryInterface.bulkInsert('Reviews', reviews, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
