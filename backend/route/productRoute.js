const express = require('express');
const { getAllProduct, createProduct, updateProduct, deleteProduct, detailsProduct } = require('../controller/productController');
const { isAuthendicated } = require('../middleware/auth');
const router = express.Router();

router.get('/product',isAuthendicated, getAllProduct);
router.post('/product/create',createProduct);
router.put('/product/:id',updateProduct);
router.delete('/product/delete/:id',deleteProduct);
router.get('/product/:id',detailsProduct)

module.exports = router