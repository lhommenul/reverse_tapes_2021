<template>
  <section class="shop_container">

      <!--Title -->
      <h1>{{product_data.name}}</h1>

      <!-- Slider -->
      <div class="slider uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 1:1" >
          <ul class="uk-slideshow-items">
              <li v-for="(picture,index) in this.product_data.pictures" :key="index">
                  <img :src="server_address+picture" alt="picture" uk-cover>
              </li>
          </ul>

          <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
          <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

      </div>
    
      <!-- Form ajout au panier -->
      <form class="container_form" v-on:submit="addToBasket">

        <h2 class="uk-legend title">{{setType()}}</h2>

        <h3 class="price" name="price" v-if="this.product_data.price_ttc">{{formatPrice()}}</h3>
        <h3 class="price" v-else>Undefined Price</h3>

        <div class="uk-margin">
            <input  class="uk-input" type="number" name="quantity" value="1" placeholder="Quantité">
        </div>

        <div class="uk-margin select_size">
          <select name="size" class="uk-select">
            <option selected >Taille L</option>
            <option>Taille M</option>
          </select>
        </div>

        <div class="uk-margin container_btn">
          <button class="uk-button uk-button-primary">Ajouter au panier</button>
        </div>

        <hr class="spacer">

        <p class="description_container">
          {{product_data.description}}
        </p>       

      </form>

      <div>
          <div>
              <div class="uk-card uk-card-default uk-card-large uk-card-body">
                  <h3 class="uk-card-title">Stuffed Foxes</h3>
                  <ul>
                    <li v-for="(social,index) in this.product_data.socials" :key="index">
                      {{social}}
                    </li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </div>          
      </div>

  </section>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Product',
  components: {
  },
  data() {
    return {
      server_address:`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`,
      product_data:{}
    }
  },
  mounted(){
    axios.get(this.server_address+"/getproduct?id="+this.$route.query.id)
    .then(data=>{
      this.product_data = data.data;
      // this.formatPrice()
    })
    .catch(err=>{
      console.error(err);
    })
    
  },
  methods:{
    setType(){
      switch (this.product_data.type) {
        case 1:
          return "CD"
        case 2:
          return "Vinyle"  
        default:
          return "Undefiend Type"
      }
    },
    formatPrice(){
      let price = this.product_data.price_ttc.toString();
      if (price.indexOf()) {
        return `${price}.00€`;
      } else {
       return `${price}€`; 
      }
    },
    addToBasket(ev){
      ev.preventDefault();
      // console.log(this.product_data.name);
      const form = new FormData(document.querySelector('.container_form'))
      this.$store.commit("addProductToBasket",{
        id:this.product_data._id,
        name:this.product_data.name,
        quantity:form.get("quantity"),
        thumbnail:this.product_data.thumbnail[0],
        size:form.get("size")
      })
    }
  }
}
</script>

<style scoped>
.shop_container{
  padding: 1rem;
}
  .slider{
    max-width: 400px;
    max-height: 400px;
  }
  .container_form{
    display: grid;
    grid-template-columns: 50% 20% 25%;
    column-gap: 2.5%;
    /* grid-template-rows:; */
  }
    .title{
      grid-column: 1;
      grid-row: 1;
    }
    .price{
      grid-column: 1;
      grid-row: 2;
      color: var(--text_white);
    }
    .select_size{
      grid-column: 2/-1;
      grid-row: 2;
    }
    .description_container{
      grid-column: 1/-1;
      grid-row: 5;
    }
    .container_btn{
      grid-column: 1/-1;
      grid-row: 3;
    }
    .spacer{
      grid-column: 1/-1;
      grid-row: 4;
    }
</style>

