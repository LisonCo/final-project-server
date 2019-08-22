const express = require('express');
const router  = express.Router();
const User = require('../models/User')

// Saves the address in the database
router.post('/save-address', function(req, res, next) {
    let address = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number,
        street: req.body.street,
        postcode: req.body.postcode,
        city: req.body.city
    }
    User.findByIdAndUpdate(req.session.user._id, {$set: {address: address}}, {new: true})
    .then((user) => {
        res.json(user)
    })
    .catch((err) => {
        res.send(err);
      }) 
}); 

// Get the user's address from the database
router.get('/address', function(req, res, next) {
    User.findOne({_id : req.session.user._id})
    .then((user) => {
        res.json(user.address)
    })
    .catch((err) => {
        res.send(err);
      }) 
})

module.exports = router
