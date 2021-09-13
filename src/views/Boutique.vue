<template>
  <section class="shop_container">
    <!-- carrousel -->
    <CarrouselImage
      :height="'80vw'"
      :width="'80vw'"
      :images="[
          'https://picsum.photos/250/250',
          'https://picsum.photos/250/250',
          'https://picsum.photos/250/250',
          'https://picsum.photos/250/250',
      ]"
    ></CarrouselImage>
    <Tshirt></Tshirt>
    <hr>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero eveniet eum voluptatum suscipit ea exercitationem, laborum nam officia pariatur nulla alias blanditiis dolor, officiis beatae numquam nostrum aliquid quam illo.</p>
    <div>
      <img src="" alt="image artist">
      <h1>Stuffed Foxes</h1>
      <ul>
        <li>facebook</li>
        <li>instagram</li>
        <li>youtube</li>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia totam voluptates dolor! Error magnam ipsam aliquid, adipisci id aut dignissimos!</p>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import CarrouselImage from '@/components/CarrouselImage.vue'
import Tshirt from '@/components/boutique/Tshirt.vue'
export default {
  name: 'Boutique',
  components: {
    CarrouselImage,
    Tshirt
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>
   .shop_container{
     padding: 1rem;
     display: flex;
     flex-direction: column;
   }
    .carrousel_img{
      place-self: center;
    }
</style>

