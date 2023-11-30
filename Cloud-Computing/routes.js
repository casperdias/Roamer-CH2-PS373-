// routes.js
const express = require('express');
const router = express.Router();
const functions = require('./functions');
const authenticateToken = require('./authMiddleware');

router.get('/', authenticateToken, functions.getAllUsers);
router.post('/signup', functions.signup);
router.post('/login', functions.login);

module.exports = router;