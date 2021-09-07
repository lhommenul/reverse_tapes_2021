const express = require('express')
const router = express.Router();
const db = require('./db');
const {setToken,checkToken} = require("./auth.js");

// middleware that is specific to this router

router.get('/', function (req, res) {
    // res.send('Birds home page')
    res.redirect('/connection')
})

router.post('/connection',checkToken,function (req, res) {
    res.send('connecction')
})


module.exports = router;