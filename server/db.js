const mysql = require('mysql');

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
});

module.exports = db;