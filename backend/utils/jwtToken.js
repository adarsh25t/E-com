const sendToken = (user,statusCode,res) => {

    const token = user.getJWTtoken();

    const option = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPAIRE *24*60*60*1000
        ),
        httpOnly : true
    }

    res.status(statusCode).cookie("token",token,option).json({user,token})
}

module.exports = sendToken

