const mongoose = require('mongoose');

const Event = new mongoose.Schema({
    file_name: String,
    path_to_file: String,
    date: {type:Date,default:Date.now()},
},{collection:"event"});

module.exports = mongoose.model('Event', Event);