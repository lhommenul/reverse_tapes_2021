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
      // check product 
      if (product) {
        state.basket.products.push(
          { 
            id:Number,
            name:String,
            quantity:Number,
            thumbnail:String,
            size:String
          }
        )
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
