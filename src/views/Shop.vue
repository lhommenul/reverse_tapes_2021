<template>
  <div class="shop">
    <h1 class="title">Shop</h1>
    <ul class="list_cards">
      <Card
        v-for="(product, index) in products" :key="index"
        :height="'49vw'"
        :width="'49vw'"
        :data="product"
      ></Card>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import axios from 'axios';
export default {
  name: 'Shop',
  components: {
    Card
  },
  data() {
    return {
      server_address:`${process.env.VUE_APP_SERVER_HOST}:${process.env.VUE_APP_SERVER_PORT}`,
      products:[]
    }
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct(){
      axios.get(this.server_address+"/getproduct")
      .then(data=>{
        this.products = data.data;
      })
      .catch(err=>{
        console.error(err);
      })
    }
  },
}
</script>

<style scoped>
  .shop{
    display: flex;
    flex-direction: column;
  }
    .title{
      text-align: left;
    }
    .list_cards{
      margin-top:1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(auto-fit,1fr);
      gap: 2vw;
    }
</style>
