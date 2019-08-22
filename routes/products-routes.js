const express = require('express');
const router  = express.Router();
const Product = require('../models/Products');

router.get('/products', (req, res, next) => {
    Product.find({})
    .then ((products) => {
        res.json(products)
    })
    .catch (err => {
        console.log(err)
    })
});

module.exports = router