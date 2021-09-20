const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_KEY);
const router = express.Router();
const Product = require('./schema/Product')

// start payment process 
router.post('/create-checkout-session', async (req, res) => {
  // check the client basket 
  checkBasketProduct(req.body);
  async function checkBasketProduct(list_products) { // important data
    if (list_products) {
      (async()=>{
        let list_results_requests = [];
        for (let index = 0; index < list_products.length; index++) {
          const product = list_products[index];
          try {

            console.log("===== THE PRODUCT VISIBILITY MUST BE SET TO TRUE =====");
            const result = await Product.findOne({_id:product.id});
            if (result) {

              if (result.quantity >= product.quantity) { // push the object in a list
                list_results_requests.push(result);
              } else {
                res.status(400).send({message:"the quantity requested cant be supplied"})  
              }

            } else {
              res.status(400).send({message:"the product doesnt exist"})
            }

          } catch (error) {
            console.log(error);
            res.status(500).send({message:"an error has occured while searching for thhe product"})
          }        
        }
        
        // normalizeProducts(list_results_requests) // list of all responses if there is no errors

      })();

    } else {
      res.status(400).send({message:"error there is no products"})
    }
  }

  function normalizeProducts(list_products) {
    stripe.checkout.sessions.create({
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
    })
    .then(session=>{
      res.status(200).send(session.url)
    })
    .catch(error=>{
      console.error(error);
      res.status(500).send({message:"error while asking for stripe"})
    })    
  }
  console.log("requested");
  // create the session for thhe client  

  // res.redirect(303, session.url)
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