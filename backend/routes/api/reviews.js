const express = require('express');
const asyncHandler = require('express-async-handler');
const { Treehouse, Review } = require('../../db/models');
const router = express.Router();

router.get('/:treehouseid', asyncHandler( async (req, res) => {
  const { treehouseid } = req.params;

  const treehouseReviews = await Review.findAll({ where :
  {treehouseId: treehouseid},
  attributes: {exclude: [], include: ['id']}
 });
  return res.json(treehouseReviews);
}))

module.exports = router;
