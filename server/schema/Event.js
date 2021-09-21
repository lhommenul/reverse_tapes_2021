const mongoose = require('mongoose');

const Event = new mongoose.Schema({
    name: String,
    description: String,
    location:String,
    price:Number,
    thumbnail:Array, // 1:1 format w400 / h400
    thumbnail_large:Array, // 10:7  => w400 / h575
    pictures:Array, // // 1:1 format
    date_start:Date,
    date_end:Date,
    hour_start:Date,
    hour_end:Date,
    visibility:{type:Boolean,default:false},
    date: {type:Date,default:Date.now()},
    bands:{type:Array} // [{id:9301280310},{id:03-219321}]
},{collection:"event"});

module.exports = mongoose.model('Event', Event);