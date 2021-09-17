<template>
  <div class="home">
    <h1 class="title">Actualités</h1>
    <ul class="list_cards">
      <Card
        v-for="(card, index) in cards" :key="index"
        :height="'49vw'"
        :width="'49vw'"
        :data="card"
      ></Card>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
export default {
  name: 'Home',
  components: {
    Card
  },
  mounted(){
    console.log(document.cookie);
  },
  data() {
    return {
      cards:[
        {
          type:"T-shirt",
          title:"Article",
          img:"",
          to:"/article/02023323",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"Album",
          title:"Article",
          img:"",
          to:"/article/02023323",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"Event",
          title:"Article",
          img:"",
          to:"/article/02023323",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"T-shirt",
          title:"Article",
          img:"",
          to:"/article/02023323",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"T-shirt",
          title:"Article",
          img:"",
          to:"/article/02023323",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"T-shirt",
          title:"Article",
          img:"",
          to:"/article/02023323",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"T-shirt",
          title:"Article",
          img:"",
          to:"/article/02023323",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"T-shirt",
          title:"Article",
          img:"",
          to:"/article/02023323",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        }
      ]
    }
  },
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
      margin-top:1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(auto-fit,1fr);
      gap: 2vw;
    }
</style>
