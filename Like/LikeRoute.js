const express = require('express');
const { createLike } = require('./LikeController');

const router = express.Router();
router.post('/createlike',createLike)

module.exports = router