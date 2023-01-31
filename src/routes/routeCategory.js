const express = require('express');
const { categoryPost, allCategories } = require('../controllers/category.controller');
const auth = require('../middlewares/auth');

const routerCategory = express.Router();

routerCategory.post('/', auth, categoryPost);
routerCategory.get('/', auth, allCategories);

module.exports = routerCategory;