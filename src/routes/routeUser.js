const express = require('express');
const { postUserController } = require('../controllers/user.controller')

const routerUser = express.Router();

routerUser.post('/', postUserController);

module.exports = routerUser;