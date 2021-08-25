const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const treehouseRouter = require('./treehouses.js');
const reviewRouter = require('./reviews.js');
const reservationRouter = require('./reservations.js');
const mapRouter = require('./map.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/treehouses', treehouseRouter);

router.use('/reviews', reviewRouter);

router.use('/reservations', reservationRouter);

router.use('/map', mapRouter);


module.exports = router;
