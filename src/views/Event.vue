<template>
  <article class="container_event">
    <img class="event_img" src="/events/event_1.png" alt="image event">
    <div class="container_information"> <!-- INFORMATIONS -->
        <h2>Informations</h2> 
        <hr>
        <ul class="list_infos">
          <li class="row">
            <img src="@/assets/price_white.svg" alt="icon">
            <p>{{event.price}}</p>
          </li>
          <li class="row">
            <img src="@/assets/location_white.svg" alt="icon">
            <p>Canadian Café</p>
          </li>
          <li class="classez row">
            <img src="@/assets/date_white.svg" alt="icon">
            <p>{{this.event.date_start}}</p>
          </li>
          <li class="row">
            <img src="@/assets/clock_white.svg" alt="icon">
            <ul>
              <li>Début:15H00</li>
              <li>Fin:19H00</li>
            </ul>
          </li>
        </ul>
    </div>
    <div class="container_groupes_info" v-show="event.bands"> <!-- GROUPES -->
      <h2>Groupes</h2>
      <hr>
      <ul class="groupes_list">
        <ArtistCard
          v-for="(artist, index) in event.bands" :key="index"
          :height="'120vw'"
          :width="'80vw'"
          :data="artist"
        >
        </ArtistCard>
      </ul>
      
      <button class="see_more_events"><router-link to="/events">Voir plus d'évenements</router-link></button>
    </div>
  </article>
</template>

<script>
// @ is an alias to /src
import ArtistCard from '@/components/ArtistCard.vue'
import axios from 'axios'
export default {
  name: 'Event',
  components: {
    ArtistCard
  },
  data() {
    return {
      event:{}
    }
  },
  mounted() {
    this.getEvent();
  },
  methods: {
    getEvent(){
      axios.get(this.$store.state.server_address+"/getevents?id="+this.$route.query.id)
      .then(event=>{
        
        this.event = event.data;
        this.event.date_start = this.normalizeDate(event.data.date_start);
        this.event.date_end = this.normalizeDate(event.data.date_end);
        this.event.price = this.getPrice(this.event.price);

      })
      .catch(err=>{
        console.error(err);
      })

    },
    normalizeDate(event){
      const date = new Date(event)

      return `${this.getDay(date)} ${date.getDay()} ${this.getMonth(date)} ${date.getFullYear()}`;

    },
    getPrice(price){
      if (!price || price == 0) {
        return "Gratuit";
      } else {
        return `${price} $`;
      }
    },
    getDay(date){
      switch (date.getDay()) { // Get the day
        case 0:
          return "Lundi";
        case 1:
          return "Mardi";
        case 2:
          return "Mercredi";        
        case 3:
          return "Jeudi";
        case 4:
          return "Vendredi";
        case 5:
          return "Samedi";                
        case 6:
          return "Dimanche";                        
        default:
          console.error("error in the day");
          break;
      }
    },
    getMonth(date){
      switch (date.getMonth()) { // Get the Month
        case 0:
          return "Janvier";
        case 1:
          return "Fevrier";
        case 2:
          return "Mars";
        case 3:
          return "Avril";
        case 4:
          return "Mai";
        case 5:
          return "Juin";
        case 6:
          return "Juillet";
        case 7:
          return "Aout";
        case 8:
          return "Septembre";
        case 9:
          return "Octobre";
        case 10:
          return "Novembre";
        case 11:
          return "Decembre";                                            
        default:
          console.error("error in the month");
          break;
      }
    }
  },
}
</script>

<style scoped>
  .container_event{
    display: grid;
    grid-template-columns: 1rem auto 1rem;
  }
    .event_img{
      grid-column: 2;
      max-width: 100%;
    }
    .container_information{
      padding-top: 1rem;
      display: grid;
      grid-template-rows: repeat(4,auto);
      grid-template-columns: repeat(2,1fr);
      row-gap: 1rem;
      text-align: left;
      grid-column: 2;
    }
      .container_information > h1{
        grid-column: 1/-1;
      }
      .container_information > hr{
        grid-column: 1/-1;
      }
      .list_infos{
        grid-column: 1/-1;
        display: grid;
        grid-template-rows: repeat(2,1fr);
        grid-template-columns: repeat(2,1fr);
        gap: 0.5rem;
      }
    .container_groupes_info{
      grid-column: 2;
      row-gap: 1rem;
      text-align: left;
      display: grid;
      grid-template-rows: repeat(3,auto);
    }
      .groupes_list{
        display: flex;
        flex-direction: row;
        overflow: scroll;
      }
      .see_more_events{
        font-size: 1.4rem;
        margin-bottom: 2em;
        margin-top: 1em;
        place-self: center;
        padding: 0.5rem 1rem;
        border-radius: 3rem;
        border-style: none;
        background-color: var(--beige);
      }
        .see_more_events > a{
          color: var(--gack_grey);
          text-decoration: none;
        }
        .row{
          align-self: start;
          display: flex;
          flex-direction: row;
        }
      
</style>
