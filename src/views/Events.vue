<template>
  <div class="events">
    <h1 class="title">Programmation</h1>
    <ul class="list_cards">
      <EventCard
        v-for="(item, index) in cards" :key="index"
        :height="'100%'"
        :width="'100%'"
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
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: 5rem;
  }
    .title{
      text-align: left;
    }
    ul{
      margin: 0px;
      padding: 0px;
    }
    .list_cards{
      margin: 0px;
      padding: 0px;
      list-style: none;
      overflow: scroll;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1rem;
    }
</style>
