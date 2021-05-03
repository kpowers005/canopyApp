'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const paragraph = () => faker.lorem.paragraph();
    const randRate = () => Math.floor(Math.random() * (460 - 320) + 320);
    const lat = () => faker.address.latitude();
    const lon = () => faker.address.longitude();
    const randCity = () => faker.address.city();
    const randState = () => faker.address.state();

    const exteriors = [
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouse2.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouse3.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouse4.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouse5.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/trehouse6.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouse7.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouse8.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouse9.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouse1.jpeg'
    ];

    const interiors = [
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouseviews2.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior1.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior2.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior3.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior4.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior6.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior7.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior8.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior10.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior11.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior12.jpeg',
      'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior13.jpeg'
    ];

    const treehouses = [
      {
      title: 'Luxury Treehouse with a View',
      description: paragraph(),
      rate: randRate(),
      image1: 'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treehouse5.jpeg',
      image2: 'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeBed2.jpeg',
      image3: 'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior8.jpeg',
      image4: 'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior6.jpeg',
      image5: 'https://canopyappkp.s3.us-east-2.amazonaws.com/treehouseImgs/treeInterior1.jpeg',
      city: randCity(),
      state: randState(),
      latitude: lat(),
      longitude: lon(),
    }
  ];


  for (let i = 0; i < 24; i++) {

    const main = exteriors.shift();
    const inside = interiors.shift()

    const newTree = {
      title: 'Luxury Treehouse',
      description: paragraph(),
      rate: randRate(),
      image1: main,
      image2: inside,
      image3: interiors[0],
      image4: interiors[1],
      image5: interiors[2],
      city: randCity(),
      state: randState(),
      latitude: lat(),
      longitude: lon(),
    }
    treehouses.push(newTree);
    exteriors.push(main);
    interiors.push(inside);
  };

    return queryInterface.bulkInsert('Treehouses', treehouses, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Treehouses', null, {});
  }
};
