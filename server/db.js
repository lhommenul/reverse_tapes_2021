const mysql = require('mysql');

require('dotenv').config();

const db = mysql.createConnection({

    host: process.env.DB_HOST,
 
    port:process.env.DB_PORT,

    user: process.env.DB_USER,
 
    password: process.env.DB_PASS,

    database:"reversetapes"
 
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

module.exports = db;