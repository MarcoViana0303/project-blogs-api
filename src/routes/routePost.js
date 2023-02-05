const express = require('express');
const auth = require('../middlewares/auth');

const routerPost = express.Router();
const { getAllPosts, getById } = require('../controllers/post.controller');

routerPost.get('/', auth, getAllPosts);
routerPost.get('/:id', auth, getById);

module.exports = routerPost;