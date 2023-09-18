const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

// Generate token route
router.post('/token-exchange', tokenController.generateToken);

// Retrieve insights route
router.get('/retrieve-insights', tokenController.retrieveInsights);

module.exports = router;
