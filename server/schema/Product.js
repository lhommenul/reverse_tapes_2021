const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: String,
    type: Number,
    description: String,
    date_id: String,
    color:Array,
    picture_thumbnail:{type:Array},
    pictures:Array,
    size:String,
    come_to_get_it:Boolean,
    price_ttc:Number,
    price_ht:Number,
    visible:String,
    quantity:Number
},{collection:"product"});

module.exports = mongoose.model('Product', Product);