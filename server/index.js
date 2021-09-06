const express = require('express');
const app = express();
const router = require("./route");
const cookieParser = require('cookie-parser');
const {checkToken} = require('./auth');

require('dotenv').config(); // Env files

app.use(cookieParser());

app.use(require('body-parser').urlencoded({ extended: false }));

app.use(express.json());

app.use(checkToken)

app.use(router);

app.use('/static', express.static(__dirname + '/public'));


app.listen(process.env.SERVER_PORT,()=>{console.log(`server is listening on port ${process.env.SERVER_PORT}`)})