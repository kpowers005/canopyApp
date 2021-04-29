const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const treehouseRouter = require('./treehouses.js');
const reviewRouter = require('./reviews.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/treehouses', treehouseRouter);

router.use('/reviews', reviewRouter)


module.exports = router;
