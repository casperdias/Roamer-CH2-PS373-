// functions.js
const connection = require('./db'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function getAllUsers(req, res) {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        } else {
            res.json(results);
        }
    });
}

async function signup(req, res) {
    const {
        name,
        email,
        password
    } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            error: 'Please provide all required fields'
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                return res.status(500).json({
                    error: 'Internal Server Error'
                });
            }

            if (results.length > 0) {
                return res.status(400).json({
                    error: 'Email already registered'
                });
            }

            connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, results) => {
                if (err) {
                    console.error('Error executing MySQL query:', err);
                    return res.status(500).json({
                        error: 'Internal Server Error'
                    });
                }

                res.status(201).json({
                    message: 'User registered successfully'
                });
            });
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

async function login(req, res) {
    const {
        email,
        password
    } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            error: 'Please provide all required fields'
        });
    }

    try {
        connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                return res.status(500).json({
                    error: 'Internal Server Error'
                });
            }

            if (results.length === 0) {
                return res.status(401).json({
                    error: 'Invalid email or password'
                });
            }

            const isPasswordValid = await bcrypt.compare(password, results[0].password);

            if (!isPasswordValid) {
                return res.status(401).json({
                    error: 'Invalid email or password'
                });
            }

            const token = jwt.sign({id: results[0].id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});

            res.json({
                message: 'Login successful',
                token // Send the token in the response
            });
        });
    } catch (error) {
        console.error('Error comparing passwords:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

module.exports = {
    getAllUsers,
    signup,
    login
};

module.exports.connection = connection;