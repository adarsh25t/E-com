const express = require('express');
const { getAllProduct, createProduct, updateProduct } = require('../controller/productController');
const router = express.Router();

router.get('/product',getAllProduct);
router.post('/product/create',createProduct);
router.put('/product/:id',updateProduct)

module.exports = router