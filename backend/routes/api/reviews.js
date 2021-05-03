const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Review: reviews, Treehouse } = require('../../db/models');
const router = express.Router();


const validateReview = [
  check('rating')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid rating')
    .isIn({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5.'),
  handleValidationErrors
]

router.get('/:treehouseid', asyncHandler( async (req, res) => {
  const { treehouseid } = req.params;

  const treehouseReviews = await reviews.findAll({ where :
  {treehouseId: treehouseid},
  attributes: {exclude: [], include: ['id']},
  include: User
 });
  return res.json(treehouseReviews);
}));

router.post('/', validateReview, asyncHandler( async (req, res) => {
  const { newReview } = req.body;
  const { userId, treehouseId, rating, body } = newReview;
  const review = await reviews.create({
    userId,
    treehouseId,
    rating,
    body
  });
  const updatedReview = await reviews.findOne({where: {
    id: review.id },
  include: [User, Treehouse]
  });


  return res.json(updatedReview);
}));


router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const item = await reviews.findOne({ where : {id} });
  const removed = await item.destroy();

  return res.json(removed);
}));


router.put('/edit', validateReview, asyncHandler( async (req, res) => {
  const { update } = req.body;

  const [...change] = await reviews.update(
    {body: update.body},
    {where: {id: update.id}, returning: true}
  );

  console.log(change)
  return res.json(change)

}));

module.exports = router;
