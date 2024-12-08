const express = require('express');
const { createComment, getComment } = require('./CommentController');
const router = express.Router();
router.post('/createcomment',createComment)
router.get('/createcomment',getComment)

module.exports = router