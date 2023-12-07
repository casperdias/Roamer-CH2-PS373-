// routes.js
const express = require('express');
const router = express.Router();
const functions = require('../func/user');

router.post('/signup', functions.signup);
router.post('/login', functions.login);
router.get('/', functions.getUser);
router.get('/logout', functions.logout);

module.exports = router;