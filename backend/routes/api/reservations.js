const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Reservation, Treehouse } = require('../../db/models');
const router = express.Router();

const validateReservation = [
  check('total')
    .exists({ checkFalsy: true })
    .notEmpty()
    .isInt(),
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
  check('guests')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide the number of guests staying.'),
  handleValidationErrors
]

router.post('/', validateReservation, asyncHandler ( async (req, res) => {

  const { total, checkIn, checkOut, guests, userId, treehouseId } = req.body;

  const reservation = await Reservation.create(
    { total,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      guests,
      userId,
      treehouseId }
  );

  return res.json(reservation);
}))

module.exports = router
