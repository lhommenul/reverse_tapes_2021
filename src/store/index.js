import { createStore } from 'vuex'

export default createStore({
  state: {
    basket:{ // basket informations => load default informations if basket cookie exist
      products:[ //  list of products => empty by default 

      ]
    },
    server_address:process.env.NODE_ENV==="development"?`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`:"",
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
    removeProductFromBasket (state,id){
      // console.log(state,id);
      state.basket.products = state.basket.products.filter(product=>product.id!=id);
    },
    modifyQuantityProduct(state,product){
      state.basket.products.forEach(element => {
        if (element.id === product.id) {
          element.quantity = product.quantity
          console.log("founded");
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
