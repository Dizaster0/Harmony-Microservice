const express = require('express');
const router = express.Router();
const chordService = require('../services/chordService');

router.get('/', chordService.get_chord);

module.exports = router;