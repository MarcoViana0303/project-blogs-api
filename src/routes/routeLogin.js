const express = require('express');

const authController = require('../controllers/login.controller');

const routerLogin = express.Router();

routerLogin.post('/', authController.loginController);

module.exports = routerLogin;