const express = require('express')
const stripe = require('stripe')('sk_test_51JagpDD9wY2MEDmntfyszYZO56aEtHudBr7s0HHdiauTmQ3mR7itmezE4DBK1A6Jo6RUsbYQvx7FxfiRc9L4EFMv009Z0tTAEq');
const router = express.Router();
const paypal = require('paypal-rest-sdk'); // need to be deleted
const axios = require('axios');

// configure paypal with the credentials you got when you created your paypal app
paypal.configure({
  'mode': 'sandbox', //sandbox or live 
  'client_id': 'AbNlvNViNH5aQGUthhGvO0G6hpVTIg3_Ui2OacUWm8n9H0hA2aoQP_gh89jdvEObdQ1PSzTphu66uVYU', // please provide your client id here 
  'client_secret': 'EGdIEZqhCdTE9nQR4uL3RvLBkWgIP2gHiM1sSz3trvh-8kdyo6_VyMBb3f8Lp_jQK-TojLxoXH-xe5Hn' // provide your client secret here 
});

console.log( `${process.env.VUE_ADDRESS}:${process.env.VUE_PORT}/`);
// start payment process 
router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: 'eur',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 4000,
      },
      quantity: 1,
    },{
      price_data: {
        currency: 'eur',
        product_data: {
          name: 'Bite',
        },
        unit_amount: 50000,
      },
      quantity: 1,
    }],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${process.env.VUE_ADDRESS}:${process.env.VUE_PORT}/`,
    cancel_url: `${process.env.VUE_ADDRESS}:${process.env.VUE_PORT}/cancel.html`,
  });
  res.redirect(303, session.url)
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