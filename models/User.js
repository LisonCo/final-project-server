const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    firstName: String,
    lastName: String,
    phone: String,
    emailAddress: String,
    password : String,
    address: Object,
    order: String,
  });
  
const User = mongoose.model('users', userSchema);
module.exports = User;