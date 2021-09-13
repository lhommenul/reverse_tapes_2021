const express = require('express')
const router = express.Router();
const db = require('./db');
const {minifyAndStore} = require('./utils');
const {checkToken} = require('./auth');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = router;