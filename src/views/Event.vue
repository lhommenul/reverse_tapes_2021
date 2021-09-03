<template>
  <article class="container_event">
    <img class="event_img" src="/events/event_1.png" alt="image event">
    <div class="container_information"> <!-- INFORMATIONS -->
        <h2>Informations</h2> 
        <hr>
        <ul class="list_infos">
          <li>
            <img src="" alt="icon">
            <p>Gratuit</p>
          </li>
          <li>
            <img src="" alt="icon">
            <p>Canadian Café</p>
          </li>
          <li class="classez">
            <img src="" alt="icon">
            <p>Jeudi 17 Décembre 2019</p>
          </li>
          <li>
            <img src="" alt="icon">
            <ul>
              <li>Début:15H00</li>
              <li>Fin:19H00</li>
            </ul>
          </li>
        </ul>
    </div>
    <div class="container_groupes_info"> <!-- GROUPES -->
      <h2>Groupes</h2>
      <hr>
      <ul class="groupes_list">
        <ArtistCard
          v-for="(artist, index) in artists" :key="index"
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
export default {
  name: 'Event',
  components: {
    ArtistCard
  },
  data() {
    return {
      artists:[
        {
          title:'Grand Veymont',
          description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut non nobis magni nostrum consequatur',
          socials:[
            {
              name:'instagram',
              link:'/instagram'
            },
            {
              name:'youtube',
              link:'/youtube'
            },
            {
              name:'facebook',
              link:'/facebook'
            },
          ]
        },
        {
          title:'Grand Veymont',
          description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut non nobis magni nostrum consequatur',
          socials:[
            {
              name:'instagram',
              link:'/instagram'
            },
            {
              name:'youtube',
              link:'/youtube'
            },
            {
              name:'facebook',
              link:'/facebook'
            },
          ]
        },
        {
          title:'Grand Veymont',
          description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut non nobis magni nostrum consequatur',
          socials:[
            {
              name:'instagram',
              link:'/instagram'
            },
            {
              name:'youtube',
              link:'/youtube'
            },
            {
              name:'facebook',
              link:'/facebook'
            },
          ]
        },
        {
          title:'Grand Veymont',
          description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut non nobis magni nostrum consequatur',
          socials:[
            {
              name:'instagram',
              link:'/instagram'
            },
            {
              name:'youtube',
              link:'/youtube'
            },
            {
              name:'facebook',
              link:'/facebook'
            },
          ]
        }
      ]
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
      
</style>
