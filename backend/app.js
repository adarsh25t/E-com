const express = require('express');

const app = express();
app.use(express.json());

// import Routes 
const product = require('./route/productRoute')



app.use('/api/',product)

module.exports = app;