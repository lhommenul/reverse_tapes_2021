<template>
  <ul class="carrousel_img" :style="{height:height,width:width}">
    <!-- carrousel -->
    <ul class="container_images">
        <li v-for="(image, index) in images" :key="index">
            <img :src="image" alt="image article">
        </li>        
    </ul>
    <ul class="list_bubble">
        <li class="bubble" v-for="(image, index) in images" :key="'bubble_'+index" >
            <button v-on:click="switchImage(index)" ></button>
        </li>
    </ul>
  </ul>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'CarrouselImage',
  components: {
  },
  props:{
      height:String,
      width:String,
      images:Array
  },
  data() {
    return {
        scroller:{
            current_place:0,
            current_position:0
        }
    }
  },
  methods: {
      switchImage(image){
         const img_size = parseInt(this.width.replace('vw',''));
         document.querySelector('.container_images').scrollLeft = image*img_size;
        // e.target.scrollLeft
      }
  },
}
</script>

<style scoped>
    .carrousel_img{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
        .container_images{
            z-index: 1;
            grid-row: 1;
            grid-column: 1;
            display: flex;
            flex-direction: row;
            overflow: scroll;
        }
        .list_bubble{
            width: 100%;
            align-self: flex-end;
            justify-self: flex-end;
            z-index: 2;
            grid-row: 1;
            grid-column: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
            .bubble{
                border-radius: 50%;
                height: 1rem;
                width: 1rem;
                background-color: black;
                overflow: hidden;
            }
                .bubble > button{
                    height: 100%;
                    width: 100%;
                    border-style: none;
                }
</style>
