const express = require('express');
const { createPost, getPost, addComment, addLike } = require('./postController');
const router = express.Router();

router.post('/createPost', createPost)
router.put('/:id',addComment)
router.put('/like/:id',addLike)
router.get('/getPost', getPost)


module.exports = router