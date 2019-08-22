const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const bcrypt = require("bcrypt");

// USER SIGN UP
router.post('/signup', function(req, res, next) {
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(password, salt);
  
  let newUser = {
    emailAddress: req.body.emailAddress, 
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    address: "",
    password: hashPass,
  }
  User.create(newUser)
    .then((user)=> {
      req.session.currentUser = user
        res.status(200).json({status: `account has been created ${user.emailAddress}`, user: user});
    })
    .catch((error)=> {
      res.send(error.message);
    })
}); 

// USER LOGIN
router.post('/login', function(req, res, next) {
  User.findOne({emailAddress : req.body.emailAddress})
  .then((user) => {
    if (user){
     bcrypt.compare(req.body.password, user.password, function(err, match){
       if(err) throw new Error("Encryption error");
       if (match) {
        req.session.user = user;
        res.status(200).json({status: `${user.emailAddress} succesfully logged in}`, user: user});
       } 
       else {
        res.send('Invalid credentials');
       }})
      } else {
          res.send('Invalid credentials');
      }})
  .catch((err) => {
    res.send(err);
  })   
})

// USER LOGOUT
router.get("/logout", (req, res, next)=> {
  req.session.destroy();
  res.status(205).json({status: "ok"});
})

module.exports = router