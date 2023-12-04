// routes.js
const express = require('express');
const router = express.Router();
const functions = require('./functions');
const authenticateToken = require('./authMiddleware');
const { createLog, getLogs, getLog, updateLog, deleteLog } = require('./logbook');

router.get('/', authenticate.JWTToken, functions.home);
router.post('/signup', functions.signup);
router.post('/login', functions.login);
router.get('/logout', authenticate.JWTToken, functions.logout);

router.post('/log', async (req, res) => {
    try {
       const log =  await createLog(req.body);
        res.status(201).send(log);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/logs', async (req, res) => {
    try {
        const logs = await getLogs();
        res.json(logs);
        res.status(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
router.get('/log/:log_id', async(req, res) => {
    try {
        const log = await getLog(req.params.log_id);
        res.status(200).json(log);
    } catch (error) {
        res.status(500).send(error.message);
    }
   
});

router.put('/log/:log_id',async (req, res) => {
    
    try {
        await updateLog(req.params.log_id, req.body);
        res.status(200).send('Log Updated');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/log/:log_id', async (req, res) => {
    try {
        await deleteLog(req.params.log_id);
        res.status(200).send('Log Deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;