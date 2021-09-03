const express = require('express');
const app = express();

require('dotenv').config()

app.use('/static', express.static(__dirname + '/public'));


app.listen(8081,()=>{console.log("server is listening on port 8081");})