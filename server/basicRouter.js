const express = require('express')
const router = express.Router();
const db = require('./db');
const bcrypt = require('bcrypt');
const Product = require('./schema/Product')
const Event = require('./schema/Event')
const Picture = require('./schema/Picture')
const User = require('./schema/User')
const {setToken,checkToken} = require("./auth.js");
const saltRounds = 10;

// middleware that is specific to this router

router.get('/', function (req, res) {
    res.redirect('/index.html');
})

router.post('/connection',function (req, res) {
  console.log(req.body.email ,req.body.password);
  if (req.body.email && req.body.password) { // check in the bdd if the user exist
      
      User.findOne({email:req.body.email})
      .then(response=>{
        bcrypt.compare(req.body.password, response.password, function(err, result) {

          if (err) { // wrong password 
              throw err;
          } else {
              if (result) {  // if the password are the same

                  const token = setToken(
                      response.name,
                      response.first_name,
                      response.email,
                      response.password,
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
      })
      .catch(err=>{
        console.error(err);
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

          User({
            name:req.body.name,
            first_name:req.body.first_name,
            email:req.body.email,
            password:hash,
          }).save()
          .then((value)=>{
            if (value) {
              const token = setToken(
                  req.body.name,
                  req.body.first_name,
                  req.body.email,
                  hash,
                  false
              );
              // res.header("Access-Control-Allow-Origin", "*");
              res.cookie("rv_token",token, { maxAge: 900000, httpOnly: false })
              
              res.send();
            
            }else{
              console.error("error creating the user");
              res.status(400).send({message:"error no data returned from the bdd"})
            }

          })
          .catch(err=>{
            console.log(err);
          })
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
  if (req.query.id) {
    Product.findById(req.query.id,(err,response)=>{
      if (err) {
        throw err;
      } else {
        if (err) throw err; 
        else {
          res.send(response);
  
        }
  
      }
    })
  }else{
    Product.find((err,response)=>{
      if (err) {
  
        throw err;
  
      } else {
  
        if (err) throw err; 
        else {

          res.send(response);
  
        }
  
      }
    })
  }
})

router.get('/getpicture', function (req, res) {
  console.log(req.query.id);
  Picture.findById({_id:req.query.id},(err,response)=>{
      if (err) {
  
        throw err;
  
      } else {
  
        if (err) throw err; 
        else {
          console.log(response);
          res.send(response);
  
        }
  
      }
  })
})

router.get('/getactus', function (req, res) {
  Promise.all([
    Product.find().limit(5),
    Event.find().limit(5)
  ])
  .then(response=>{
    
    const list_of_actu = response.reduce((accumulateur, current_value)=>{
      return accumulateur.concat(current_value);
    },[])
    
    res.status(200).send(list_of_actu);
  })
  .catch(err=>{
    console.error(err);
  })
})

router.get('/getband', function (req, res) {
  const query = "SELECT * FROM band"
  db.query(query,(err,response)=>{
    if (err) throw err; 
    else {
      res.send(response);
    }
  })
})



module.exports = router;
