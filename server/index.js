const express = require('express');
const app = express();
const adminRouter = require("./adminRouter");
const basicRouter = require("./basicRouter");
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

require('dotenv').config({path:"./.env"}); 

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());

app.use(cookieParser());

app.use(require('body-parser').urlencoded({ extended: false }));

app.use(express.json());

app.use("/",basicRouter);

app.use("/admin",adminRouter);

// STATIC DATA

app.use('/', express.static(__dirname + '/dist'));

app.use('/static', express.static(__dirname + '/public'));


app.listen(process.env.SERVER_PORT,()=>{console.log(`server is listening on port ${process.env.SERVER_PORT}`)})