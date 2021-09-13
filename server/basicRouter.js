const express = require('express')
const router = express.Router();
const db = require('./db');
const bcrypt = require('bcrypt');
const {setToken,checkToken} = require("./auth.js");
const saltRounds = 10;

// middleware that is specific to this router

router.get('/', function (req, res) {
    res.redirect('/index.html');
})

router.post('/connection',function (req, res) {

  if (req.body.email && req.body.password) { // check in the bdd if the user exist
      
      const query = `SELECT * FROM user WHERE email='${req.body.email}';`

      db.query(query,(err,response)=>{
          if (err) {
              throw err;
          } else {

              bcrypt.compare(req.body.password, response[0].password, function(err, result) {

                  if (err) { // wrong password 
                      throw err;
                  } else {
                      if (result) {  // if the password are the same

                          const token = setToken(
                              response[0].name,
                              response[0].first_name,
                              response[0].email,
                              response[0].password,
                              false
                          );

                          res.cookie("rv_token",token, { maxAge: 900000, httpOnly: true });

                          res.send("token has been created")

                      } else {

                          console.error("password doesnt match");

                          res.send({
                              message:"password doesnt match"
                          })
                      }
                  }

              });
          }
      })

  }else{
    
    console.error("not the informations requested");
    res.statusCode = 200
    if (!req.body.email) {
      res.send({
        message:"error in the email"
      })
    } else if (!req.body.password){
      res.send({
        message:"error in the password"
      })
    }else{
      res.send({
        message:"auth informations"
      })
    }

  }
  
})

router.post('/createaccount',function (req, res) {
  console.log("createaccount");

  if (req.body.email && req.body.password && req.body.name && req.body.first_name) {

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) { // Hashing the password
      // Store hash in your password DB.
      if (err) {
          throw err;
      } else {

        console.log(req.body);
          console.log("Hash has been generated");

          const query = `INSERT INTO user (name,first_name,email,password) VALUES ('${req.body.name}','${req.body.first_name}','${req.body.email}','${hash}')`;

          db.query(query, function (err, result) {

              if (err) throw err;
              else{
                  // Data inserted inside the bdd
                  console.log(result);
                  // Token has been generated
                  const token = setToken(
                      req.body.name,
                      req.body.first_name,
                      req.body.email,
                      req.body.hash,
                      false
                  );

                  res.cookie("rv_token",token, { maxAge: 900000, httpOnly: true });

                  res.send("token has been created")
              }

          });

      }
    });

  }else{

    console.error("password doesnt match");

    res.send({
        message:"erreure lors de la creation du compte"
    })

  }
})

router.get('/getproduct', function (req, res) {
  const query = "SELECT * FROM product"
  db.query(query,(err,response)=>{
    if (err) throw err; 
    else {
      console.log(response);
      res.send(response);
    }
  })
})


module.exports = router;