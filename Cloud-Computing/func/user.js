const connection = require('../conn/db');
require('dotenv').config();
const app = require('../conn/firebase');
const {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} = require("firebase/auth");
const auth = getAuth(app);

const signup = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        connection.query('INSERT INTO users (username, uid) VALUES (?, ?)', [name, user.user.uid], (err, results) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                return res.status(500).json({
                    error: 'Internal Server Error'
                });
            }
        });
        res.status(201).json({
            id: user.user.uid,
            email: email,
            message: 'User registered successfully'
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        res.status(200).json({
            message: 'Login success',
            id: user.user.uid,
            email: email
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await auth.currentUser;
        res.status(200).json({
            id: user.uid,
            email: user.email,
            message: 'Authorized'
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

const logout = async (req, res) => {
    try {
        await signOut(auth);
        res.status(200).json({
            message: 'Logout success'
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

module.exports = {
    signup,
    login,
    getUser,
    logout
};