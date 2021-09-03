<template>
  <div class="events">
    <h1 class="title">Programmation</h1>
    <ul class="list_cards">
      <EventCard
        v-for="(card, index) in cards" :key="index"
        :height="'100%'"
        :width="'80vw'"
        :position="index+1"
        :data="card"
      ></EventCard>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
  import EventCard from '@/components/EventCard.vue'
export default {
  name: 'Events',
  components: {
    EventCard
  },
  data() {
    return {
      cards:[
        {
          type:"T-shirt",
          title:"Article",
          to:"/article/02023323",
          img:"/events/event.jpg",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"Album",
          title:"Article",
          to:"/article/02023323",
          img:"/events/event_1.png",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"Event",
          title:"Article",
          to:"/article/02023323",
          img:"/events/event_3.png",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        },{
          type:"T-shirt",
          title:"Article",
          to:"/article/02023323",
          img:"/events/event_4.png",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id asperiores impedit iste quaerat corporis odit voluptas quae. Repellendus illum earum minima alias perspiciatis saepe provident, ab quia. Unde."
        }
      ]
    }
  },
}
</script>

<style scoped>
  .events{
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
    .title{
      margin-left: 1rem;
      text-align: left;
    }
    .list_cards{
      margin: 0px;
      margin-top:1rem;
      margin-left: 1rem;
      column-gap: 1em;
      list-style: none;
      padding: 0px;
      overflow: scroll;
      display: flex;
      flex-direction: row;
    }
      .list_cards > li{
        grid-row: 1;
      }
</style>
