const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    user_id:{type:String},
    name:String,
    first_name:String,
    email: String,
    city:{type:String},
    state:{type:String},
    phone_number:Number,
    shipping_address_line1: {type:String},
    shipping_address_line2: {type:String},
    city: {type:String},
    state: {type:String},
    postal_code: {type:Number},
    country_code: {type:String},
    // [   Products template
    //     {
    //         quantity:Number,
    //         product_id:Number,
    //     }
    // ]
    products:Array
},{collection:"order"});

module.exports = mongoose.model('Order', Order);
