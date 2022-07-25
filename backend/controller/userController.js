const ErrorHandler = require('../utils/errorHandler');
const User = require('../model/userModel');

// Register a User
exports.registerUser = async(req,res,next) => {
    const {name,email,password} = req.body

    const user = await User.create({
        name,
        email,
        password,
        avtar:{
            public_id:"123456754322",
            url:"hello_word"
        }
    })

    return res.status(201).json({user})
}