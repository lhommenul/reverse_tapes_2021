const express = require('express')
const router = express.Router();
const db = require('./db');
const {minifyAndStore} = require('./utils');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/adduser', async (req, res) =>{
    if (req.body.first_name && req.body.name && req.body.email && req.body.password) {

        bcrypt.hash(req.body.password, saltRounds, function(err, hash) { // Hashing the password
            // Store hash in your password DB.
            if (err) {
                throw err;
            } else {
                console.log("Hash has been generated");

                const query = `INSERT INTO user (name,first_name,email,password) VALUES ('${req.body.name}','${+req.body.first_name}','${req.body.email}','${hash}')`;

                db.query(query, function (err, result) {
                    if (err) throw err;
                    else{
                        console.log(result);
                    }
                });

            }
        });

    }else{

        console.error("no informations");

    }

    res.send('ok');
    
})

router.post('/addpicture', (req, res) => {
        if (req.files) {
            req.files.pictures.forEach(file => {
                minifyAndStore(file.data)
            });
        } else {
            
        }
        res.sendStatus(200)
    // const query = "CALL `picture`("+picture_path+","+file_name+")";
})



module.exports = router;