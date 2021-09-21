<template>
  <div class="events">
    <h1 class="title">Programmation</h1>
    <ul class="list_cards">
      <EventCard
        v-for="(item, index) in cards" :key="index"
        :height="'100%'"
        :width="'80vw'"
        :position="index+1"
        :data="item"
      ></EventCard>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'
export default {
  name: 'Events',
  components: {
    EventCard
  },
  data() {
    return {
      cards:[]
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    getEvents(){
      axios.get(this.$store.state.server_address+"/getevents")
      .then(events=>{
        console.log(events.data);
        this.cards = events.data;
      })
      .catch(err=>{
        console.error(err);
      })
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
    ul{
      margin: 0px;
      padding: 0px;
    }
    .list_cards{
      margin: 0px;
      padding: 0px;
      margin-top:1rem;
      margin-left: 1rem;
      column-gap: 1em;
      list-style: none;
      overflow: scroll;
      display: flex;
      flex-direction: row;
    }
      .list_cards > li{
        grid-row: 1;
      }
</style>
