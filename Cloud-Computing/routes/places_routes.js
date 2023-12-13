const express = require('express');
const router = express.Router();
const functions = require('../func/places');

router.post('/create', functions.upload);
router.get('/', functions.getallPlaces);
router.get('/:id', functions.getPlace);

module.exports = router;