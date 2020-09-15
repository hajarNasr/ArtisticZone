const express = require('express');

let router = express.Router(),
    userController = require('../controllers/usersController');

router.post('/signup/', userController.signUp); 
router.post('/login/', userController.login);

module.exports = router;

