const ErrorHandler = require('../utils/errorHandler');

module.exports = (err,res,req,next) => {
    err.statusCode = err.statusCode || 5000
    err.message = err.message || "Inernal Server Error"

    res.status(err.statusCode).json({error:err})
}