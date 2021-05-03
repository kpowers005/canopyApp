const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Reservation, Treehouse } = require('../../db/models');
const router = express.Router();

const validateReservation = [
  check('checkIn')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isDate()
    .withMessage('Please provide a valid check in date.'),
  check('checkOut')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isDate()
    .withMessage('Please provide a valid check out date.'),
  check('total')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isInt(),
  check('guests')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide the number of guests staying.'),
  handleValidationErrors
]

router.post('/', validateReservation, asyncHandler ( async (req, res) => {
  console.log(req.body)
  const { newReservation } = req.body
  const { total, checkIn, checkOut, userId, treehouseId } = newReservation;

  const reservation = await Reservation.create(
    { total,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      userId,
      treehouseId }
  );

  return res.json(reservation);
}))

module.exports = router
