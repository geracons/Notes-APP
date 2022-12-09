const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers');
const passport = require('../middlewares/pass');

router.get('/users/login', usersController.showLogin);
router.post('/users/login', passport, usersController.login);
router.get('/users/register', usersController.showRegister);
router.post('/users/register', usersController.register);
router.get('/users/logout', usersController.logout);


module.exports = router;
