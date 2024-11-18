const express = require('express');
const { createPost, getPost } = require('./postController');
const router = express.Router();

router.post('/createPost', createPost)
router.get('/getPost', getPost)


module.exports = router