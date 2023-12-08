const express = require('express');
const router = express.Router();
const functions = require('../func/places');

router.get('/', functions.getallPlaces);
router.get('/:id', functions.getPlace);

module.exports = router;