const express = require('express');
const router = express.Router();
const scaleService = require('../services/scalesService');

router.get('/major/:root', scaleService.get_major_scale);

module.exports = router;