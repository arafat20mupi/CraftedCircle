const express = require('express');
const { createPost, getPost, addComment } = require('./postController');
const router = express.Router();

router.post('/createPost', createPost)
router.put('/:id',addComment)
router.get('/getPost', getPost)


module.exports = router