import { createStore } from 'vuex'

export default createStore({
  state: {
    basket:{ // basket informations => load default informations if basket cookie exist
      products:[ //  list of products => empty by default 

      ]
    }
  },
  mutations: {
    addProductToBasket (state,product) {
      // { 
      //   id:Number,
      //   name:String,
      //   quantity:Number,
      //   thumbnail:String,
      //   size:String
      // }
      
      if (product) { // check product 
        state.basket.products.push(
          product
        )
        console.log("product added to the basket");
      } else {
        console.error("error while adding the product to the basket");
      }
    },
    removeProductFromBasket (state){
      console.log(state);
    }
  },
  actions: {
  },
  modules: {
  }
})
