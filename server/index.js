const express = require('express');
const app = express();
const router = require("./route");
const {sharp} = require("./utils")



app.use(require('body-parser').urlencoded({ extended: false }));

app.use(express.json());

require('dotenv').config(); // Env files

app.use(router);

app.use('/static', express.static(__dirname + '/public'));


app.listen(8081,()=>{console.log("server is listening on port 8081");})