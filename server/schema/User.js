const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: String,
    first_name: String,
    password: String,
    email: String
},{collection:"user"});

module.exports = mongoose.model('User', User);