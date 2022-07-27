const express = require('express');
const errorMiddleWare = require('./middleware/error');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser())

// import Routes 
const product = require('./route/productRoute');
const user = require('./route/userRoute')


// Middleware for error
app.use(errorMiddleWare)


app.use('/api/',product)
app.use('/api/',user)

module.exports = app;