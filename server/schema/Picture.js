const mongoose = require('mongoose');

const Picture = new mongoose.Schema({
    file_name: String,
    path_to_file: String,
    date: {type:Date,default:Date.now()},
},{collection:"picture"});

module.exports = mongoose.model('Picture', Picture);