const express = require('express')
const router = express.Router();
const paypal = require('paypal-rest-sdk'); // need to be deleted
const axios = require('axios');

// configure paypal with the credentials you got when you created your paypal app
paypal.configure({
  'mode': 'sandbox', //sandbox or live 
  'client_id': 'AbNlvNViNH5aQGUthhGvO0G6hpVTIg3_Ui2OacUWm8n9H0hA2aoQP_gh89jdvEObdQ1PSzTphu66uVYU', // please provide your client id here 
  'client_secret': 'EGdIEZqhCdTE9nQR4uL3RvLBkWgIP2gHiM1sSz3trvh-8kdyo6_VyMBb3f8Lp_jQK-TojLxoXH-xe5Hn' // provide your client secret here 
});

// start payment process 
router.get('/buy' , ( req , res ) => {

    const token = "A21AALzGHxxq4gJFm6W7L54TrJTTJWUzQRSkP3jfeyrWjG4XUxAPjV6UNDPu9ukozT4giySBe6jAvtixMivCHINUJXjEtfVig"
	// create payment object 
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
      }
      
      let data = {
        "intent": "CAPTURE",
        "purchase_units": [
          {
            "amount": {
              "currency_code": "USD",
              "value": "100.00"
            }
          }
        ]
      }

    // A21AAK4pB4wvjcD0X1X6a44sDl_mpknko8pwbI4aggMsZI3_ACCliLbpvgVRHk-yvr2BSGKrlmFf5Zl2Wfjtsdqm8Gx4AkltQ
    axios.post("https://api-m.sandbox.paypal.com/v2/checkout/orders",data, config)
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.error(err);
    })
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