const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Treehouse, Review, Reservation } = require('../../db/models');

const router = express.Router();


const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a First Name.')
    .isLength({max: 30})
    .withMessage('First Name cannot exceed 30 characters.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Last Name.')
    .isLength({max: 50})
    .withMessage('Last Name cannot exceed 50 characters.'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];


router.post(
  '',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const user = await User.signup({ firstName, lastName, email, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);


router.get('/:id', asyncHandler( async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id)

  return res.json(user)

}))


module.exports = router;
