const mongoose = require('mongoose');

const Band = new mongoose.Schema({
    name: String,
    description: {type:String,default:"Aucune Description"},
},{collection:"band"});

module.exports = mongoose.model('Band', Band);
