const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    color: String,
    image1: String,
    image2: String,
    quantity: String,
    info: "String"
  });
  
const Product = mongoose.model('products', productSchema);
module.exports = Product;
