const express = require('express');
const { categoryPost } = require('../controllers/category.controller');
const auth = require('../middlewares/auth');

const routerCategory = express.Router();

routerCategory.post('/', auth, categoryPost);

module.exports = routerCategory;