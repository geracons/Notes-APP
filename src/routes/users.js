const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers');



router.get('/users/login', usersController.login);
router.get('/users/register', usersController.register);


module.exports = router;
