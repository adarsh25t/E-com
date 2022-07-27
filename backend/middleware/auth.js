const ErrorHandler = require("../utils/errorHandler");
const jwt = require('jsonwebtoken');
const User = require("../model/userModel");


exports.isAuthendicated = async(req,res,next) => {

    const {token} = req.cookies;

    if(!token){
        return next( new ErrorHandler("please login",401))
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData._id)

    return next()
}

exports.authorizedRoles = (roles) => {
    console.log(roles);
    return (req,res,next) => {
        // if(roles !== req.user.role){
        //     return next(new ErrorHandler(`Role: ${req.user.role} is not allowed the section`,403))
        // }
        // next()
    }
    
}