const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: String,
    first_name: String,
    password: String,
    email: String,
    shipping_address_line1: {type:String},
    shipping_address_line2: {type:String},
    city: {type:String},
    state: {type:String},
    postal_code: {type:Number},
    country_code: {type:String}
},{collection:"user"});

module.exports = mongoose.model('User', User);