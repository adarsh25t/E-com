const ErrorHandler = require('../utils/errorHandler');
const User = require('../model/userModel');

// Register a User
exports.registerUser = async(req,res,next) => {
    const {name,email,password} = req.body;
    let user;
    let token;
    let ExsistUser;
    
    try {
        ExsistUser = await User.findOne({email});
    } catch (error) { console.log(error.message) }

    if(ExsistUser){ return res.status(400).json({error:"email already exsist"}) }
    
    try {
        user = await User.create({
            name,
            email,
            password,
            avtar:{
                public_id:"123456754322",
                url:"hello_word"
            }
        })
        token = user.getJWTtoken()
    } catch (error) { return res.status(404).json({error:error.message}) }

    return res.status(201).json({user,token})
}

// get All users
exports.getAllUsers = async(req,res,next) => {
    const users = await User.find();

    return res.status(201).json(users)
}