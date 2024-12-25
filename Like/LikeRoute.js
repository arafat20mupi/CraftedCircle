const express = require('express');
const { createLike, deleteLike, getLike } = require('./LikeController');

const router = express.Router();
router.post('/createlike',createLike)
router.delete('/deletelike',deleteLike)
router.get('/getlike',getLike)

module.exports = router