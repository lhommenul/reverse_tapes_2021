<template>
  <div class="home">
    <h1 class="title">Actualités</h1>
    <ul class="list_cards">
      <Card
        v-for="(card, index) in cards" :key="index"
        :data="card"
      ></Card>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Card from '@/components/Card.vue'
export default {
  name: 'Home',
  components: {
    Card
  },
  mounted(){
    console.log(document.cookie);
    this.getActus();
  },
  data() {
    return {
      cards:[]
    }
  },
  methods:{
    getActus() {
      axios.get(this.$store.state.server_address+"/getactus")
      .then(response=>{
        this.cards = response.data;
      })
      .catch(err=>{
        console.error(err);
      })
    }
  }
}
</script>

<style scoped>
  .home{
    display: flex;
    flex-direction: column;
  }
    .title{
      text-align: left;
    }
    .list_cards{
      display: grid;
      overflow: hidden;
      grid-template-columns: repeat(2,1fr);
      column-gap: 0.8rem;
      row-gap: 0.8rem;
      place-content: center;
    }
      .card{
        margin-bottom: 0.4rem;
      }
</style>
