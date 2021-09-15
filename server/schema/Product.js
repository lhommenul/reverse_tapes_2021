const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: String,
    type: Number, 
    description: {type:String,default:"Aucune Description"},
    date: {type:Date,default:Date.now()},
    color:{type:Array,default:[]},
    thumbnail:{type:Array,default:[]},
    pictures:{type:Array,default:[]},
    size:String,
    bandcamp:{type:String},
    come_to_get_it:{type:Boolean,default:false},
    price_ttc:{type:Number,default:0},
    price_ht:{type:Number,default:0},
    visible:{type:Boolean,default:false},
    quantity:{type:Number,default:0},
},{collection:"product"});

module.exports = mongoose.model('Product', Product);