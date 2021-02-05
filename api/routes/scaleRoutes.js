const express = require('express');
const router = express.Router();
const scaleService = require('../services/scalesService');

router.get('/major/:root', scaleService.get_major_scale);

router.get('/natural-minor/:root', scaleService.get_natural_minor_scale);

router.get('/harmonic-minor/:root', scaleService.get_harmonic_minor_scale);

router.get('/ascending-melodic-minor/:root', scaleService.get_ascending_melodic_minor_scale);

router.get('/descending-melodic-minor/:root', scaleService.get_descending_melodic_minor_scale);

router.get('/dorian/:root', scaleService.get_dorian_scale);

router.get('/phrygian/:root', scaleService.get_phrygian_scale);

router.get('/lydian/:root', scaleService.get_lydian_scale);

router.get('/mixolydian/:root', scaleService.get_mixolydian_scale);

router.get('/locrian/:root', scaleService.get_locrian_scale);

router.get('/', scaleService.get_all_scales);

module.exports = router;