var express = require('express')
var router = express.Router();
const db = require('./db');

// middleware that is specific to this router

router.get('/', function (req, res) {
    res.send('Birds home page')
    res.redirect('/connection')
})


module.exports = router;