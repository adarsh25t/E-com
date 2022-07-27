const ErrorHandler = require('../utils/errorHandler');
const User = require('../model/userModel');
const sendToken = require('../utils/jwtToken');

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

    sendToken(user,201,res)
}

// Login a User
exports.loginUser = async(req,res,next) => {
    const {email,password} = req.body;
    let user;

    try {
        user = await User.findOne({email}).select("+password");
    } catch (error) { console.log(error) }

    if(!user){
        return res.status(400).json({error:"invalid email"})
    }

// check password 
    const isPassword = user.comparePassword(password)

    if(!isPassword){
        return res.status(400).json({error:"invalid password"})
    }

    return sendToken(user,200,res)
}

// Logout a User
exports.logout = async(req,res,next) => {

    res.cookie("token",null,{
        expires : new Date( Date.now()),
        httpOnly : true
    })

    return res.status(200).json({message:"Logout Successfully"})
}

// get All users
exports.getAllUsers = async(req,res,next) => {
    const users = await User.find();

    return res.status(201).json(users)
}