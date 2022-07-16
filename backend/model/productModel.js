const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Desctiption"]
    },
    rating:{
        type:Number,
        default:0
    },
    image:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
        }
    ],
    category:{
        type:String,
        required:[true,"Please select Product category"]
    },
    stock:{
        type:Number,
        required:[true,"Please Enter Product stock"],
        maxLength:[3,"Price cannot exceed 3 characters"],
        default:1
    },
    numberOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }

})
module.exports = mongoose.model('Product',ProductSchema)