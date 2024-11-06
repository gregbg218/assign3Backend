const express = require('express');
const { weatherController } = require('../controllers/WeatherController'); 

const router = express.Router();

// Use the controller instance directly
router.get('/forecast', weatherController.getDailyForecast.bind(weatherController));

module.exports = router;