const express = require('express');
const { postUserController, getUsers, getUsersByid } = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

const routerUser = express.Router();

routerUser.post('/', postUserController);
routerUser.get('/', auth, getUsers);
routerUser.get('/:id', auth, getUsersByid);

module.exports = routerUser;