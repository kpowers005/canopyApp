const express = require('express')
const asyncHandler = require('express-async-handler');
const { Treehouse } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
  const treehouses = await Treehouse.findAll();

  return res.json(treehouses);
}))

module.exports = router;
