const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const treehouseRouter = require('./treehouses.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/treehouses', treehouseRouter);


module.exports = router;
