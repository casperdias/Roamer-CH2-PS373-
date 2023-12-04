// functions.js
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

let blacklistedTokens = [];

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

async function home(req, res) {
    if (req.user) {
        return res.status(200).json({
            message: 'Authorized'
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
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

            const token = jwt.sign({id: results[0].id}, process.env.ACCESS_TOKEN_SECRET);

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

function logout(req, res) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
        blacklistedTokens.push(token);
    }

    res.json({
        message: 'Logout successful'
    });
}

module.exports = {
    home,
    signup,
    login,
    logout,
    blacklistedTokens,
};

module.exports.connection = connection;