const express = require('express');
const errorMiddleWare = require('./middleware/error');

const app = express();
app.use(express.json());

// import Routes 
const product = require('./route/productRoute')

// Middleware for error
app.use(errorMiddleWare)


app.use('/api/',product)

module.exports = app;