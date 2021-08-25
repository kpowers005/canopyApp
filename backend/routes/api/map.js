const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();



router.get('/', asyncHandler( async (req, res) => {
  const key = process.env.APP_KEY;

  return res.json(key);
}));

module.exports = router
