const express = require('express');
const { registerUser, getAllUsers, loginUser } = require('../controller/userController');
const router = express.Router()

router.post('/register',registerUser);
router.post('/login',loginUser)
router.get('/allusers',getAllUsers);

module.exports = router