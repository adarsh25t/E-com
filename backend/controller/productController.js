const Product = require('../model/productModel')

// create product
exports.createProduct = async(req,res) => {
    console.log(req.body);
    let product;
    try {
        product = await Product.create(req.body);
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({message:"product created",product})
}

// get All Products
exports.getAllProduct = async(req,res) => {
    let products;
    try {
        products = await Product.find()
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json(products)
}