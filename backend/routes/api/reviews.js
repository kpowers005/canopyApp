const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Review } = require('../../db/models');
const router = express.Router();

router.get('/:treehouseid', asyncHandler( async (req, res) => {
  const { treehouseid } = req.params;

  const treehouseReviews = await Review.findAll({ where :
  {treehouseId: treehouseid},
  attributes: {exclude: [], include: ['id']},
  include: User
 });
  return res.json(treehouseReviews);
}))

module.exports = router;
