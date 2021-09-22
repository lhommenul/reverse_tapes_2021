const mongoose = require('mongoose');

const Event = new mongoose.Schema({
    name: String,
    description: String,
    location:String,
    price:Number,
    thumbnail:Array, // 1:1 format w400 / h400
    thumbnail_large:Array, // 10:7  => w400 / h575
    pictures:Array, // // 1:1 format
    date_start:Number,
    date_end:Number,
    hour_start:Number,
    hour_end:Number,
    visibility:{type:Boolean,default:false},
    date: {type:Number,default:Date.now()},
    bands:{type:Array} // [{id:9301280310},{id:03-219321}]
},{collection:"event"});

module.exports = mongoose.model('Event', Event);