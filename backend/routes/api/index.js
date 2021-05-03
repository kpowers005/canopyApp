const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const treehouseRouter = require('./treehouses.js');
const reviewRouter = require('./reviews.js');
const reservationRouter = require('./reservations.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/treehouses', treehouseRouter);

router.use('/reviews', reviewRouter);

router.use('/reservations', reservationRouter);


module.exports = router;
