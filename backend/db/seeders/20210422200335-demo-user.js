'use strict';

const bcrypt = require('bcryptjs');
const faker = require('faker');

module.exports = {




  up: (queryInterface, Sequelize) => {

    const users = [
      { firstName: 'Demo', lastName: 'Person', email: 'kyle@demo.com', hashedPassword: bcrypt.hashSync('password') },
  ]



    for (let i = 0; i < 20; i++) {
      const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password')
      }
      users.push(newUser);
    }



      return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
