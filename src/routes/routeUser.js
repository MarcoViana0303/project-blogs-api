const express = require('express');
const { postUserController, getUsers } = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

const routerUser = express.Router();

routerUser.post('/', postUserController);
routerUser.get('/', auth, getUsers);

module.exports = routerUser;