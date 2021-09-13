const express = require('express')
const router = express.Router();
const db = require('./db');
const {minifyAndStore} = require('./utils');
const {isAdmin} = require('./auth');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// router.use(isAdmin)

router.post('/test', (req, res) =>{
    res.send("ok")
})

// ADD

router.post('/adduser', async (req, res) =>{
    if (req.body.first_name && req.body.name && req.body.email && req.body.password) {

        bcrypt.hash(req.body.password, saltRounds, function(err, hash) { // Hashing the password
            // Store hash in your password DB.
            if (err) {
                throw err;
            } else {

                console.log("Hash has been generated");

                const query = `INSERT INTO user (name,first_name,email,password) VALUES ('${req.body.name}','${req.body.first_name}','${req.body.email}','${hash}')`;

                db.query(query, function (err, result) {
                    if (err) throw err;
                    else{
                        console.log(result);
                        // Token has been generated
                        const token = setToken(
                            response[0].name,
                            response[0].first_name,
                            response[0].email,
                            response[0].password,
                            false
                        );

                        res.cookie("rv_token",token, { maxAge: 900000, httpOnly: true });

                        res.send("token has been created")

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


router.post('/addproduct', (req, res) => {
    if (req.body.name && req.body.description && req.body.color && req.body.type && req.body.size && typeof req.body.come_to_get_it === "boolean"  && req.body.price_ttc && req.body.price_ht && req.body.quantity){
        console.log("here");
        const query = `CALL add_product(${req.body.type},"${req.body.name}","${req.body.description}","${req.body.color}",${req.body.size},${req.body.come_to_get_it},${req.body.price_ttc},${req.body.price_ht},${req.body.quantity});`;
        
        db.query(query, function (err, result) {
            if (err) throw err;
            else{
                console.log("Product hhas been added");
                res
                    .status(200)
                    .send({message:"token has been created"});
            }
        });

    }else{
        res.status(400).send({message:"error while checking data in the form"})
    }
})

router.post('/addband', (req, res) => {
    
    if (req.body.name && req.body.description){
       
        const query = `INSERT INTO band (name,description) VALUES ("${req.body.name}","${req.body.description}");`;
        
        db.query(query, function (err, result) {
            if (err) throw err;
            else{
                console.log("Band has been added");
                res
                    .status(200)
                    .send({message:"Band has been added"});
            }
        });

    }else{
        res.status(400).send({message:"error while checking data in the form"})
    }
})

// DELETE 

router.post('/deleteproduct', (req, res) => {
    if (req.body.id){
    
        const query = `DELETE FROM product WHERE id=${req.body.id}`;
        
        db.query(query, function (err, result) {
            if (err) throw err;
            else{
                console.log("Product has been deleted");
                res
                    .status(200)
                    .send({message:"product has been deleted"});
            }
        });

    }else{
        res.status(400).send({message:"error while deleting data"})
    }
})


module.exports = router;