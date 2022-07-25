const express = require('express');
const { registerUser, getAllUsers } = require('../controller/userController');
const router = express.Router()

router.post('/register',registerUser);
router.get('/allusers',getAllUsers);

module.exports = router