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
}));

router.post('/', asyncHandler( async (req, res) => {
  const { newReview } = req.body;
  const { userId, treehouseId, rating, body } = newReview;
  const review = await Review.create({
    userId,
    treehouseId,
    rating,
    body
  });
  console.log(review)
  return res.json(review);
}))

module.exports = router;
