const Product = require('../model/productModel');
const ApiFeatures = require('../utils/apiFeatures');
const ErrorHandler = require('../utils/errorHandler');

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
        const apiFeatures = new ApiFeatures(Product.find(),req.query).search()
        products = await apiFeatures.query
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json(products)
}

// update product
exports.updateProduct = async(req,res) => {
    let product;

    try {
        product = await Product.findByIdAndUpdate(req.params.id,req.body)
    } catch (error) {
        console.log(error);
    }

    if(!product){
        return res.status(500).json({message:"product not find"})
    }

    return res.status(200).json({message:"product update successfully",product})
}

// delete Product
exports.deleteProduct = async(req,res,next) => {
    let product;

    try {
        product = await Product.findByIdAndDelete(req.params.id)
    } catch (error) {
        console.log(error);
    }

    if(!product){
        return res.status(404).json({message:"No product found!"})
    }

    return res.status(202).json({message:"product deleted successfully",product})
}

// product details
exports.detailsProduct = async(req,res,next) => {
    let product;

    try {
        product = await Product.findById(req.params.id)
    } catch (error) {
        console.log(error);
    }

    if(!product){
        return next(new ErrorHandler("No product found!",404))
    }

    return res.status(201).json({product})
}