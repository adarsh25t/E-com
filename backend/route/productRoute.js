const express = require('express');
const { getAllProduct, createProduct, updateProduct, deleteProduct, detailsProduct } = require('../controller/productController');
const { isAuthendicated, authorizedRoles } = require('../middleware/auth');
const router = express.Router();

// Get All Products
router.get('/product',isAuthendicated,authorizedRoles("admin"), getAllProduct);

// Create New Product
router.post('/product/create',isAuthendicated, createProduct);

// Update Product
router.put('/product/:id',isAuthendicated, updateProduct);

// Delete Product
router.delete('/product/delete/:id',isAuthendicated, deleteProduct);

// Details of Product
router.get('/product/:id',detailsProduct)

module.exports = router