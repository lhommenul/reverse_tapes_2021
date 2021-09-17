const express = require('express')
const router = express.Router();
var path = require('path');
var paypal = require('paypal-rest-sdk');

// configure paypal with the credentials you got when you created your paypal app
paypal.configure({
  'mode': 'sandbox', //sandbox or live 
  'client_id': 'AbNlvNViNH5aQGUthhGvO0G6hpVTIg3_Ui2OacUWm8n9H0hA2aoQP_gh89jdvEObdQ1PSzTphu66uVYU', // please provide your client id here 
  'client_secret': 'EGdIEZqhCdTE9nQR4uL3RvLBkWgIP2gHiM1sSz3trvh-8kdyo6_VyMBb3f8Lp_jQK-TojLxoXH-xe5Hn' // provide your client secret here 
});

// start payment process 
router.get('/buy' , ( req , res ) => {
	// create payment object 
    
}); 


// success page 
router.get('/success' , (req ,res ) => {
    console.log(req.query); 
    res.redirect('/success.html'); 
})

// error page 
router.get('/err' , (req , res) => {
    console.log(req.query); 
    res.redirect('/err.html'); 
})

// helper functions 
let createPay = ( payment ) => {
    return new Promise( ( resolve , reject ) => {
        paypal.payment.create( payment , function( err , payment ) {
         if ( err ) {
            console.log("error");
             reject(err); 
         }
        else {
            console.log("payement");
            resolve(payment); 
        }
        }); 
    });
}						
							

module.exports = router;