const express = require('express');
const { registerUser, getAllUsers, loginUser, logout } = require('../controller/userController');
const router = express.Router()

// Register Router
router.post('/register',registerUser);

// Login Router
router.post('/login',loginUser);

// Logout Router
router.get('/logout',logout)

// All User 
router.get('/allusers',getAllUsers);

module.exports = router