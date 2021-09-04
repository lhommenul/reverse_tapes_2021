const express = require('express');
const app = express();
const mysql = require('mysql');

require('dotenv').config(); // Env files

const db = mysql.createConnection({

    host: "109.20.225.173",
 
    port:20562,

    user: "root",
 
    password: "NgRGyN9iz8AbR8q3FCQ8Ky3",

    database:"reversetapes"
 
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
    db.query("SHOW DATABASES", function (err, result) {
        if (err) throw err;
        console.log(result);
      });
});

app.use('/static', express.static(__dirname + '/public'));


app.listen(8081,()=>{console.log("server is listening on port 8081");})