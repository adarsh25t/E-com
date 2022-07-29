const express = require('express');
const { registerUser, getAllUsers, loginUser, logout, forgotPassword } = require('../controller/userController');
const router = express.Router()

// Register Router
router.post('/register',registerUser);

// Login Router
router.post('/login',loginUser);

// Logout Router
router.get('/logout',logout)

// Forgot Password Router
router.post('/password/forgot',forgotPassword)

// All User Router
router.get('/allusers',getAllUsers);

module.exports = router