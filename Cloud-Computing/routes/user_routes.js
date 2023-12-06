// routes.js
const express = require('express');
const router = express.Router();
const functions = require('../func/user');
const authenticate = require('../auth/authMiddleware');

router.get('/', authenticate.JWTToken, functions.home);
router.post('/signup', functions.signup);
router.post('/login', functions.login);
router.get('/logout', authenticate.JWTToken, functions.logout);

module.exports = router;