const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Facebook login route
router.post('/facebook', authController.facebookLogin);

module.exports = router;
