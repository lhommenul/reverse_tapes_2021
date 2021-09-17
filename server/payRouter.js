const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_KEY);
const router = express.Router();
const axios = require('axios');

console.log( `${process.env.VUE_ADDRESS}:${process.env.VUE_PORT}/`);
// start payment process 
router.post('/create-checkout-session', async (req, res) => {
  // check the client basket 



  // create thhe session for thhe client  
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