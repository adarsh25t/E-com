const express = require('express');
const { getAllProduct, createProduct } = require('../controller/productController');
const router = express.Router();

router.get('/product',getAllProduct);
router.post('/product/create',createProduct);

module.exports = router