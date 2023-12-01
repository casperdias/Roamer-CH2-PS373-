// routes.js
const express = require('express');
const router = express.Router();
const functions = require('./functions');
const authenticateToken = require('./authMiddleware');

router.get('/', authenticateToken, functions.home);
router.post('/signup', functions.signup);
router.post('/login', functions.login);
router.get('/logout', authenticateToken, functions.logout);

module.exports = router;