const express = require('express');
const router = express.Router();
const chordService = require('../services/chordService');

router.get('/major/:root', chordService.get_major_chord);

router.get('/major7th/:root', chordService.get_major_seventh_chord);

router.get('/minor/:root', chordService.get_minor_chord);

router.get('/minor7th/:root', chordService.get_minor_seventh_chord);

router.get('/dominant7th/:root', chordService.get_dominant_seventh_chord);

router.get('/diminished/:root', chordService.get_diminished_chord);

router.get('/augmented/:root', chordService.get_augmented_chord);

router.get('/sus-4/:root', chordService.get_suspended_fourth_chord);

router.get('/sus-2/:root', chordService.get_suspended_second_chord);

router.get('/', chordService.get_all_chords);

module.exports = router;