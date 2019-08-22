const express = require('express');
const router  = express.Router();
const User = require('../models/User')

// SAVING ORDER 
router.post('/order', function(req, res, next) {
    let order = req.body.list
    let user = req.body.user
    User.updateOne({_id : user._id}, {$set: {order: order}})
    .then((user) => {
        res.send('order confirmed')
    })
    .catch((err) => {
        res.send(err);
      }) 
}); 

module.exports = router
