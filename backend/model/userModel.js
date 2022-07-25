const mongoose = require('mongoose');
const validator = require('validator');
const bycript = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Pelase enter name"],
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"Password should be greater than 8 characters"],
        select:false
    },
    avtar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = bycript.hash(this.password,10)
})

// jwt token
userSchema.methods.getJWTtoken = function(){
    return jwt.sign({ id: this._id },process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_SECRET
    })
}

module.exports = mongoose.model("User",userSchema)