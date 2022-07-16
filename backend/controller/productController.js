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

